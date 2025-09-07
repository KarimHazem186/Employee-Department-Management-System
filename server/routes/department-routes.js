const express = require('express')

const router = express.Router()

const departmentModule = require('../models/department-model');

const departmentsControllerModule = require('../controllers/department-controller')


// get All departments
router.get('/allDepartments',departmentsControllerModule.getAllDepartments);


// get department
router.get('/singleDepartment/:id',departmentsControllerModule.getDepartmentById);


// search Department
router.get('/searchDepatrment',departmentsControllerModule.searchDepartment);


// add Department
router.post('/addDepartment',departmentsControllerModule.addNewDepartment);

// update Employee
router.put("/updateDeparment/:id",departmentsControllerModule.updateDepartment);


// delete Employee
router.delete('/deleteDeparment/:id',departmentsControllerModule.deleteDepartment);




module.exports = router;



