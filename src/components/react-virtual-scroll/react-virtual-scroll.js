
import React, {useRef, useState, useEffect} from 'react';
import './virtual-scroll.css'

function ReactVirtualScroll() {
    const create = (num = 100) => {
        let arr = []
        for(let i = 0; i < num; i++){
            arr.push({
                id: i,
                name: '第' + (i + 1) + '个列表'
            })
        }
        return arr
    }
    const list = create()
    const itemCount = 10, itemHeight = 50
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(itemCount + 2)
    const [containerHeight, setContainerHeight] = useState(itemCount * itemHeight)
    const [virtualHeight, setVirtualHeight] = useState(itemHeight * list.length)
    const [renderOffset, setRenderOffset] = useState(0)
    const [data, setData] = useState([])
    const scrollRef = useRef()

    useEffect(() => {
        setData(list.slice(startIndex, startIndex + (itemCount+2)))
    }, [startIndex]);
    useEffect(() => {
        setStartIndex(Math.ceil(renderOffset / itemHeight))
    }, [renderOffset])

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.onscroll = function (e) {
                const scrollTop = e.target.scrollTop
                setRenderOffset(scrollTop - (scrollTop % itemHeight))
            }
        }
    }, [scrollRef]);
    return (
        <div style={{overflow: 'hidden'}}>
            <div className="virtual-scroller" ref={scrollRef} style={{height: containerHeight}}>
                <div className="scrollbar" style={{height: virtualHeight}}></div>
                <ul className="virtual-content" style={{transform: 'translateY(' + renderOffset+ 'px)'}}>
                    {
                        data.map(item =>  <li key={item.id} className="virtual-item">{item.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default ReactVirtualScroll
