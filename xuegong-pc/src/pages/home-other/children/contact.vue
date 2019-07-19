<template>
  <div class="contact">
  	<div class="contact-title">
      <div class="contact-title-top">联系方式</div>
      <div class="contact-title-bottom"><span>By: beaming</span><span class="contact-title-bottom-between">Post Time: 2015/10/23 18:52:41</span><span>Visits: 27630</span></div>
    </div>
  	<div class="contact-con">
  	  <div 
        class="contact-con-top" 
        v-for="(item,index) in contact"
        :key="index"
      >
        <div class="contact-con-top-title">{{item.title}}</div>
        <div class="contact-con-top-con">{{item.daxue}}</div> 
        <div class="contact-con-top-con">{{item.shipai}}</div>
        <div class="contact-con-top-con">{{item.nanhai}}</div>
      </div>
      <div class="contact-con-bottom">
        <div class="contact-con-top-title">系统开发与维护团队</div>
        <div class="contact-con-top-con">华师物电学院创新基地软件开发中心，唐老师，15034508@qq.com</div>
        <div class="contact-con-top-con">广州番禺大学城华南师范大学物理与电信工程学院理六412（510006）</div>
      </div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'help-guide',
  data () {
  	return {
  	  contact: [
        {
          title: '学生工作部（处）资助管理科',
          daxue: '大学城校区：020-39310000，行政楼C309，邮箱xsswglk2@126.com;',
          shipai: '石牌校区：020-85211033，行政楼327，邮箱xsswglk@126.com;',
          nanhai: '南海校区：0757-86687262，学生活动中心204，邮箱xsswglk3@126.com;',
        },
        {
          title: '研究生处管理办公室',
          daxue: '大学城校区：020-39310082',
          shipai: '石牌校区：020-85211117',
          nanhai: '南海校区：'
        },
        {
          title: '网络中心',
          daxue: '大学城校区：020-39311499，020-39311498',
          shipai: '石牌校区：020-85211499，020-85211498',
          nanhai: '南海校区：'
        },
      ],
  	}
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.contact {
  width: 83%;
  background: #fff;
  margin-left: 29px;
  padding-bottom: 322px;
  &-title {
  	width: 93.5%;
  	height: 70px;
  	border-bottom: 4px solid #44A79F;
  	margin: auto;
  	margin-top: 32px;
    &-top {
      color: #26988F;
      font-size: 23px;
      font-weight:bold;
    }
    &-bottom {
      color: #898989;
      font-size: 14px;
      margin-top: 6px;
      &-between {
        margin: 0 61px 0 42px;
      }
    }
  }
  &-con {
  	width: 93.5%;
  	margin: 19px auto;
  	&-top {
      &-title {
        color: #333333;
        font-size: 17px;
        font-weight:bold;
        margin-top: 15px;
      }
      &-con {
        color: #333333;
        font-size: 17px;
        margin-top: 10px;
      }
    }
  }
}
</style>