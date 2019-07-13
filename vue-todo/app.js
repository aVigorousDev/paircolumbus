var app = new Vue({
  el: '#app',

  data: {
    tasks: [],
    new_task: {
      name: '',
      is_completed: false,
    },
  },
  computed: {
    available_tasks() {
      return this.tasks.filter(task => !task.is_deleted);
    },
  },
  methods: {
    add_task() {
      var task  =  {
        name: this.new_task.name,
        is_completed : this.new_task.is_completed,
        is_deleted: false,
      };

      this.tasks.push(task);

      this.new_task.name = '';
      this.new_task.is_completed = false;
    }
  }
});
