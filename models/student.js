const mongoose = require('mongoose')

const studentShcema = new mongoose.Schema({

    RfidTag:{

        type : String,
        //required :[true,'Student RFID Tag must be provided']

    },
    name:{

        type: String,
        //required :[true,'Student name must be provided']

    },

    class:{
        type: String,
        //required :[true,'Student classroom must be provided']

    },

    AttendentAt:{
        type: Date,
        default: Date.now(),
    }


})

module.exports = mongoose.model('StudentModel',studentShcema)