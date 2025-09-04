// import React from 'react'
import { Button, Flex } from 'antd';
export default function Ex1() {

    return (
        <>
            <Flex wrap gap="small">
                <Button type="primary" danger style={{ backgroundColor: "#0d6efd" }}>
                    Luu
                </Button>
                <Button type="primary" danger style={{ backgroundColor: "#6c757d" }}>
                    Huy
                </Button>
                <Button type="primary" danger style={{ backgroundColor: "#198754" }}>
                    Thanh cong
                </Button>
                <Button type="primary" danger style={{ backgroundColor: "#ffc107" }}>
                    Canh bao
                </Button>
                <Button danger>Default</Button>
                <Button type="dashed" danger>
                    Dashed
                </Button>
                <Button type="text" danger>
                    Text
                </Button>
                <Button type="link" danger style={{ textDecoration: "underline" }}>
                    Duong dan
                </Button>
            </Flex>
        </>
    )
}
