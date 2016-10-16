import {AbstractUnitTestCase} from "ts-x-unit";
import {Result} from "../src/Result";
import {ResultNotComputedException} from "../src/Exception/ResultNotComputedException";

export class ResultTest extends AbstractUnitTestCase {

    public testGetTime() {
        let result = new Result("test", 100);
        let test = this;
        setTimeout(function () {
            result.compute();
            let totalTime = result.getTime();
            test.assertTrue(totalTime > 0);
        }, 1);
    }

    public testGetTimeNotComputedException() {
        let expectedException;
        let result = new Result("test", 100);
        try {
            result.getTime();
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(ResultNotComputedException, expectedException);
        }
    }

    public testGetCaseName() {
        let result = new Result("test", 100);
        this.assertSame("test", result.getCaseName());
    }

    public testGetIterationsPerSec() {
        let result = new Result("test", 1000);
        let test = this;
        setTimeout(function () {
            result.compute();
            let iterationsPerSec = result.getIterationPerSec();
            test.assertTrue(900 < iterationsPerSec && iterationsPerSec < 1100);
        }, 1000);
    }

    public testGetIterationsPerSecNotComputedException() {
        let expectedException;
        let result = new Result("test", 100);
        try {
            result.getIterationPerSec();
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(ResultNotComputedException, expectedException);
        }
    }

    public testGetAverageIterationTime() {
        let result = new Result("test", 100);
        let test = this;
        setTimeout(function () {
            result.compute();
            let getAverageIterationTime = Math.round(result.getAverageIterationTime());
            test.assertSame(1, getAverageIterationTime);
        }, 100);
    }

    public testGetAverageIterationTimeNotComputeException() {
        let expectedException;
        let result = new Result("test", 100);
        try {
            result.getAverageIterationTime();
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(ResultNotComputedException, expectedException);
        }
    }

    public testGetIterations() {
        let result = new Result("test", 1000);
        let test = this;
        setTimeout(function () {
            result.compute();
            let iterations = result.getIterations();
            test.assertSame(1000, iterations);
        }, 1);

    }
}
