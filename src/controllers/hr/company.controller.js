const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { companyService } = require('../../services');
const pick = require('../../utils/pick');

const createCompany= catchAsync(async (req, res) => {
  const company = await companyService.createCompany(req.body);
  res.status(httpStatus.CREATED).send(company);
});

const getCompany = catchAsync(async (req, res) => {
  const company = await companyService.getCompanyById(req.params.companyId);
  
  if (!company) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Company not found');
  }
  res.send(company);
});

const getCompanies = catchAsync(async (req, res) => {
  const result = await companyService.queryCompanies();
  console.log(result[0]);
  res.send(result[0]);
});

const updateCompany = catchAsync(async (req, res) => {
  const company = await companyService.updateCompanyById(req.params.companyId, req.body);
  res.send(company);
});

module.exports = {
  createCompany,
  getCompany,
  updateCompany,
  getCompanies
};

