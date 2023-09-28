import React from "react";
import {List} from "antd";
import joke from '.././../../mock/joke.json'
function RcLayout(){
    const joke_json = joke.result.data
    return (
        <List
            size='small'
            dataSource={joke_json}
            renderItem={(item) => <List.Item>{ item.content }</List.Item>}
        ></List>
    )
}

export default RcLayout
