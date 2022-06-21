const httpStatus = require('http-status');
const { LeaveRequest } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Leave Request
 * @param {Object} requestBody
 * @returns {Promise<LeaveRequest>}
 */
const createLeaveRequest = async (requestBody) => {
  console.log("service", requestBody);
  return LeaveRequest.create(requestBody);
};

const queryLeaveRequests = async (filter, options) => {
  const request = await LeaveRequest.paginate(filter, options);
  return request.results;
};

const getLeaveRequestById = async (id) => {
  const request = LeaveRequest.findById(id);
  return request;
};

const updateLeaveRequestById = async (requestId, updateBody) => {
    const request = await getLeaveRequestById(requestId);
    if (!request) {
      throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
    }
    Object.assign(request, updateBody);
    await request.save();
  return request;
};

const deleteLeaveRequestById = async (requestId) => {
  const request = await getLeaveRequestById(requestId);
  if (!request) {
    throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
  }
  await request.remove();
  return request;
};

module.exports = {
  createLeaveRequest,
  queryLeaveRequests,
  getLeaveRequestById,
  updateLeaveRequestById,
  deleteLeaveRequestById,
};
