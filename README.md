# SHOA-REST API / backend application

The entire application is contained within the `src/app.js` file.

## Install

    yarn install

## Run the app

    yarn dev

# REST API

The REST API to the SHOA backend is described below.

**.env File Structure [ Copy and Replace ]**

  PORT=4040 <br/>
  MONGODB_URL= mongodb://127.0.0.1:27017/erp <br />
  JWT_SECRET=thisisasamplesecret <br />
  JWT_ACCESS_EXPIRATION_MINUTES=30 <br />
  JWT_REFRESH_EXPIRATION_DAYS=30 <br />
  JWT_RESET_PASSWORD_EXPIRATION_MINUTES=10 <br />
  JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=10 <br />
  SMTP_HOST=smtp.mailtrap.io <br />
  SMTP_PORT=yourport <br />
  SMTP_USERNAME=yourusername <br />
  SMTP_PASSWORD=yourpassword <br />
  EMAIL_FROM=support@example.com <br />
  CLOUD_NAME=yourusername <br />
  API_KEY=yourkey <br />
  API_SECRET=yoursecret <br />

## Access the swagger documentation 

### Request

`GET /docs/#`

    curl -i -H 'Accept: application/json' http://localhost:4040/v1/docs/#/

