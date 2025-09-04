// import React from 'react'

import { Button } from "antd";
import Input from "antd/es/input/Input";

export default function Todo() {
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="w-[1500px] border">
                    <h3>Danh sach cong viec</h3>
                    <div>   
                       <Input/>
                       <Button/>
                    </div>
                </div>

            </div>
        </>
    )
}
