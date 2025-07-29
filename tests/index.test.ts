import { expect, test } from '@jest/globals';
import { toCommonEra, toBikramSambat } from '../src/index';

test.only('toBikramSambat()', () => {
  expect(toBikramSambat({ year: 1913, month: 4, day: 13 })).toEqual({ year: 1970, month: 1, day: 1 });
  expect(toBikramSambat({ year: 1913, month: 4, day: 14 })).toEqual({ year: 1970, month: 1, day: 2 });
  expect(toBikramSambat({ year: 2015, month: 9, day: 20 })).toEqual({ year: 2072, month: 6, day: 3 });
  expect(() => toBikramSambat({ year: 1893, month: 4, day: 11 })).toThrow();
  expect(() => toBikramSambat({ year: 2070, month: 1, day: 1 })).toThrow();
});

test.only('toCommonEra()', () => {
  expect(toCommonEra({ year: 1970, month: 1, day: 1 })).toEqual({ year: 1913, month: 4, day: 13 });
  expect(toCommonEra({ year: 1976, month: 9, day: 16 })).toEqual({ year: 1919, month: 12, day: 31 });
  expect(toCommonEra({ year: 1976, month: 9, day: 17 })).toEqual({ year: 1920, month: 1, day: 1 });
  expect(toCommonEra({ year: 2000, month: 1, day: 2 })).toEqual({ year: 1943, month: 4, day: 15 });
  expect(toCommonEra({ year: 2072, month: 6, day: 3 })).toEqual({ year: 2015, month: 9, day: 20 });
  expect(toCommonEra({ year: 2089, month: 12, day: 30 })).toEqual({ year: 2033, month: 4, day: 12 });
  expect(toCommonEra({ year: 2100, month: 12, day: 31 })).toEqual({ year: 2044, month: 4, day: 13 });
  expect(toCommonEra({ year: 2099, month: 24, day: 31 })).toEqual({ year: 2044, month: 4, day: 13 });
  expect(() => toCommonEra({ year: 1949, month: 1, day: 1 })).toThrow();
  expect(() => toCommonEra({ year: 2101, month: 1, day: 1 })).toThrow();
});
