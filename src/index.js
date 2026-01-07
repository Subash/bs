import CALENDAR from './calendar.js';

const CALENDAR_MONTHS = CALENDAR.flatMap((yearRow) => yearRow[1]);
const START_DATE_CE = Date.UTC(1913, 4 - 1, 13); // 1913-04-13 js months are 0 indexed
const START_YEAR_BS = CALENDAR[0][0];

export function toBikramSambat({ day, month, year }) {
  const date = Date.UTC(year, month - 1, day);

  if (date < START_DATE_CE) {
    throw new Error(`The date ${year}/${month}/${day} is not supported.`);
  }

  const differenceDays = (date - START_DATE_CE) / 86400_000;
  const totalDays = differenceDays + 1;

  let daysAccumulator = 0;
  for (const [monthIndex, monthDays] of CALENDAR_MONTHS.entries()) {
    daysAccumulator += monthDays;

    if (daysAccumulator >= totalDays) {
      return {
        year: START_YEAR_BS + Math.floor(monthIndex / 12),
        month: (monthIndex % 12) + 1,
        day: monthDays - (daysAccumulator - totalDays)
      };
    }
  }

  throw new Error(`The date ${year}/${month}/${day} is not supported.`);
}

export function toCommonEra({ year, month, day }) {
  const monthIndex = month - 1;
  const yearIndex = year - START_YEAR_BS;
  const previousMonthsRange = yearIndex * 12 + monthIndex;

  if (previousMonthsRange < 0 || previousMonthsRange > CALENDAR_MONTHS.length - 1) {
    throw new Error(`The date ${year}/${month}/${day} is not supported.`);
  }

  const previousMonths = CALENDAR_MONTHS.slice(0, previousMonthsRange);
  const previousMonthsDays = previousMonths.reduce((total, monthDays) => {
    return total + monthDays;
  }, 0);

  const totalDays = previousMonthsDays + day;
  const differenceDays = totalDays - 1;
  const date = new Date(START_DATE_CE + differenceDays * 86400_000);

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate()
  };
}
