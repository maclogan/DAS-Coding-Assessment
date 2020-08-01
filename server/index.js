const express = require('express');
const app = express();
const cors = require('cors');

// Init Middleware
app.use(express.json());
app.options('*', cors());

const PORT = process.env.PORT || 8000;

const generateChange = (amt) => {
  const denoms = {
    silver_dollar: 100,
    half_dollar: 50,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };
  const change = {
    silver_dollar: 0,
    half_dollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  let cents = amt * 100;

  for (coin in denoms) {
    change[coin] = Math.floor(cents / denoms[coin]);
    cents -= change[coin] * denoms[coin];
  }

  return change;
};

// @route GET api/
// @desc returns optimal # of coins for the input as a json structure
app.post('/', cors(), async (req, res) => {
  // error checking on input
  if (req.body.amount == null) {
    console.log('noamount');
    console.log(req.body);
    res.status(400).json({ msg: 'No amount was supplied' });
  } else if (Number.isNaN(Number(req.body.amount))) {
    console.log('nan');
    res.status(400).json({ msg: 'The amount supplied must be a number ' });
  } else {
    // Where the bulk of the logic is done (normally I would separate this into its own class and route, but I left it here to prevent complicating this
    // single-route API)
    console.log('ok');
    res.status(200).json(generateChange(req.body.amount));
  }
});

app.listen(PORT, () => {
  console.log('Example app listening on port 8000');
});
