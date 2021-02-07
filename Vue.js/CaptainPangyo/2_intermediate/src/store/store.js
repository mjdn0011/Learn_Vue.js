import Vue from 'vue'
import Vuex from 'vuex'

// use - Vue 플러그인 , Vue를 사용하는 모든 영역에 특정 기능을 추가할 때
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    headerText: 'TODO it!',
  },
});