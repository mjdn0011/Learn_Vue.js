<template>
  <div>
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"
    />  
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  /* 
    컴포넌트 재사용을 위해
    여러 개의 컴포넌트에서
    동일한 data를 참조하지 않기 위해
  */
  // data: {
  //   str: 'Header',
  // },
  data: function() {
    return {
      str: 'Header',
    }
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = 'HI'
    },
  },
}
</script>

<style>

</style>