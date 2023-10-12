import React, {useEffect} from "react";
import $ from 'jquery'

const animate = {
    grid(){
        const tx = 200, ty = 200, tz= 200
        const firstX = -2 * tx;
        const firstY = -2 * ty;
        const firstZ = -2 * tz;
        $('.main .item').each(function(i) {
            const x = (i % 20) % 5 // x方向要增加的倍数
            const y = parseInt((i % 20) / 5)// y方向要增加的倍数
            const z = parseInt(i / 20)// z方向要增加的倍数
            console.log(x,y,z)
            $(this).css({
                transform: `translate3d(${firstX + x * tx}px, ${firstY + y * ty}px, ${firstZ + z * tz}px)`
            })
        })
    }
}

function Rc3d2 () {
    const aaa = React.createRef()
    useEffect(() => {
        if (aaa.current) {
            const img = $('.item')
            for (let i = 0,len=img.length; i <len; i++) {
                const x = (Math.random()-0.5)*2000;
                const y = (Math.random()-0.5)*2000;
                const z = (Math.random()-0.5)*2000;
                $(img[i]).css({
                    transform: `translate3d(${x}px, ${y}px, ${z}px)`
                })
                setTimeout(() => {
                    animate.grid()
                }, 1000)
            }
        }
    }, [aaa]);

    return (
        <div style={{position: 'relative', width: '100%', height: '100%', perspective: 1000,background:'#000'}}>
            <div className="main" ref={aaa}>
                {
                    new Array(60).fill(1).map((key, index) => {
                        return <div className="item" key={index} draggable="false">{index}</div>
                    })
                }
            </div>
        </div>

    )
}

export default Rc3d2
