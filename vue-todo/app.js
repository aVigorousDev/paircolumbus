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
  },
  computed: {
    available_tasks() {
      return this.tasks.filter(task => !task.is_deleted);
    },
  },
});
