import './Myprofile.css';
import ProfileGraph1 from './Graphone/ProfileGraph1';
import ProfileGraph2 from './Graphtwo/ProfileGraph2';
import ProfileGraph3 from './Graphthree/ProfileGraph3';
import UserPicture from './ProfilePic/UserPicture';
import StarRating from './Rating/StarRating';

function UserProfile(){
    return(
        <>
        <div className="profileContainer">
           <div className="profileContent">
               <div className="userPhoto">
                   <UserPicture />
               </div>
               <div className="usernameDisplay">
                   <p>user123</p>
               </div>
               <div className="ratingSection">
                   <StarRating />
               </div>
           </div>
        </div>
        </>
    )
}

export default UserProfile;
