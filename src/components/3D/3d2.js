import React, {useEffect} from "react";
import {Button} from "antd";
import './index.less'

const animate = {
    pp: function (eles){
        const parent = document.querySelector('.parent')
        parent.style.transform = `rotateX(0deg) rotateY(0deg)`
        for (let i=0;i<eles.length;i++) {
            eles[i].style.transform = `translate3d(0,0,-200px)`
        }
        for (let i = 0; i < eles.length; i++) {
            eles[i].style.transform = `rotateY(0deg) translate3d(0, 0, 0)`
        }
        let distance = 20,
            w = eles[0].offsetWidth,
            h = eles[0].offsetHeight;
        let rect = []
        let center = [Math.floor(Math.ceil(eles.length / 5) / 2) - 1, 2]
        for (let i = 0; i < 20; i++) {
            const row = Math.floor(i / 5)
            const val = i % 5
            rect.push([row, val])
        }
        rect.forEach(item => {
            const poi = item[0] * 5 + item[1]
            // 上下距离
            const top = (item[0] / center[0] - 1) * distance
            // 左右距离
            const left = (item[1] / center[1] - 1) * distance * 2
            // 如果行小，列小
            if (item[0] <= center[0] && item[1] < center[1]) {
                eles[poi].style.left = - Math.abs(item[1] - center[1]) * w + left + 'px'
                eles[poi].style.top = - Math.abs(item[0]  - center[0]) * h + top + 'px'
            }

            // 如果行小，列大
            if (item[0] <= center[0] && item[1] >= center[1]) {
                eles[poi].style.top = - Math.abs(item[0]  - center[0]) * h + top + 'px'
                eles[poi].style.left = Math.abs(item[1] - center[1]) * w + left + 'px'
            }
            // 如果行大，列小
            if (item[0] > center[0] && item[1] < center[1]) {
                eles[poi].style.left = -Math.abs(item[1] - center[1]) * w + left + 'px'
                eles[poi].style.top = Math.abs(item[0]  - center[0]) * h + top + 'px'
            }
            // 如果行大，列大
            if (item[0] > center[0] && item[1] >= center[1]) {
                eles[poi].style.top = Math.abs(item[0]  - center[0]) * h + top + 'px'
                eles[poi].style.left = Math.abs(item[1] - center[1]) * w + left + 'px'
            }
        })
    },
    css3:function (eles){
        const parent = document.querySelector('.parent')
        const len = eles.length
        let deg = 360 / len
        for (let i = 0; i < len;i++ ) {
            eles[i].style.top = 0
            eles[i].style.left = 0
            eles[i].style.zIndex = len - i
            eles[i].style.transform = `rotateY(${i * deg}deg)  translate3d(0, 0, 200px)`
        }
        let drag = false
        let startX = 0, startY=0
        document.addEventListener('mousedown', function (e) {
            drag = true
            startX = e.clientX
            startY = e.clientY
        }, false)
        document.addEventListener('mousemove', function (e) {
            if (drag) {
                const nowX = e.clientX
                const nowY = e.clientY
                // const radian = Math.atan2(Math.abs(nowY - startY), Math.abs(nowX - startX))
                // const angle = 180 / Math.PI * radian
                // parent.style.transform = `rotateY(${angle}deg)`
                const degX = Math.PI / 180 * Math.abs(nowX - startX)
                const degY = Math.PI / 180 * Math.abs(nowY - startY)
                // console.log(degX, degY)
                parent.style.transform = `rotateX(${degY * 20}deg) rotateY(${degX * 100}deg)`
            }
        }, false)
        document.addEventListener('mouseup', function (e) {
            drag = false
            startX = e.clientX
            startY = e.clientY
        }, false)
    }
}

function Rc3d2 () {
    const aaa = React.createRef()
    useEffect(() => {
        if (aaa.current) {
            const img = document.querySelectorAll('.child')
            animate.pp(img)
        }
    }, [aaa]);

    const pp = () => {
        const img = document.querySelectorAll('.child')
        animate.pp(img)
    }

    const yz = () => {
        const img = document.querySelectorAll('.child')
        animate.css3(img)
    }
    return (
        <div style={{position: 'relative', width: '100%', height: '100%'}}>
            <div className="wrapper_" ref={aaa}>
                <div className="parent animate parent2">
                    {
                        new Array(20).fill(1).map((key, index) => {
                            return <div className="child" key={index} draggable="false">{index}</div>
                        })
                    }

                </div>
                <Button onClick={pp}>平铺</Button>
                <Button onClick={yz}>圆柱</Button>
            </div>
        </div>

    )
}

export default Rc3d2
