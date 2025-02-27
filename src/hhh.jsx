function User(props){
return ( props.isLoggedIn ? <h2>Welcome  : {props.username}</h2> : <h2>please try again</h2>)
// {
//     return <h2>Welcome  : {props.username}</h2>
// }else{
//     return <h2>please try again</h2>
// }
    
 
}
export default User;