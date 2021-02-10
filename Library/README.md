# Frontend Textbook: [2] Library

## 

### Axios
Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리

#### 기능  
* 브라우저 환경: XMLHttpRequest 요청 생성
* Node.js 환경: http 요청 생성
* Promise API 지원
* 요청/응답 차단(Intercept)
* 요청/응답 데이터 변환
* 취소 요청
* JSON 데이터 자동 변환
* 사이트 간 요청 위조(XSRF) 보호를 위한 클라이언트 사이드 지원

#### 설치
##### NPM
```bash
npm install axios
```
##### CDN
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

#### 사용법
##### GET 요청
```js
const axios = require('axios');

// ID로 사용자 요청
// axios.get('/user?ID=12345')
axios.fet('/user', {
  params: {
    ID: 12345,
  },
})
  // 응답(성공)
  .then(function(res) {
    console.log(res);
  })
  // 응답(실패)
  .catch(funstion(error) {
    console.log(error);
  })
  .then(function() {
    // ...
  });
```