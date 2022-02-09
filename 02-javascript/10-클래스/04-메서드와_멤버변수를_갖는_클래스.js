class HelloWorld {
    constructor(){
        this.message = null
    }
    sayHello() {
        console.log(this.message);
    }

    setEng() {
        this.message = "Hello Javascript"
    }

    setKor() {
        this.message = "안녕하세요. 자바스크립트."
    }
}

const hello = new HelloWorld()

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();