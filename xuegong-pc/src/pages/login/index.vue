<template>
  <div>
  	<div class="login-top">
  	  <img src="@/assets/img/logo.png" alt="" class="login-top-pic1">
  	  <img src="@/assets/img/高校学生综合服务平台1.png" alt="" class="login-top-pic2">
  	</div>
  	<div class="head">
      <div class="head-con">
        <img src="@/assets/img/华师logo.png" alt="" class="logo">
        <img src="@/assets/img/高校学生综合服务平台.png" alt="" class="name">
      </div>
    </div>
    <div class="body">
      <div class="body-con">
      	<div class="body-con-title">登录</div>
      	<div><input type="text" placeholder="电子邮箱" class="body-con-input1"></div>
      	<div><input type="text" placeholder="密码" class="body-con-input2"></div>
      	<div class="body-con-mima">
      	  <div class="body-con-mima-button"></div>
      	  <div class="body-con-mima-remember">记住密码</div>
      	  <div class="body-con-mima-forget">忘记密码?</div>
      	</div>
      	<div class="body-con-button">
      	  <button class="body-con-button-left">注册</button>
      	  <button class="body-con-button-right">登录</button>
      	</div>
      	<div class="change">已有高校学生工作信息系统账号，<a href="https://ssp.scnu.edu.cn/api/GetSsourl.ashx?school=10574">从此登录</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '@/assets/js/bus'

export default {
  name: 'login',
  data () {
  	return {

  	}
  },
  created () {
  	Bus.$emit('cancelTop')
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.login-top {
  width: 100%;
  height: 83px;
  background: #fff;
  display: flex;
  &-pic1 {
  	width: 37px;
  	height: 41px;
  	margin-left: 185px;
  	margin-top: 21px;
  }
  &-pic2 {
  	width: 258px;
  	height: 25px;
	margin-top: 29px;
	margin-left :21px;
  }
}
.head {
  width: 100%;
  height: 206px;
  background: url('../../assets/img/background.png') no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
}
.head-con {
  width: 749px;
  height: 90px;
  margin: auto;
  display: flex;
  align-items: center;
}
.logo {
  width: 85px;
  height: 90px;
  margin-right: 22px;
}
.name {
  width: 644px;
  height: 58px;
}
.body {
  width: 100%;
  background: #EEEEEE;
  padding-top: 67px;
  padding-bottom: 179px;
  &-con {
  	width: 359px;
  	margin: auto;
  	&-title {
  	  width: 122px;
  	  height: 52px;
  	  text-align: center;
  	  margin: auto;
  	  color: #446B6D;
  	  font-size: 25px;
  	  font-weight:bold;
  	  border-bottom: 3px solid #446B6D;
  	}
  	&-input1 {
  	  border: 1px solid #E5E5E5;
  	  border-radius:24px;
  	  width: 359px;
  	  height: 49px;
  	  color: #999999;
  	  font-size: 17px;
  	  padding: 24px;
  	  margin-top: 29px;
  	}
  	&-input2 {
  	  border: 1px solid #E5E5E5;
  	  border-radius:24px;
  	  width: 359px;
  	  height: 49px;
  	  color: #999999;
  	  font-size: 17px;
  	  padding: 24px;
  	  margin-top: 15px;
  	}
    &-mima {
      display: flex;
      align-items: center;
      width: 359px;
      position: relative;
      margin-top: 17px;
      &-button {
      	width: 16px;
      	height: 16px;
      	border: 3px solid #26988F;
      	border-radius: 4px;
      }
      &-remember {
      	color: #26988F;
      	font-size: 14px;
      	margin-left: 7px;
      }
      &-forget {
      	font-size: 14px;
      	color: #EA8542;
      	position: absolute;
      	right: 0;
      	cursor: pointer;
      }
    }
    &-button {
      position: relative;
      margin-top: 38px;
      &-left {
      	width: 163px;
      	height: 54px;
      	border: 1px solid #26988F;
      	border-radius: 27px;
      	color: #26988F;
      	font-size: 19px;
      	cursor: pointer;
      }
      &-right {
		width: 163px;
      	height: 54px;
      	border: 1px solid #26988F;
      	border-radius: 27px;
      	color: #fff;
      	font-size: 19px;
      	background: #26988F;
      	position: absolute;
      	right: 0;
      	cursor: pointer;
      }
    }
  }
}
.change {
  width: 100%;
  font-size: 14px;
  color: #333333;
  text-align: center;
  margin-top: 37px;
}
.change a {
  color: #EA8542;
  cursor: pointer;
}
</style>