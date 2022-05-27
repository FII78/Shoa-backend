const faker = require('faker');
const { describe } = require('pm2');
const { User } = require('../../../src/models');

describe ('User modal', () => {
   describe('User Validation', () =>{
        let newUser;

        beforeEach(() => {
            newUser = {
                name: faker.name.findName(),
                email: faker.internet.email().toLowerCase(),
                password: 'password1',
                role: 'user',
            }
        });



        
   }); 

});