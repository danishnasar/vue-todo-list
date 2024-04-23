const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: { done: false }
        }
    },
    methods: {
        addTodo: function () {
            if (this.newTodo.text && this.newTodo.text.trim()) {
              this.todos.push(this.newTodo);
              this.newTodo = { done: false };
              this.updateStorage();
            } else {
                alert("Please enter a task!");
            }
        },
        updateStorage() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        }
    },
    created() {
        const data = localStorage.getItem('todos');
        if (data) this.todos = JSON.parse(data);
    }
};

Vue.createApp(todosApp).mount('#app');
