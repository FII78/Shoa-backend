const httpStatus = require('http-status');
const { Attendance } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Attendance 
 * @param {Object} requestBody
 * @returns {Promise<Attendance>}
 */
const createAttendance = async (requestBody) => {
  console.log("service", requestBody);
  return Attendance.create(requestBody);
};

const queryAttendances = async (filter, options) => {
  const request = await Attendance.paginate(filter, options);
  return request.results;
};

const getAttendanceById = async (id) => {
  const request = Attendance.findById(id);
  return request;
};

const updateAttendanceById = async (requestId, updateBody) => {
    const request = await getAttendanceById(requestId);
    if (!request) {
      throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
    }
    Object.assign(request, updateBody);
    await request.save();
  return request;
};

const deleteAttendanceById = async (requestId) => {
  const request = await getAttendanceById(requestId);
  if (!request) {
    throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
  }
  await request.remove();
  return request;
};

module.exports = {
  createAttendance,
  queryAttendances,
  getAttendanceById,
  updateAttendanceById,
  deleteAttendanceById,
};
