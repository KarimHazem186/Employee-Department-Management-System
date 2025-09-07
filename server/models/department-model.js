const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,'You have to provide a valid name.'],
    unique: true
  },
  description:{
    type:String,
    required:[true,'You have to provide a valid description.'],  
},

employeeId:mongoose.Schema.Types.ObjectId,

createdDate:{
    type:Date,
    default:Date.now
}
});

const departmentModel = mongoose.model('Department', departmentSchema);

module.exports =departmentModel ;
