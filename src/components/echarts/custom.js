import React, {useEffect} from "react";
import * as echarts from 'echarts'
function RcCustom() {
    const chart = React.createRef()
    useEffect(() => {
        if (chart.current) {
            const ch = echarts.init(chart.current)
            ch.setOption({
                title: {
                    text: '自定义图表'
                },
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    min:0,
                    scale: true
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        type: 'custom',
                        data: [5, 20, 36, 10, 15, 20],
                        renderItem: function (params, api){
                            const size = api.size([0, api.value(1)])
                            const point = api.coord([api.value(0), api.value(1)]);
                            return {
                                type: 'rect',
                                shape: {
                                    x: point[0] - size[0] / 4,
                                    y: point[1],
                                    width: size[0] / 2,
                                    height: size[1]
                                },
                                style: api.style()
                            };
                        },
                        encode: {
                            x: [0],
                            y: 1,
                        },
                        label: {
                            show: true,
                            position: 'top'
                        }
                    }
                ]
            })
        }
    }, [chart]);
    return (
        <div>
            <div ref={chart} style={{ width: 400, height:400}}></div>
        </div>
    )
}

export default RcCustom
