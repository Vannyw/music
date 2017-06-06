// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './assets/css/base.css'
import Resource from 'vue-resource'

Vue.use(Resource)
Vue.use(Vuex);

Vue.config.productionTip = false


const store = new Vuex.Store({
	state: {
		songList: [],
		json1:"",
		inde:"",
		boo:true,
		play:"",
	},
	mutations: {
		addSong: (state, item) =>{
			state.songList.push({title: item.songname, author: item.singername, albumpic: item.albumpic_small, inderlink: item.url, albumpicbig: item.albumpic_small, down:item.downUrl});
			state.inde = item.songid;
			state.boo = true;
		},
		toggleboo: function() {
			
		}
		
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  methods:{
  },
  template: '<App/>',
  components: { App }
})
