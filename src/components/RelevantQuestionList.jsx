import * as TF from "@tensorflow/tfjs";
import * as USE from "@tensorflow-models/universal-sentence-encoder";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner"
import { useEffect, useState } from "react";
import axios from "axios";
import RelevantQuestion from './RelevantQuestion'
import { BallTriangle } from 'react-loader-spinner'
import styles from './RelevantQuestionList.module.css'
import BASE_URL from '../CONSTANT'

function RelevantQuestionList({ enteredQuestion }) {
    
    const [dbQuestions, setDbQuestions] = useState([]);
    const [similarityScores , setSimilarityScores] = useState([]);
    const [model , SetModel] = useState(null);
    const [relevantQuestions , setRelevantQuestions] = useState([]);
    const [readyState , setReadyState] = useState('Not Ready');

    const loadModel = async() => {
        const loadedModel = await USE.load();
        SetModel(loadedModel);
        console.log('Model Loaded');
    }
    const embedSentence = async (sentence) => {
      const embedding = await model.embed(sentence);
      const data = await embedding.data();
      return Array.from(data);
    }
    
    const dotProduct = (a , b) => {
      if (a.length !== b.length) {
        return undefined;
      }
      let result = 0;
      for (let i=0 ; i < a.length ; i++)
      {
        result += a[i] * b[i];
      }
      return result;
    }

    function calculateCosineSimilarity(a , b) {
      let magnitudeA = Math.sqrt(dotProduct(a , a));
      let magnitudeB = Math.sqrt(dotProduct(b , b));
      if (magnitudeA && magnitudeB)
        return dotProduct(a , b) / (magnitudeA * magnitudeB);
      else 
        return false;
    }

    useEffect(() => {loadModel()} , []);
    useEffect(() => {
      const fetchData = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/fetchquestions`, {
          });
          if (response.status === 200) {
            const questionData = response.data;
            const question_objects = questionData.data;
            
            let questions = [];
            question_objects.map((item) => {
                questions.push({
                  _id : item._id,
                  question: item.question,
              });
            })
            console.log('Fetched Questions');
            console.log(questions);
            setDbQuestions(questions);
          } else {
            console.log('Fetch Failed');
          }
        } catch (error) {
          console.log('Error occurred during search :' , error);
        }
    }
    fetchData();
    } , []);

    
    useEffect(() => {
      const findRelevantQuestions = async() => {
        
        if(model !== null && dbQuestions.length > 0){
            console.log("Finding relevant questions");
            
            setReadyState('Not Ready');
            
            let currentQembedding = [];
            currentQembedding = await embedSentence(enteredQuestion);
            let scores = [];
            
            dbQuestions.map(async(item) => {
                  const previousQembedding = await embedSentence(item.question)
                  let score = calculateCosineSimilarity(currentQembedding , previousQembedding);
                  scores.push(score);
            })
            setSimilarityScores(scores);
            
            const combinedData = dbQuestions.map((item , index) => {
              const {_id , question} = item;
              const similarityScore = similarityScores[index];
             
              return {
                _id,
                question,
                similarityScore
              }
            })
            combinedData.sort((a,b) => b.similarityScore - a.similarityScore);

            const sortedQuestions = combinedData.map((data) => {
                return {
                  _id: data._id,
                  question: data.question
                }
            });
            console.log(combinedData);      

            setRelevantQuestions(sortedQuestions.slice(0,4));    
            console.log(relevantQuestions);  
          } 
    }   
      findRelevantQuestions();
      setReadyState('Ready');
    },[enteredQuestion]);

    if (relevantQuestions.length > 0 && readyState === 'Ready') {
        return (

          <>
            <h2 className={styles.relevantQuestionHeading}>Relevant Questions to your Search</h2>
            <ul className={styles.relevantQuestionList}>
              {relevantQuestions.map((item) => <RelevantQuestion key={item._id} questionID={item._id} question={item.question} /> )} 
            </ul>
          </>

        )
    }
    else if (enteredQuestion === '') {
      return(
          <></>
      )
    }
    else {
        return (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#5CDB95"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        )
    }
    
}

export default RelevantQuestionList