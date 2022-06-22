module.exports.authService = require('./auth/auth.service');
module.exports.emailService = require('./other/email.service');
module.exports.tokenService = require('./other/token.service');
module.exports.userService = require('./auth/user.service');
module.exports.notifService = require('./other/notification.service');

//hr services
module.exports.employeeService = require('./hr/employee.service');
module.exports.companyService = require('./hr/company.service');
module.exports.branchService = require('./hr/branch.service');
module.exports.departmentService = require('./hr/department.service');
module.exports.insuranceService = require('./hr/insurance.service');
module.exports.workService = require('./hr/work.service');
module.exports.educationService = require('./hr/education.service');
module.exports.salaryService = require('./hr/salary.service');
module.exports.attendanceRequestService = require('./hr/attendanceRequest.service');
module.exports.leaveRequestService = require('./hr/leaveRequest.service');
module.exports.travelRequestService = require('./hr/travelRequest.service');
module.exports.attendanceService = require('./hr/attendace.service');
module.exports.designationService = require('./hr/designation.service');

//inventory services
module.exports.itemService = require('./inventory/item.service');
module.exports.productService = require('./inventory/product.service');
module.exports.grvService = require('./inventory/grv.service');
module.exports.variantService = require('./inventory/variant.service');
module.exports.uomService = require('./inventory/uom.service');
module.exports.supplierService = require('./inventory/supplier.service');

//transport services
module.exports.vehicleService = require('./transport/vehicle.service');
module.exports.assignmentService = require('./transport/assignment.service');
