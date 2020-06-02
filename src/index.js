const calendar = require('./calendar.json');
const CALENDAR_START_DATE = new Date('Wed, 12 Apr 1893 00:00:00');

exports.toBS = function toBS({ day, month, year }) {
  const date = new Date(year, month - 1, day, 0, 0, 0, 0); // convert month to monthIndex
  if(date < CALENDAR_START_DATE) throw new Error('Unsupported Date');

  const difference = Math.round(Math.abs(date - CALENDAR_START_DATE) / (86400 * 1000));
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

  throw new Error(`Unsupported Date`)
}

exports.toAD = function toAD({ day, month, year }) {
  if(year < calendar[0][0]) throw new Error('Unsupported Date');

  let totalDays = 0;
  for([_year, months] of calendar) {
    for([monthIndex, days] of months.entries()) {
      if(year === _year && month === monthIndex + 1) {
        if(day < 1 || day > days) throw new Error(`The month ${year}/${month} has only ${days} days.`)
        totalDays += day;
        let difference = totalDays - 1;
        const date = new Date(CALENDAR_START_DATE.getTime() + (difference * (86400 * 1000)));
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
      } else {
        totalDays += days;
      }
    }
  }

  throw new Error('Unsupported Date');
}
