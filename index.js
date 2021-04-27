const { scrapePruduct } = require("./scraping");

// För att scrapa scrapeProduct(URL,Kategori,Filnamn, ID-nummer(100-tal))
// $ npm start

//Vårblommor

scrapePruduct(
  "https://www.euroflorist.se/varblommor-ct3020",
  "Vårblommor",
  "vårblommor.csv",
  100
);

//Födelsedag

scrapePruduct(
  "https://www.euroflorist.se/populara-fodelsedagsbuketter-ct191",
  "Födelsedag",
  "födelsedag.csv",
  200
);

//Bästsäljare

scrapePruduct(
  "https://www.euroflorist.se/populara-blommor-ct3133",
  "Bästsäljare",
  "bästsäljare.csv",
  300
);

//Begravning

scrapePruduct(
  "https://www.euroflorist.se/begravning-ct208",
  "Begravning",
  "begravning.csv",
  400
);
