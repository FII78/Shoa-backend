const httpStatus = require('http-status');
const { Education } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Education
 * @param {Object} educationBody
 * @returns {Promise<Education>}
 */
const createEducation = async (educationBody) => {
  console.log('service', educationBody);
  return Education.insertMany(educationBody);
};

const queryEducations = async (filter, options) => {
  const education = await Education.paginate(filter, options);
  return education.results;
};

const getEducationById = async (id) => {
  const education = Education.findById(id);
  return education;
};

const updateEducationById = async (educationId, updateBody) => {
  const education = await getEducationById(educationId);
  if (!education) {
    throw new ApiError(httpStatus.NOT_FOUND, 'education not found');
  }
  Object.assign(education, updateBody);
  await education.save();
  return education;
};

const deleteEducationById = async (educationId) => {
  const education = await getEducationById(educationId);
  if (!education) {
    throw new ApiError(httpStatus.NOT_FOUND, 'education not found');
  }
  await education.remove();
  return education;
};

module.exports = {
  createEducation,
  queryEducations,
  getEducationById,
  updateEducationById,
  deleteEducationById,
};
