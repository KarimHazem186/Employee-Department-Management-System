const mongoose = require('mongoose');

// Define the schema
const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,'You have to provide a valid name.'],
        match:[/^[A-Za-z]+$/, "Name mustn't contain numbers or special characters."],
    },
    lastName: {
        type: String,
        required: [true,'You have to provide a valid name.'],
        match:[/^[A-Za-z]+$/, "Name mustn't contain numbers or special characters."],
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
        min:[12000,"Salary mustn't be less than 12000 EGP."],
        max:[55000,"Salary mustn't exceed 55000 EGP"],
    },
    // department: {
    //     type: String,
    //     required: true,
    // },

    departmentId:mongoose.Schema.Types.ObjectId,

    createdDate:{
        type:Date,
        default:Date.now
    }
});

// Create the model
const employeeModel = mongoose.model('Employee', employeeSchema);

module.exports = employeeModel;
