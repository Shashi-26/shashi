class Car{
    constructor(name){
        this.name=name;
    }
    disp(){
        console.log("Car name is "+this.name);
    }
}
const m = new Car();
m.disp();