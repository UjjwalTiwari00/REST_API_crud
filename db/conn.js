const mongoose=require('mongoose');
// creating connection 
mongoose.connect("mongodb://127.0.0.1:27017/olympics",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("NO connection",e.message);
});


