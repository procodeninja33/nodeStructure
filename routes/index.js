const employeeRoute = require('../modules/employee/employeeRoute')

module.exports = (app) => {

    // employee route
    app.use('/api/employee', [employeeRoute]);

}