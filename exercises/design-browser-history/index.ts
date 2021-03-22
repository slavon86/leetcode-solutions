export class BrowserHistory {
    history: string[];
    currentStep: number;
    constructor(homepage: string) {
        this.history = [homepage];
        this.currentStep = 0;
    }

    visit(url: string): void {
        if (this.currentStep + 1 < this.history.length) {
            this.history.splice(this.currentStep + 1);
        }
        this.history.push(url);
        this.currentStep = this.currentStep + 1;
    }

    back(steps: number): string {
        if (steps >= this.currentStep + 1) {
            this.currentStep = 0;
        } else {
            this.currentStep = this.currentStep - steps;
        }
        return this.history[this.currentStep];
    }

    forward(steps: number): string {
        if (steps >= this.history.length - this.currentStep) {
            this.currentStep = this.history.length - 1;
        } else {
            this.currentStep = this.currentStep + steps;
        }
        return this.history[this.currentStep];
    }
}
