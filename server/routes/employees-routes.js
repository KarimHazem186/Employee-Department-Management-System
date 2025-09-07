const express = require('express')

const router = express.Router()

const employeeModule = require('../models/employee-model');

const employeesControllerModule = require('../controllers/employee-controller')


// get All Employees
router.get('/allEmployees',employeesControllerModule.getAllEmployees);


// get Employee
router.get('/singleEmployee/:id',employeesControllerModule.getEmployeeById);


// search Employee
router.get('/searchEmployee',employeesControllerModule.searchEmployee)


// add Employee
router.post('/addEmployee',employeesControllerModule.addNewEmployee);

// update Employee
router.put("/updateEmployee/:id",employeesControllerModule.updateEmployee);


// delete Employee
router.delete('/deleteEmployee/:id',employeesControllerModule.deleteEmployee);




module.exports = router;



