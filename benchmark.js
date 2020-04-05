const siege = require("siege");

siege()
  .on(8080)
  .for(10000).times
  .get('/')
  .attack()