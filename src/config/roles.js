const allRoles = {
  user: ['user', 'myRequest'],
  superAdmin: ['getUsers', 'manageUsers', 'manageEmployees', 'manageAdmins', 'manageBranch', 'manageDepartment', 'manageCompany', 'myRequest', 'manageLogistics', 'manageAttendance'],
  admin: ['getUsers', 'manageUsers', 'manageEmployees'],
  generalManager: ['manageEmployees', 'manageBranch', 'manageDepartment', 'myRequest'],
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
