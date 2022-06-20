const allRoles = {
  user: ['user'],
  superAdmin: ['getUsers', 'manageUsers', 'manageEmployees', 'manageAdmins', 'manageBranch', 'manageDepartment', 'manageCompany'],
  admin: ['getUsers', 'manageUsers', 'manageEmployees'],
  generalManager: ['manageEmployees', 'manageBranch', 'manageDepartment'],
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
