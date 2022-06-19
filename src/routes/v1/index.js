const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const notifRoute = require('./notification.route');
const config = require('../../config/config');

//hr routes
const employeeRoute = require('./hr/employee.route');
const companyRoute = require('./hr/company.route');
const branchRoute = require('./hr/branch.route');

//transport routes
const vehicleRoute = require('./vehicle.route');

//inventory routes

const router = express();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
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
