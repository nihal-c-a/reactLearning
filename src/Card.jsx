import profilepic from  './assets/profile.jpg'
function Card(){
    return(
        <div className="card">
            <img src={profilepic} alt="Profile picture"></img>
            <h2 className='card-title'>hello nihal</h2>
            <p className='card-text'>I am software engineer intern</p>
        </div>
    );
}
export default Card