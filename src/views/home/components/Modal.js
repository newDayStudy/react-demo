import React from 'react'
import { Modal } from 'antd'
function MyModal(props) {
  const handleCancel = e => {
    props.setVisible(false)
  }
  return (
    <Modal
      title={props.title || '模态框'}
      visible={props.visible}
      onOk={props.handler}
      onCancel={handleCancel}
    >
      {props.component(props)}
    </Modal>
  )
}
export default MyModal