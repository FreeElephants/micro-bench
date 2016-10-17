import {AbstractUnitTestCase} from "ts-x-unit";
import {Suite} from "../src/Suite";
import {Result} from "../src/Result";
import {DuplicateCaseNameException} from "../src/Exception/DuplicateCaseNameException";

export class SuiteTest extends AbstractUnitTestCase {

    public testAddWithDefaultParams() {
        let suite = new Suite("test");
        suite.add(() => {});
        let resultSet = suite.execute();
        this.assertSame(1, resultSet.size());
        this.assertSame("test", resultSet.getSuiteName());
        let firstResult: Result = resultSet[0];
        this.assertSame("Case#1", firstResult.getCaseName());
    }

    public testAddWithSpecifiedParams() {
        let suite = new Suite("test", 100);
        let fixtures = [["value"]];
        suite.add(() => {}, "first case");
        let results = suite.execute(fixtures);
        let firstResult: Result = results[0];
        this.assertSame("first case", firstResult.getCaseName());
    }

    public testAddDuplicateCaseNameException() {
        let expectedException;
        try {
            let suite = new Suite("test");
            suite.add(() => {}, "case");
            suite.add(() => {}, "case");

        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(DuplicateCaseNameException, expectedException);
        }
    }
}
