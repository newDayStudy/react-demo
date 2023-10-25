import React, {useRef, useEffect, useState} from "react";
import './virtual-scroll.css'
import VirtualScrollerItem from "./virtual-scroller-item";
function DynamicVirtualScroller() {
    const create = (num=100) => {
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push({
                id: i,
                name: `第${i+1}个列表`,
                height: (Math.random() + 1) * 50
            })
        }
        return arr
    }
    const itemHeightCache = []
    let itemTopCache = []

    const init = (list) => {
        const totalHeight= list.reduce((prev, cur, index) => {
            itemHeightCache[index] = cur.height
            itemTopCache[index] = index == 0 ? 0 : itemTopCache[index - 1] + cur.height
            return prev + cur.height
        }, 0)
        return totalHeight
    }
    const scrollerRef = useRef()
    const list = create()
    const [startIndex, setStartIndex] = useState(0)
    const [data, setData] = useState([])
    const [scrollBarHeight, setScrollBarHeight] = useState(init(list))
    const [offsetY, setOffsetY] = useState(0)
    useEffect(() => {
        setOffsetY(itemTopCache[startIndex] || 0)
        setData(list.slice(startIndex, startIndex + 10))
    }, [startIndex])
    useEffect(() => {
        if (scrollerRef.current) {
            scrollerRef.current.onscroll = function () {
                const scrollTop = this.scrollTop
                let startIndex = getStartIndex(scrollTop)
                if (startIndex % 2 !== 0) {
                    setStartIndex(startIndex - 1)
                } else {
                    setStartIndex(startIndex)
                }
            }
        }
    }, [scrollerRef, data]);
    const updateItemHeight = ({index, height}) =>{
        itemHeightCache[index] = height
        const total = itemHeightCache.reduce((prev, cur) => {
            return prev + cur
        }, 0)
        setScrollBarHeight(total)

        let newItemTopCache = [0]
        for (let i = 1, l = itemHeightCache.length; i <l; i++) {
            newItemTopCache[i] = itemTopCache[i - 1] + itemHeightCache[i-1]
        }
        itemTopCache = [...newItemTopCache]
    }
    const getStartIndex = (scrollTop) => {
        let arr = itemTopCache
        let index = -1
        let left = 0,right = arr.length - 1,mid = Math.floor((left + right) / 2)
        while (right - left > 1) {
            if (scrollTop < arr[mid]) {
                right = mid
                mid = Math.floor((left + right) / 2)
            } else if (scrollTop > arr[mid]) {
                left = mid
                mid =Math.floor((left + right) / 2)
            } else {
                index = mid
                return index
            }
        }
        index = left
        return index
    }
    return (
        <div style={{overflow: 'hidden'}}>
            <div className='virtual-scroller' ref={scrollerRef} style={{height: 500}}>
                <div className='dynamic-virtual-height' style={{height: scrollBarHeight}}></div>
                <ul className='virtual-content' style={{ transform: 'translate3d(0, '+offsetY+'px, 0)'}}>
                    {
                        data.map(item =><VirtualScrollerItem key={item.id} item={item} updateItemHeight={updateItemHeight}>
                            <p>{item.name}</p>
                            <div style={{height: item.height}}></div>
                        </VirtualScrollerItem>)
                    }
                </ul>
            </div>
        </div>
    )
}


export default DynamicVirtualScroller
