import { useState } from "react"

type User = {
    id: number, 
    name: string,
    price: number,
    quantity: number
}

export default function Es2() {
  const [user] = useState<User>({   
    id: 1,
    name: "Vu viet tien",
    price: 1200,
    quantity: 12
  })
  return (
    <div>
      <h2>Thong tin san pham: </h2>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Price: {user.price}</p>
      <p>Quantity: {user.quantity}</p>
    </div>
  )
}
