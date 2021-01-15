<template>
  <div class="inputBox shadow">
    <!-- v-model -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer">
      <i class="addBtn fa fa-plus" v-on:click="addTodo"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "",
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        // this.$emit('[event name]', this.newTodoItem)
        this.$emit('addTodoItem', this.newTodoItem)

        this.clearInput()
      }
    },
    clearInput: function() {
      this.newTodoItem = ''
    },
  },
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>