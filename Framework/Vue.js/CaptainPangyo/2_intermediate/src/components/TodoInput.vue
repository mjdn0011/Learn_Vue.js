// Presentational Component

<template>
  <div class="inputBox shadow">
    <!-- v-model -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer">
      <i class="addBtn fa fa-plus" v-on:click="addTodo"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">
        Alert!
        <i class="closeModalBtn fa fa-times" aria-hidden="true" @click="showModal = false"></i>
      </h3>
      <div slot="body">Type Something</div>
      <span slot="footer">copy right</span>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal'

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        // this.$emit('[event name]', this.newTodoItem)
        this.$emit('addTodoItem', this.newTodoItem)

        this.clearInput()
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem = ''
    },
  },
  components: {
    Modal: Modal,
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
.closeModalBtn {
  color: #42b983;
}
</style>