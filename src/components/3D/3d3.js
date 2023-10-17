import React, {useEffect} from "react";
import $ from 'jquery'
import {Button} from 'antd'
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
    },
    table(){
        const tX = 160, tY = 200
        const firstX = -4 * tX;
        const firstY = -2 * tY;
        $('.main .item').each(function (i) {
            const row = parseInt(i / 10)
            const column = i % 10
            $(this).css({
                transform: `translate3d(${firstX+ column * tX}px, ${firstY + row * tY}px, 0)`
            })
        })
    },
    squre(){
        let deg = 360 / 10
        $('.main .item').each(function (i){
            const row = i / 10
            if ( i < 10) {
                $(this).css({
                    transform: `rotateY(${i * deg}deg) translate3d(0,100px, 650px)`
                })
            }
            if ( i > 10 && i < 20) {
                $(this).css({
                    transform: `rotateX(${i * deg}deg) translate3d(0,100px, 700px)`
                })
            }
            if (i > 20 && i < 30) {
                $(this).css({
                    transform: `rotateY(30deg) rotateX(${i * deg}deg) translate3d(0,100px, 700px)`
                })
            }
            if (i > 30 && i < 40) {
                $(this).css({
                    transform: `rotateY(-30deg) rotateX(${i * deg}deg) translate3d(0,100px, 700px)`
                })
            }
            if (i > 50 && i < 60) {
                $(this).css({
                    transform: `rotateY(-60deg) rotateX(${i * deg}deg) translate3d(0,100px, 700px)`
                })
            }
            if (i > 40 && i < 50) {
                $(this).css({
                    transform: `rotateY(60deg) rotateX(${i * deg}deg) translate3d(0,100px, 700px)`
                })
            }
        })
    }
}

function Rc3d2 () {
    const aaa = React.createRef()
    useEffect(() => {
        if (aaa.current) {
            animate.squre()
        }
    }, [aaa]);
    const init = () => {
        const img = $('.item')
        for (let i = 0,len=img.length; i <len; i++) {
            const x = (Math.random()-0.5)*2000;
            const y = (Math.random()-0.5)*2000;
            const z = (Math.random()-0.5)*2000;
            $(img[i]).css({
                transform: `translate3d(${x}px, ${y}px, ${z}px)`
            })
        }
    }
    const onGrid = () => {
        init()
        setTimeout(() => {
            animate.grid()
        }, 2000)
    }
    const onTable = () => {
        init()
        setTimeout(() => {
            animate.table()
        }, 2000)
    }
    return (
        <div style={{position: 'relative', width: '100%', height: '100%', perspective: 1000,background:'#000'}}>
            <div className="main" ref={aaa}>
                {
                    new Array(60).fill(1).map((key, index) => {
                        return <div className="item" key={index} draggable="false">{index + 1}</div>
                    })
                }
            </div>
            <div>
                <Button onClick={onGrid}>Grid</Button>
                <Button onClick={onTable}>Table</Button>
            </div>
        </div>

    )
}

export default Rc3d2
