import React, {useEffect, useState} from "react";
import * as echarts from 'echarts'
function RcChartCenter(props={}){
    const chartEef = React.createRef()
    useEffect(() => {
        if (chartEef.current) {
            const chart = echarts.init(chartEef.current)
            chart.setOption({
                title: {
                    text: '瀑布图'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function (params) {
                        let tar;
                        if (params[1] && params[1].value !== '-') {
                            tar = params[1];
                        } else {
                            tar = params[2];
                        }
                        return tar && tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                grid: {
                    bottom: 0,
                    left:0,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: (function () {
                        let list = [];
                        for (let i = 1; i <= 11; i++) {
                            list.push('Nov ' + i);
                        }
                        return list;
                    })()
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Placeholder',
                        type: 'bar',
                        stack: 'Total',
                        silent: true,
                        itemStyle: {
                            borderColor: 'transparent',
                            color: 'transparent'
                        },
                        emphasis: {
                            itemStyle: {
                                borderColor: 'transparent',
                                color: 'transparent'
                            }
                        },
                        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
                    },
                    {
                        name: 'Income',
                        type: 'bar',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
                    },
                    {
                        name: 'Expenses',
                        type: 'bar',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'bottom'
                        },
                        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
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

export default RcChartCenter
