<template>
  <div class="add-form">
    <input type="text" v-model="task" placeholder="Add task">
    <button v-bind:disabled="nullCheck" @click="doRegist">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  computed: {
    task: {
      get () { return this.$store.getters.task },
      set (value) { this.$store.dispatch('doUpdate', value) }
    },
    nullCheck: {
      get () { return this.$store.getters.nullCheck }
    }
  },
  methods: {
    doRegist (event) {
      if (this.$store.getters.task) {
        console.log('task: %s', this.$store.getters.task)
        this.$store.dispatch('doRegist')
      } else {
        console.log('タスクが未入力です')
      }
    }
  }
}
</script>
