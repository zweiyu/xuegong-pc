<template>
  <div class="help">
  	<div class="help-title">帮助指南</div>
  	<div class="help-con">
  	  <div 
  	    class="help-con-item"
  	    v-for="(item,index) in help"
  	    :key="index"
  	    :class="{'help-con-change':index % 2 != 1}"
  	   >
  	     <div class="help-con-item-left">{{item.con}}</div>
  	     <div class="help-con-item-right">{{item.time}}</div>
  	   </div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'help-guide',
  data () {
  	return {
  	  help: [
  	    {
  	      con: '账号密码重设指引',
  	      time: '2015/10/15 , 45809 hits'
  	    },
  	    {
  	    	con: '系统更新日志',
  	    	time: '2013/1/14 , 19551 hits'
  	    },
  	    {
  	    	con: '奖助表格打印指引',
  	    	time: '2012/3/5 , 7130 hits'
  	    },
  	    {
  	      con: '账号密码重设指引',
  	      time: '2015/10/15 , 45809 hits'
  	    },
  	    {
  	    	con: '系统更新日志',
  	    	time: '2013/1/14 , 19551 hits'
  	    },
  	  ],
  	}
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.help {
  width: 83%;
  background: #fff;
  margin-left: 29px;
  padding-bottom: 322px;
  &-title {
  	width: 93.5%;
  	height: 71px;
  	border-bottom: 4px solid #44A79F;
  	margin: auto;
  	line-height: 71px;
  	color: #44A79F;
  	font-size: 23px;
  	font-weight:bold;
  	margin-top: 8px;
  }
  &-con {
  	width: 93.5%;
  	margin: 8px auto;
  	&-item {
  	  width: 100%;
  	  height: 58px;
  	  background: #fff;
  	  display: flex;
  	  padding: 21px 0 20px 25px; 
  	  cursor: pointer;
  	  &-left {
  	  	color: #0079AC;
  	  	font-size: 17px;
  	  }
  	  &-right {
  	  	font-size: 17px;
  	  	color: #666666;
  	  	margin-left: 36px;
  	  }
  	}
  	&-change {
  	  width: 100%;
  	  height: 58px;
  	  background: #F7FCFF;
  	  display: flex;
  	  padding: 21px 0 20px 25px;
  	}
  }
}
</style>