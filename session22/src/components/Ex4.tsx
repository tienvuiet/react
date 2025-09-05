// import React from 'react'
import {  Select } from 'antd';

const { Option } = Select;
export default function Ex4() {
  return (
    <>
      <Select
          placeholder="Select a option and change input text above"
    
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
    </>
  )
}
