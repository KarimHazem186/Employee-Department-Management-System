const employeeModel = require('../models/employee-model');



// get all employees
const getAllEmployees = async(req,res)=>{
    try {
        const allEmployees = await employeeModel.find();
        res.status(201).json(allEmployees)  // 200 -> ok
    } catch(error) {
        // res.status(500).json({message:"AllEmployees is not defined "})
        res.status(500).json({error:error.message}) // 500 -> Internal Server Error
    }
}

const getEmployeeById = async(req,res)=>{
    try {
        const oneEmployee = await employeeModel.findById(req.params.id);
        res.status(201).json(oneEmployee)  // 200 -> ok
    } catch(error) {
        res.status(500).json({error:error.message}) // 500 -> Internal Server Error
    }

}

// Search by Employee full name
const searchEmployee = async(req,res)=>{
    try {
        let searchResult = undefined;
        if(req.query.firstName&&req.query.lastName) {
            searchResult = await employeeModel.find(
                {'firstName':{'$regex':req.query.firstName,
                '$options':'i'},
                'lastName':{'$regex':req.query.lastName,
                    '$options':'i'},
            })
            res.status(201).json(searchResult)
        }  else if(req.query.firstName){
            searchResult = await employeeModel.find({'firstName':{'$regex':req.query.firstName,
                '$options':'i'}})
            res.status(201).json(searchResult)
        } 
        else if(req.query.lastName){
            searchResult = await employeeModel.find({'lastName':{'$regex':req.query.lastName,
                '$options':'i'}})
            res.status(201).json(searchResult)
        }
    } catch(err) {
        res.status(500).json({error:err.message})
    }
}

// Add New Employee
const addNewEmployee = async(req,res)=>{
    const newEmployee = new employeeModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        position:req.body.position,
        salary:req.body.salary,
        // department:req.body.department,
        departmentId:req.body.departmentId,
    })

    try {
        const addNewEmployee = await newEmployee.save();
        res.status(201).json({
            message:"Employee Added successfully",
            addNewEmployee}); // 201 => Created (added)
    } catch(err) {
        res.status(500).json({error:err.message}); // 500 -> Internal Server Error
    }
}


// Update Employee
const updateEmployee = async(req,res)=>{
    try {
        const employee = await employeeModel.findByIdAndUpdate(req.params.id,req.body);
        
        if(!employee) {
            res.status(404).json({error: 'Employee not found'});
        }
        
        const updatedEmployee = await employeeModel.findById(req.params.id);
        res.status(201).json({
            message:"Employee Updated Successfully.",
            updatedEmployee:updatedEmployee
        })
    } catch(err) {
        res.status(500).json({
            error:err.message
        })
    }
}


const deleteEmployee =  async(req,res)=>{
    try {
        const employee = await employeeModel.findByIdAndDelete(req.params.id);

        if(!employee) {
            return res.status(404).json({
                error:"Employee Not Found"
            });   
        }
        res.status(200).json({
            message:"Employee deleted Successfully.",
        })
    } catch(err) {
        res.status(500).json({
            error:err.message
        })
    }
}





module.exports = {
    getAllEmployees,
    getEmployeeById,
    searchEmployee,
    addNewEmployee,
    updateEmployee,
    deleteEmployee,

}