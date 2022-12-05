const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
        lowercase: true
    },
    last_name: {
        type: String,
        require: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})


const Employee = mongoose.model("employees", EmployeeSchema)

module.exports = Employee