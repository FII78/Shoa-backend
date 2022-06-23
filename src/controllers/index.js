module.exports.authController = require('./auth/auth.controller');
module.exports.userController = require('./auth/user.controller');
module.exports.notifController = require('./other/notification.controller');

//hr controllers
module.exports.employeeController = require('./hr/employee.controller');
module.exports.companyController = require('./hr/company.controller');
module.exports.branchController = require('./hr/branch.controller');
module.exports.departmentController = require('./hr/department.controller');
module.exports.insuranceController = require('./hr/insurance.controller')
module.exports.workController = require('./hr/work.controller')
module.exports.educationController = require('./hr/education.controller')
module.exports.salaryController = require('./hr/salary.controller')
module.exports.attendanceRequestController = require('./hr/attendanceRequest.controller')
module.exports.leaveRequestController = require('./hr/leaveRequest.controller')
module.exports.travelRequestController = require('./hr/travelRequest.controller')
module.exports.attendanceController = require('./hr/attendance.controller')
module.exports.designationController = require('./hr/designation.controller')

//inventory controllers

//transport controllers
module.exports.vehicleController = require('./transport/vehicle.controller');
module.exports.assignmentController = require('./transport/assignment.controller');