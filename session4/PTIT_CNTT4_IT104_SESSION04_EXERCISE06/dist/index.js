let getFinalPrice = [
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
];
const printProductInfo = (products) => {
    products.forEach(product => {
        var _a;
        console.log(`
    ten: ${product.name}
    gia goc: ${product.price} VND
    Gia sau giam: ${product.price - ((_a = product.discount) !== null && _a !== void 0 ? _a : 0)}
    danh muc: ${product.category.name}
    `);
    });
};
printProductInfo(getFinalPrice);
