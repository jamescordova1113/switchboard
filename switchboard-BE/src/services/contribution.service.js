const axios = require('axios');

const baseURL = 'https://data.mongodb-api.com/app/data-tszvo/endpoint/data/v1/';

const instance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json', 'api-key': process.env.KEY },
});

/**
 * Relay the data to mongodb cloud
 * @param {body} object
 * @returns {object}
 */
const find = (body) => {
  const _body = {
    collection: 'Act_Blue',
    database: 'Mock_Data',
    dataSource: 'Cluster0',
    ...body,
  };
  console.log(_body, typeof _body);
  return instance.post('/action/find', _body);
};

module.exports = {
  find,
};
