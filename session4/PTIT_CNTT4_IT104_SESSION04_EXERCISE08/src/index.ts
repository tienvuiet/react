type Product = {
    readonlyId: string,
    name: string,
    price: number
}
let products: Product[] = [
    {
        readonlyId: "#123",
        name: "redmi note 13 pro 5g",
        price: 12
    },
    {
        readonlyId: "#423",
        name: "Iphone",
        price: 42
    },
]
type Orderitem = {
    product: Product,
    quantity: number
}
let orderItems: Orderitem[]=[   
    {
        product:products[0],
        quantity:3
    },
    {
        product:products[1],
        quantity:2
    }
]
type Order = {
    orderId: string,
    customerName: string,
    items: Orderitem[],
    note?: string
}
let order:Order[]=[ 
    {
        orderId:"#!$!@",
        customerName:"Vu Viet Tien",
        items:orderItems,
        note:"Giao sau 18h"
    }
] 
const calculateOrderTotal2 = (order: Order):number=> {
    let sum =0
    let sum2 = 0;
    order.items.forEach(e=>{    
        sum = e.product.price*e.quantity
        sum2 +=sum
    })
    return sum2

}
const calculateOrderTotal = (order: Order): string => {
    return order.items
        .map(e => `- ${e.product.name} x ${e.quantity} -> ${e.product.price * e.quantity} VND`)
        .join("\n");
};

const printOrder = (order: Order)=>{
    console.log(`
        Don hang: ${order.orderId}
        Khach hang: ${order.customerName}
        San pham: 
        ${calculateOrderTotal(order)}
        Tong Cong: ${calculateOrderTotal2(order)}
        Ghi chu : ${order.note}
        `);
    
}
printOrder(order[0])