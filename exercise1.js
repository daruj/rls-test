import express from 'express';
import Validator from 'schema-validator';
import schemaValidator from 'validate';


const app = express();

const schema = {
  username: {
    required: true,
    message: 'Username is not optional'
  },
  self: {
    type: Object,
    age: {
      type: 'number',
      message: 'self.age should be numeric'
    }
  },
  email: {
    type: 'string'
  },
  pets: {
    type: Array,
    items: {
      type: 'string',
      message: 'pets should be only strings'
    }
  }
};

/**
 * Exercise 1: Create a 'schema validation' utility that uses this example objects
 * and a 'schema' for validating. Must return success when sending validProfile
 * and should show errors indicating that 'username' is not optional, self.age
 * should be numeric and pets should be only strings, when sending 'invalidProfile'
 * as param.
 */

app.get('/test-valid', (req, res) => {

  var user = schemaValidator(schema);

  const profile = {
    username: 'SergioSex',
    self: {
       age: 31
    },
    email: 'sergisexy@gmail.com',
    pets: ['sexyParrot', 'fuckerLizard']
  }

  const result = user.validate(profile);


  res.send(!result.length ? 'Success' : result)

});

app.get('/test-invalid', (req, res) => {

  var user = schemaValidator(schema);

  const profile = {
    username: null,
    self: {
       age: '31'
    },
    email: 'sergisexy@gmail.com',
    pets: [121, "asafafs"]
  }

  const result = user.validate(profile);

  res.send(!result.length ? 'Success' : result)

});

const port = 2016

app.listen(port, () => console.log(`Listening to ${port}`))
