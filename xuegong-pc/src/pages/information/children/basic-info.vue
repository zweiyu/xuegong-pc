<template>
  <div class="basic">
  	<div class="basic-title">
  	  基本信息
  	</div>
  	<div class="basic-notice">
  	  <div>注意：</div>
  	  <div class="basic-notice-p"><p>1.用户基本信息的准确性非常重要，会影响您成功办理业务与否，请认真对待并如实填写。</p><p>2.我们十分重视您的个人信息安全，填写本页信息之前，请先签署<a href="" class="basic-notice-a">《学生综合服务平台用户信息及数据服务协议》</a></p></div>
  	</div>
  	<div class="basic-con">
  	  <div>
  	  	<div 
  	      class="basic-con-left" 
  	      v-for="(item,index) in basic" 
  	      :key="index"
  	    >
  	  	  <span v-show="item.show">*</span>
  	  	    {{item.title}}
  	    </div>
  	    <div class="basic-con-left2">邮政编码</div>
  	  </div>
  	  <div>
	    <input class="basic-con-right" type="text" placeholder="请输入姓名">
	    <input class="basic-con-right" type="text" placeholder="请输入曾用名">
	    <select class="basic-con-right" name="" id="">
	      <option value="">男</option>
	      <option value="">女</option>
	    </select>
	    <select class="basic-con-right" name="" id="">
	      <option value="">汉族</option>
	      <option value="">回族</option>
	    </select>
	    <input class="basic-con-right" type="text" placeholder="请输入**省**市">
	    <select class="basic-con-right" name="" id="">
	      <option value="">居民身份证</option>
	      <option value="">港澳通行证</option>
	    </select>
	    <input class="basic-con-right" type="text" placeholder="请输入身份证号">
	    <input class="basic-con-right" type="text" placeholder="请输入年/月/日">
	    <select class="basic-con-right" name="" id="">
	      <option value="">共青团员</option>
	      <option value="">党员</option>
	    </select>
	    <input class="basic-con-right" type="text" placeholder="请输入年/月">
	    <select class="basic-con-right" name="" id="">
	      <option value="">大学城</option>
	      <option value="">石牌</option>
	      <option value="">南海</option>
	    </select>
	    <input class="basic-con-right" type="text" placeholder="请输入电子邮箱">
	    <input class="basic-con-right" type="text" placeholder="请输入移动电话">
	    <input class="basic-con-right" type="text" placeholder="请输入固定电话">
	    <input class="basic-con-right" type="text" placeholder="请输入宿舍楼-门牌号">
	    <input class="basic-con-right" type="text" placeholder="请输入QQ号码">
	    <div class="basic-con-right2">
	      <input type="text" placeholder="请输入内容">
	    </div>
	    <input class="basic-con-right" type="text" placeholder="请输入邮政编码">
  	  </div>
  	</div>
  	<div class="basic-pic">
  	  <div class="basic-pic-img"></div>
  	  <div class="basic-pic-button">更换头像</div>
  	</div>
  	<div class="basic-button">提交保存</div>
  </div>	
</template>

<script>
export default {
  name: 'basic-info',
  data () {
  	return {
  	  basic: [
  	    {
  	      show: true,
  	      title: '姓名'
  	    },
  	    {
  	      show: false,
  	      title: '曾用名'
  	    },
  	    {
  	      show: true,
  	      title: '性别'
  	    },
  	    {
  	      show: true,
  	      title: '民族'
  	    },
  	    {
  	      show: true,
  	      title: '籍贯'
  	    },
  	    {
  	      show: true,
  	      title: '身份证件类型'
  	    },
  	    {
  	      show: true,
  	      title: '身份证号'
  	    },
  	    {
  	      show: true,
  	      title: '出生日期'
  	    },
  	    {
  	      show: false,
  	      title: '政治面貌'
  	    },
  	    {
  	      show: false,
  	      title: '入党/入团时间'
  	    },
  	    {
  	      show: true,
  	      title: '校区'
  	    },
  	    {
  	      show: true,
  	      title: '电子邮件'
  	    },
  	    {
  	      show: true,
  	      title: '移动电话'
  	    },
  	    {
  	      show: false,
  	      title: '固定电话'
  	    },
  	    {
  	      show: false,
  	      title: '宿舍地址'
  	    },
  	    {
  	      show: false,
  	      title: 'QQ号码'
  	    },
  	    {
  	      show: false,
  	      title: '邮寄地址'
  	    },
  	  ],
  	}
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.basic {
  width: 83%;
  background: #fff;
  margin-left: 29px;
  position: relative;
  padding-bottom: 40px;
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
  &-notice {
  	width: 93.5%;
  	margin: 21px auto;
  	display: flex;
  	color: #565656;
  	font-size: 17px;
  	&-p {
  	  margin-left: 5px;
  	  line-height: 25px;
  	  color: #565656;
  	  font-size: 17px;
  	}
  	&-a {
  	  color: #0079AC;
  	  font-size: #0079AC;
  	}
  }
  &-con {
  	width: 388px;
  	margin-left: 30%;
	  display: flex;
  	&-left {
  	  width: 115px;
  	  height: 45px;
  	  margin-bottom: 19px;
  	  text-align: right;
  	  line-height: 45px;
  	  color: #333333;
  	  font-size: 17px;
  	  span {
  	  	color: #EA725A;
  	  }
  	}
  	&-left2 {
  	  width: 115px;
  	  height: 45px;
  	  text-align: right;
  	  line-height: 45px;
  	  color: #333333;
  	  font-size: 17px;
  	  margin-top: 160px;
  	}
  	&-right {
  	  width: 254px;
  	  height: 45px;
  	  border: 1px solid #E5E5E5;
  	  border-radius:4px;
  	  line-height: 45px;
  	  margin-left: 19px;
  	  padding-left: 14px;
  	  margin-bottom: 19px;
  	  &-input {
		font-size: 17px;
		color: #000000;
  	  }
  	}
  	&-right2 {
  	  width: 450px;
  	  height: 186px;
  	  border: 1px solid #E5E5E5;
  	  border-radius:4px;
  	  margin-left: 19px;
	    padding: 14px 14px;
	    margin-bottom: 19px;
  	}
  }
  &-pic {
  	width: 155px;
  	position: absolute;
  	top: 182px;
  	right: 159px;
  	&-img {
  	  width: 100%;
  	  height: 206px;
  	  background: #DCDCDC;
  	}
  	&-button {
  	  width: 89px;
  	  height: 31px;
  	  margin: 29px auto;
  	  background: #26988F;
  	  color: #fff;
  	  font-size: 17px;
  	  border-radius:4px;
  	  text-align: center;
  	  line-height: 31px;
  	  cursor: pointer;
  	}
  }
  &-button {
  	width: 140px;
  	height: 46px;
  	background: #26988F;
  	color: #fff;
  	font-size: 19px; 
  	border-radius:4px;
  	margin: 20px auto;
  	text-align: center;
  	line-height: 46px;
  	cursor: pointer;
  }
}
</style>