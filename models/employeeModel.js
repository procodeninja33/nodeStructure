const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constants = require('../utils/constant');

const EmployeeSchema = new Schema({
    emp_firstname: {
        type: String
    },
    emp_lastname: {
        type: String
    },
    emp_email: {
        type: String
    },
    emp_is_deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: { createdAt: 'emp_created_at', updatedAt: "emp_updated_at" },
    versionKey: false
})

Employee = module.exports = mongoose.model(constants.DB_MODEL_REF.EMPLOYEE, EmployeeSchema);