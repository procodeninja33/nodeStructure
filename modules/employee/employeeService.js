const employeeModel = require('../../models/employeeModel');

let addEmployee = (req) => {

    let query = {
        emp_is_deleted: false,
        emp_email: req.body.emp_email
    }

    return employeeModel.findOne(query).then((result) => {

        if (result) {

            // email already exist
            return 1;

        } else {

            let employeeSave = new employeeModel(req.body);

            return employeeSave.save().then((result) => {
                return result;
            })
        }
    })


}

let getEmployees = (req) => {

    let query = {
        emp_is_deleted: false
    }

    return employeeModel.find(query).then((result) => {
        return { employees: result }
    })

}

module.exports = {
    addEmployee,
    getEmployees
}