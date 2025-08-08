type Product = {
    id: number;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
};
let getFinalPrice: Product[] = [
    {
        id: 12,
        name: "Nuoc cam",
        price: 12300,
        category: {
            id: "12",
            name: "nuoc loc"
        },
        discount: 12
    },
    {
        id: 23,
        name: "Nuoc mia",
        price: 422300,
        category: {
            id: "32",
            name: "nuoc "
        },
        discount: 42
    }
]
const printProductInfo = (products: Product[]) => {
    products.forEach(product => {
        console.log(`
    ten: ${product.name}
    gia goc: ${product.price} VND
    Gia sau giam: ${product.price - (product.discount??0)}
    danh muc: ${product.category.name}
    `);
    })
}
printProductInfo(getFinalPrice);