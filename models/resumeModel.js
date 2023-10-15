const mongoose = require('mongoose')

const resumeSchema = mongoose.Schema(
    {
        header: {
            name: {
                type: String,
                required: [true, "Please enter a name"]
            },
            location: {
                city: {
                    type: String,
                    required: [true, "Please enter a city"]
                },
                state: {
                    type: String,
                    required: [true, "Please enter a state"]
                }
            },
            linkedin: {
                type: String,
                require: [true, "Please enter your linkedin"]
            },
            github: {
                type: String,
                require: [true, 'Please enter your github']
            }
        }
    },
    {
        timestamps: true
    }
)


const resume = mongoose.model('Resume', resumeSchema);

module.exports = resume;