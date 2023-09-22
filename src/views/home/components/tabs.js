import React from 'react'
import {Tabs} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {remove, setKey} from "@/redux/modules/tabs-store";

function OpenTabs(){
    const tabs = useSelector((state) => state.tabs.tabs)
    const activeKey = useSelector((state) => state.tabs.curTabsKey)
    const router= useNavigate()
    const dispatch = useDispatch()
    const onChange = (key) => {
        router(key)
        dispatch(setKey({key: key}))
    }
    const onEdit = (targetKey, action) => {
        if (action == 'remove') {
            dispatch(remove({key:targetKey, router}))
        }
    }
    return (
       <div style={{background: '#fff'}}>
           <Tabs
               hideAdd
               size="small"
               type="editable-card"
               activeKey={activeKey}
               items={ tabs }
               tabBarGutter={0}
               onChange={onChange}
               onEdit={onEdit}
           />
       </div>
    )
}

export default OpenTabs
