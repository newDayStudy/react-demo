import React, {useEffect, useState} from "react";
import * as echarts from 'echarts'
function RcChartRight(props={}){
    const chartEef = React.createRef()
    useEffect(() => {
        if (chartEef.current) {
            const chart = echarts.init(chartEef.current)
            chart.setOption({
                title: {
                    text: '扇形图',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                grid: {
                    left:0,
                    bottom:0,
                    right:0,
                    containLabel: true
                },
                series: [
                    {
                        name: 'Radius Mode',
                        type: 'pie',
                        // radius: [20, 140],
                        center: ['50%', '60%'],
                        itemStyle: {
                            borderRadius: 5
                        },
                        label: {
                            show: true
                        },
                        data: [
                            { value: 40, name: 'rose 1' },
                            { value: 33, name: 'rose 2' },
                            { value: 28, name: 'rose 3' },
                            { value: 22, name: 'rose 4' },
                            { value: 20, name: 'rose 5' },
                            { value: 15, name: 'rose 6' },
                            { value: 12, name: 'rose 7' },
                            { value: 10, name: 'rose 8' }
                        ]
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

export default RcChartRight
