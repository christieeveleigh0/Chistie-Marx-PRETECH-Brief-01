// SIDEBAR MENU

'use strict';

var profile = {
    status: false,
    image: 'img/logo-menu.png'
}


Vue.component('profile', {
  template: `<div class="profile-container">
              <div class="img-container">
                <img v-bind:src="image">
              </div>
              <h2>{{ fname }} {{ sname }}</h2>
            
              <div class="profile-links">
                  <ul>
                    <li class="btn"><a href="#" class="btn btn-dark">Dashboard</a></li>
                    <li class="btn"><a href="#" class="btn btn-dark">Sales Stats</a></li>
                    <li class="btn"><a href="#" class="btn btn-dark">Stock Lists</a></li>
                    <li class="btn"><a href="#" class="btn btn-dark">Campaigns</a></li>
                  </ul>
              </div>
              <a href="dashboard-dark.html"><button class="mood-button button-dark" id="theme-change">Change Mood</button></a>
            </div>
            `,
  data: function() {
    return profile;
  }
})

var profile = new Vue({
  el: '#profile'
})