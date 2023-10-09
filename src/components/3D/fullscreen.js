import React, {useEffect} from "react";

function RcFullScreen(){
    const imgList = [
        'https://img.alicdn.com/imgextra/i3/O1CN01LsO1Bk20QbKpFTUQr_!!6000000006844-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i3/O1CN01uTWCLc1XOCOuA92H0_!!6000000002913-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i2/O1CN01nYe2Mn1ohkmBVyKpp_!!6000000005257-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i4/O1CN016lU3YJ1JdrJuFTcWt_!!6000000001052-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i4/O1CN014TNffn1nlaTfA98Fg_!!6000000005130-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i1/O1CN01sS5m781ya6JgLSaVk_!!6000000006594-0-tps-1500-1500.jpg',
    ]
    const dom = React.createRef()
    useEffect(() => {
        if (dom.current) {
            const parent = document.querySelector('.box')
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

                    const degX = Math.PI / 180 * (nowX - startX)
                    const degY = Math.PI / 180 * (nowY - startY)

                    parent.style.transform = `scale(4) rotateX(${degY * 20}deg) rotateY(${degX * 100}deg)`
                }
            }, false)
            document.addEventListener('mouseup', function (e) {
                drag = false
                startX = e.clientX
                startY = e.clientY
            }, false)
        }

    }, [dom]);
    return (
        <div style={{position: 'relative', width: '100%', height: '100%'}}>
            <div className="wrapper_" ref={dom} style={{ perspective: 140}}>
                <div className="box">
                    {
                        imgList.map((item,index) => {
                            return <div className='box-img' key={index}>
                                <img src={item}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RcFullScreen
