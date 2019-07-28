<template>
  <div class="jour">
  	<div class="jour-title">
  	  我的日志
  	</div>
  	<div class="jour-notice">(仅显示本人最近50条成功登录及操作)</div>
  	<div class="jour-table">
  	  <div class="jour-table-tr">
  	  	<div class="jour-table-tr-th">时间</div>
  	  	<div class="jour-table-tr-th">IP来源</div>
  	  	<div class="jour-table-tr-th2">操作</div>
  	  	<div class="jour-table-tr-th3">页面</div>
  	  </div>
  	  <div 
  	    class="jour-table-tr2" 
  	    v-for="(item,index) in table" 
  	    :key="index"
  	    :class="{'jour-table-tr3' :index%2 != 0}"
  	  >
  	  	<div class="jour-table-tr2-td">{{item.time}}</div>
  	  	<div class="jour-table-tr2-td">{{item.ip}}</div>
  	  	<div class="jour-table-tr2-td2">{{item.function}}</div>
  	  	<div class="jour-table-tr2-td3">{{item.page}}</div>
  	  </div>
  	</div>
  	<div class="jour-number"><div>共找到 50 条记录</div></div>
  </div>
</template>

<script>
export default {
  name: 'journal',
  data () {
  	return {
  	  table: [
  	    {
  	      time: '2018/7/30  12:04:38',
  	      ip: '10.214.202.70',
  	      function: 'Logbysso',
  	      page: '/LogBySso.aspx'
  	    },
  	    {
  	      time: '2018/7/30  12:04:38',
  	      ip: '10.214.202.70',
  	      function: 'Logbysso',
  	      page: '/LogBySso.aspx'
  	    },
  	    {
  	      time: '2018/7/30  12:04:38',
  	      ip: '10.214.202.70',
  	      function: 'Logbysso',
  	      page: '/LogBySso.aspx'
  	    },
  	    {
  	      time: '2018/7/30  12:04:38',
  	      ip: '10.214.202.70',
  	      function: 'Logbysso',
  	      page: '/LogBySso.aspx'
  	    },
  	  ]
  	}
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.jour {
  width: 83%;
  background: #fff;
  margin-left: 29px;
  position: relative;
  padding-bottom: 40px;
  &-title {
  	width: 93.6%;
  	height: 71px;
  	border-bottom: 4px solid #44A79F;
  	margin: auto;
  	line-height: 71px;
  	color: #44A79F;
  	font-size: 23px;
  	font-weight:bold;
  	margin-top: 8px;
  }
  &-notice {
  	color: #565656;
  	font-size: 17px;
  	width: 93.5%;
  	margin: auto;
  	margin-top: 29px;
  	margin-bottom: 12px;
  }
  &-table {
  	width: 93.5%;
  	margin: auto; 
  	border: 1px solid #E1E2E6;
  	&-tr {
  	  display: flex;
  	  background: #E4EEED;
  	  font-size: 17px;
  	  color: #135D57;
  	  height: 50px;
  	  line-height: 50px;
  	  &-th {
  	  	width: 25%;
  	  	padding-left: 25px;
  	  	border-right: 1px solid #E1E2E6; 
  	  }
  	  &-th2 {
  	  	width: 20%;
  	  	padding-left: 25px;
  	  	border-right: 1px solid #E1E2E6;
  	  }
  	  &-th3 {
  	  	width: 30%;
  	  	padding-left: 25px;
  	  }
  	}
  	&-tr2 {
  	  display: flex;
  	  background: #fff;
  	  font-size: 17px;
  	  color: #333333;
  	  height: 50px;
  	  line-height: 50px;
  	  &-td {
  	  	width: 25%;
  	  	padding-left: 25px;
  	  	border-right: 1px solid #E1E2E6;
  	  	border-top: 1px solid #E1E2E6;
  	  }
  	  &-td2 {
  	  	width: 20%;
  	  	padding-left: 25px;
  	  	border-right: 1px solid #E1E2E6;
  	  	border-top: 1px solid #E1E2E6;
  	  }
  	  &-td3 {
  	  	width: 30%;
  	  	padding-left: 25px;
  	  	border-top: 1px solid #E1E2E6;
  	  }
  	}
  	&-tr3 {
  	  display: flex;
  	  background: #F4F9F8;
  	  font-size: 17px;
  	  color: #333333;
  	  height: 50px;
  	  line-height: 50px;
  	  &-td {
  	  	width: 25%;
  	  	padding-left: 25px;
  	  	border-right: 1px solid #E1E2E6;
  	  	border-top: 1px solid #E1E2E6;
  	  }
  	  &-td2 {
  	  	width: 20%;
  	  	padding-left: 25px;
  	  	border-right: 1px solid #E1E2E6;
  	  	border-top: 1px solid #E1E2E6;
  	  }
  	  &-td3 {
  	  	width: 30%;
  	  	padding-left: 25px;
  	  	border-top: 1px solid #E1E2E6;
  	  }
  	}
  }
  &-number {
  	width: 93.5%;
  	margin: 17px auto;
  	position: relative;
  	div {
  	  position: absolute;
  	  right: 0;
  	  color: #565656;
  	  font-size: 17px;
  	}
  }
}
</style>