const _ = require('lodash');
const csv = require('csvtojson');

const csvFilePath = './data/july_2018.csv';

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    const result = jsonObj
      .filter(it => it.Line === 'YU')
      .reduce((acc, curr) => {
        return {
          ...acc,
          [curr.Station]: (acc[curr.Station] || 0) + 1
        };
      }, {});

    const list = _.transform(
      result,
      (result, value, key) => {
        result.push({
          station: key
            .replace(' STATION', '')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/\'/, '-'),
          delaysCount: value
        });
      },
      []
    );

    console.log(_.sortBy(list, o => o.delaysCount).reverse());
  });
