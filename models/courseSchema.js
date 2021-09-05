const mongoose = require('../utils/db')

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    location: {
        type: String,
    },
    academy: {
        type: String,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    online: {
        type: Boolean,
    }
})

module.exports = mongoose.model('course', CourseSchema, 'courseOffers')
