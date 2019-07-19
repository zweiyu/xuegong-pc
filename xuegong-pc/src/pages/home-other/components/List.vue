<template>
  <div class="list">
  	<div 
  	  v-for="(item,index) in list"
  	  :key="index"
  	  :style="{'border-bottom': index === 4 ? '1px solid #DFDFDF' : ''}"
  	  :class="index===currentIndex ? 'list-item-change' : 'list-item'"
  	  @click="change(index)"
  	 >
  	 	{{item}}
  	 </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
  	return {
  	  list: ['系统公告','帮助指南','联系方式','系统简介','数据统计'],
  	  currentIndex: '',
  	}
  },
  methods: {
    change(index) {
      if(index === 0) {
      	this.currentIndex = index
      	this.$router.push('/')
      } else if (index === 1) {
      	this.currentIndex = index
      	this.$router.push('/HelpGuide')
      } else if (index === 2) {
      	this.currentIndex = index
      	this.$router.push('/Contact')
      } else if (index === 3) {
      	this.currentIndex = index
      	this.$router.push('/Introduction')
      } else if (index === 4) {
      	this.currentIndex = index
      	this.$router.push('')
      }
    },
  },
}
</script>

<style lang="less" scoped>
.list {
  width: 248px;
  &-item {
  	width: 100%;
  	height: 58px;
  	background: #fff;
  	text-align: center;
  	line-height: 58px;
  	font-size: 19px;
  	color: #565656;
  	border-top: 1px solid #DFDFDF;
  	cursor: pointer;
  }
}
.list-item-change {
  width: 100%;
  height: 58px;
  background: #26988F;
  text-align: center;
  line-height: 58px;
  font-size: 19px;
  color: #fff;
  border-top: 1px solid #DFDFDF;
}
</style>