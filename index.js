const express = require('express');
const cors = require('cors');
const dbConnect = require('./dbConnection');
const Farmer = require('./models/Farmer');
const Question = require('./models/Question');
const Answer = require('./models/Answer');
const Agronomist = require('./models/Agronomist');
const Rating = require('./models/Rating');
const app = express();
const port = 5000;

// Use cors middleware
app.use(cors());

// Parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World123!');
});

app.get('/users', async (req, res) => {
  try {
    const users = await Farmer.find({});
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//                                      FARMER LOGIN
app.post('/auth/farmerlogin', async (req, res) => {
  const { name, NID } = req.body;

  try {
      // Find a user with the provided name and NID (you should hash and compare passwords securely)
      const user = await Farmer.findOne({name:name, NID:NID });

      if (!user) {
          return res.status(401).json({ error: 'Invalid username or password' });
          
      }
      // For simplicity send a success response without a token
      res.status(200).json({ message: 'Login successful' });
  } catch (error) {
      console.error('Error occurred during login:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

//                                      FARMER SIGNUP
app.post('/auth/farmersignup', async (req, res) => {
  const { name, contact, NID } = req.body;

  try {
      // Check if the username already exists in the database
      const existingUser = await Farmer.findOne({ NID });

      if (existingUser) {
          return res.status(400).json({ error: "NID already exists" });
      }

      // Create a new user instance
      const newFarmer = new Farmer({
          name,
          contact,
          NID
      });

      // Save the new user to the database
      await newFarmer.save();

      res.status(201).json({ message: "User created successfully" });
  } catch (error) {
      console.error("Error occurred during signup:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});

//                                    AGRONOMIST LOGIN
app.post('/auth/agronomistlogin', async (req, res) => {
  const { username, password } = req.body;

  try {
      // Find a user with the provided username and password (you should hash and compare passwords securely)
      const agronomist = await Agronomist.findOne({ username:username,  password:password });

      if (!agronomist) {
          return res.status(401).json({ error: 'Invalid username or password' });        
      }

      // Here, you can generate and send a JWT token for authenticated users
      // For simplicity, let's send a success response without a token
      res.status(200).json({ message: 'Login successful' });
  } catch (error) {
      console.error('Error occurred during login:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

//                                    AGRONOMIST SIGNUP
app.post('/auth/agronomistsignup', async (req, res) => {
  const { name, contact, NID , username , password } = req.body;

  try {
      // Check if the username already exists in the database
      const existingUser = await Agronomist.findOne({ username });

      if (existingUser) {
          return res.status(400).json({ error: "Username already exists" });
      }

      // Create a new user instance
      const newAgronomist = new Agronomist({
          name,
          contact,
          NID,
          username,
          password
      });

      // Save the new user to the database
      await newAgronomist.save();

      res.status(201).json({ message: "User created successfully" });
  } catch (error) {
      console.error("Error occurred during signup:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});

//                                    ADD QUESTION
app.post('/askquestion' , async (req , res) => {
    const {question , farmer , NID} = req.body;
    
    // Check for similar previous questions here
    try {
        const newQuestion = new Question({
          question,
          farmer,
          NID
        });
        // Add question to database
        await newQuestion.save();

        res.status(205).json({message: "Question added to database successfully"});
    } catch (error) {
        console.error("Error occurred during asking question:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//                                    ADD ANSWER
app.post('/addanswer' , async (req , res) => {
    try {
      const {answer , questionID , agronomist} = req.body;
      
      const newAnswer = new Answer({
        answer,
        questionID,
        agronomist
      });

      await newAnswer.save();
      res.status(205).json({message: "Answer added to database successfully"});

    } catch (error) {
        console.error("Error occurred during adding answer: ", error);;
        res.status(500).json({error: "Internal server error"});
    }
})

//                         FETCH QUESTIONS ASKED BY SPECIFIC FARMER
app.get('/fetchquestions/:NID' , async (req , res) => {
    try {
      const NID = req.params.NID
      const questions = await Question.find({NID : NID});
      if(questions) {
        res.status(200).send({
          data : questions
        });
      }
      else {
        res.status(404).json({message: "No questions found"});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
    }
})

//                         FETCH QUESTION BY QUESTION ID 
app.get('/fetchquestion/:questionID' , async (req , res) => {
  try {
    const questionID = req.params.questionID
    const question = await Question.findOne({_id : questionID});
    if(question) {
      res.status(200).send({
        data : question
      });
    }
    else {
      res.status(404).json({message: "No question found"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Server Error"});
  }
})

//                         FETCH QUESTION BY QUESTION STRING
app.get('/fetchquestion/:question' , async (req,res) => {
  try {
      const questionString = req.params.question
      const question = await Question.findOne({question : questionString});
      if(question) {
        res.status(200).send({
          data:question
        })
      }
      else{
        res.status(404).json({message: "No question found"}) 
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Server Error'});
  }
})

//                         FETCH LAST QUESTION ASKED BY FARMER (TRANSITION FROM SEARCH BAR TO QnA PAGE)
app.get('/fetchquestionlast/:NID' , async (req , res) => {
  try {
    const NID = req.params.NID
    const questionID = await Question.findOne({NID : NID} , {_id : 1}).sort({createdAt : -1}).limit(1);
    if(questionID) {
      res.status(200).send({
        data : questionID
      });
    }
    else {
      res.status(404).json({message: "No questions found"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Server Error"});
  }
})

//          FETCH QUESTIONS FOR AGRONOMIST HOMEPAGE (SORTED BY ANSWER COUNT, THOSE THAT HAVE NOT BEEN ANSWERED BY THIS AGRONOMIST)
app.get('/agfetchquestions/:agronomist' , async (req , res) => {
  const agronomist = req.params.agronomist;

  try {
    const answeredQuestionsObjects = await Answer.find({agronomist: agronomist} , {_id: 0, questionID: 1})
    const answeredQuestionsArray = answeredQuestionsObjects.map(item => item.questionID)
    const questions = await Question.find({_id : {$nin : answeredQuestionsArray}}).sort({answerCount: 1});
    if(questions) {
      res.status(200).send({
        data: questions
      });
    }
    else {
      res.status(404).json({message : "No Questions found that matched username"});
    }
  } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
  }
})

app.get('/agfetchansweredquestions/:agronomist' , async (req , res) => {
  const agronomist = req.params.agronomist;

  try {
    const answeredQuestionsObjects = await Answer.find({agronomist: agronomist} , {_id: 0, questionID: 1})
    const answeredQuestionsArray = answeredQuestionsObjects.map(item => item.questionID)
    const questions = await Question.find({_id : {$in : answeredQuestionsArray}}).sort({answerCount: 1});
    if(questions) {
      res.status(200).send({
        data: questions
      });
    }
    else {
      res.status(404).json({message : "No Questions found that matched username"});
    }
  } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
  }
})


//                                  FETCH ANSWERS
app.get('/fetchanswers/:questionID' , async (req , res) => {
  try {
    const questionID = req.params.questionID;
    const answers = await Answer.find({questionID : questionID}).sort({rating : -1});

    if(answers) {
      res.status(200).send({
        data: answers
      });
    }
    else {
      res.status(404).json({message : "No Answers found for this Question"});
    }
  } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
  }
})

//                                  FETCH FARMER ID
app.get('/fetchfarmerID/:NID' , async (req , res) => {
  try {
    const NID = req.params.NID;
    const farmer = await Farmer.findOne({NID : NID});

    if(farmer) {
        res.status(200).send({
          data : farmer
        })
    }
    else {
      res.status(404).json({message : "No farmer found for given NID"});
    }
  } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
  }
})

//                               FETCH AGRONOMIST ID
app.get('/fetchagronomistID/:username' , async (req,res) => {
  try {
    const username = req.params.username;
    const agronomist = await Agronomist.findOne({username : username});

    if(agronomist) {
        res.status(200).send({
          data : agronomist
        })
    }
    else {
      res.status(404).json({message : "No agronomist found for given username"});
    }
  } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
  }
})

//                              UPDATE ANSWER COUNT FOR A QUESTION
app.put('/updateanswercount/:questionID' , async (req , res) => {
  try {
      const questionID = req.params.questionID;
      const updatedQuestion = await  Question.updateOne(
        {_id: questionID} , 
        {$inc : {answerCount : 1}}
      );

      if (updatedQuestion) {
        res.status(200).send({
          success: true,
          message: "updated answerCount successfully",
          data: updatedQuestion
        })
      } else {
        res.status(404).send({
          success: false ,
          message: "answerCount was not updated"
        })
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
  }
})

//                              UPDATE ANSWER RATING
app.put('/rateanswer/:answerID/:userID/:type' , async (req , res) => {
  try {
      const answerID = req.params.answerID;
      const userID = req.params.userID;
      const type = req.params.type;
      if (type === 'upvote') {
        const rating = await Rating.findOne({userID: userID , answerID: answerID});
        if (!rating) {
          const newRating = new Rating({
              userID,
              answerID,
              upvote : true,
              downvote : false
          })
          await newRating.save();
  
          const updatedAnswer = await Answer.updateOne(
            {_id: answerID},
            {$inc: {rating : 1}}
          )
          res.status(200).send({
            success: true,
            message: "Rating added successfully"
          })
        } else {
            if (rating.upvote === true) {
                console.log('User already upvoted');
                res.status(201).json({message: 'User has already upvoted'});
            }
            else {    
              if (rating.downvote === true) {                   //to turn rating to 1 instead of 0, if rating is -1
                const updatedAnswer = await Answer.updateOne(
                  {_id: answerID},
                  {$inc : {rating : 2}}
                )
              }
              else {
                const updatedAnswer = await Answer.updateOne(
                  {_id: answerID},
                  {$inc : {rating : 1}}
                )
              }
                const updatedRating = await Rating.updateOne(
                  {userID: userID , answerID: answerID},
                  {$set: {
                    upvote: true,
                    downvote: false
                  }}
                )
                res.status(200).send({
                  success: true,
                  message: "Rating added successfully"
                })
            }
        }
      }
      
      else if (type === 'downvote') {
        const rating = await Rating.findOne({userID: userID , answerID: answerID});
        if (!rating) {
          const newRating = new Rating({
              userID,
              answerID,
              upvote: false,
              downvote : true
          })
          await newRating.save();
  
          const updatedAnswer = await Answer.updateOne(
            {_id: answerID},
            {$inc: {rating : -1}}
          )
          res.status(200).send({
            success: true,
            message: "Rating added successfully"
          })
        } else {
            if (rating.downvote === true) {
                console.log('User already downvoted');
                res.status(202).json({message: 'User has already downvoted'});
            }
            else {
                if (rating.upvote === true) {                     // to turn rating into -1 instead of 0, if rating is 1
                  const updatedAnswer = await Answer.updateOne(
                    {_id: answerID},
                    {$inc : {rating : -2}}
                  )
                }
                else {
                  const updatedAnswer = await Answer.updateOne(
                    {_id: answerID},
                    {$inc : {rating : -1}}
                  )
                }
                const updatedRating = await Rating.updateOne(
                  {userID: userID , answerID: answerID},
                  {$set : {
                    downvote: true,
                    upvote: false}}
                )
                res.status(200).send({
                  success: true,
                  message: "Rating added successfully"
                })
            }
        }
      }

  } catch (error) {
      console.error("Error updating the rating");
      res.status(500).json({error: "Internal Server Error"});
  }
})

// Connect to the database
dbConnect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
