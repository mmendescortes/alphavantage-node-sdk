
const https = require('https');
let APIKey;
module.exports = {
	timeSeriesMonthly: (equity) => {
		return timeSeries(equity, 'TIME_SERIES_MONTHLY', 'Monthly Time Series')
	},
  timeSeriesMonthlyAdjusted: (equity) => {
    return timeSeries(equity, 'TIME_SERIES_MONTHLY_ADJUSTED', 'Monthly Adjusted Time Series')
  },
  timeSeriesWeekly: (equity) => {
    return timeSeries(equity, 'TIME_SERIES_WEEKLY', 'Weekly Time Series')
  },
  timeSeriesWeeklyAdjusted: (equity) => {
    return timeSeries(equity, 'TIME_SERIES_WEEKLY_ADJUSTED', 'Weekly Adjusted Time Series')
  },
  timeSeriesDaily: (equity) => {
    return timeSeries(equity, 'TIME_SERIES_DAILY', 'Time Series (Daily)')
  },
  timeSeriesDailyAdjusted: (equity) => {
    return timeSeries(equity, 'TIME_SERIES_DAILY_ADJUSTED', 'Time Series (Daily)')
  },
  timeSeriesDailyFull: (equity) => {
    return new Promise((res, rej) => {
      https.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + equity + '&apikey=' + APIKey + '&outputsize=full', (req) => {
        let arr = [];
        req.on('data', d => arr.push(d));
        req.on('end', () => res(JSON.parse(arr.join(''))['Time Series (Daily)']));
      });
    });
  },
  timeSeriesDailyAdjustedFull: (equity) => {
    return new Promise((res, rej) => {
      https.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + equity + '&apikey=' + APIKey + '&outputsize=full', (req) => {
        let arr = [];
        req.on('data', d => arr.push(d));
        req.on('end', () => res(JSON.parse(arr.join(''))['Time Series (Daily)']));
      });
    });
  },
	key: ''
}
async function timeSeries(equity, func, data) {
	return new Promise((res, rej) => {
		https.get('https://www.alphavantage.co/query?function=' + func + '&symbol=' + equity + '&apikey=' + APIKey, (req) => {
			let arr = [];
			req.on('data', d => arr.push(d));
			req.on('end', () => res(JSON.parse(arr.join(''))[data]));
		});
	});
}
