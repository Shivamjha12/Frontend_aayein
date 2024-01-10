const UserCard=({userDetails})=>{
    return(
    <div className="user-card">
        
        <div className="UserImage">
            <img className="userCardImageIcon" src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-human-man-profile-auto-user-30483.png?f=webp&w=256" alt="userImage" />
            
        </div>   
        <div className="userImage2">
            <p className="text-1xl font-bold">{userDetails.name}</p>    
            <p className="lastOnline">{userDetails.email}</p>
        </div>
    </div>
    )
}
export default UserCard;