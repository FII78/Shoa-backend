const httpStatus = require('http-status');
const { Vehicle } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Vehicle
 * @param {Object} vehicleBody
 * @returns {Promise<Vehicle>}
 */
const createVehicle = async (vehicleBody) => {
  
  return Vehicle.create(vehicleBody);
};

 
const queryVehicles = async (filter, options) => {
  const vehicle = await Vehicle.paginate(filter, options);
  return vehicle;
};

const getVehicleById = async (id) => {
  return Vehicle.findById(id);
};

const updateVehicleById = async (vehicleId, updateBody) => {
  const vehicle = await getVehicleById(vehicleId);
  if (!vehicle) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vehicle not found');
  }
  Object.assign(vehicle, updateBody);
  await vehicle.save();
  return vehicle;
};

const deleteVehicleById = async (vehicleId) => {
  const vehicle = await getVehicleById(vehicleId);
  if (!vehicle) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vehicle not found');
  }
  await vehicle.remove();
  return vehicle;
};

module.exports = {
  createVehicle,
  queryVehicles,
  getVehicleById,
  updateVehicleById,
  deleteVehicleById
 
};
