import * as TF from "@tensorflow/tfjs";
import * as USE from "@tensorflow-models/universal-sentence-encoder";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner"
import { useEffect, useState } from "react";
import axios from "axios";

function RelevantQuestionList({ enteredQuestion }) {
    const [relevantQuestions, setRelevantQuestions] = useState([]);
    const [dbQuestions, setDbQuestions] = useState([]);
    const [model , SetModel] = useState(null);

    const loadModel = async() => {
        const loadedModel = await USE.load();
        SetModel(loadedModel);
        console.log('Model Loaded');
    }
    const embedSentences = async (sentence) => {
      const embedding = await model.embed(sentence);
      const data = await embedding.data();
      return Array.from(data);
    }
    const fetchData = async() => {
        try {
            const response = await axios.get(`http://localhost:5000/fetchquestions`, {
          });
          if (response.status === 200) {
            const questionData = response.data;
            const question_objects = questionData.data;
            let questions = [];
            question_objects.map((item) => {
                questions.push(item.question);
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
    useEffect(() => {fetchData()} , []);

    const findRelevantQuestions = async() => {
        if(model !== null){
            console.log("Finding relevant questions");
            
            const threshold = 0.5;

            const currentQembedding = await embedSentences(enteredQuestion);
            const previousQembeddings = await embedSentences(dbQuestions);

            const similarityScores = previousQembeddings.map(embedding => calculateCosineSimilarity(currentQembedding , embedding)); 
            
            const similarSentences = dbQuestions.filter((_ , index) => similarityScores[index] >= threshold);

            return similarSentences;
          } 
    }
    
    useEffect(async() => {
      const similarSentences = findRelevantQuestions();
      console.log(similarSentences);
    }, [model , dbQuestions , enteredQuestion])

}

export default RelevantQuestionList