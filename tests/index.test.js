const { toAD, toBS } = require('../src');

test('toBS()', ()=> {
  expect(toBS({ year: 1943, month: 4, day: 14 })).toEqual({ year: 2000, month: 1, day: 1 });
  expect(toBS({ year: 1943, month: 4, day: 15 })).toEqual({ year: 2000, month: 1, day: 2 });
  expect(toBS({ year: 2015, month: 9, day: 20 })).toEqual({ year: 2072, month: 6, day: 3 });
  expect(()=> toBS({ year: 1943, month: 4, day: 13 })).toThrow();
  expect(()=> toBS({ year: 2070, month: 1, day: 1 })).toThrow();
});

test('toAD()', ()=> {
  expect(toAD({ year: 2000, month: 1, day: 1 })).toEqual({ year: 1943, month: 4, day: 14 });
  expect(toAD({ year: 2000, month: 1, day: 2 })).toEqual({ year: 1943, month: 4, day: 15 });
  expect(toAD({ year: 2072, month: 6, day: 3 })).toEqual({ year: 2015, month: 9, day: 20 });
  expect(()=> toAD({ year: 1999, month: 1, day: 1 })).toThrow();
  expect(()=> toAD({ year: 2000, month: 1, day: 33 })).toThrow();
  expect(()=> toAD({ year: 2100, month: 1, day: 33 })).toThrow();
});
