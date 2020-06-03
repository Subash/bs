const calendar = require('./calendar.json');
const CALENDAR_START_DATE = Date.UTC(1893, 4 - 1, 12); // month to monthIndex

exports.toBS = function toBS({ day, month, year }) {
  const date = Date.UTC(year, month - 1, day); // month to monthIndex
  if(date < CALENDAR_START_DATE) throw new Error(`The date ${year}/${month}/${day} is not supported.`);

  const difference = Math.abs(date - CALENDAR_START_DATE) / (86400 * 1000);
  const totalDays =  difference + 1;

  let bsYear, bsMonth, bsDay, daysCounter = 0;
  for([_year, months] of calendar) {
    bsYear = _year;

    for([monthIndex, days] of months.entries()) {
      bsMonth = monthIndex + 1;

      if(daysCounter + days < totalDays) {
        daysCounter += days;
      } else {
        bsDay = totalDays - daysCounter;
        return { year: bsYear, month: bsMonth, day: bsDay }
      }
    }
  }

  throw new Error(`The date ${year}/${month}/${day} is not supported.`);
}

exports.toAD = function toAD({ day, month, year }) {
  if(year < calendar[0][0]) throw new Error(`The date ${year}/${month}/${day} is not supported.`);

  let totalDays = 0;
  for([_year, months] of calendar) {
    for([monthIndex, days] of months.entries()) {
      if(year === _year && month === monthIndex + 1) {
        if(day < 1 || day > days) throw new Error(`The month ${year}/${month} has only ${days} days.`)
        totalDays += day;
        let difference = totalDays - 1;
        const date = new Date(CALENDAR_START_DATE + (difference * (86400 * 1000)));
        return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
      } else {
        totalDays += days;
      }
    }
  }

  throw new Error(`The date ${year}/${month}/${day} is not supported.`);
}
