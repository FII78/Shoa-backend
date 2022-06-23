module.exports.Token = require('./other/token.model');
module.exports.User = require('./auth/user.model');
module.exports.Notification = require('./other/notification.model');

//hr models
module.exports.Employee = require('./hr/employee.model');
module.exports.Company = require('./hr/company.model');
module.exports.Branch = require('./hr/branch.model');
module.exports.Department = require('./hr/department.model');
module.exports.Education = require('./hr/education.model');
module.exports.Insurance = require('./hr/insurance.model');
module.exports.Salary = require('./hr/salary.model');
module.exports.Work = require('./hr/work.model');
module.exports.AttendanceRequest = require('./hr/attendanceRequest.model');
module.exports.LeaveRequest = require('./hr/leaveRequest.model');
module.exports.TravelRequest = require('./hr/travelRequest.model');
module.exports.Attendance = require('./hr/attendance.model');
module.exports.Designation = require('./hr/designation.model');

//inventory models
module.exports.Item = require('./inventory/item.model');
module.exports.Product = require('./inventory/product.model');
module.exports.Grv = require('./inventory/grv.model');
module.exports.Variant = require('./inventory/variant.model');
module.exports.Uom = require('./inventory/uom.model');
module.exports.Supplier = require('./inventory/supplier.model');

//transport models
module.exports.Vehicle = require('./transport/vehicle.model');
module.exports.Assignment = require('./transport/assignment.model');


