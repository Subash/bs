import assert from 'node:assert/strict';
import test from 'node:test';
import { toBikramSambat, toCommonEra } from '../src/index.js';

test('toBikramSambat()', () => {
  assert.deepEqual(toBikramSambat({ year: 1913, month: 4, day: 13 }), { year: 1970, month: 1, day: 1 });
  assert.deepEqual(toBikramSambat({ year: 1913, month: 4, day: 14 }), { year: 1970, month: 1, day: 2 });
  assert.deepEqual(toBikramSambat({ year: 2015, month: 9, day: 20 }), { year: 2072, month: 6, day: 3 });
  assert.throws(() => toBikramSambat({ year: 1893, month: 4, day: 11 }));
  assert.throws(() => toBikramSambat({ year: 2070, month: 1, day: 1 }));
});

test('toCommonEra()', () => {
  assert.deepEqual(toCommonEra({ year: 1970, month: 1, day: 1 }), { year: 1913, month: 4, day: 13 });
  assert.deepEqual(toCommonEra({ year: 1976, month: 9, day: 16 }), { year: 1919, month: 12, day: 31 });
  assert.deepEqual(toCommonEra({ year: 1976, month: 9, day: 17 }), { year: 1920, month: 1, day: 1 });
  assert.deepEqual(toCommonEra({ year: 2000, month: 1, day: 2 }), { year: 1943, month: 4, day: 15 });
  assert.deepEqual(toCommonEra({ year: 2072, month: 6, day: 3 }), { year: 2015, month: 9, day: 20 });
  assert.deepEqual(toCommonEra({ year: 2089, month: 12, day: 30 }), { year: 2033, month: 4, day: 12 });
  assert.deepEqual(toCommonEra({ year: 2100, month: 12, day: 31 }), { year: 2044, month: 4, day: 13 });
  assert.deepEqual(toCommonEra({ year: 2099, month: 24, day: 31 }), { year: 2044, month: 4, day: 13 });
  assert.throws(() => toCommonEra({ year: 1949, month: 1, day: 1 }));
  assert.throws(() => toCommonEra({ year: 2101, month: 1, day: 1 }));
});
