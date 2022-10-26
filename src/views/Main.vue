<template>
  <div class="home">
    <my-title>ToDo List</my-title>
    <my-card>
      <my-input 
      @newTask="addNewTask"/>

      <post-list
      :tasks="$tasksFiltered"
      @remove="removeItem"
      @checkIt="checkIt">
      
      </post-list>

      <my-footer 
      :total="$tasks.length"
      />
    </my-card>
  </div>
</template>

<script>
import { PostList } from "@/components"
import { MyTitle, MyCard, MyInput, MyFooter, MyTabs } from "@/components/UI"
import { mapActions, mapGetters, mapState, mapMutations} from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      value: true,
    }
  },
  components: {
    MyTitle,
    MyCard,
    MyInput,
    MyFooter,
    PostList, 
    MyTabs
  },
  computed: {
    ...mapState("task", {
      $tasks: "tasks",
      $filter: "filter",
    }),
    ...mapGetters({
      // newId: "task/newId",
      $tasksFiltered: "task/tasksFiltered"
    })
  },
  
  methods: {
    ...mapMutations({
      setTasks: "task/setTasks",
      filterChanged: "task/filterChanged",
      setItemsFromLocalstorage: "task/setItemsFromLocalstorage"
    }),
    ...mapActions({
      addNewTask: "task/addNewTask",
      removeItem: "task/removeItem",
      checkIt: "task/checkIt",
      updateLocalStorage: "task/updateLocalStorage"
    })
  },
  mounted() {
    if(window.localStorage.getItem('tasks')){
      this.setItemsFromLocalstorage()
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
