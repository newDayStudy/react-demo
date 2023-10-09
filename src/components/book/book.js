import React, {useEffect, useState} from "react";
import book from '../../../mock/book.json'
import {List, Tabs} from "antd";
import RcBookContent from "./book_content";
import axios from "axios";
function RcBook(){
    let book_data = book.result
    const list = (data) => {
        return data.map(item => {
            return {
                key: item.id,
                label: item.catalog,
                children: <RcBookContent catalog_id={item.id} />
            }
        })
    }
    const [items, setItems] = useState(list(book_data) || [])

    useEffect(async () => {
        const res = await axios.get('http://localhost:4000/catalog')
        console.log(res)
        if (res.resultcode == 200) {
            setItems([...items, ...res.data.result])
        }
    }, []);

    return (
        <>
            <Tabs
                items={items}
            >
            </Tabs>
        </>
    )
}

export default RcBook
