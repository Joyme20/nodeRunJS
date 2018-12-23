//混合类
class Car{
    constructor(){
        console.log("this is Car")
    }
}
class car1 extends Car{
    constructor(){
        super()
        console.log("this is car1 extend Car")
    }
}