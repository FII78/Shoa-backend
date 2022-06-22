const express = require('express');
const authRoute = require('./auth/auth.route');
const userRoute = require('./auth/user.route');
const docsRoute = require('./other/docs.route');
const notifRoute = require('./other/notification.route');
const config = require('../config/config');


//inventory routes
const itemRoute = require('./inventory/item.route');
const productRoute = require('./inventory/product.route');
const grvRoute = require('./inventory/grv.route');
const variantRoute = require('./inventory/variant.route');
const uomRoute = require('./inventory/uom.route');
const supplierRoute = require('./inventory/supplier.route');

//hr routes
const employeeRoute = require('./hr/employee.route');
const companyRoute = require('./hr/company.route');
const branchRoute = require('./hr/branch.route');
const departmentRoute = require('./hr/department.route');
const insuranceRoute = require('./hr/insurance.route');
const workRoute = require('./hr/work.route');
const salaryRoute = require('./hr/salary.route');
const educationRoute = require('./hr/education.route');
const attendanceRequestRoute = require('./hr/attendanceRequest.route');
const leaveRequestRoute = require('./hr/leaveRequest.route');
const travelRequestRoute = require('./hr/travelRequest.route');
const attendanceRoute = require('./hr/attendance.route');
const designationRoute = require('./hr/designation.route');

//transport routes
const vehicleRoute = require('./transport/vehicle.route');
const assignmentRoute = require('./transport/assignment.route');

//inventory routes

const router = express();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/items',
    route: itemRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/supplier',
    route: supplierRoute,
  },
  {
    path: '/grv',
    route: grvRoute,
  },
  {
    path: '/uom',
    route: uomRoute,
  },
  {
    path: '/variant',
    route: variantRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/vehicle',
    route: vehicleRoute,
  },
  {
    path: '/assignment',
    route: assignmentRoute,
  },
  {
    path: '/employee',
    route: employeeRoute,
  },
  {
    path: '/company',
    route: companyRoute,
  },
  {
    path: '/notification',
    route: notifRoute,
  },
  {
    path: '/branch',
    route: branchRoute,
  },
  {
    path: '/designation',
    route: designationRoute,
  },
  {
    path: '/department',
    route: departmentRoute,
  },
  {
    path: '/education',
    route: educationRoute,
  },
  {
    path: '/insurance',
    route: insuranceRoute,
  },
  {
    path: '/work',
    route: workRoute,
  },
  {
    path: '/salary',
    route: salaryRoute,
  },
  {
    path: '/request/attendance',
    route: attendanceRequestRoute,
  },
  {
    path: '/request/leave',
    route: leaveRequestRoute,
  },
  {
    path: '/request/travel',
    route: travelRequestRoute,
  },
  {
    path: '/attendance',
    route: attendanceRoute,
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
