import {AbstractUnitTestCase} from "ts-x-unit";
import {ResultSet} from "../src/ResultSet";
import {Result} from "../src/Result";

export class ResultSetTest extends AbstractUnitTestCase {

    public testGetFastestAndSlowest() {
        let resultSet = new ResultSet("set");
        let resultFast = this.getMockBuilder(Result).stubMethodWithValue("getAverageIterationTime", 100).getMock();
        let resultMiddle = this.getMockBuilder(Result).stubMethodWithValue("getAverageIterationTime", 200).getMock();
        let resultMiddle2 = this.getMockBuilder(Result).stubMethodWithValue("getAverageIterationTime", 250).getMock();
        let resultSlow = this.getMockBuilder(Result).stubMethodWithValue("getAverageIterationTime", 300).getMock();

        // shuffle stubs for best coverage
        resultSet.add(resultMiddle);
        resultSet.add(resultMiddle2);
        resultSet.add(resultFast);
        resultSet.add(resultSlow);

        this.assertSame(resultFast, resultSet.getFastest());
        this.assertSame(resultSlow, resultSet.getSlowest());
    }
}
