# micro-bench

[![Build Status](https://travis-ci.org/FreeElephants/micro-bench.svg?branch=master)](https://travis-ci.org/FreeElephants/micro-bench)
[![npm version](https://badge.fury.io/js/micro-bench.svg)](https://github.com/FreeElephants/micro-bench/releases)
[![Downloads](https://img.shields.io/npm/dm/micro-bench.svg)](https://npmjs.org/package/micro-bench)
[![bitHound Overall Score](https://www.bithound.io/github/FreeElephants/micro-bench/badges/score.svg)](https://www.bithound.io/github/FreeElephants/micro-bench)
[![codecov](https://codecov.io/gh/FreeElephants/micro-bench/branch/master/graph/badge.svg)](https://codecov.io/gh/FreeElephants/micro-bench)

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