<template>
	<div>
		<div>
			<span>这是组件2，把数据传递给组件1</span>
			<input type="text" v-model="sendMsg">
			<button @click="send">发送</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				sendMsg:''
			}
		},
		methods:{
			send(){
				this.$store.commit('send',this.sendMsg)
			}
		}
	}
</script>