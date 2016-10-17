import {Result} from "./Result";

export class ResultSet {

    private results: Result[] = [];
    private suiteName;

    public constructor(suiteName: string) {
        this.suiteName = suiteName;
    }

    public add(result: Result) {
        this[this.results.length] = result;
        this.results.push(result);
    }

    public size(): number {
        return this.results.length;
    }

    public getSuiteName(): string {
        return this.suiteName;
    }

    public getFastest(): Result {
        return this.results.reduce((previousValue: Result, currentValue: Result) => {
            let currentValueIsFaster = previousValue.getAverageIterationTime() > currentValue.getAverageIterationTime();
            if (currentValueIsFaster) {
                return currentValue;
            } else {
                return previousValue;
            }
        });
    }

    public getSlowest(): Result {
        return this.results.reduce((previousValue: Result, currentValue: Result) => {
            let currentValueIsLowest = previousValue.getAverageIterationTime() < currentValue.getAverageIterationTime();
            return currentValueIsLowest ? currentValue : previousValue;
        });
    }
}
