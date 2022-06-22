module.exports.authController = require('./auth.controller');
module.exports.userController = require('./user.controller');
module.exports.notifController = require('./notification.controller');

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

//inventory controllers
module.exports.itemController = require('./inventory/item.controller');
module.exports.productController = require('./inventory/product.controller');
module.exports.grvController = require('./inventory/grv.controller');
module.exports.variantController = require('./inventory/variant.controller');
module.exports.uomController = require('./inventory/uom.controller');
module.exports.supplierController = require('./inventory/supplier.controller');


//transport controllers
module.exports.vehicleController = require('./vehicle.controller');


