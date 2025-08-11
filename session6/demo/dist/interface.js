//khoi tao lop trien khai tu cac interface
class mx {
    constructor(name) {
        this.name = name;
    }
    sale() {
        console.log(`Doing sale`);
    }
    marketing() {
        console.log(`doing marketing`);
    }
    dgmarketing() {
        console.log(`doing dgmarketing`);
    }
}
const result = new mx("rikkei education");
result.marketing();
