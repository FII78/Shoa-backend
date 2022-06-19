const allRoles = {
  user: ['user'],
  superAdmin: ['getUsers', 'manageUsers', 'getEmployees', 'manageEmployees', 'getAdmins', 'manageAdmins'],
  admin: ['getUsers', 'manageUsers', 'getEmployees', 'manageEmployees'],
  generalManager: ['getEmployees', 'manageEmployees', 'getBranch', 'manageBranch'],
  supermarketManager: [],
  logisticsManager: [],
  teamLead: [],
  clerk: [],
  cashier: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
