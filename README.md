# micro-bench

Library for simple benchmarks in typescript projects.

## Installation:

```
npm install micro-bench --save-dev
```

## Usage

```
import {Bench} from "micro-bench";

// create bench with 1 million iterations.
let bench = new Bench(() => {
    // your code under benchmarking
}, 1000000);

// run code and get results
let result = bench.execute("My benchmark");

console.log(result);
```

## Testing

TSxUnit uses.

```
npm test
```