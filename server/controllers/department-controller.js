const deparmentModel = require('../models/department-model');



// get all Departments
const getAllDepartments = async(req,res)=>{
    try {
        const allDepartments = await deparmentModel.find();
        res.status(201).json(allDepartments)  // 200 -> ok
    } catch(error) {
        res.status(500).json({error:error.message}) // 500 -> Internal Server Error
    }
}

const getDepartmentById = async(req,res)=>{
    try {
        const oneDepartment = await deparmentModel.findById(req.params.id);
        res.status(201).json(oneDepartment)  // 200 -> ok
    } catch(error) {
        res.status(500).json({error:error.message}) // 500 -> Internal Server Error
    }

}

// Search by Department full name
const searchDepartment = async(req,res)=>{
    try {
        let searchResult = undefined;
        if(req.query.name&&req.query.description) {
            searchResult = await deparmentModel.find(
                {'name':{'$regex':req.query.name,
                '$options':'i'},
                'description':{'$regex':req.query.description,
                    '$options':'i'},
            })
            res.status(201).json(searchResult)
        }  else if(req.query.name){
            searchResult = await deparmentModel.find({'name':{'$regex':req.query.name,
                '$options':'i'}})
            res.status(201).json(searchResult)
        } 
        else if(req.query.description){
            searchResult = await deparmentModel.find({'description':{'$regex':req.query.description,
                '$options':'i'}})
            res.status(201).json(searchResult)
        }
    } catch(err) {
        res.status(500).json({error:err.message})
    }
}

// Add New Department
const addNewDepartment = async(req,res)=>{
    const newDepartment = new deparmentModel({
        name:req.body.name,
        description:req.body.description,
        // employeeId:req.body.employeeId,
    })

    try {
        const addNewDepartment = await newDepartment.save();
        res.status(201).json({
            message:"Department Added successfully",
            addNewDepartment}); // 201 => Created (added)
    } catch(err) {
        res.status(500).json({error:err.message}); // 500 -> Internal Server Error
    }
}


// Update Department
const updateDepartment = async(req,res)=>{
    try {
        const department = await deparmentModel.findByIdAndUpdate(req.params.id,req.body);
        
        if(!department) {
            res.status(404).json({error: 'department not found'});
        }
        
        const updatedDepartment = await deparmentModel.findById(req.params.id);
        res.status(201).json({
            message:"Department Updated Successfully.",
            updatedDepartment:updatedDepartment
        })
    } catch(err) {
        res.status(500).json({
            error:err.message
        })
    }
}

// Delete Department
const deleteDepartment =  async(req,res)=>{
    try {
        const department = await deparmentModel.findByIdAndDelete(req.params.id);

        if(!department) {
            return res.status(404).json({
                error:"Department Not Found"
            });   
        }
        res.status(200).json({
            message:"Department deleted Successfully.",
        })
    } catch(err) {
        res.status(500).json({
            error:err.message
        })
    }
}





module.exports = {
    getAllDepartments,
    getDepartmentById,
    searchDepartment,
    addNewDepartment,
    updateDepartment,
    deleteDepartment,
}