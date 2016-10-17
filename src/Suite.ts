import {DEFAULT_NUMBER_OF_CYCLES} from "./index";
import {ResultSet} from "./ResultSet";
import {Bench} from "./Bench";
import {DuplicateCaseNameException} from "./Exception/DuplicateCaseNameException";

export class Suite {

    private name: string;
    private cycles: number;
    private benchmarks = {};
    private numberOfCases: number = 0;

    public constructor(name: string, cycles: number = DEFAULT_NUMBER_OF_CYCLES) {
        this.name = name;
        this.cycles = cycles;
    }

    public add(func: Function, caseName?: string) {
        let numberOfCase = ++this.numberOfCases;
        let uniqueCaseName = caseName || "Case#" + numberOfCase.toString();
        if (this.benchmarks[uniqueCaseName]) {
            throw new DuplicateCaseNameException("Case with name '" + uniqueCaseName + "' already added to this suite. ");
        }
        this.benchmarks[uniqueCaseName] = new Bench(func, this.cycles);
    }

    public execute(fixtures: any[] = []): ResultSet {
        let resultSet = new ResultSet(this.name);
        for (let caseName in this.benchmarks) {
            let bench = this.benchmarks[caseName];
            let result = bench.execute(caseName, fixtures);
            resultSet.add(result);
        }

        return resultSet;
    }
}
