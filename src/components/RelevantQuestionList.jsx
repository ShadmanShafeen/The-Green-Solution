import * as TF from "@tensorflow/tfjs";
import * as USE from "@tensorflow-models/universal-sentence-encoder";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner"
import { useEffect, useState } from "react";
import axios from "axios";
import RelevantQuestion from './RelevantQuestion'
import { BallTriangle } from 'react-loader-spinner'
import styles from './RelevantQuestionList.module.css'
import { ToastContainer , toast , Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success('NLP Model loaded' , {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
      });
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

    useEffect(() => {
      toast.info('NLP Model for finding Relevant Questions is loading' , {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
      loadModel();
      } , []);
    useEffect(() => {
      const fetchData = async() => {
        try {
            const response = await axios.get(`http://localhost:5000/fetchallquestions`, {
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
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Slide}
            />
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