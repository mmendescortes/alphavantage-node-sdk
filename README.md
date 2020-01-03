# Alpha Vantage SDK for NodeJS

Easily fetch data from alphavantage.co API on NodeJS.

## Getting Started

The library is available on NPM for quick deploy, following instructions will help you install and use it.

### Install using NPM

```
npm install alphavantage-sdk
```

### Require the library

```
const alphaVantage = require('alphavantage-sdk');
```

### Set your API key

```
alphaVantage.key = 'demo';
```

## Stock Time Series Functions

### timeSeriesDaily(equity)

```
alphaVantage.timeSeriesDaily('MSFT').then(r=>console.log(r));
```
### timeSeriesDailyAdjusted(equity)

```
// Retrieve AZUL4.SAO data
alphaVantage.timeSeriesDailyAdjusted('MSFT').then(r=>console.log(r));
```
### timeSeriesDailyFull(equity)

```
alphaVantage.timeSeriesDailyFull('MSFT').then(r=>console.log(r));
```
### timeSeriesDailyAdjustedFull(equity)

```
alphaVantage.timeSeriesDailyAdjustedFull('MSFT').then(r=>console.log(r));
```
### timeSeriesWeekly(equity)

```
// Retrieve AZUL4.SAO data
alphaVantage.timeSeriesWeekly('MSFT').then(r=>console.log(r));
```
### timeSeriesWeeklyAdjusted(equity)

```
// Retrieve AZUL4.SAO data
alphaVantage.timeSeriesWeeklyAdjusted('MSFT').then(r=>console.log(r));
```
### timeSeriesMonthly(equity)

```
// Retrieve AZUL4.SAO data
alphaVantage.timeSeriesMonthly('MSFT').then(r=>console.log(r));
```
### timeSeriesMonthlyAdjusted(equity)

```
// Retrieve AZUL4.SAO data
alphaVantage.timeSeriesMonthlyAdjusted('MSFT').then(r=>console.log(r));
```

## Built With

* [NodeJS](https://nodejs.org/) - The JavaScript framework used.
* [Alpha Vantage API](https://www.alphavantage.co/) - Free realtime API for historical stock, forex, digital currency data and more than 50 technical indicators. 

## Contributing

Please read [CONTRIBUTING.md](https://github.com/mmendescortes/alphavantage-node-sdk/blob/master/CONTRIBUTING.md) for details on our standards, rules, and the process for submitting pull requests to me.

## Versioning

For the versions available, see the [tags on this repository](https://github.com/mmendescortes/alphavantage-node-sdk/tags). 

## Author

* **Mateus M. Côrtes** - *Initial work* - [alphavantage-node-sdk](https://github.com/mmendescortes/alphavantage-node-sdk/)

See also the list of [contributors](https://github.com/mmendescortes/alphavantage-node-sdk/contributors/) who participated in this project.

## License

This project is licensed under the Mozilla Public License version 2.0 - see the [LICENSE.md](https://github.com/mmendescortes/alphavantage-node-sdk/blob/master/LICENSE.md) file for details

## Acknowledgments

* Alpha Vantage for providing an API free of charge.

