<template>
  <div v-if="showTop">
    <div class="top">
      <div class="top-con">
        <img src="@/assets/img/logo.png" alt="" class="top-logo">
        <div 
          v-for="(item,index) in topData"
          :key="index" 
          :style="{'border-right': index!==8 ? '1px solid #DFDFDF' : ''}"
          @click="changeTab(index)"
          :class="index===currentTab ? 'top-item-change' : 'top-item'"
        >
          {{item.title}}
          <ul class="top-down" >
            <li 
              class="top-down-item"  
              v-for="(items,indexs) in item.child" 
              :key="indexs"
              @click="changeTab2(indexs)"
              @click.stop
            >
              {{items}}
            </li>
          </ul>
        </div>
        <div class="top-user">
          <img src="@/assets/img/icon_user.png" alt="" class="user-img">
          <div class="user-name">姓名姓名</div>
          <div class="user-exit" @click="exit">退出</div>
        </div>
      </div>
    </div>
    <div class="head">
      <div class="head-con">
        <img src="@/assets/img/华师logo.png" alt="" class="logo">
        <img src="@/assets/img/高校学生综合服务平台.png" alt="" class="name">
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '@/assets/js/bus'

export default {
  name: 'Top',
  data () {
    return {
      showTop: true,
      topData: [
        {
          title: '首页',
          child: ['系统公告','帮助指南','联系方式','系统简介','数据统计'],
        },
        {
          title: '个人信息'
        },
        {
          title: '奖学助学'
        },
        {
          title: '医保服务'
        },
        {
          title: '就业服务'
        },
        {
          title: '智慧团建'
        },
        {
          title: '日常管理'
        },
        {
          title: '查询统计'
        },
        {
          title: '更多服务'
        },
      ],
      currentTab: 0,
    }
  },
  created () {
    Bus.$on('showTop', () => {
      this.showTop = true
    })
    Bus.$on('cancelTop', () => {
      this.showTop = false
    })
  },
  methods: {
    changeTab(index) {
      if (index === 0) {
        this.currentTab = index
        this.$router.push('/')
      } else if (index === 1) {
        this.currentTab = index
        this.$router.push('/CollectInfo')
      } 
      else {
        this.$_toast.show('该功能暂未开放')
      }
    },
    changeTab2(indexs) {
      if(indexs === 0) {
        this.$_toast.show('该功能暂未开放')
      } else if(indexs === 1) {
        this.$router.push('/HelpGuide')
      } else if(indexs === 2) {
        this.$router.push('/Contact')
      } else if(indexs === 3) {
        this.$router.push('/Introduction')
      }
      else {
        this.$_toast.show('该功能暂未开放')
      }
    },
    exit () {
      this.$router.push('/login')
    },
  }
}
</script>

<style lang="less">
.top {
  display: flex;
  align-items: center;
  width: 100%;
  height: 83px;
}
.top-con {
  display: flex;
  align-items: center;
  width: 81.1%;
  margin: auto;
  position: relative;
  height: 37px;
}
.top-logo {
  width: 37px;
  height: 41px;
  margin-right: 36px;
}
.top-item {
  width: 118px;
  text-align: center;
  font-size: 17px;
  color: #565656;
  cursor: pointer;
  position: relative;
}
.top-item:hover {
  background: #EFF5F6;
  height: 83px;
  line-height: 84px;
}
.top-item:hover ul{
  display: block;
}
.top-item-change:hover {
  background: #EFF5F6;
  height: 83px;
  line-height: 84px;
}
.top-item-change:hover ul{
  display: block;
}
.top-item-change {
  width: 118px;
  text-align: center;
  font-size: 17px;
  color: #26988F;
  position: relative;
  cursor: pointer;
}
.top-user {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
}
.user-img {
  width: 31px;
  height: 31px;
}
.user-name {
  margin-left: 17px;
  margin-right: 20px;
  font-size: 17px;
  color: #EA8542;
  cursor: pointer;
}
.user-exit {
  font-size: 17px;
  color: #787878;
  cursor: pointer;
}
.head {
  width: 100%;
  height: 206px;
  background: url('../assets/img/background.png') no-repeat;
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
.top-down {
  width: 107px;
  position: absolute;
  top: 83px;
  left: 6px;
  display: none;
}
.top-down-item {
  width: 100%;
  height: 35px;
  background: #fff;
  text-align: center;
  line-height: 35px;
  color: #565656;
  font-size: 14px;
  cursor: pointer;
}
.top-down-item:hover {
  color: #26988F;
  background: #EFF5F6;
}
</style>