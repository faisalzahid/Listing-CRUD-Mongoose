const mongoose = require("mongoose");
const Listing = require("../Models/Listing.js")

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/listing')}
main()
    .then(()=>{
        console.log("Listing Db Is connected")
    })
    .catch(()=>{
        console.log("Error in Connecting with db Listing")
    })



// save Sample data to Initialize Database    
const SampleListing = new Listing({
    propertyName : "BodyZone Gym",
    price: 10000000,
    city: "Lahore",
    country: "Pakistan"
})

SampleListing.save()
    .then(()=>console.log("Data is saved"))
    .catch(()=>console.log("Data is saved"))