const greetingWithWeather = (name, weather) =>{
    if(weather==="sunny"){
        console.log(`chao ${name}! Hom nay troi nang tuyet voi`);
    }else if(weather === "rainy"){
        console.log(`chao ${name}! Hom nay troi mua, hay mang theo o`);
    }else{
        console.log(`chao ${name}! Hom nay thoi tiet khong xac dinh`);
    }
}
greetingWithWeather("tien", "sunny");
