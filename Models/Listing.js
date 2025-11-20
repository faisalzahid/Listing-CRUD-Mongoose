const mongoose = require("mongoose");


// Listing Scehma
const listingSchema = new mongoose.Schema({
    propertyName : String,
    price: Number,
    city: String,
    country: String
})

// Listing model
const Listing = mongoose.model("Listing",listingSchema);


// Export Listing model
module.exports = Listing;