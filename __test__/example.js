const { IEXCloudClient } = require("./../lib");

const axios = require("axios");

require("dotenv").config();

const iex = new IEXCloudClient(axios, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable",
});


iex.market()
.list("mostactive", {displayPercent: true, listLimit: 4})
.then(res => console.log(res))

iex
  .batchSymbols(["AAPL", "GOOGL"])
  .book()
  .then(res => console.log('1 ok:',res))
  .catch(err => console.log('1 err:',err));

iex
  .symbol("aapl")
  .batch()
  .book()
  .chart()
  .sentiment()
  .range()
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .symbol("AAPL")
  .book()
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .refData()
  .exchanges()
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .symbol("aapl")
  .chart("6m", { chartCloseOnly: true, chartSimplify: true, chartInterval: 2 })
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .search("facebook")
  .then(res => res)
  .then(res => iex.symbol(res[0].symbol).company())
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .batchSymbols(["USDGPB", "USDJPY"])
  .forex()
  .convert({ amount: 2000 })
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .batchSymbols(["USDGPB", "USDJPY"])
  .forex()
  .historical({ last: 5 })
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .market()
  .todayEarnings()
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .stats()
  .records()
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .market()
  .sectorPerformance()
  .then(res => console.log(res))
  .catch(err => console.log(err));

iex
  .symbol("AAPL")
  .quote("lastestPrice")
  .then(res => console.log(res));

iex
  .symbol("AAPL")
  .cashFlow("annual", 3)
  .then(res => console.log(res));
