// import React from 'react'
import { Card } from 'antd';
import { Button } from 'antd';
// const { Meta } = Card;
export default function Ex3() {
    return (
        <>
            <div className='flex gap-1.5'>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" className='h-[200px] w-[230px]' />}
                >
                    <p className='text-center text-[20px] text-2xl mb-2 font-bold' >Macbook Air 2018</p>
                    <p>Tháng said mày không choi may không hiểu được đâu hi hi </p>
                    <div className='flex gap-1 justify-center'>
                        <Button type="primary">Primary Button</Button>
                        <Button type="text">Text Button</Button>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" className='h-[200px] w-[230px]' />}
                >
                    <p className='text-center text-[20px] text-2xl mb-2 font-bold' >Macbook Air 2018</p>
                    <p>Tháng said mày không choi may không hiểu được đâu hi hi </p>
                    <div className='flex gap-1 justify-center'>
                        <Button type="primary">Primary Button</Button>
                        <Button type="text">Text Button</Button>
                    </div>
                </Card>
            </div>
        </>
    )
}
