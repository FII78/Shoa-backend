const httpStatus = require('http-status');
const { TravelRequest } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Travel Request
 * @param {Object} requestBody
 * @returns {Promise<TravelRequest>}
 */
const createTravelRequest = async (requestBody) => {
  console.log("service", requestBody);
  return TravelRequest.create(requestBody);
};

const queryTravelRequests = async (filter, options) => {
  const request = await TravelRequest.paginate(filter, options);
  return request.results;
};

const getTravelRequestById = async (id) => {
  const request = TravelRequest.findById(id);
  return request;
};

const updateTravelRequestById = async (requestId, updateBody) => {
    const request = await getTravelRequestById(requestId);
    if (!request) {
      throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
    }
    Object.assign(request, updateBody);
    await request.save();
  return request;
};

const deleteTravelRequestById = async (requestId) => {
  const request = await getTravelRequestById(requestId);
  if (!request) {
    throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
  }
  await request.remove();
  return request;
};

module.exports = {
  createTravelRequest,
  queryTravelRequests,
  getTravelRequestById,
  updateTravelRequestById,
  deleteTravelRequestById,
};
