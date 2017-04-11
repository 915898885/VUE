<template>
	<div>
		<div>这是组件1，接收的组件数据为->{{msg}}</div>
	</div>
</template>
<script>
	export default{
		computed:{
			msg(){
				return this.$store.state.stateA
			}
		}
	}
</script>