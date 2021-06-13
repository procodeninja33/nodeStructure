const router = require('express').Router();
const facade = require('./employeeFacade');
const validator = require('./employeeValidators');
const resHndlr = require('../../handlers/responseHandler');

router.route('/').post([validator.addEmployee], (req, res) => {
    facade.addEmployee(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/').get([], (req, res) => {
    facade.getEmployees(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

module.exports = router;