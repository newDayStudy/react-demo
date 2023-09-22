import React, {useState} from "react";
import { SearchOutlined ,DownloadOutlined} from '@ant-design/icons';
import { Button, Space, Tooltip, Divider ,Radio } from 'antd';
function RcButton() {
    const [size, setSize] = useState('large')
    return (
        <div>
            <Divider orientation="left" plain>按钮类型</Divider>
            <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
            <Divider orientation="left" plain>图标按钮</Divider>
            <Space direction="vertical">
                <Space wrap>
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="primary" shape="circle">
                        A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                </Space>
                <Space wrap>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Button icon={<SearchOutlined />} href="https://www.google.com" />
                </Space>
            </Space>
            <Divider orientation="left" plain/>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <Divider orientation="left" plain>
                Preview
            </Divider>
            <Space direction="vertical">
                <Space wrap>
                    <Button type="primary" size={size}>
                        Primary
                    </Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>
                        Dashed
                    </Button>
                </Space>
                <Button type="link" size={size}>
                    Link
                </Button>
                <Space wrap>
                    <Button type="primary" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                        Download
                    </Button>
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>
                        Download
                    </Button>
                </Space>
            </Space>
            <Divider orientation="left" plain>不可用状态</Divider>
            <Space direction="vertical">
                <Space>
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>
                        Primary(disabled)
                    </Button>
                </Space>
                <Space>
                    <Button>Default</Button>
                    <Button disabled>Default(disabled)</Button>
                </Space>
                <Space>
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>
                        Dashed(disabled)
                    </Button>
                </Space>
                <Space>
                    <Button type="text">Text</Button>
                    <Button type="text" disabled>
                        Text(disabled)
                    </Button>
                </Space>
                <Space>
                    <Button type="link">Link</Button>
                    <Button type="link" disabled>
                        Link(disabled)
                    </Button>
                </Space>
                <Space>
                    <Button type="primary" href="https://ant.design/index-cn">
                        Href Primary
                    </Button>
                    <Button type="primary" href="https://ant.design/index-cn" disabled>
                        Href Primary(disabled)
                    </Button>
                </Space>
                <Space>
                    <Button danger>Danger Default</Button>
                    <Button danger disabled>
                        Danger Default(disabled)
                    </Button>
                </Space>
                <Space>
                    <Button danger type="text">
                        Danger Text
                    </Button>
                    <Button danger type="text" disabled>
                        Danger Text(disabled)
                    </Button>
                </Space>
                <Space>
                    <Button type="link" danger>
                        Danger Link
                    </Button>
                    <Button type="link" danger disabled>
                        Danger Link(disabled)
                    </Button>
                </Space>
                <Space className="site-button-ghost-wrapper">
                    <Button ghost>Ghost</Button>
                    <Button ghost disabled>
                        Ghost(disabled)
                    </Button>
                </Space>
            </Space>
            <Divider orientation="left" plain>block按钮</Divider>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Button type="primary" block>
                    Primary
                </Button>
                <Button block>Default</Button>
                <Button type="dashed" block>
                    Dashed
                </Button>
                <Button disabled block>
                    disabled
                </Button>
                <Button type="text" block>
                    text
                </Button>
                <Button type="link" block>
                    Link
                </Button>
            </Space>
        </div>
    )
}

export  default RcButton
