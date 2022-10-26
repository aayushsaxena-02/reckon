const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName:{
        type: String,
        required: true
    },

    work:{
        type: String,
        required: true
    },

    location:{
        type: String,
        required: true
    },

    salary:{
        type: Number,
        required: true
    }
});

const Company = mongoose.model("Company",companySchema);

module.exports = Company;