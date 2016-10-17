import {Result} from "./Result";
import {DEFAULT_NUMBER_OF_CYCLES} from "./index";

export class Bench {

    private func: Function;
    private cycles: number;

    public constructor(func: Function, cycles: number = DEFAULT_NUMBER_OF_CYCLES) {
        this.func = func;
        this.cycles = cycles;
    }

    public execute(caseName: string, fixtures: any[] = []): Result {
        let result = new Result(caseName, this.cycles);
        if (fixtures.length > 0) {
            this.runFuncWithFixtures(fixtures);
        } else {
            this.runFunc();
        }
        result.compute();
        return result;
    }

    private runFunc(): void {
        for (let i = 0; i < this.cycles; i++) {
            this.func.apply(null);
        }
    }

    private runFuncWithFixtures(fixtures: any[]): void {
        let i = 0;
        while (i < this.cycles) {
            for (let args of fixtures) {
                this.func.apply(null, args);
                i++;
                if (i === this.cycles) {
                    break;
                }
            }
        }
    }
}