// LOGIN COMPONENT

'use strict';


Vue.component('login', {
  template: `
              <form class="login-form middle">
                <input v-on:click="focus" type="text" id="username" placeholder="email@douche.co.za">
                <input v-on:click="scream" type="password" id="password" placeholder="dickknob">
                <input v-on:click="checkpass" type="submit" value="Login" class="btn success">
                <a href="#" class="forgot-link">forgot password, dumbass?</a>
              </form>
            `,
  methods: {
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'Asshole' && pass === 'Asshole') {
        alert('Username and password correct!');

        window.location = "./dashboard.html";
        
      } else {
        alert('Nien');
      }
    },
    
    focus: function() {
      var input = document.getElementById('username');
      
      input.style.borderColor = "#ff0000";
      
    },
    scream: function() {
        alert("Username & Password: Asshole");
      
    }
  }
});



var login = new Vue({
  el: '#login'
});
