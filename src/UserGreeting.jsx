function UserGreeting(props){
    if(props.isLoggedIn){ 
    return(
        <p>welcome {props.userName}</p>
    );
}

}
export default UserGreeting