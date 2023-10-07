import React, {useEffect} from "react";
import './index.less'
function Rc3d2 () {
    const aaa = React.createRef()
    useEffect(() => {
        let timer = null
        if (aaa.current) {
            const img = document.querySelectorAll('.child')
            const parent = document.querySelector('.parent')
            const len = img.length
            let deg = 360 / len
            for (let i = 0; i < len;i++ ) {
                img[i].style.transition = '.5s'
                img[i].style.zIndex = len - i
                img[i].style.transform = `rotateY(${i * deg}deg)  translate3d(0, 0, 70px)`
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

        return () => {

        }
    }, [aaa]);

    return (
        <div style={{position: 'relative', width: '100%', height: '100%'}}>
            <div className="wrapper_" ref={aaa}>
                <div className="parent animate parent2">
                    {
                        new Array(20).fill(1).map((key, index) => {
                            return <div className="child" key={index} draggable="false"/>
                        })
                    }

                </div>
            </div>
        </div>

    )
}

export default Rc3d2
