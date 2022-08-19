const express = require('express')
const router = express.Router()

const {
    getAllStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    
} = require('../controllers/students')

router.route('/').get(getAllStudents).post(createStudent)
router.route('/:RfidTag').get(getStudent).delete(deleteStudent).patch(updateStudent)

module.exports = router