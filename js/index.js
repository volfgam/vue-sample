var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    methods: {
        getMessage: function () {
            var self = this;
            self.message = "Hello vue!"
        }
    }
  })