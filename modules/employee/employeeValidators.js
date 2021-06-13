'use strict';

const Joi = require('joi');
const regEx = require('../../utils/regularExpression')
const resHndlr = require('../../handlers/responseHandler');
const employeeConstant = require('./employeeConstant')

let addEmployee = async (req, res, next) => {
    try {

        let schema = Joi.object({
            emp_firstname: Joi.string().required(),
            emp_lastname: Joi.string().required(),
            emp_email: Joi.string().required().pattern(regEx.emailRegEx)
                .messages({ 'string.pattern.base': employeeConstant.VALIDATION.invalidEmail }),
        })

        await schema.validateAsync(req.body, { allowUnknown: true });
        next();

    } catch (error) {
        resHndlr.validationErrorHandler(res, error);
    }
}

module.exports = {
    addEmployee
}