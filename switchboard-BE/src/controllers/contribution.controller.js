const catchAsync = require('../utils/catchAsync');
const { contributionService } = require('../services');

const find = catchAsync(async (req, res) => {
  console.log(req);
  const response = await contributionService.find(req.body);

  res.status(response.status).send(response.data);
});

module.exports = {
  find,
};
