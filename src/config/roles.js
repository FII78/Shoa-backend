const allRoles = {
  user: ['user', 'myRequest'],
  superAdmin: [
    'getUsers',
    'manageUsers',
    'manageEmployees',
    'manageAdmins',
    'manageBranch',
    'manageDepartment',
    'manageCompany',
    'myRequest',
    'manageItem',
    'manageProduct',
    'manageGrv',
    'manageVariant',
    'manageUom',
    'manageSupplier',
    'manageLogistics',
    'manageAttendance',
    'manageDesignation',
  ],
  admin: ['getUsers', 'manageUsers', 'manageEmployees'],
  generalManager: ['manageEmployees', 'manageBranch', 'manageDepartment', 'myRequest', 'manageDesignation'],
  supermarketManager: ['myRequest'],
  logisticsManager: ['myRequest', 'manageLogistics'],
  teamLead: ['myRequest', 'manageAttendance'],
  clerk: ['myRequest'],
  cashier: ['myRequest'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
