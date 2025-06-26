import { Vehicle } from "./interfaces"
export class Car implements Vehicle {

    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {}

    start(): void {
        console.log("Car engine started");
    }
}