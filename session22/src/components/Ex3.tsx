// import React from 'react'
import { Card } from 'antd';
import { Button, Flex } from 'antd';
// const { Meta } = Card;
export default function Ex3() {
    return (
        <>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <div className='flex'>
                    <Button type="primary">Primary Button</Button>
                    <Button type="text">Text Button</Button>

                </div>
                
            </Card>
        </>
    )
}
