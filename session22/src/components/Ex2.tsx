// import React from 'react'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default function Ex2() {
    return (
        <>
            <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
            <br />
            <br />
            <Input placeholder="default size" prefix={<UserOutlined />} />
            <br />
            <br />
            <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
        </>
    )
}
