class stu{
    disp(){
        console.log("Hi from parent class");
    }
}
class stu1 extends stu{
    disp1(){
        console.log("Hi from child class");
    }
}
let s=new stu1();
s.disp();
s.disp1();