<template>
  <div class="view-task">
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="task">Tasks</th>
          <th class="state">Status</th>
          <th class="button">-</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in taskList" v-bind:key="item.id">
          <th>{{ item.id }}</th>
          <td>{{ item.task }}</td>
          <td class="state">
            <toggle-button :value=item.status width="66" :labels="{checked: 'Done', unchecked: 'Done'}"></toggle-button>
          </td>
          <td class="button">
            <button @click="doRemove(item.id)">Delete</button>
            <button>Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button'

export default {
  name: 'ShowTasks',
  components: {
    ToggleButton
  },
  computed: {
    taskList: {
      get () { return this.$store.getters.taskList }
    }
  },
  methods: {
    doRemove (id) {
      console.log(id)
      this.$store.dispatch('doRemove', id)
    }
  }
}
</script>

<style scoped>

body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}

table {
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  width: 650px;
  table-layout: fixed;
  color: #000;
}

table tr {
  background-color: #fff;
  padding: .35em;
  border-bottom: 1px solid #bbb;
}
table thead{
  border-bottom: 5px solid #ff9900;
}
table tr:last-child{
   border-bottom: none
}
table th,
table td {
  padding: 1em 10px 1em 1em;
  border-right: 1px solid #bbb;
}
table th:last-child,
table td:last-child{
    border: none;
}
tbody th {
    color: #ff9901;
}
.txt{
   text-align: left;
   font-size: .85em;
}
.price{
   text-align: right;
}
@media screen and (max-width: 600px) {
  table {
    border: 0;
    width:100%
  }
  table th{
    display: block;
    border-right: none;
    border-bottom: 5px solid #ff9901;
    padding-bottom: .6em;
    margin-bottom: .6em;

  }
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  table tr {
    display: block;
    margin-bottom: 2em;
  }
  table td {
    border-bottom: 1px solid #bbb;
    display: block;
    font-size: .8em;
    text-align: right;
    position: relative;
    padding: .625em .625em .625em 4em;
    border-right: none;
  }
  table td::before {
    content: attr(data-label);
    font-weight: bold;
    position: absolute;
    left: 10px;
  }
  table td:last-child {
    border-bottom: 0;
  }
}
</style>
