const User = {
    name: "John",
    age: 25,
    location: {
        city: "Hanoi",
        country: "VietNam"
    },
    contact: {
        email: "john@example.com",
        phone: "09131231"
    },
    jod: {
        title: "Developer",
        company: "Tech Corp"
    }

}
const displayUserInfo = (user) => {
    const  {
        name,
        age,
        location: {
            city = "unknown", country ="unknown"
        } = {},
        contact:{
            email = "unknown", phone ="unknown"
        }={},
        jod:{
            title ="unknown", company = "unknown"
        }={},
    } = user;
    console.log(`${name} is ${age} year old live in ${city},${country} work as ${title} at ${company}, and can be contact ${email} or ${phone} `);
    
}
displayUserInfo(User);
displayUserInfo({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam" } })