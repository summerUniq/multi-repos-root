<template>
    <div class="com-container">
        <div class="com-chart" ref="stock_ref"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null,
      currentIndex: 0,
      timerId: null,
      titleFontSize: 0
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
    clearInterval(this.timerId)
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.stock_ref, 'chalk')
      const initOption = {
        title: {
          text: '| 库存销售量',
          left: 20,
          top: 20
        }
      }
      this.chartInstance.setOption(initOption)
      this.chartInstance.on('mouseover', () => {
        clearInterval(this.timerId)
      })
      this.chartInstance.on('mouseout', () => {
        this.startInterval()
      })
    },
    async getData () {
      const { data: ret } = await this.$http.get('stock')
      this.allData = ret
      this.updateChart()
      this.startInterval()
    },
    updateChart () {
      const centerPoniters = [
        ['18%', '40%'],
        ['50%', '40%'],
        ['82%', '40%'],
        ['34%', '75%'],
        ['66%', '75%']
      ]
      const colorArrs =
      [
        ['#4FF778', '#0BA82C'],
        ['#E5DD45', '#E8B11C'],
        ['#E8821C', '#E55445'],
        ['#5052EE', '#AB6EE5'],
        ['#23E5E5', '#2E72BF']
      ]

      const start = this.currentIndex * 5
      const end = (this.currentIndex + 1) * 5

      const showData = this.allData.slice(start, end)
      const innerRaduis = this.titleFontSize * 2
      const outterRadius = innerRaduis * 1.125

      const seriesArr = showData.map((item, index) => {
        return {
          type: 'pie',
          radius: [outterRadius, innerRaduis],
          center: centerPoniters[index],
          hoverAnimation: false,
          data: [{
            name: item.name + '\n\n' + item.sales,
            value: item.sales,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: colorArrs[index][0]
                },
                {
                  offset: 1,
                  color: colorArrs[index][1]
                }
              ])
            }
          }, {
            value: item.stock,
            itemStyle: {
              color: '#333843'
            }
          }],
          labelLine: {
            show: false
          },
          label: {
            show: true,
            position: 'center',
            color: colorArrs[index][0]
          }
        }
      })
      const updateOption = {
        series: seriesArr
      }
      this.chartInstance.setOption(updateOption)
    },
    screenAdapter () {
      this.titleFontSize = this.$refs.stock_ref.offsetWidth / 100 * 3.6
      const innerRaduis = this.titleFontSize * 2
      const outterRadius = innerRaduis * 1.125
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: this.titleFontSize
          }
        },
        series: [{
          radius: [outterRadius, innerRaduis],
          label: {
            fontSize: this.titleFontSize / 2
          }
        },
        { radius: [outterRadius, innerRaduis], label: { fontSize: this.titleFontSize / 2 } },
        { radius: [outterRadius, innerRaduis], label: { fontSize: this.titleFontSize / 2 } },
        { radius: [outterRadius, innerRaduis], label: { fontSize: this.titleFontSize / 2 } },
        { radius: [outterRadius, innerRaduis], label: { fontSize: this.titleFontSize / 2 } }
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    startInterval () {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        this.currentIndex++
        if (this.currentIndex > 1) {
          this.currentIndex = 0
        }
        this.updateChart()
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
