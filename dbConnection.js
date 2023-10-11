const mongoose = require('mongoose');

mongoose.set("strictQuery",true);

async function dbConnect (){
    //console.log("=>")
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/theGreenSolution',{
            useNewUrlParser : true,
            useUnifiedTopology:true ,
        });
        console.log("db connection successful");
    } catch(error){
        console.log("Error occurred in db connection", error)
    }
}

module.exports = dbConnect
