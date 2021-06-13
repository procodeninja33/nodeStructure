const service = require('./employeeService');
const resHndlr = require('../../handlers/responseHandler');
const constant = require('../../utils/constant');
const employeeConstant = require('./employeeConstant');

let addEmployee = (req) => {
    return service.addEmployee(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, employeeConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, employeeConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('addEmployee Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, employeeConstant.MESSAGE.addError, error);
    })
}

let getEmployees = (req) => {
    return service.getEmployees(req).then((data) => {
        return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, employeeConstant.MESSAGE.getSuccess, data)
    }, (error) => {
        console.log('getEmployees Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, employeeConstant.MESSAGE.getError, error);
    })
}

module.exports = {
    getEmployees,
    addEmployee
}