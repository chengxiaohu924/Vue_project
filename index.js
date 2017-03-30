//可重复利用的组件
Vue.component('comment', {
    props: ['comment'],
    template: '<li>{{ comment.content }}</li>'
})

var app = new Vue ({
    el: '#app',
    methods: {
    logMessage(event) {
            this.counter += 1
        },
    process (event){
        console.log(event)
    }
    },
    data: {
        counter: 0,
        message: 'feichanghao',
        title: 'nihao',
        welcome: true
    }
})

var vm = new Vue ({
    el: '#app1',
    data: {
        comments: [
            { content: 'nice~'},
            { content: 'a~'},
            { content: 'addce~'}
        ]
    }
})

var dataSource = {
    message: 'keyikanjian',
    seen: true
}

var app3 = new Vue ({
    el: '#app-3',
    data: dataSource,
})


Vue.component('todo-item', {
  template: `
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">X</button>
    </li>
  `,
  props: ['title']
})
new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      'Do the dishes',
      'Take out the trash',
      'Mow the lawn'
    ]
  },
  methods: {
    addNewTodo: function () {
      this.newTodoText = ''
      this.todos.push(this.newTodoText)
      
    }
  }
})

var select = new Vue ({
    el: '#select',
    data: {
        selected: 'A',
        options: [
            {text:'A', value:'1'},
            {text:'B', value:'2'},
            {text:'C', value:'3'}
        ]
    }
})