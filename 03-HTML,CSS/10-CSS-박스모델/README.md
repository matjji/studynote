# 박스모델

## #01. CSS 관점에서의 HTML태그 분류

| 분류 | 설명 | 예시 |
|---|---|---|
| Block Level 요소 | 문단을 구성하는 형태. 같은 태그를 연속해서 사용할 경우 문단을 구성하므로 줄바꿈되어 표시된다. | `<p>`, `<div>`, `<h1>~<h6>`, `<ol>`, `<ul>`, `<li>` 등 |
| Inline Level 요소 | 문장을 구성하는 형태. 같은 태그를 연속해서 사용할 경우 문장을 구성하기 때문에 줄 바꿈 없이 표시된다. | `<span>`, `<font>`, `<strong>`, `<b>`, `<u>`, `<i>`, `<address>` 등 |
| 대체요소 | 이미지, 입력요소 등 텍스트가 아닌 다른 형태로 표시되는 요소로서 Inline Level에 속한다. | `<img>`,`<input>`,`<select>`,`<textarea>` 등 |

박스라 함은 **block-level요소**를 의미하는 것으로 가장 대표적인 요소에는 `<div>`가 있다.

CSS의 박스모델은 박스의 크기를 구성하는데 영향을 주는 속성들을 말한다.


## #02. 박스의 크기를 구성하는 기본 속성

| 속성 | 설명 | 값 |
|------|------|----|
| width | 내용 영역의 가로 폭 | px단위, %단위 |
| height | 내용 영역의 세로 높이 | px단위, %단위 |
| border | 박스의 테두리 | 굵기  종류  색상 |
| padding | 테두리와 내용영역 사이의 여백 | 여백 사이즈에 대한 px단위 |

### 1) 가로, 세로 크기

박스의 넓이 `width`는 특별히 명시하지 않을 경우 자신이 속한 부모를 가득 채운다.

박스의 높이 `height`는 특별히 명시하지 않을 경우 자신이 포함하고 있는 내용만큼만 형성된다. 내용이 없다면 높이도 0이다.

### 2) border 속성

```css
border: 굵기 종류 색상;
```

#### 종류
- none : 투명
- solid : 직선
- dotted : 점선
- dashed : 끊긴선

#### border값의 세분화

| 구분 | 종류 | 값 |
|---|---|---|
| 위치에 따라 | `border-top`, `border-left`, `border-bottom`, `border-right` | `굵기 종류 색상`을 공백으로 구분 |
| 속성에 따라 | `border-width`, `border-color`, `border-style` | `굵기 종류 색상`중 하나 |

### 3) padding

#### 기술하는 값에 따른 구분

| 구분 | 설명 | 예시 |
|---|---|---|
| 하나의 값 | 상,하/좌,우 모두 같은 값이 부여된다. | `padding: 10px;` |
| 두 개의 값 | 첫 번째 값은 상,하를 의미. 두 번째 값은 좌,우를 의미한다. | `padding: 10px 20px;` |
| 네 개의 값 | 상단부터 시계방향으로 회전하면서 부여 | `padding: 10px 20px 30px 40px;` |

#### 위치에 따른 속성 구분

아래의 속성들은 단 하나의 값만을 갖는다.

| 속성 | 설명 |
|---|---|
| padding-left | 왼쪽 여백 |
| padding-right | 오른쪽 여백 |
| padding-top | 상단 여백 |
| padding-bottom | 하단 여백 |

## #03. 박스의 크기 구성

### 1) 박스의 크기는 관련 속성들의 총합으로 이루어 진다.

테두리와 여백은 내용영역(width,height)의 크기 바깥으로 형성된다.

| 구분 | 구성 |
|---|---|
| 가로넓이 | border-left + padding-left + width + padding-right + border-right |
| 세로높이 | border-top + padding-top + height + padding-bottom + border-bottom |


### 2) 중첩 관계에서의 박스 크기

1. 자식요소의 크기 총 합은 부모 요소의 width, height를 벗어날 수 없다.
1. 자식요소의 width, height를 %로 부여할 경우 부모의 width, height를 기준으로 한다.


