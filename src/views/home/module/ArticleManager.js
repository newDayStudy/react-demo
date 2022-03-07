import React, { useState, useEffect } from 'react'
import { Table, Button, message, Tag } from 'antd'
import { getArticleList as getArticleListApi } from '@/api'
function ArticleManager() {
  const [articleList, setArticleList] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    showTotal: (total, range) => {
      return range[0] + '-' + range[1] + ' 共' + total + '条'
    },
    showQuickJumper: true,
    showSizeChanger: true,
    total: 0,
    size: 'large',
    showLessItems: true
  })
  const getArticleList = async () => {
    setLoading(true)
    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const res = await getArticleListApi(user)
      if (res.status == 200 && res.data.DataStatus.StatusCode == 100) {
        setArticleList(res.data.Data)
        setPagination({ ...pagination, total: res.data.Data.length })
      }
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getArticleList()
  }, [])
  const deleteArticle = index => {
    articleList.splice(index, 1)
    setArticleList([...articleList])
    const total = pagination.total - 1 || 0
    setPagination({ ...pagination, total: total })
    message.success('删除成功')
  }
  const editArticle = record => {
    message.success('修改成功')
  }
  const columns = [
    {
      title: '文章标题',
      dataIndex: 'ArticleTitle',
      ellipsis: true
    },
    {
      title: '作者',
      dataIndex: 'AuthorName',
      ellipsis: true
    },
    {
      title: '链接',
      dataIndex: 'ArticleUrl',
      ellipsis: true
    },
    {
      title: '摘要',
      dataIndex: 'ArticleSummary',
      ellipsis: true
    },
    {
      title: '标签',
      dataIndex: 'ArticleType',
      render(text) {
        return <Tag color="green">{text}</Tag>
      }
    },
    {
      title: '发布日期',
      dataIndex: 'ArticlePublishDateTime',
      ellipsis: true
    },
    {
      title: "操作",
      dataIndex: 'action',
      align: 'center',
      width: 200,
      fixed: 'right',
      render(text, record, index) {
        return (
          <span>
            <Button type="primary" style={{ marginRight: 10 }} onClick={() => editArticle(record)}>修改</Button>
            <Button onClick={() => deleteArticle(index)}>删除</Button>
          </span>
        )
      }
    }
  ]
  const onChange = (pagination) => {
    setPagination(pagination)
  }
  return (
    <div>
      <Button type="primary" style={{ marginBottom: 10 }}>新增</Button>
      <Table
        rowKey='ArticlePublishDateTime'
        dataSource={articleList}
        columns={columns}
        pagination={pagination}
        onChange={onChange}
        loading={loading}
      />
    </div>

  )
}
export default ArticleManager