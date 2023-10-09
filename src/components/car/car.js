import React, {useEffect} from "react";
import carBrand from '../../../mock/carBrand.json'
import {List} from "antd";
import {throttle} from 'lodash'
function createChar(){
    let character = {}
    for (let i = 65, len=90; i<=len; i++) {
        character[String.fromCharCode(i)] = []
    }
    return character
}

function handleData (data, char) {
    data.forEach(item => {
        for (let key in char) {
            if (key == item.first_letter) {
                char[key].push(item)
            }
        }
    })
    return char
}

function RcCar(){
    const data = handleData(carBrand.result, createChar())
    const charRef = React.createRef()
    const contentRef = React.createRef()
    const charStyle = {
        display: 'flex',
        flexDirection: 'column'
    }
    let flag = true
    const move = (e) => {
        if (flag) return
        if (e.target.tagName == 'SPAN') {
            const letter = e.target.getAttribute('data-key')
            const ele = document.querySelector('.row-' + letter)
            contentRef.current.scrollTo({top: ele.offsetTop, behavior: 'smooth'})
        }
    }
    useEffect(() => {
        if (charRef.current && contentRef.current) {
            charRef.current.addEventListener('mousedown', () => {
                flag = false
            }, false)
            charRef.current.addEventListener('mousemove', throttle((e) => move(e), 300), false)
            charRef.current.addEventListener('mouseup', () => {
                flag = true
            })
        }
        return () => {
            if (charRef.current) {
                charRef.current.removeEventListener('mousemove', move)
                charRef.current.removeEventListener('mousedown', () => {
                    flag = false
                })
                charRef.current.removeEventListener('mouseup', () => {
                    flag = true
                })
            }
        }
    }, [charRef, contentRef]);

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden auto'}} ref={contentRef}>
            <div>
                {
                    Object.keys(data).map(key => {
                        return <div key={key} className={['row', 'row-'+key].join(' ')}>
                            <h3 style={{background: '#efefef', paddingLeft: 10}}>{key}</h3>
                            <div style={charStyle}>
                                {
                                    data[key].map(item => {
                                        return <span className="row-brand" key={item.id} >{ item.brand_name}</span>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>

            <div className="brand-fixed" ref={charRef}>
                {
                    Object.keys(data).map(key => {
                        return <div key={key} style={charStyle} >
                        <span data-key={key}>
                            { key }
                        </span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default RcCar
