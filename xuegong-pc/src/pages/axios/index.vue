<template>
  <div id="axios">
    <ul>
      <li 
      v-for="(item, index) in top_stories"
      :key="index">
        <Item :title="item.title" :imgUrl="item.image"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './components/item'

export default {
  name: 'Axios',
  components: {
    Item
  },
  computed: {
    ...mapGetters(['top_stories'])
  },
  created () {
    console.log('您正处于axios页...')
    console.log('top_stories:', this.top_stories)
    this.getNews()
  },
  methods: {
    async getNews () {
      try {
        console.log('正在请求数据...')
        const res = await this.$_api.getNews()
        console.log('数据请求完成...')
        this.$store.commit('setNewsData', res)
        console.log('top_stories:', this.top_stories)
      } catch (error) {
        console.log('数据请求失败...')
        this.$_toast.show(error.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

#axios {
  padding: 20px;

  ul {
    .fja(flex-start, flex-start);

    li {
      margin: 20px;
    }
  }
}
</style>

