# Convert BS dates to AD or vice versa
The name also describes my sentiment towards the whole system.

![GitHub](https://img.shields.io/github/license/subash/bs.svg)

```javascript
const { toAD, toBS } = require('@sbspk/bs');

toBS({ year: 2015, month: 9, day: 20 });
// returns { year: 2000, month: 1, day: 2 }

toAD({ year: 2072, month: 6, day: 3 });
// returns { year: 2015, month: 9, day: 20 }

```
