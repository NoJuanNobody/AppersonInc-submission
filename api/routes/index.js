var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('ok!');
});

router.get('/robots', (req, res, next) => {
  res.send([
    {
      name:'R2-d2',
      color:'gray',
      attack: 'lazer',
      defense: 'force field'
    },
    {
      name:'robby the robot',
      color:'gray',
      attack: 'lazer',
      defense: 'force field'
    },
    {
      name:'optimus prime',
      color:'red',
      attack: 'sword',
      defense: 'shield'
    },
    ])
})

module.exports = router;
