<template>
  <div class="family">
  	<div class="family-title">
  	  家庭信息
  	</div>
  	<div class="family-con">
  	  <div class="family-con-top">
  	  	<div class="family-con-top-title">
  	  	  <div class="family-con-top-title-left"></div>
  	  	  <div class="family-con-top-title-right">家庭主要联系人</div>
  	  	</div>
  	  </div>
  	  <div class="family-con-con">
  	  	<div>
  	  	  <div 
  	  	    class="family-con-con-left"
  	  	    v-for="(item,index) in family1"
  	  	    :key="index"
  	  	  >
  	  	  	<span v-show="item.show">*</span>
  	  	  	{{item.title}}
  	  	  </div>
  	  	  <div class="family-con-con-left2">邮政编码</div>
  	  	  <div class="family-con-con-left">家庭户口类型</div>
  	  	</div>
  	  	<div>
  	  	  <input class="family-con-con-right" type="text" placeholder="请输入姓名">
  	  	  <input class="family-con-con-right" type="text" placeholder="请输入紧急联系人">
  	  	  <input class="family-con-con-right" type="text" placeholder="请输入紧急联系人电话">
  	  	  <div class="family-con-con-right2">
	        <input type="text" placeholder="请输入内容">
	      </div>
	      <input class="family-con-con-right" type="text" placeholder="请输入邮政编码">
	      <select class="family-con-con-right" name="" id="">
	      	<option value="">城镇</option>
	      	<option value="">农村</option>
	      </select>
  	  	</div>
  	  </div>
  	  <div class="family-con-button">提交保存</div>
  	</div>
  	<div class="family-con">
  	  <div class="family-con-top">
  	  	<div class="family-con-top-title">
  	  	  <div class="family-con-top-title-left"></div>
  	  	  <div class="family-con-top-title-right">家庭主要成员</div>
  	  	</div>
  	  </div>
  	  <div class="family-con-notice">编辑维护父母、兄弟姐妹等家庭主要成员信息</div>
      <!-- <div class="family-con-notable">找不到指定记录</div> -->
      <div class="family-con-table">
        <div class="family-con-table-tr">
          <div class="family-con-table-tr-th">关系</div>
          <div class="family-con-table-tr-th">姓名</div>
          <div class="family-con-table-tr-th2">联系方式</div>
          <div class="family-con-table-tr-th3">工作单位</div>
          <div class="family-con-table-tr-th4">操作</div>
        </div>
        <div 
          class="family-con-table-tr2"
          v-for="(item,index) in table"
          :key="index"
          :class="{'family-con-table-tr3':index % 2 != 0}"
        >
          <div class="family-con-table-tr2-th">{{item.rela}}</div>
          <div class="family-con-table-tr2-th">{{item.name}}</div>
          <div class="family-con-table-tr2-th2">{{item.phone}}</div>
          <div class="family-con-table-tr2-th3">{{item.place}}</div>
          <div class="family-con-table-tr2-th4">
            <div class="family-con-table-tr2-th4-1">编辑</div>
            <div>删除</div>
          </div>
        </div>
      </div>
  	  <div class="family-con-con">
  	  	<div>
  	  	  <div 
  	  	    class="family-con-con-left"
  	  	    v-for="(item,index) in family2"
  	  	    :key="index"
  	  	  >
  	  	  	{{item}}
  	  	  </div>
  	  	</div>
  	  	<div>
  	  	  <input class="family-con-con-right" type="text" placeholder="请输入姓名">
  	  	  <input class="family-con-con-right" type="text" placeholder="如父子/兄弟等">
  	  	  <input class="family-con-con-right" type="text" placeholder="请输入联系电话">
  	  	  <input class="family-con-con-right" type="text" placeholder="请输入工作单位">
          <div class="family-con-con-right3">
            <div class="family-con-con-right2-1"></div>
            <div class="family-con-con-right2-2">新增家庭成员</div>
          </div>
  	  	</div>
  	  </div>
  	  <div class="family-con-button">提交保存</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'family-info',
  data () {
  	return {
  	  family1: [
  	    {
  	      show: true,
  	      title: '学生姓名'
  	    },
  	    {
  	      show: true,
  	      title: '紧急联系人'
  	    },
  	    {
  	      show: true,
  	      title: '紧急联系人电话'
  	    },
  	    {
  	      show: false,
  	      title: '联系地址'
  	    },
  	  ],
  	  family2: ['成员姓名','与本人关系','联系电话','工作单位'],
      table: [
        {
          rela: '父子',
          name: '姓名',
          phone: '1234567890',
          place: '工作单位工作单位工作单位'
        },
        {
          rela: '父子',
          name: '姓名',
          phone: '1234567890',
          place: '工作单位工作单位工作单位'
        },
      ],
  	}
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.family {
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
  &-con {
  	width: 93.6%;
  	margin: 29px auto;
  	&-top {
  	  width: 100%;
  	  height: 52px;
  	  background: #F6FCFA;
  	  &-title {
	    display: flex;
	    &-left {
	      width: 8px;
	      height: 52px;
	      background: #44A79F;
	    }
	    &-right {
	      width: 188px;
	      height: 52px;
	      background: url('../../../assets/img/矩形.png');
	      background-size: cover;
	      line-height: 52px;
	      padding-left: 21px;
	      color: #333333;
	      font-size: 19px;
	    }
  	  }
  	}
  	&-notice {
  	  color: #565656;
  	  font-size: 17px;
  	  margin-top: 28px;
  	}
    &-notable {
      width: 100%;
      height: 50px;
      border: 1px solid #E1E2E6;
      background: #F8F8F8;
      font-size: 17px;
      color: #333333;
      padding-left: 26px;
      line-height: 50px;
      margin-top: 15px;
    }
    &-table {
      width: 100%;
      border: 1px solid #E1E2E6;
      margin-top: 15px;
      &-tr {
        background: #E4EEED;
        color: #135D57;
        height: 50px;
        line-height: 50px;
        font-size: 17px;
        display: flex;
        &-th {
          width: 17%;
          padding-left: 26px;
          border-top: 1px solid #E1E2E6;
          border-right: 1px solid #E1E2E6;
        }
        &-th2 {
          width: 19%;
          padding-left: 26px;
          border-top: 1px solid #E1E2E6;
          border-right: 1px solid #E1E2E6;
        }
        &-th3 {
          width: 34%;
          padding-left: 26px;
          border-top: 1px solid #E1E2E6;
          border-right: 1px solid #E1E2E6;
        }
        &-th4 {
          width: 13%;
          text-align: center;
          border-top: 1px solid #E1E2E6;
        }
      }
      &-tr2 {
        width: 100%;
        height: 50px;
        background: #fff;
        color: #333333;
        font-size: 17px;
        display: flex;
        line-height: 50px;
        &-th {
          width: 17%;
          padding-left: 26px;
          border-top: 1px solid #E1E2E6;
          border-right: 1px solid #E1E2E6;
        }
        &-th2 {
          width: 19%;
          padding-left: 26px;
          border-top: 1px solid #E1E2E6;
          border-right: 1px solid #E1E2E6;
        }
        &-th3 {
          width: 34%;
          padding-left: 26px;
          border-top: 1px solid #E1E2E6;
          border-right: 1px solid #E1E2E6;
        }
        &-th4 {
          width: 13%;
          text-align: center;
          border-top: 1px solid #E1E2E6;
          display: flex;
          div {
            color: #2D78B1;
            font-size: 17px;
            cursor: pointer;
          }
          div:hover {
            color: #26988F;
          }
          &-1 {
            margin-left: 36px;
            margin-right: 27px;
          }
        }
      }
      &-tr3 {
        width: 100%;
        height: 50px;
        background: #F4F9F8;
        color: #333333;
        font-size: 17px;
        display: flex;
        line-height: 50px;
        &-th {
          width: 17%;
          padding-left: 26px;
        }
        &-th2 {
          width: 19%;
          padding-left: 26px;
        }
        &-th3 {
          width: 34%;
          padding-left: 26px;
        }
        &-th4 {
          width: 13%;
          text-align: center;
        }
      }
    }
  	&-con {
  	width: 404px;
  	margin: 29px 28%;
	  display: flex;
  	&-left {
  	  width: 136px;
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
  	  margin-bottom: 19px;
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
  	&-right3 {
  	  width: 450px;
      height: 21px;
  	  margin-left: 19px;
      display: flex;
      &-1 {
        width: 21px;
        height: 21px;
        border: 2px solid #26988F;
        border-radius:4px;
      }
      &-2 {
        line-height: 21px;
        margin-left: 14px;
        font-size: 17px;
        color: #333333;
      }
  	}
   }
   &-button {
  	  width: 140px;
  	  height: 46px;
  	  margin-left: 41%;
  	  background: #26988F;
  	  color: #fff;
  	  font-size: 19px;
  	  border-radius:4px;
  	  line-height: 46px;
  	  text-align: center;
  	  cursor: pointer;
  	}
  }
}
</style>