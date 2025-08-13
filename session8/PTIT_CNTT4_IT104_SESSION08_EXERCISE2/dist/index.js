let check;
const checkCheck = (value) => {
    if (value === true) {
        console.log(`Xin chao`);
    }
    else {
        console.log(`tam biet`);
    }
};
checkCheck(check = true);
checkCheck(check = false);
