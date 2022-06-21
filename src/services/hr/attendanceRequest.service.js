const httpStatus = require('http-status');
const { AttendanceRequest } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Attendance Request
 * @param {Object} requestBody
 * @returns {Promise<AttendanceRequest>}
 */
const createAttendanceRequest = async (requestBody) => {
  console.log("service", requestBody);
  return AttendanceRequest.create(requestBody);
};

const queryAttendanceRequests = async (filter, options) => {
  const request = await AttendanceRequest.paginate(filter, options);
  return request.results;
};

const getAttendanceRequestById = async (id) => {
  const request = AttendanceRequest.findById(id);
  return request;
};

const updateAttendanceRequestById = async (requestId, updateBody) => {
    const request = await getAttendanceRequestById(requestId);
    if (!request) {
      throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
    }
    Object.assign(request, updateBody);
    await request.save();
  return request;
};

const deleteAttendanceRequestById = async (requestId) => {
  const request = await getAttendanceRequestById(requestId);
  if (!request) {
    throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
  }
  await request.remove();
  return request;
};

module.exports = {
  createAttendanceRequest,
  queryAttendanceRequests,
  getAttendanceRequestById,
  updateAttendanceRequestById,
  deleteAttendanceRequestById,
};
