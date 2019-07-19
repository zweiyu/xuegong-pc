<template>
  <div>
  	<div v-if="showFooter" class="footer">
  	  <div class="footer-con">
  	    <img src="@/assets/img/二维码.png" alt="" class="con-left">
  	    <div class="con-right">
  	      <p>Eswis 高校学生综合服务平台 学生工作管理系统 粤ICP备10099266号-1</p>
  	      <p>单位联系方式:广州市天河区华南师范大学学生工作处|研究生院 <span class="yellow">[更多]</span></p>
  	      <p>版权所有：华南师范大学 <span class="yellow">唐小煜</span> 登记证：2010SR038042</p>
  	    </div>
  	  </div>
  	</div>
  </div>
</template>

<script>
import Bus from '@/assets/js/bus'

export default {
  name: 'Footer',
  data () {
  	return {
  	  showFooter: true,
  	}
  },
  created () {
    Bus.$on('showFooter', () => {
      this.showFooter = true
    })
    Bus.$on('cancelFooter', () => {
      this.showFooter = false
    })
  },
  methods: {

  }
}
</script>

<style lang="less">
.footer {
  width: 100%;
  height: 143px;
  background: #3F9697;
  display: flex;
  align-items: center;
}
.footer-con {
  width: 33%;
  height: 76px;
  margin: auto;
  display: flex;
}
.con-left {
  width: 76px;
  height: 76px;
  margin-right: 37px;
}
.con-right {
  color: #FFFFFF;
  font-size: 17px;
}
.yellow {
  color: yellow;
  font-size: 17px;
}
</style>