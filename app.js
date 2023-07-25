const express = require("express");
const app = express();

const MenRanking=require("../src/models/mens");
const MensRanking = require("../src/models/mens");

require("../src/db/conn");

app.get("/", (req, res) => {
  res.send("hello from the ujjwal");
});

const port = process.env.PORT || 3000;

app.use(express.json());
// handle post request for storing data in database
 
app.post("/mens",async (req,res)=>{
    try{
        const addingMensRecords=new MenRanking(req.body)
        console.log(req.body);
     const insertMens =await addingMensRecords.save();
      res.status(201).send(insertMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})

// handle get request for showing data 
app.get("/mens",async (req,res)=>{


      const getMens=await MensRanking.find({}).sort({"ranking":1});
      console.log(getMens);
      console.log("test");
      res.send(getMens);

})
// handle get request for showing individual data 
app.get("/mens/:id",async (req,res)=>{

     const _id=req.params.id;
    const getMens=await MensRanking.findById({_id});
    console.log(getMens);
    console.log("test");
    res.send(getMens);
})
// handle patch request for altering data 
app.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findByIdAndUpdate(_id,req.body);
        res.send(getMen);

    }catch(e){
        res.status(500).send(e);
    }
})
// handle delete request to delete data 
app.delete("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findByIdAndDelete(_id);
        res.send(getMen);

    }catch(e){
        res.status(500).send(e);
    }
})



app.listen(port, () => {
  console.log(`Connection is live at port ${port}`);
});