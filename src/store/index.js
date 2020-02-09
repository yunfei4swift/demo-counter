import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count:1
	},
	getters: {
		getStateCount:function(state){//上面的state
			return state.count + 1
		}
	},
	mutations: {
		add(state){
			state.count = state.count + 1
		},
		reduction(state){
			state.count = state.count - 1
		}
	},
	actions: {//注册actions类似vue里的methods
		addFunc(context){//接收一个与store实例具有相同方法的属性的context对象
			context.commit("add")
		},
		reductionFunc(context){//接收一个与store实例具有相同方法的属性的context对象
			context.commit("reduction")
		}
	},
	modules: {
	}
})

export default store
