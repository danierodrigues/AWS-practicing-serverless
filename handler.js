'use strict';

const names = [
  "Daniel",
  "José",
  "Maria"
];

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
      },
    ),
  };
};


module.exports.getNames = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: names,
      },
    ),
  };
};

module.exports.addName = async (event) => {
  names.push(event.queryStringParameters.name);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: names,
      },
    ),
  };
};

