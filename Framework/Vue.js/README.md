# Vue.js

### Extensions for Vue
- Vue.js Devtools (Chrome)

## Vuex
* 무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
* React의 `Flux 패턴`에서 기인


* 복잡한 애플리케이션 컴포넌트들을 효율적으로 관리
* Vuex 라이브러리의 주요 속성 - `state(data)`, `getters(computed)`, `mutations(method)`, `actions(async method)`
* Helper 기능
* Vuex 프로젝트를 구조화하는 방법과 모듈 구조화 방법 소개
하나의 스토어보다는 여러 개의 스토어

MVC 패턴 -> Flux 패턴 -> Vuex

### Flux 패턴 ?
* MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴

##### MVC 패턴
Controller -> Model <-> View
* 기능 추가 및 변경에 따라 생기는 문제점을 예측할 수가 없음. (예. 페이스북 채팅 화면)
* 앱이 복잡해지면서 생기는 업데이트 루프

##### Flux 패턴
`Unidirectional data flow`
Action -> Dispatcher -> Model -> View -> 
(other Action -> Dispatcher -> ~)
1. Action: 화면에서 발생하는 이벤트 또는 사용자의 입력
2. Dispatcher: 데이터를 변경하는 방법, 메서드
3. Model: 화면에 표시할 데이터
4. View: 사용자에게 비춰지는 화면

### Vuex가 필요한 이유?
* 복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트 간에 데이터 전달이 어려워짐

이벤트 버스 <-> Vuex
#### 이벤트 버스로 해결?
* 어디서 이벤트를 보냇는지 혹은 어디서 이벤트를 받았는지 알기 어려움
```js
// Login.vue
eventBus.$emit('fetch', loginInfo)

// List.vue
eventBus.$on('display', data => this.displayOnScreen(data));

// Chart.vue
eventBus.$emit('refreshData', chartData);
```
컴포넌트 간 데이터 전달이 명시적이지 않음

Vuex로 해결할 수 있는 문제
1. MVC 패턴에서 발생하는 구조적 오류
2. 컴포넌트 간 데이터 전달 명시
3. 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제

#### Vuex 컨셉
* State: 컴포넌트 간에 공유하는 데이터 - `data()` property
* View: 데이터를 표시하는 화면 - `template`
* Action: 사용자의 입력에 따라 데이터를 변경하는 - `methods` property

Actions -> State -> View

단방향 데이터 흐름 처리

#### Vuex 구조
컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태
View Component -> Action -> Mutations -> State

##### Vuex 설치
```bash
npm i vuex
```

##### Vuex 사용 시작
* vuex 파일 생성
`/src/store/store.js`

```js
/* store.js */
import Vue from 'vue'
import Vuex from 'vuex'

// use() - Vue 플러그인, Vue를 사용하는 모든 영역에 특정 기능을 추가할 때
Vue.use(Vuex);

export const store = new Vuex.Store({
  // ...
});

```js
/*  */
```

* `main.js`에 Vuex사용하도록 등록

#### Vuex 라이브러리의 주요 속성 [S.G.M.A]

###### **state**
여러 컴포넌트에 공유되는 데이터(상태) - `data`
```js
// Vue
data: {
  message: 'Hello Vue.js!',
}

// Vuex
state: { 
  message: 'Hello Vue.js!',
}
```
```html
<!-- Vue -->
<p>{{ message }}</p>

<!-- Vuex -->
<p>{{ this.$store.state.message }}</p>
```

##### **getters**
state 값을 접근하는 속성이자,
`computed()`처럼 미리 연산된 값을 접근하는 속성
```js
// store.js
state: {
  num: 10,
},
getters: {
  getNumber(state) {
    return state.num;
  },
  doubleNumber(state) {
    return state.num * 2;
  }
}
```
```html
<p>{{ this.$store.getters.getNumber }}</p> 
<p>{{ this.$store.getters.doubleNumber }}</p>
```

* **mutations**: state 값을 변경하는 이벤트 로직(메서드) - `method`
* **actions**: 비동기 처리 로직을 선언하는 메서드 - `async method`