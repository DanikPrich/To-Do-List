<template>
  <div class="home">
    <my-title>ToDo List</my-title>

    <my-card>
      <my-input 
      @newTask="addNewTask"/>

      <post-list 
      :tasks="tasksFiltered"
      @remove="removeItem"
      @checkIt="checkIt">
      
      </post-list>

      <!-- <my-footer 
      :total="$tasks.length"
      @FilterChanged="FilterChanged"
      
      /> -->

      <my-footer 
      :total="$tasks.length"
      />
    </my-card>
  </div>
</template>

<script>
import MyTitle from '@/components/UI/MyTitle'
import MyCard from '@/components/UI/MyCard.vue'
import MyInput from '@/components/UI/MyInput.vue'
import MyFooter from '@/components/UI/MyFooter.vue'
import PostList from "@/components/postList.vue";
import { mapActions, mapGetters, mapState, mapMutations} from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      value: true,
      /* tasks: [
        {
          id: 2, 
          text: "Do homework",
          complete: false
        },
        {
          id: 1, 
          text: "Kiss Nastiu",
          complete: false
        },
        {
          id: 0, 
          text: "Buy milk",
          complete: false
        },
      ],
      filter: 0 */
    }
  },
  components: {
    MyTitle,
    MyCard,
    MyInput,
    MyFooter,
    PostList
  },
  computed: {
    ...mapState("task", {
      $tasks: "tasks",
      $filter: "filter",
    }),
    ...mapGetters({
      newId: "task/newId",
      tasksFiltered: "task/tasksFiltered"
    })
    /* newId() {
      let max = 0
      this.tasks.forEach(e => {
        if(e.id > max) max = e.id 
      })
      return max + 1;
    },
    tasksFiltered() {
      switch(this.filter) {

        case 0: return this.tasks
        break;

        case 1: return this.tasks.filter(task => task.complete == false)
        break;
        
        case 2: return this.tasks.filter(task => task.complete == true)
        break;
        
      }
    } */
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
    /* addNewTask(task) {
      this.tasks = [{id: this.newId, text: task, complete: false}, ...this.tasks,]
    },
    FilterChanged(e) {
      this.filter = e
    },
    removeItem(e) {
      var newArray = this.tasks.filter((task) => { return task.id !== e })
      this.tasks = newArray
    },
    checkIt(e) {
      let index = this.tasks.findIndex((item) => e == item.id);
      this.tasks[index].complete ? this.tasks[index].complete = false : this.tasks[index].complete = true;
    } */
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
