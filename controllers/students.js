
const { findOne } = require('../models/student')
const students = require('../models/student')

getAllStudents = async (req,res)=>{
    const Students = await students.find({})
    res.status(200).json({Students})

}

getStudent = async (req,res)=>{
    console.log(req.params)
    const { RfidTag: studentID } = req.params
    const student = await students.findOne({RfidTag: studentID})
    if(!student){
        // error todo
    }
    res.status(200).json({student})
}

createStudent = async (req,res)=>{

    console.log(req.body)
    const { RfidTag: studentID } = req.body
    let student = await students.findOne({RfidTag: studentID})
    if(!student){
        console.log("student doesn't exist creating one")
        student= await students.create(req.body)
    } 
    res.status(201).json({student})

}

updateStudent = async (req,res)=>{
    const { RfidTag: studentID } = req.params
    const student = await students.findOneAndUpdate({RfidTag: studentID},
        req.body,
        {new: true,runValidators: true,})
    if(!student){
        // error todo
    }
    res.status(200).json({student})
}

deleteStudent = async (req,res) =>{
    const {RfidTag: studentID} = req.params
    const student = await students.findOneAndDelete({RfidTag: studentID})
    if(!student){
        // error todo
    }
    res.status(200).json({student})

}

module.exports = {
    getAllStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
}