# Javascript

### 1. 메시지
메시지 그룹핑하기:
``` javascript
console.group("MyMessage1"); //그룹핑 시작
    console.log("메시지"); //콘솔에 메시지 뛰우기
console.groupEnd() //그룹핑 닫기
console.group("Mymessage2");
    console.log("안녕하세요4");
    console.group("Mymessage2-1") //하위 그룹핑 시작
        console.log("안녕하세요5");
        console.log("안녕하세요6");
    console.groupEnd();//하위 그룹핑 닫기
console.groupEnd();
```