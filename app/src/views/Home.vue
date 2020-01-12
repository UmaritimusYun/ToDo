<template>
  <div class="home">
    <h1>ToDoリスト</h1>
    <AddForm/>
    <ShowTasks/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddForm from '@/components/AddForm.vue'
import ShowTasks from '@/components/ShowTasks.vue'

export default {
  name: 'home',
  components: {
    AddForm,
    ShowTasks
  },
  computd: {
    task () { return this.$store.getters.task }
  }
}
</script>
