<template>
  <div class="home">
    <div class="body">
      <div class="body-top">
        <div class="top-con1" >
          <div class="top-con1-pic"></div>
          <div class="top-con1-item">
            <p class="top-con1-item-1">我要奖学金</p>
            <p class="top-con1-item-2">[学生]办理奖学金申请手续</p>
          </div>
        </div>
        <div class="top-con2" >
          <div class="top-con2-pic"></div>
          <div class="top-con2-item">
            <p class="top-con2-item-1">我要参保</p>
            <p class="top-con2-item-2">[学生]办理医保手续</p>
          </div>
        </div>
        <div class="top-con3" >
          <div class="top-con3-pic"></div>
          <div class="top-con3-item">
            <p class="top-con3-item-1">我要离校</p>
            <p class="top-con3-item-2">[学生]办理假期离校登记手续</p>
          </div>
        </div>
        <div class="top-con4" >
          <div class="top-con4-pic"></div>
          <div class="top-con4-item">
            <p class="top-con4-item-1">我要兼职</p>
            <p class="top-con4-item-2">[学生]办理勤工俭学岗位</p>
          </div>
        </div>
      </div>
      <div class="body-bottom">
        <div class="body-bottom-left">
          <div class="body-bottom-left-title">
            公告资讯
          </div>
          <div class="body-bottom-left-con">
            <div 
              v-for="(item,index) in notice" 
              :key="index" 
              class="body-bottom-left-con-wrag"
            >
              <div class="body-bottom-left-con-1">{{item.con}}</div>
              <div class="body-bottom-left-con-2">{{item.time}}</div>
            </div>
          </div>
        </div>
        <div class="body-bottom-right">
          <div class="body-bottom-right-title">
            申请流程
          </div>
          <div class="body-bottom-right-con">
            <div class="body-bottom-right-con1">
            <div class="body-bottom-right-con1-title">助学金</div>
            <div class="body-bottom-right-con1-con">
              <div 
              
              v-for="(item,index) in process1" 
              :key="index"
              >
                <div class="body-bottom-right-con1-con-item">{{item}}</div>
              </div>
            </div>
          </div>
          <div class="body-bottom-right-con2">
            <div class="body-bottom-right-con2-title">毕业离校</div>
            <div class="body-bottom-right-con2-con">
              <div 
              v-for="(item,index) in process1" 
              :key="index"
              >
                <div class="body-bottom-right-con2-con-item">{{item}}</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      notice: [
        {
          con: '关于做好2018届毕业生离校工作的通知',
          time: '[2018/6/14]',
        },
        {
          con: '高校学生综合服务平台简介',
          time: '[2018/6/12]',
        }
      ],
      process1: ['1.学生在线申请[困难认定],提交材料','2.院系、学生处审核认定困难等级','3.学生处设定奖助项目及期限'],
    }
  },
  methods: {
    },
}
</script>

<style lang="less" scoped>
.body {
  width: 100%;
  background: #EEEEEE;
  padding-top: 41px;
  padding-bottom: 62px;
  &-top {
    width: 81%;
    height: 103px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
}
.top-con1 {
  width: 371px;
  height: 103px;
  background: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  &-pic {
    width: 68px;
    height: 55px;
    margin-left: 41px;
    background: url('../../assets/img/grant_icon_orange.png');
    background-size: cover;
  }
  &-item {
    margin-left: 30px;
    &-1 {
      font-size: 21px;
      color: #666666;
    }
    &-2 {
      font-size: 14px;
      color: #999999;
    }
  }
}
.top-con1:hover {
  border: 2px solid #37ABAC;
}
.top-con1:hover .top-con1-item-1{
  color: #37ABAC;
}
.top-con1:hover .top-con1-item-2{
  color: #37ABAC;
}
.top-con1:hover .top-con1-pic{
  background: url('../../assets/img/grant_icon_green.png');
  background-size: cover;
}
.top-con2 {
  width: 371px;
  height: 103px;
  background: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  &-pic {
    width: 62px;
    height: 55px;
    margin-left: 41px;
    background: url('../../assets/img/health_icon_orange.png');
    background-size: cover;
  }
  &-item {
    margin-left: 30px;
    &-1 {
      font-size: 21px;
      color: #666666;
    }
    &-2 {
      font-size: 14px;
      color: #999999;
    }
  }
}
.top-con2:hover {
  border: 2px solid #37ABAC;
}
.top-con2:hover .top-con2-item-1{
  color: #37ABAC;
}
.top-con2:hover .top-con2-item-2{
  color: #37ABAC;
}
.top-con2:hover .top-con2-pic{
  background: url('../../assets/img/health_icon_green.png');
  background-size: cover;
}
.top-con3 {
  width: 371px;
  height: 103px;
  background: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  &-pic {
    width: 58px;
    height: 58px;
    margin-left: 41px;
    background: url('../../assets/img/stay_icon_orange.png');
    background-size: cover;
  }
  &-item {
    margin-left: 30px;
    &-1 {
      font-size: 21px;
      color: #666666;
    }
    &-2 {
      font-size: 14px;
      color: #999999;
    }
  }
}
.top-con3:hover {
  border: 2px solid #37ABAC;
}
.top-con3:hover .top-con3-item-1{
  color: #37ABAC;
}
.top-con3:hover .top-con3-item-2{
  color: #37ABAC;
}
.top-con3:hover .top-con3-pic{
  background: url('../../assets/img/stay_icon_green.png');
  background-size: cover;
}
.top-con4 {
  width: 371px;
  height: 103px;
  background: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  &-pic {
    width: 60px;
    height: 54px;
    margin-left: 41px;
    background: url('../../assets/img/work_icon_orange.png');
    background-size: cover;
  }
  &-item {
    margin-left: 30px;
    &-1 {
      font-size: 21px;
      color: #666666;
    }
    &-2 {
      font-size: 14px;
      color: #999999;
    }
  }
}
.top-con4:hover {
  border: 2px solid #37ABAC;
}
.top-con4:hover .top-con4-item-1{
  color: #37ABAC;
}
.top-con4:hover .top-con4-item-2{
  color: #37ABAC;
}
.top-con4:hover .top-con4-pic{
  background: url('../../assets/img/work_icon_green.png');
  background-size: cover;
}
.body-bottom {
  width: 81%;
  margin: auto;
  display: flex;
  margin-top: 61px;
  position: relative;
  &-left {
    width: 608px;
    height: 347px;
    background: #fff;
    position: relative;
    &-title {
      width: 194px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      background: url('../../assets/img/juxing.png');
      background-size: cover;
      position: absolute;
      top: -26px;
      left: 207px;
      color: #fff;
      font-size: 21px;
    }
    &-con {
      margin-left: 57px;
      margin-top: 64px;
      &-wrag {
        display: flex;
        margin-top: 5px;
      }
      &-1 {
        color: #0079AC;
        font-size :17px;
      }
      &-2 {
        color: #333333;
        font-size: 17px;
      }
    }
  }
  &-right {
    width: 920px;
    height: 347px;
    background: #fff;
    position: absolute;
    right: 0; 
    &-title {
      width: 194px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      background: url('../../assets/img/juxing.png');
      background-size: cover;
      position: absolute;
      top: -26px;
      left: 389px;
      color: #fff;
      font-size: 21px;
    }
    &-con {
      display: flex;
    }
    &-con1 {
      width: 424px;
      height: 278px;
      border-right: 1px solid #D2D2D2;
      margin-top: 44px;
      margin-left: 50px;
      display: flex;
      &-title {
        width: 50px;
        height: 121px;
        background: #F4F9F9;
        color: #DF6B20;
        font-size: 21px;
        margin-top: 79px;
        text-align: center;
        padding: 20px 14px 20px 14px;
      }
      &-con {
        margin-left: 15px;
        margin-top: 20px;
        &-item {
          margin-bottom: 7px;
          color: #333333;
          font-size: 17px;
        }
      }
    }
    &-con2 {
      width: 336px;
      height: 278px;
      margin-top: 44px;
      margin-left: 46px;
      display: flex;
      &-title {
        width: 50px;
        height: 153px;
        background: #F4F9F9;
        color: #DF6B20;
        font-size: 21px;
        margin-top: 64px;
        text-align: center;
        padding: 20px 14px 20px 14px;
      }
      &-con {
        margin-left: 15px;
        margin-top: 20px;
        &-item {
          margin-bottom: 7px;
          color: #333333;
          font-size: 17px;
        }
      }
    }
  }
}
</style>
