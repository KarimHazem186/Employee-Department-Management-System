const express = require("express")

const  mongoose = require('mongoose')

const employeesRoutes = require('./routes/employees-routes')
const departmentsRoutes = require('./routes/department-routes')

const expressWebApp = express()
expressWebApp.use(express.json())



mongoose.connect('mongodb://127.0.0.1:27017/Employees');
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connected to Database...');
});

connection.on('error', (err) => {
    console.error(err);
});

expressWebApp.use((req, res,next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      return res.status(200).json({});
    }
        next()
  });


expressWebApp.use('/employees',employeesRoutes)
expressWebApp.use('/departments',departmentsRoutes)

expressWebApp.listen(3000,()=>{
    console.log("Listening on port 3000...")
})