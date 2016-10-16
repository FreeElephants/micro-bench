import {ResultNotComputedException} from "./Exception/ResultNotComputedException";

export class Result {

    private startTime: number;
    private totalTime: number;
    private iterations: number;
    private iterationsPerSec: number;
    private averageIterationTime: number;
    private state = State.created;
    private caseName: string;

    public constructor(caseName: string, iterations: number) {
        this.caseName = caseName;
        this.iterations = iterations;
        this.startTime = new Date().getTime();
    }

    public compute(): void {
        this.totalTime = new Date().getTime() - this.startTime;
        this.iterationsPerSec = Math.round(this.iterations / this.totalTime * 1000);
        this.averageIterationTime = this.totalTime / this.iterations;
        this.state = State.computed
    }

    public getTime(): number {
        this.assertComputedState();
        return this.totalTime;
    }

    public getCaseName(): string {
        return this.caseName;
    }

    public getAverageIterationTime(): number {
        this.assertComputedState();
        return this.averageIterationTime;
    }

    public getIterationPerSec(): number {
        this.assertComputedState();
        return this.iterationsPerSec;
    }

    public getIterations(): number {
        return this.iterations;
    }

    private assertComputedState() {
        if (false === this.isComputed()) {
            throw new ResultNotComputedException();
        }
    }

    private isComputed(): boolean {
        return this.state === State.computed
    }
}

enum State {
    created,
    computed,
}
