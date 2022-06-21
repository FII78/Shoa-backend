const httpStatus = require('http-status');
const { Work } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Work
 * @param {Object} workBody
 * @returns {Promise<Work>}
 */
const createWork = async (workBody) => {
  console.log("service", workBody);
  return Work.insertMany(workBody);
};

const queryWorks = async (filter, options) => {
  const work = await Work.paginate(filter, options);
  return work.results;
};

const getWorkById = async (id) => {
  const work = Work.findById(id);
  return work;
};

const updateWorkById = async (workId, updateBody) => {
    const work = await getWorkById(workId);
    if (!work) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Work not found');
    }
    Object.assign(work, updateBody);
    await work.save();
  return result;
};

const deleteWorkById = async (workId) => {
  const work = await getWorkById(workId);
  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work not found');
  }
  await work.remove();
  return work;
};

module.exports = {
  createWork,
  queryWorks,
  getWorkById,
  updateWorkById,
  deleteWorkById,
};
