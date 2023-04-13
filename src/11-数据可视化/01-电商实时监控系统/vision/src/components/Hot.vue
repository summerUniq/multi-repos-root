<template>
  <div class="com-container">
    <div class="com-chart" ref="hot_ref"></div>
    <span class="iconfont arr_left" @click="toLeft" :style="comStyle
">&#xe6ef;</span>
    <span class="iconfont arr_right" @click="toRight" :style="comStyle
">&#xe6ed;</span>
    <span class="cat_name" :style="comStyle
">{{catName}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null,
      currentIndex: 0,
      titleFontSize: 0
    }
  },
  computed: {
    catName () {
      return this.allData ? this.allData[this.currentIndex].name : ''
    },
    comStyle () {
      return {
        fontSize: this.titleFontSize + 'px'
      }
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.hot_ref, 'chalk')
      const initOption = {
        title: {
          text: '｜ 热销商品销售金额占比统计',
          left: 20,
          top: 20
        },
        legend: {
          top: '15%',
          icon: 'circle'
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const tipArray = []
            params.data.children.forEach(item => {
              const childStr = `${item.name}&nbsp;&nbsp;&nbsp;${parseInt((item.value / params.value) * 100)}%`
              tipArray.push(childStr)
            })
            return tipArray.join('<br/>')
          }
        },
        series: [{
          type: 'pie',
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          }
        }]
      }
      this.chartInstance.setOption(initOption)
    },
    async getData () {
      const { data: ret } = await this.$http.get('hotproduct')
      this.allData = ret
      console.log(this.allData)
      this.updateChart()
    },
    updateChart () {
      const seriesData = this.allData[this.currentIndex].children.map((v) => ({
        name: v.name,
        value: v.value,
        children: v.children
      }))
      const legendData = seriesData.map((v) => { return v.name })

      const updateOption = {
        legend: {
          data: legendData
        },
        series: [{
          data: seriesData
        }]
      }
      this.chartInstance.setOption(updateOption)
    },
    screenAdapter () {
      this.titleFontSize = this.$refs.hot_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: this.titleFontSize
          }
        },
        legend: {
          itemWidth: this.titleFontSize / 2,
          itemHeight: this.titleFontSize / 2,
          itemGap: this.titleFontSize / 2,
          textStyle: {
            fontSize: this.titleFontSize / 2
          }
        },
        series: [
          {
            radius: this.titleFontSize * 4.5,
            center: ['50%', '60%']
          }
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    toLeft () {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.allData.length - 1
      }
      this.updateChart()
    },
    toRight () {
      this.currentIndex++
      if (this.currentIndex >= this.allData.length) {
        this.currentIndex = 0
      }
      this.updateChart()
    }
  }
}
</script>

<style lang="less" scoped>
    .arr_left {
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        color: #fff;
    }
    .arr_right {
        position: absolute;
        right: 10%;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        color: #fff;
    }
.cat_name {
    position: absolute;
    left: 80%;
    bottom: 20px;
    color: #fff;
}

</style>
