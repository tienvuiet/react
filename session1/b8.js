const chenMang = (arr1,arr2, position)=>{
      if(position<0||position>arr1.length){
        console.log(`vi tri khong hop le`); 
        return ;
      }
      const mang  = [
        ...arr1.slice(0,position),
        ...arr2,
        ...arr1.slice(position)
      ];
      console.log(mang);
}

console.log(chenMang([1,2,5,6],[3,4],2));

