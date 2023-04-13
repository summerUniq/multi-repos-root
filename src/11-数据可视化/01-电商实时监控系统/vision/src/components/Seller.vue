<template>
  <div class="com-container">
    <div class="com-chart" ref="seller_ref"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: [],
      currentPage: 1,
      totalPage: 0,
      timerId: null
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    this.startInterval()
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.seller_ref, 'chalk')
      this.chartInstance.on('mouseover', () => {
        clearInterval(this.timerId)
      })

      this.chartInstance.on('mouseout', () => {
        this.startInterval()
      })
      const initOption = {
        title: {
          text: '▎商家销量排行',
          left: 20,
          top: 20
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            z: 0,
            lineStyle: {
              color: '#2D3443'
            }
          }
        },

        series: [{
          type: 'bar',
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: '#5052ee'

              }, {
                offset: 1,
                color: '#AB6EE5'
              }
            ])
          },
          label: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#fff'
            }
          }
        }]
      }
      this.chartInstance.setOption(initOption)
      window.addEventListener('resize', this.screenAdapter)
      this.screenAdapter()
    },
    async getData () {
      const { data: res } = await this.$http.get('seller')
      this.allData = res
      this.allData.sort((a, b) => {
        return a.value - b.value
      })
      this.totalPage = this.allData.length % 5 === 0 ? parseInt(this.allData.length / 5) : parseInt(this.allData.length / 5) + 1
      this.updateChart()
    },
    updateChart () {
      const start = (this.currentPage - 1) * 5
      const end = this.currentPage * 5
      const showData = this.allData.slice(start, end)

      const sellerNames = showData.map((v) => {
        return v.name
      })
      const sellerValues = showData.map((v) => {
        return v.value
      })
      const option = {
        yAxis: {
          data: sellerNames
        },
        series: [
          {
            data: sellerValues
          }
        ]
      }
      this.chartInstance.setOption(option)
    },
    startInterval () {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        this.currentPage++
        if (this.currentPage > this.totalPage) {
          this.currentPage = 1
        }
        this.updateChart()
      }, 3000)
    },
    screenAdapter () {
      const titleFontSize = this.$refs.seller_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize
          }
        },
        tooltip: {
          axisPointer: {
            lineStyle: {
              width: titleFontSize
            }
          }
        },
        series: [{
          barWidth: titleFontSize,
          itemStyle: {
            barBorderRadius: [0, titleFontSize / 2, titleFontSize / 2, 0]
          }
        }]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }

  },
  destroyed () {
    clearInterval(this.timerId)
    window.removeEventListener('resize', this.screenAdapter)
  }
}
</script>

<style lang="less" scoped></style>
