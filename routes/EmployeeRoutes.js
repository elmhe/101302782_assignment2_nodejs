const express = require("express");
const empModel = require("../model/EmployeeModel")
const app = express.Router()

// /api/emp/login
app.post('/login', async (req, res) => {
    try{
        const emp = empModel.findById(req.params.content)
        res.status(201).send({status: true, emp, message: "User logged in successfully"})
    }catch(error){
        res.status(500).send({status: false, message: "Invalid Username and password"})
    }
    
});

// /api/emp/signup
app.post('/signup', async (req, res) => {

    const newEmp = new empModel(req.body);
    try{
        await newEmp.save()
        res.status(201).send(newEmp)
    }catch(error){
        res.status(500).send({message: "Unable to sign up"})
    }
       
});

// /api/emp/employees
app.get('/employee', async (req, res) => {
    try {
        const emp = await empModel.find()
        res.status(201).send(emp)
    } catch (error) {
        res.status(500).send(error)
    }
});

// /api/emp/employee
// app.post('/employee', async (req, res) => {
//     const newEmp = new empModel(req.body)
//     try {
//         await newEmp.save()
//         res.status(201).send(newEmp)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// });

// /api/emp/employee/{eid}
app.get('/employee/', async (req, res) => {
    const emp_id = req.params.eid
    try {
        await empModel.find()
        res.status(201).send(emp_id)
    } catch (error) {
        res.status(500).send(error)
    }
});

// /api/emp/employees/{eid}
app.get('/employee/:eid', async (req, res) => {
    const emp_id = req.params.eid
    try {
        await empModel.find()
        res.status(201).send(emp_id)
    } catch (error) {
        res.status(500).send(error)
    }
});

// /api/emp/employee/{eid}
app.put('/employees/:eid', async (req, res) => {
    const emp_id = req.params.eid
    try {
        await empModel.findByIdAndUpdate(req.params.emp_id, req.body)
        res.status(201).send(emp_id)
    } catch (error) {
        res.status(500).send(error)
    }
});


// /api/emp/employee?eid=xxx
app.delete('/employees', (req, res) => {
    const emp_id = req.query.eid
    try {
        const deleteEmp = empModel.findByIdAndDelete(req.params.emp_id)
        if(!deleteEmp){
            res.status(500).send(error)
        }
        res.status(201).send(deleteEmp)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = app

// {
//     "first_name": "Tam",
//     "last_name": "Harrow",
//     "email": "tam@abc.com",
//     "password": "123"
// }