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
                img[i].style.transform = `rotateY(${i * deg}deg)  translate3d(0, 0, -230px)`
            }
        }

        return () => {

        }
    }, [aaa]);
    return (
        <div style={{position: 'relative', width: '100%', height: '100%'}}>
            <div className="wrapper_" ref={aaa}>
                <div className="parent animate">
                    <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.etXoe50HSDus2k23KHperAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7" alt="" className="child" draggable="false"/>
                    <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.v3vzmbMb_HA57HlyOh_w1gHaE9?w=280&h=187&c=7&r=0&o=5&pid=1.7" alt="" className="child" draggable="false"/>
                    <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.xvMB5Q6dWfa94MGRarne-wHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7" alt="" className="child" draggable="false"/>
                    <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.xvMB5Q6dWfa94MGRarne-wHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7" alt="" className="child" draggable="false"/>
                    <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.xvMB5Q6dWfa94MGRarne-wHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7" alt="" className="child" draggable="false"/>
                    <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.xvMB5Q6dWfa94MGRarne-wHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7" alt="" className="child" draggable="false"/>
                </div>
            </div>
        </div>

    )
}

export default Rc3d2
