const createUser = (name,age=18,role="user")=>{
     console.log(`name: ${name}`);
     console.log(`age: ${age}`);
     console.log(`role: ${role}`);
}
createUser("ceo");
createUser("dev",19,"admin")