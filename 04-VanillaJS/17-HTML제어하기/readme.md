# 요소제어

## HTML 제어

### HTML요소를 객체로 생성하기
```javascript
var mytag = document.getElementById("id속성값");
```

### 획득한 객체의 내부에 대한 내용 접근
```javascript
// 내용 적용하기
mytag.innerHTML = "... 적용할 내용 ...";

// 적용된 내용 조회하기
var content = mytag.innerHTML;
```

### HTML 속성 제어
```javascript
mytag.hasAttribute(name);        //— 속성의 존재 확인.
mytag.getAttribute(name);        //— 속성값을 가져옴.
mytag.setAttribute(name, value); //— 속성값을 변경함.
mytag.removeAttribute(name);     //— 속성값을 제거함.
```

## CSS 제어

### 획득한 객체 CSS속성 접근
```javascript
// 내용 적용하기
mytag.style.css관련_프로퍼티 = "값";

// 적용된 내용 조회하기
var css = mytag.style.css관련_프로퍼티
```

> css관련_프로퍼티의 이름 규칙은 css에서 `-`로 표시되던 부분이 없어지고 대문자가 사용됨<br/>
> ex) [css] background-color  --> [js] backgroundColor


### 획득한 객체의 CSS클래스 접근
```javascript
mytag.classList.add(name);      // 클래스 추가 
mytag.classList.remove(name);   // 클래스 제거 
mytag.classList.toggle(name);   // 클래스 on/off
mytag.classList.contains(name); // 해당 클래스가 존재하는지 여부를 boolean으로 반환
```