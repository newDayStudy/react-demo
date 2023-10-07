import React, {useEffect} from "react";
import './index.less'
function Rc3d () {
    const aaa = React.createRef()
    useEffect(() => {
        let timer = null
        if (aaa.current) {
            const img = document.querySelectorAll('.child')
            const parent = document.querySelector('.parent')
            const len = img.length
            const x = 50
            let cIndex = 2
            for (let i = 0; i < len;i++ ) {
                img[i].style.transition = '.5s'
                img[i].style.zIndex = len - i
                const d = Math.ceil(i / 2)
                if ( i % 2 == 0) {
                    img[i].style.transform = `translate3d(${(d) * x}px, 0, -${(d) * x}px)`
                } else {
                    img[i].style.transform = `translate3d(-${d * x}px, 0, -${d * x}px)`
                }
            }
            function fn1(){
                img[2].style.transform = `translate3d(0,0,0)`
                img[0].style.transform = `translate3d(-${x}px,0,-${x}px)`
                img[1].style.transform = `translate3d(${x}px,0,-${x}px)`
            }
            function fn2(){
                img[1].style.transform = `translate3d(0,0,0)`
                img[2].style.transform = `translate3d(-${x}px,0,-${x}px)`
                img[0].style.transform = `translate3d(${x}px,0,-${x}px)`
            }
            function fn3(){
                img[0].style.transform = `translate3d(0,0,0)`
                img[1].style.transform = `translate3d(-${x}px,0,-${x}px)`
                img[2].style.transform = `translate3d(${x}px,0,-${x}px)`
            }
            var arr = [fn1, fn2, fn3]
            var imgArr = [
                'https://tse3-mm.cn.bing.net/th/id/OIP-C.etXoe50HSDus2k23KHperAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7',
                'https://tse3-mm.cn.bing.net/th/id/OIP-C.v3vzmbMb_HA57HlyOh_w1gHaE9?w=280&h=187&c=7&r=0&o=5&pid=1.7',
                'https://tse1-mm.cn.bing.net/th/id/OIP-C.xvMB5Q6dWfa94MGRarne-wHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7',
                'https://tse4-mm.cn.bing.net/th/id/OIP-C.a9EvTUQaISuW5QrMlxK9PwHaE7?w=278&h=187&c=7&r=0&o=5&pid=1.7'
            ]
            timer = setInterval(() => {
                cIndex++
                if (cIndex > 2) {
                    cIndex = 0
                }
                // img[1].setAttribute('src', imgArr[cIndex])
                arr[cIndex]()
            }, 4000)
        }

        return () => {
            clearInterval(timer)
            timer = null
        }
    }, [aaa]);
    return (
        <div style={{position: 'relative', width: '100%', height: '100%'}}>
            <div className="wrapper_" ref={aaa}>
                <div className="parent">
                    <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.etXoe50HSDus2k23KHperAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7" alt="" className="child" draggable="false"/>
                    <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.v3vzmbMb_HA57HlyOh_w1gHaE9?w=280&h=187&c=7&r=0&o=5&pid=1.7" alt="" className="child" draggable="false"/>
                    <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.xvMB5Q6dWfa94MGRarne-wHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7" alt="" className="child" draggable="false"/>
                </div>
            </div>
        </div>

    )
}

export default Rc3d
