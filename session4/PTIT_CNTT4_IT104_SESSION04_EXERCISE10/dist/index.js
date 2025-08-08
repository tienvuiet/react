let products = [
    { readonlyId: "#P001", name: "Áo sơ mi", price: 500000 },
    { readonlyId: "#P002", name: "Quần jean", price: 400000 },
    { readonlyId: "#P003", name: "Váy hoa", price: 700000 },
];
let invoice = {
    invoiceId: "#INV001",
    createdAt: new Date("2024-05-14"),
    orders: [
        {
            orderId: "#ORD001",
            customerName: "Nguyễn Văn A",
            isPaid: true,
            items: [
                { product: products[0], quantity: 2 },
                { product: products[1], quantity: 1 },
            ],
        },
        {
            orderId: "#ORD002",
            customerName: "Trần Thị B",
            isPaid: false,
            items: [
                { product: products[2], quantity: 1, note: "size M" },
            ],
        },
    ],
};
const calculateInvoiceTotal = (invoice) => {
    return invoice.orders.reduce((total, order) => {
        return (total +
            order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0));
    }, 0);
};
const getUnpaidOrders = (invoice) => {
    return invoice.orders.filter(order => !order.isPaid);
};
const printInvoice = (invoice) => {
    console.log(`HÓA ĐƠN: ${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt.toISOString().split("T")[0]}\n`);
    invoice.orders.forEach(order => {
        console.log(`ĐƠN HÀNG: ${order.orderId} - ${order.customerName}`);
        order.items.forEach(item => {
            const total = item.product.price * item.quantity;
            const noteText = item.note ? ` (note: ${item.note})` : "";
            console.log(`- ${item.product.name} x ${item.quantity} -> ${total.toLocaleString()} VND${noteText}`);
        });
        const orderTotal = order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        console.log(`Tổng đơn: ${orderTotal.toLocaleString()} VND`);
        console.log(`Trạng thái: ${order.isPaid ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}\n`);
    });
    console.log(`>> Tổng cộng hóa đơn: ${calculateInvoiceTotal(invoice).toLocaleString()} VND`);
};
printInvoice(invoice);
console.log("Đơn chưa thanh toán:", getUnpaidOrders(invoice));
