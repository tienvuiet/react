// import React from 'react'

import { useParams, useSearchParams } from "react-router-dom"
import { Button, Input, Space } from 'antd';
import { useState } from "react";
export default function Student() {
    const { name } = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    const test = () => {
        console.log(1111);
        setSearchParams({ studentName: inputValue })
    }
    return (
        <>
            <Space direction="vertical" size="middle">
                <Space.Compact style={{ width: '100%' }}>
                    <Input value={inputValue} onChange={handleChange} />
                    <Button onClick={test} type="primary">Submit</Button>
                </Space.Compact>
            </Space>
            <h2>Student: {name} </h2>
            <h2>Student Name: {searchParams.get("studentName")}</h2>
        </>
    )
}



// import { CopyOutlined } from '@ant-design/icons';
// import {
//     AutoComplete,
//     Button,
//     Cascader,
//     Col,
//     DatePicker,
//     Input,
//     InputNumber,
//     Row,
//     Select,
//     Tooltip,
// } from 'antd';
// import React from 'react';

// const { Option } = Select;

// const options = [
//     {
//         value: 'zhejiang',
//         label: 'Zhejiang',
//         children: [
//             {
//                 value: 'hangzhou',
//                 label: 'Hangzhou',
//                 children: [
//                     {
//                         value: 'xihu',
//                         label: 'West Lake',
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         value: 'jiangsu',
//         label: 'Jiangsu',
//         children: [
//             {
//                 value: 'nanjing',
//                 label: 'Nanjing',
//                 children: [
//                     {
//                         value: 'zhonghuamen',
//                         label: 'Zhong Hua Men',
//                     },
//                 ],
//             },
//         ],
//     },
// ];

// const App: React.FC = () => (
  
// );

// export default App;