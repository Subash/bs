## Installation

```shell
npm install @sbspk/bs
```

## Usage

```javascript
const { toCommonEra, toBikramSambat } = require('@sbspk/bs');

toBikramSambat({ year: 2015, month: 9, day: 20 });
// returns { year: 2072, month: 6, day: 3 }

toCommonEra({ year: 2072, month: 6, day: 3 });
// returns { year: 2015, month: 9, day: 20 }
```
