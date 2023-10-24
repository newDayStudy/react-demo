import React, {useState, useEffect, useRef} from "react";
import {Link} from 'react-router-dom'
import {Breadcrumb} from 'antd'
const list = (num = 100)=> {
    const data = [];
    for (let i = 0; i < num; i++) {
        data.push({
            id: i+1,
            name: `第 ${i+1} 条列表`
        });
    }
    return data;
}

function RcBreadcrumb(){
    const virtualScroll = {
        border: 'solid 1px #eee',
        height: 500,
        overflow: 'auto'
    }
    const [visibleList, setVisibleList] = useState([])
    const [translateY, setTranslateY] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(10)
    const [virtualHeight, setVirtualHeight] = useState(100 * 50 - 500)
    const scrollRef = useRef()
    const data = list()
    useEffect(() => {
        console.log(startIndex)
        setVisibleList(data.slice(startIndex, startIndex + 10))
    }, [startIndex]);

    useEffect(() => {
        // 根据实际的滚动距离，动态计算列表开始索引
        setStartIndex(Math.floor(translateY / 50))
    }, [translateY]);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.onscroll = function (e) {
                const scrollTop = this.scrollTop
                setTranslateY(scrollTop)
            }
        }
    }, [scrollRef]);

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/home'>首页</Link>
                    </Breadcrumb.Item>
                <Breadcrumb.Item>订单</Breadcrumb.Item>
                <Breadcrumb.Item>订单详情</Breadcrumb.Item>
            </Breadcrumb>

            <div className="virtual-scroller" style={virtualScroll} ref={scrollRef}>
                <ul
                    style={{transform: 'translateY('+ translateY+'px)', margin:0,padding:0,listStyle: 'none'}}
                >
                    {
                        visibleList.map(item => {
                            return <li style={{ height: 50, lineHeight: '50px',background: 'red',borderBottom: '1px solid #000',boxSizing: 'border-box'}} key={item.id}>{item.name}</li>
                        })
                    }
                </ul>
                <div style={{height: virtualHeight + 'px'}}></div>
            </div>

        </div>
    )
}

export default RcBreadcrumb
