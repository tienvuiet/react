
interface User{
    firstName: string,
    secondName: string, 
}
function FormatName() {
  const user: User={
    firstName: "Vu Viet ",
    secondName: "Tien "
  }
  const formatName =(user:User):string=>{
    return `Ho va ten ${user.firstName + user.secondName}`
  }
  return (
    <div>
      <h3>{formatName(user)}</h3>
    </div>
  )
}

export default FormatName
