import {AbstractUnitTestCase} from "ts-x-unit";
import {Bench} from "../src/Bench";

export class BenchTest extends AbstractUnitTestCase {
    public testExecute() {
        let testedFuncCalledTimes = 0;
        let bench = new Bench(() => {
            testedFuncCalledTimes++;
        });
        let result = bench.execute("test");
        this.assertSame("test", result.getCaseName());
        this.assertSame(1000, result.getIterations());
        this.assertSame(1000, testedFuncCalledTimes);
    }

    public testExecuteWithFixtures() {
        let testedFuncCalledTimes = 0;
        let sideEffectVar = 0;
        let fixtures = [1, 2, 3];
        let expectedCycles = 100;
        let funcUnderTest = (value: number) => {
            sideEffectVar = value
            testedFuncCalledTimes++;
        };
        let bench = new Bench(funcUnderTest, expectedCycles);
        let result = bench.execute("test", fixtures);
        this.assertSame("test", result.getCaseName(), "Expect correct case name in result. ");
        this.assertSame(expectedCycles, result.getIterations(), "Expect correct number of iterations. ");
        this.assertSame(expectedCycles, testedFuncCalledTimes, "Expect that tested function called correct times.");
        this.assertContains(sideEffectVar, fixtures, "Expect tested function do something.");
    }
}
