const mongoose = require('mongoose');
const httpStatus = require('http-status');
const httpMocks = require('node-mocks-http');
const { errorConverter, errorHandler } = require('../../../src/middlewares/error');
const ApiError = require('../../../src/utils/ApiError');
const config = require('../../../src/config/config');
const logger = require('../../../src/config/logger');

describe('Error middlewares', () => {
    describe('Error converter', () => {
        test('should return the same ApiError object it was called with', () => {
          const error = new ApiError(httpStatus.BAD_REQUEST, 'Any error');
          const next = jest.fn();
    
          errorConverter(error, httpMocks.createRequest(), httpMocks.createResponse(), next);
    
          expect(next).toHaveBeenCalledWith(error);
        });
        
        test('should convert an Error to ApiError and preserve its status and message', () => {
            const error = new Error('Any error');
            error.statusCode = httpStatus.BAD_REQUEST;
            const next = jest.fn();
      
            errorConverter(error, httpMocks.createRequest(), httpMocks.createResponse(), next);
      
            expect(next).toHaveBeenCalledWith(expect.any(ApiError));
            expect(next).toHaveBeenCalledWith(
              expect.objectContaining({
                statusCode: error.statusCode,
                message: error.message,
                isOperational: false,
              })
            );
          });
    
    
    })   
    });
    