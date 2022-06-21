module.exports.authValidation = require('./auth.validation');
module.exports.userValidation = require('./user.validation');

//hr validation
module.exports.employeeValidation = require('./hr/employee.validation');
module.exports.companyValidation = require('./hr/company.validation');
module.exports.branchValidation = require('./hr/branch.validation');
module.exports.departmentValidation = require('./hr/department.validation');
module.exports.insuranceValidation = require('./hr/insurance.validation');
module.exports.workValidation = require('./hr/work.validation');
module.exports.educationValidation = require('./hr/education.validation');
module.exports.salaryValidation = require('./hr/salary.validation');
module.exports.attendanceRequestValidation = require('./hr/attendanceRequest.validation');
module.exports.leaveRequestValidation = require('./hr/leaveRequest.validation');
module.exports.travelRequestValidation = require('./hr/travelRequest.validation');

//transport validations
module.exports.vehicleValidation = require('./vehicle.validation');