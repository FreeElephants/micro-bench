# micro-bench

[![Build Status](https://travis-ci.org/FreeElephants/micro-bench.svg?branch=master)](https://travis-ci.org/FreeElephants/micro-bench)
[![npm version](https://badge.fury.io/js/micro-bench.svg)](https://github.com/FreeElephants/micro-bench/releases)
[![Downloads](https://img.shields.io/npm/dm/micro-bench.svg)](https://npmjs.org/package/micro-bench)
[![bitHound Overall Score](https://www.bithound.io/github/FreeElephants/micro-bench/badges/score.svg)](https://www.bithound.io/github/FreeElephants/micro-bench)
[![codecov](https://codecov.io/gh/FreeElephants/micro-bench/branch/master/graph/badge.svg)](https://codecov.io/gh/FreeElephants/micro-bench)

Library for simple benchmarks in typescript projects.

## Table of Contents: 
1. [Installation](#installation)
2. [Usage](#usage)
3. [API](#api)
4. [Testing](#testing)

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

## API

### Class Bench

Suitable for make performance tests of some code with one or more data sets — fixtures. 

```
// create bench with 1 million iterations.
let bench = new Bench((value: string|number) => {
    // your code under benchmarking
}, 1000000);

// run code and get results
let results: Result[] = [];
results.push(bench.execute("Test with strings", [["foo"], ["bar"], ["baz"]]));
results.push(bench.execute("Test with numbers", [[1], [2], [3]]));

```

Every fixture is array of arrays, that will be passed as arguments to your_function.apply(). 
   
### Class Result
 
- `.getCaseName(): string` - return name of case specified on `Bench.execute()`. 
- `.getAverageIterationTime(): number` - return average time of iteration in milliseconds. 
- `.getIterationPerSec(): number` - return number of iterations in second. 
- `.getTime(): number` - return time spent to this test in milliseconds. 

### Class Suite

Suitable for make performance tests of different versions of code and compaite results. 
 
- `.add(func: Function, caseName?: string)` — add new benchmark unit to suite with given tested code and name (or generated). Throws DuplicateCaseNameException.  
- `.execute(fixtures: any[] = []): ResultSet` — run all added benchmarks and return set of results. 
 
### Class ResultSet

Collection of `Result` instances for every Bench in Suite. 

- `.getFastest(): Result` - return the fastest bench result.  
- `.getSlowest(): Result` - return the slowest bench result.    

### Errors (Exceptions) 

Super type of all throwed in library errors `BaseException`. 
Exported exceptions: 
- `DuplicateCaseNameException` - throws on duplicate case name in Suite.add().  

## Testing

TSxUnit uses.

```
# only tests
npm test

# tests with coverage computing
npm run coverage
``` 

