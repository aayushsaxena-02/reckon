const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    }
});

const Job = mongoose.model("Job",jobSchema);

module.exports = Job;