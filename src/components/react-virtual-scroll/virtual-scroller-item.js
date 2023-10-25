import React, {useEffect, useRef} from 'react'

function VirtualScrollerItem(props){
    const item = props.item
    const liRef = useRef()
    useEffect(() => {
        if (liRef.current) {
            props.updateItemHeight({index: item.id, height: liRef.current.getBoundingClientRect().height})
        }
    }, [liRef])
    return (
        <li ref={liRef} className='dynamic-virtual-item' style={{height: 'auto'}}>
            {props.children}
        </li>
    )
}

export default VirtualScrollerItem
