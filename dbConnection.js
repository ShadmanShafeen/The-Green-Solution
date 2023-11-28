const mongoose = require('mongoose');

mongoose.set("strictQuery",true);

async function dbConnect (){
    //console.log("=>")
    try{
        await mongoose.connect('mongodb+srv://hasanmuntasir257:UVMxQhXoMv7Fs1y6@cluster0.dgsghck.mongodb.net/theGreenSolution',{
            useNewUrlParser : true,
            useUnifiedTopology: true ,
        });
        console.log("db connection successful");
    } catch(error){
        console.log("Error occurred in db connection", error)
    }
}

module.exports = dbConnect
