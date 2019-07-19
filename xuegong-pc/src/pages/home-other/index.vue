<template>
  <div class="body">
  	<div class="content">
  	  <List/>
      <router-view/>	
  	</div>
  </div>
</template>

<script>
import List from './components/List'

export default {
  name: 'index',
  components: {List},
  mounted() {
  	this.$router.push('/HelpGuide')
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  background: #eee;
}
.content {
  width: 81%;
  padding-top: 41px;
  margin: auto;
  display: flex;
}
</style>