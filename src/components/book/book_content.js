
import React, {useEffect, useState} from "react";
import {List} from "antd";
import book_content from "../../../mock/book_content.json";
import book from "../../../mock/book.json";
import axios from "axios";
function RcBookContent(props){
    const data = book_content.result.data
    const [list, setList] = useState(data)
    const renderItem = (item, index) => {
        return <List.Item key={index}
              extra={
                  <img
                      width={100}
                      alt="logo"
                      src={item.img}
                  />
              }
        >
            <List.Item.Meta
                avatar={item.sub1}
                description={item.catalog}
            >
            </List.Item.Meta>
            {item.sub2}
        </List.Item>
    }

    useEffect(async () => {
        let isMounted = true
        if (props.catalog_id) {
            try {
                const res = await axios.get('http://localhost:4000/query', {
                    params: {
                        catalog_id: props.catalog_id
                    }
                })
                console.log(res)
                if (res.data.resultcode == 200) {
                    setList(res.data.result.data)
                }
            } catch (err) {
                console.log(err)
            }
        }
        return () => {
            isMounted = false
        }
    }, [props.catalog_id])

    return (
        <>
            <List
                itemLayout='vertical'
                dataSource={list}
                renderItem={renderItem}
            >
            </List>
        </>
    )
}


export default RcBookContent
