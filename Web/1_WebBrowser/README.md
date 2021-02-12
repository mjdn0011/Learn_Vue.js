# Frontend Textbook: Web - Browswer

#### HTTP
||HTTP/1.0|HTTP/1.1|HTTP/2.0|
|-|-|-|-|
|발표 시기|1996년|1999년|2015년|
|차이|-|Connection당 하나의 요청과 응답만 처리(리소스의 동시 전송이 불가능 한 구조)|Connection당 여러 개의 요청과 응답 가능|

* **HTTP/1.1**

HTML 문서를 <u>파싱</u>한 결과물 -> `DOM`
DOM은 HTML 문서의 구조, 정보 뿐만 아니라, 
HTML 요소와 스타일 등을 변경할 수 있는 프로그래밍 인터페이스로서 DOM API를 제공
즉, 자바스크립트 코드에서 DOM API를 사용하면 이미 생성된 DOM을 동적으로 조작할 수 있음

렌더링 엔진은 HTML을 한 줄씩 순차적으로 파싱하며 DOM을 생성해 나간다.

script 태그의 src 어트리뷰트에 정의된 자바스크립트 파일을 서버에 요청하여 로드한 자바스크립트 파일이나, 
script 태그 내의 자바스크립트 코드를 파싱하기 위해
자바스크립트 엔진(ex. 크롬-V8)에 제어권을 넘김

자바스크립트 엔진은 자바스크립트 코드를 파싱하여 CPU가 이해할 수 있는 저수준 언어(low-level language)로 변환하고 실행하는 역할을 함

##### 자바스크립트 엔진의 종류
* Google Chrome / Node.js - **V8**
* Firefox - **SpiderMonkey**
* Safari - **JavaScriptCore**
모든 자바스크립트 엔진은 ECMAScript 사양을 준수함


|렌더링 엔진|자바스크립트 엔진|
|-|-|
|HTML 파싱 -> **DOM**<br/> CSS 파싱 -> **CSSOM**|JS 파싱 -> **AST**|

#### AST(Abstract Syntax Tree, 추상적 구문 트리)
자바스크립트 파싱 -> AST
AST는 토큰에 문법적 의미와 구조를 반영한 트리 구조의 자료구조.
AST를 기반으로 인터프리터가 실행할 수 있는 중간 코드(intermediate code)인 바이트 코드를 생성하여 실행함.


**자바스크립트 소스코드** 
-> *토크나이징 <sup>Tokenizer</sup>*
-> **토큰** 
-> *파싱 <sup>Parser</sup>*
-> **AST** 
-> *바이트코드 생성 <sup>Bytecode generator</sup>*
-> **바이트코드**
-> *실행 <sup>Interpreter</sup>*

##### 토크나이징 with Tokenizer
단순한 문자열인 자바스크립트 소스코드를 **어휘 분석<sup>lexical analysis</sup>** 하여
문법적 의미를 갖는 코드의 최소 단위인 **토큰**들로 분해함

##### 파싱 with Parser
토큰들의 집합을 **구문 분석 <sup>syntactic analysis</sup>** 하여 **AST**를 생성
AST는 토큰에 문법적 의미와 구조를 반영한 트리 구조의 자료구조

AST는 인터프리터나 컴파일러만이 사용하는 것은 아님
AST를 사용하면 TypeScript, Babel, Prettier 와 같은 트랜스파일러를 구현할 수 있음
[AST Explorer 웹사이트](https://astexplorer.net)에 방문하면 다양한 오픈소스 자바스크립트 파서를 사용하여 AST를 생성해 볼 수 있음.

### 리플로우 & 리페인트
자바스크립트 코드에 DOM이나 CSSOM을 변경하는 **DOM API가 사용된 경우** DOM이나 CSSOM이 변경됨
이 때 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합되고 변경된 렌더 트리를 기반으로 레이아웃과 페인트 과정을 거쳐 브라우저 화면에 다시 렌더링함 -> **리플로우, 리페인트**

#### 리플로우
레이아웃 계산을 다시 하는 것
노드 추가/삭제, 요소의 크기/위치 변경, 윈도우 리사이징 등

#### 리페인트
재결합된 렌더 트리를 기반으로 다시 페인트를 하는 것

### 자바스크립트 파싱에 의한 HTML 파싱 중단 문제
렌더링 엔진과 자바스크립트 엔진은 병렬적으로 파싱을 실행하지 않고 **직렬적으로 파싱**을 수행함
즉, 브라우저는 동기적<sup>synchronous</sup>으로, 위에서 아래 방향으로 순차적으로 HTML, CSS, JS를 파싱하고 실행함
이것은 `script` 태그의 위치에 따라 HTML 파싱이 블로킹되어 DOM 생성이 지연될 수 있음을 의미함
따라서 `script` 태그의 위치는 중요한 의미를 가짐

JS 코드에서 DOM이나 CSSOM을 변경하는 DOM API를 사용할 경우,
DOM이나 CSSOM이 이미 생성되어 있어야 함

### `script` 태그의 `async`/`defer` 어트리뷰트
자바스크립트 파싱에 의한 DOM 생성 중단 문제를 근본적으로 해결하기 위해 
HTML5부터 `script` 태그에 `async`와 `defer` 어트리뷰트 추가

`async`와 `defer` 어트리뷰트는 
`src` 어트리뷰트를 통해 외부 JS 파일을 로드하는 경우에만 사용할 수 있음
즉, src 어트리뷰트가 없는 인라인 JS에는 사용할 수 없음

```html
<script async src="extern.js"></script>
<script defer src="extern.js"></script>
```

async와 defer 어트리뷰터를 사용하면 HTML 파싱과 외부 JS 파일의 로드가 비동기적<sup>asynchronous</sup>으로 동시에 진행됨

하지만 JS의 실행 시점에 차이가 있음

##### `async` 어트리뷰트
JS의 파싱과 실행은 **JS 파일의 로드가 완료된 직후** 실행
이때 HTML 파싱이 중단

##### `defer` 어트리뷰트
JS의 파싱과 실행은 **HTML 파싱이 완료된 직후**, 즉 DOM 생성이 완료된 직후(**DOMContentLoaded** 이벤트 발생) 실행






