<template>
    <div class="com-container">
        <div class="com-chart" ref="rank_ref"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null,
      startValue: 0,
      endValue: 9,
      timer: null
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
      this.chartInstance = this.$echarts.init(this.$refs.rank_ref, 'chalk')
      const initOption = {
        title: {
          text: '| 地区销售排行',
          top: 20,
          let: 20
        },
        grid: {
          top: '40%',
          left: '5%',
          bottom: '5%',
          right: '5%',
          containLabel: true
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value',
          name: '销售金额（万）'
        },
        series: [{
          type: 'bar'
        }]
      }
      this.chartInstance.setOption(initOption)
      this.chartInstance.on('mouseover', () => { clearInterval(this.timer) })
      this.chartInstance.on('mouseout', () => { this.startInterval() })
    },
    async getData () {
      const { data: ret } = await this.$http.get('rank')
      this.allData = ret
      this.allData.sort((a, b) => { return b.value - a.value })
      this.updateChart()
    },
    updateChart () {
      const colorArr = [
        ['#0ba82c', '#4ff778'],
        ['#2e72bf', '#23e5e5'],
        ['#5052ee', '#ab6ee5']
      ]
      const xAxisData = this.allData
        .map((v) => v.name)
      const yAxisData = this.allData
        .map(v => v.value)
      const updateOption = {
        xAxis: {
          data: xAxisData
        },
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue
        },
        series: [{
          data: yAxisData,
          itemStyle: {
            color: arg => {
              let targetColorArr = colorArr[0]

              if (arg.value >= 300) {
                targetColorArr = colorArr[0]
              } else if (arg.value >= 200) {
                targetColorArr = colorArr[1]
              } else {
                targetColorArr = colorArr[2]
              }

              return new this.$echarts.graphic
                .LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: targetColorArr[0]
                  },
                  {
                    offset: 1,
                    color: targetColorArr[1]
                  }
                ])
            },
            barBorderRadius: [20, 20, 0, 0]
          }
        }]
      }
      this.chartInstance.setOption(updateOption)
    },
    screenAdapter () {
      const titleFontSize = this.$refs.rank_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize
          }
        },
        legend: {
          itemWidth: titleFontSize / 2,
          itemHeight: titleFontSize / 2,
          itemGap: titleFontSize / 2,
          textStyle: {
            fontSize: titleFontSize / 2
          }

        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    startInterval () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        this.startValue++
        this.endValue++
        if (this.endValue > this.allData.length - 1) {
          this.startValue = 0
          this.endValue = 9
        }
        this.updateChart()
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
