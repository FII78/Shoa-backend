const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { educationService } = require('../../services');
const cloudinary = require('../../utils/cloudinary');

const createEducation = catchAsync(async (req, res) => {
  var result = [];

  for (var i = 0; i < req.files.length; i++) {
    var file = req.files[i].path;

    var image = {};
    image = await cloudinary.uploader.upload(file);
    result.push(image);
  }


  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'File not uploaded');
  }

  var userbody = {};
  userbody = JSON.parse(req.body.body);

  userbody.map((item, i) => {
    item.certification = result[i].secure_url
    item.cloudinary_id = result[i].public_id
  });

  console.log('user body', userbody);

  const education = await educationService.createEducation(userbody);
  console.log('education', education);
  res.status(httpStatus.CREATED).send(education);
});

const getEducations = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await educationService.queryEducations(filter, options);
  res.send(result);
});

const getEducation = catchAsync(async (req, res) => {
  const education = await educationService.getEducationById(req.params.educationId);

  if (!education) {
    throw new ApiError(httpStatus.NOT_FOUND, 'education not found');
  }
  res.send(education);
});

const updateEducation = catchAsync(async (req, res) => {
  const education = await educationService.updateEducationById(req.params.educationId, req.body);
  res.send(education);
});

const deleteEducation = catchAsync(async (req, res) => {
  await educationService.deleteEducationById(req.params.educationId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createEducation,
  getEducations,
  getEducation,
  updateEducation,
  deleteEducation,
};
