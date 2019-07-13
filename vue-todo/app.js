var app = new Vue({
  el: '#app',

  data: {
    tasks: [
      {
        name: 'Take out the trash',
        is_completed: false,
        is_deleted: false,
      },
    ],
    new_task: ''
  },
  computed: {
    available_tasks() {
      return this.tasks.filter(task => !task.is_deleted);
    },   
  },
  methods: {
    add_task() {
      var task  =  {
        is_completed : false,
        is_deleted: false,
        name: this.new_task
      }
      this.tasks.push(task);
      this.new_task = '';
    }
  }
});
