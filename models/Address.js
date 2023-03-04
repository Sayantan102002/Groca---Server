const mongoose = require('mongoose');
const { Schema } = mongoose;
const AddressSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    // name:{
    //     type:String,
    //     required:true,
    // },
    // phone:{
    //     type:Number,
    //     required:true,
    // },
    pincode: {
        type: Number,
        required: true,
        default: ""
    },
    locality: {
        type: String,
        required: true,
        default: ""
    },
    Address_and_Street: {
        type: String,
        required: true,
        default: ""
    },
    City_or_Village: {
        type: String,
        required: true,
        default: ""
    },
    State: {
        type: String,
        required: true,
        default: ""
    },
    Country: {
        type: String,
        default: "India",
    },
    landmark: {
        type: String,
        default: ""
    },
    // Alternate_Phone:{
    //     type:Number,
    // },
    Address_Type: {
        type: String,
        required: true,
        default: ""
    },
});



const address = mongoose.model('address', AddressSchema);
module.exports = address;