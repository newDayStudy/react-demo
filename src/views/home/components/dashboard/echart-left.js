import React, {useEffect, useState} from "react";
import * as echarts from 'echarts'
function RcChartLeft(props={}){
    const chartEef = React.createRef()
    useEffect(() => {
        if (chartEef.current) {
            console.log(chartEef.current)
            const chart = echarts.init(chartEef.current)
            chart.setOption({
                title: {
                    text: '流光特效'
                },
                grid:{
                    bottom: 0,
                    left:0,
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    boundaryGap: false
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line',
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(24,144,255,.5)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(24,144,255,1)' // 100% 处的颜色
                                }],
                            }
                        },
                        symbol:'circle',
                        lineStyle: {
                            color: 'transparent'
                        },
                        animation: false
                    },
                    {
                        type: 'lines',
                        smooth: false,
                        polyline: false,
                        coordinateSystem:'cartesian2d',
                        data: [
                            {
                                coords: [['Mon', 150], ['Tue', 230]]
                            },
                            {
                                coords: [['Tue', 230], ['Wed', 224]]
                            },
                            {
                                coords: [['Wed', 224], ['Thu', 218]]
                            },
                            {
                                coords: [['Thu', 218], ['Fri', 135]]
                            },
                            {
                                coords: [['Fri', 135], ['Sat', 147]]
                            },
                            {
                                coords: [['Sat', 147], ['Sun', 260]]
                            }
                        ],
                        zlevel: 1,
                        effect: {
                            show: true,
                            loop: true,
                            symbolSize: 3,
                            smooth: true,
                            symbol: 'rect',
                        },
                        lineStyle: {
                            width: 0.5,
                            color: 'rgba(24,144,255,1)',
                        }
                    }
                ]
            })
        }
    }, [chartEef]);

    const [style, setStyle] = useState({
        width: '100%',
        height: '300px'
    })

    useEffect(() => {
        if (props.style){
            setStyle({...style}, ...props.style)
        }
    }, [props.style]);

    return (
        <div ref={chartEef} style={style}></div>
    )
}

export default RcChartLeft
