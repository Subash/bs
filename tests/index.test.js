const { toAD, toBS } = require('../src');

test.only('toBS()', ()=> {
  expect(toBS({ year: 1893, month: 4, day: 12 })).toEqual({ year: 1950, month: 1, day: 1 });
  expect(toBS({ year: 1893, month: 4, day: 13 })).toEqual({ year: 1950, month: 1, day: 2 });
  expect(toBS({ year: 2015, month: 9, day: 20 })).toEqual({ year: 2072, month: 6, day: 3 });
  expect(()=> toBS({ year: 1893, month: 4, day: 11 })).toThrow();
  expect(()=> toBS({ year: 2070, month: 1, day: 1 })).toThrow();
});

test.only('toAD()', ()=> {
  expect(toAD({ year: 1976, month: 9, day: 16 })).toEqual({ year: 1919, month: 12, day: 31 });
  expect(toAD({ year: 1976, month: 9, day: 17 })).toEqual({ year: 1920, month: 1, day: 1 });
  expect(toAD({ year: 2000, month: 1, day: 2 })).toEqual({ year: 1943, month: 4, day: 15 });
  expect(toAD({ year: 2072, month: 6, day: 3 })).toEqual({ year: 2015, month: 9, day: 20 });
  expect(toAD({ year: 2089, month: 12, day: 30 })).toEqual({ year: 2033, month: 4, day: 13 });
  expect(()=> toAD({ year: 1949, month: 1, day: 1 })).toThrow();
  expect(()=> toAD({ year: 2000, month: 1, day: 33 })).toThrow();
  expect(()=> toAD({ year: 2100, month: 1, day: 1 })).toThrow();
});
