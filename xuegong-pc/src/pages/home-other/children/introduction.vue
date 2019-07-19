<template>
  <div class="introduction">
  	<div class="introduction-title">
      <div class="introduction-title-top">系统简介</div>
      <div class="introduction-title-bottom"><span>By: beaming</span><span class="introduction-title-bottom-between">Post Time: 2015/10/23 18:52:41</span><span>Visits: 27630</span></div>
    </div>
  	<div class="introduction-con">
  	  <p>高校学生工作信息系统（Eswis.cn）由华南师范大学物理与电信工程学院辅导员唐小煜老师及其团队F(x)学生发展工作室设计制作，是广东省思政课题《网络环
境下高校学生管理系统研究》成果之一，三个版本的系统均获得国家版权局颁发软件著作权证书，系统算法获得国家知识产权局颁发发明专利证书。</p>
 <p>系统始创于2003年，是华南师范大学实现学生工作事务、学生教育网络化的平台，适应一校三区的管理模式，实现了用户管理、学生电子档案、学生奖惩管理、
学生事务管理、勤工助学管理、就业服务管理、医保服务管理、青年活动管理等近150项功能。</p>
 <p>2015年，系统正式升级为“华南师范大学学生综合服务平台”，接入华南师范大学数据中心和统一身份认证平台，并与学生处、研究生处、校团委、教务处、财
务处、图书馆、校医院、一卡通中心等业务部门“系统互联，数据互通”，大力推进了学校工作信息化进程。</p>
 <p>目前，系统已在华南师范大学、广东工业大学、广东药科大学、广东医科大学、清远职业技术学院等高校推广使用，同行和用户评价高，在国内有很高的知名度。
感谢您关注本系统，欢迎您随时对系统提出宝贵的意见和建议。</p>
 <p>联系人：唐老师，15034508@qq.com。</p>
 <p>学生团队：纪烁，周彩虹，吴桂鑫，龚文俊，王聪，孔维豪，吴政良，张旭东，雷劲，林晓滨，郑思颖，杨帆，何咏琳，程慧慧，王小由，林宏杰，张国伟，桂毓
婕，王睿。</p>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'help-guide',
  data () {
  	return {
  	  
  	}
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.introduction {
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
  	margin: 29px auto;
  }
}
.introduction-con p {
  text-indent:2em;
  line-height: 40px;
}
</style>