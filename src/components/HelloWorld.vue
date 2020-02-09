<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>我是从页面上直接获取的：{{ this.$store.state.count}}</h2>
	<h2>我是从getters获取的计算后的值：{{ this.$store.getters.getStateCount}}</h2>
	
	<p>count的值：{{this.$store.state.count}}</p>
	<button @click="addFunc">+</button>
	<button @click="reductionFunc">-</button>
	
	<div style="border: 1px solid red;margin-top: 50px;">{{count1}}</div>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:mapState({
	  count1:state=>state.count
  }),
  // computed:{
	 //  mapState({
		//   count1:state=>state.count
	 //  })
  // },
  methods:{
	addFunc(){
		this.$store.dispatch("addFunc");
		// this.$store.commit("add");
	},
	reductionFunc(){
		this.$store.dispatch("reductionFunc");
		// this.$store.commit("reduction");
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
