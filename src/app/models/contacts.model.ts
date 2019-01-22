export class Contact {

    constructor(public name: string, public location: string, public age: number) { }



    increment() {
        this.age = this.age + 1;
    }
    decrement() {
        this.age = this.age - 1;
    }

    change() {
        this.name = this.name + "a";
    }
}