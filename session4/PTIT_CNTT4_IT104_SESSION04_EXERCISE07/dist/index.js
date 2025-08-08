const checkChuoiSo = (value) => {
    return !isNaN(Number(value));
};
const toNumber = (value) => {
    return Number(value);
};
const checkPrime = (value) => {
    if (value < 2)
        return false;
    for (let i = 2; i < Math.sqrt(value); i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
};
const processInput = (value) => {
    if (typeof value === "boolean") {
        if (value === true) {
            console.log(`Gia tri la ${value}- tien hanh xu ly`);
        }
        else {
            console.log(`Gia tri la ${!value}- tien hanh xu ly`);
        }
    }
    else if (typeof value === "string") {
        if (checkChuoiSo(value)) {
            console.log(toNumber(value) * toNumber(value));
        }
        else {
            const matches = value.match(/[a-zA-Z]/g);
            const count = matches ? matches.length : 0;
            console.log(`${count} ki tu chu cai`);
        }
    }
    else {
        if (checkPrime(value)) {
            console.log(`la so nguyen to`);
        }
        else {
            console.log(`ko phai so nguyen to`);
        }
    }
};
processInput(12);
processInput("123abc");
processInput(true);
