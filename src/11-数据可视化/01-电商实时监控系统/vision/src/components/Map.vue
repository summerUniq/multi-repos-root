<template>
    <div class="com-container" @dblclick="revertMap">
        <div class="com-chart" ref="map_ref"></div>
    </div>
</template>

<script>
import { getProvinceMapInfo } from '@/utils/map_utils'
import axios from 'axios'
export default {
  data () {
    return {
      chartInstance: null,
      allData: null,
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
  },
  methods: {
    async initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.map_ref, 'chalk')
      const { data: chinaData } = await axios.get('http://localhost:8999/static/map/china.json')
      this.$echarts.registerMap('china', chinaData)
      const initOption = {
        title: {
          text: '| 商户分布与销量排行',
          left: 20,
          top: 20
        },
        geo: {
          type: 'map',
          map: 'china',
          top: '5%',
          bottom: '5%',
          itemStyle: {
            areaColor: '#2E72BF',
            borderColor: '#333'
          }
        },
        legend: {
          left: '5%',
          bottom: '5%',
          orient: 'vitural'
        }
      }
      this.chartInstance.setOption(initOption)
      this.chartInstance.on('click', async (params) => {
        console.log(params)
        const provinceName = params.name
        const provinceInfo = getProvinceMapInfo(provinceName)
        const { key, path } = provinceInfo
        const { data: ret } = await axios.get(`http://localhost:8999${path}`)
        this.$echarts.registerMap(key, ret)
        const newOption = {
          geo: {
            map: key
          }
        }
        this.chartInstance.setOption(newOption)
        this.getData()
      })
    },
    async getData () {
      const { data: ret } = await this.$http.get('map')
      this.allData = ret
      this.updateChart()
    },
    updateChart () {
      const legendData = this.allData.map(v => v.name)
      const seriesArr = this.allData.map((item) => {
        return {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          name: item.name,
          data: item.children,
          rippleEffect: {
            scale: 5,
            brushType: 'stroke'
          }
        }
      })
      const updateOption = {
        legend: {
          data: legendData
        },
        series: seriesArr
      }
      this.chartInstance.setOption(updateOption)
    },
    screenAdapter () {
      this.titleFontSize = this.$refs.map_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: this.titleFontSize
          }
        },
        legend: {
          itemHeight: this.titleFontSize / 2,
          itemWidth: this.titleFontSize / 2,
          itemGap: this.titleFontSize / 2,
          textStyle: {
            fontSize: this.titleFontSize / 2
          }
        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    revertMap () {
      this.chartInstance.setOption({
        geo: {
          map: 'china'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
