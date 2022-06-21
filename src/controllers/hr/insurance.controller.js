const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { insuranceService } = require('../../services');
const cloudinary = require('../../utils/cloudinary');

const createInsurance = catchAsync(async (req, res) => {
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
    item.insuranceDocument = result[i].secure_url
    item.cloudinary_id = result[i].public_id
  });

  console.log('user body', userbody);

  const insurance = await insuranceService.createInsurance(userbody);
  console.log('insurance', insurance);
  res.status(httpStatus.CREATED).send(insurance);
});

const getInsurances = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await insuranceService.queryInsurances(filter, options);
  res.send(result);
});

const getInsurance = catchAsync(async (req, res) => {
  const insurance = await insuranceService.getInsuranceById(req.params.insuranceId);

  if (!insurance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'insurance not found');
  }
  res.send(insurance);
});

const updateInsurance = catchAsync(async (req, res) => {
  const insurance = await insuranceService.updateInsuranceById(req.params.employeeId, req.body);
  res.send(insurance);
});

const deleteInsurance = catchAsync(async (req, res) => {
  await insuranceService.deleteInsuranceById(req.params.employeeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createInsurance,
  getInsurances,
  getInsurance,
  updateInsurance,
  deleteInsurance,
};
