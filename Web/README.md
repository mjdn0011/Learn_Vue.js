# Frontend Textbook: Web

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
