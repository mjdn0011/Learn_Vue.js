// Container Component

<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:[event(child component)]="[function(parent component)]" -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- v-bind:[props(child component)]="[props(parent component)]"-->
    <TodoList v-bind:propsData="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = { completed: false, item: todoItem }

      // "localStorage.setItem([key], [value])"
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    toggleOneItem(todoItem, index) {
      // todoItem.completed = !todoItem.completed
      this.todoItems[index].completed = !this.todoItems[index].completed

      // Update item in localStorage  => 1. remove / 2. set
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    removeOneItem(todoItem, index) {
      // "localStorage.removeItem([key])"
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1);
    },
    clearAllItems() {
      localStorage.clear()
      this.todoItems = []
    },
  },
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
