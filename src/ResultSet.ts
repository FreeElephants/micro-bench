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

    public getFaster(): Result {
        return this.results.reduce((result) => {
            
        });
    }
}
