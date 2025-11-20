const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./Models/Listing.js")
const path = require('path');
const methodOverride = require('method-override');




const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));


app.listen("8080",()=>{
    console.log("App is running at port 8080")})


// connect with mongoose db
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/listing')
}
main()
    .then(()=>{
        console.log("Listing Db Is connected")
    })
    .catch(()=>{
        console.log("Error in Connecting with db Listing")
    })


app.get("/",(req,res)=>{
    res.send("App is Running at Port 8080")
})

// view route All listings
app.get("/listing",async (req,res)=>{
    let showAllListing = (await Listing.find())
    res.render("index.ejs",{showAllListing})
})


// create new route
app.get("/listing/new",(req,res)=>{
    res.render("new.ejs")
})

// Post New Listing in Db
app.post("/listing/new",async(req,res)=>{
    let frmData = req.body.frmListing
    let newListing = await new Listing(frmData)
    newListing.save()
    res.redirect("/listing")
})


// view route
app.get("/listing/:id",async (req,res)=>{
    let {id} = req.params;
    let showSingleListing = await Listing.findById(id)
    res.render("show.ejs",{showSingleListing})
})


// edit and update route
app.get("/listing/:id/edit",async(req,res)=>{
    let {id} = req.params; 
    let showSingleListing = await Listing.findById(id)
    res.render("edit.ejs",{showSingleListing})
})

// edit and update route
app.put("/listing/:id",async(req,res)=>{
    let {id} = req.params; 
    let UpdatedListing = await Listing.findByIdAndUpdate(id,{...req.body.frmListing})
    res.redirect("/listing")
})

// Delete Route
app.delete("/listing/:id",async (req,res)=>{
    let {id}= req.params;
    let deletedListing = await Listing.findByIdAndDelete(id)
    console.log(deletedListing)
    res.redirect("/listing")
})