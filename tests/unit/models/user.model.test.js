const { faker } = require('@faker-js/faker');
const { User } = require('../../../src/models');

describe('User model', () => {
  describe('User validation', () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: 'password1',
        role: 'user',
      };
    });

    test('should correctly validate a valid user', async () => {
        await expect(new User(newUser).validate()).resolves.toBeUndefined();
      });
  
    
      test('should throw a validation error if email is invalid', async () => {
        newUser.email = 'invalidEmail';
        await expect(new User(newUser).validate()).rejects.toThrow();
      });
      
      test('should throw a validation error if password length is less than 8 characters', async () => {
        newUser.password = 'passwo2';
        await expect(new User(newUser).validate()).rejects.toThrow();
      });
  
    
   
   
  });
});
