import './UserProfile.css';
import ACM from './ACM.png';
import {Link } from 'react-router-dom';

function ReturningUserProfile() {
    return (
        <div className= "Background">
            <div className= "Header">
                <h1 className= "Title">Profile</h1>
            </div>
            <div className="Align-buttons">
                <div className= "User-info">
                    <h2 className= "Subtitle">Welcome back John Doe!</h2>
                    <h3 className= "Text">Classification: Junior, Computer Science major</h3>
                    <h3 className= "Text">Club match: ACM</h3>
                </div>
                <Link to="/newUserProfile">
                        <div className="Inner-button">
                            <h4 className= "Text">Update Profile</h4>
                        </div>
                    </Link>
            </div>
            <div className= "Org-info">
                <img src={ACM} alt=""/> <h3 className= "Text">Association of Computing Machinery, Howard Chapter</h3> 
                <h3 className= "Text">Contact Information:</h3>
                <h3 className= "Text-link">acm@scs.howard.edu</h3>
                <h3><a
                className="Text-link"
                href="https://twitter.com/ACMHU"
                target="_blank"
                rel="noopener noreferrer"
                >
                twitter.com/ACMHU
                </a></h3>
                <h3><a
                className="Text-link"
                href="https://www.instagram.com/acmhu/"
                target="_blank"
                rel="noopener noreferrer"
                >
                instagram.com/acmhu/
                </a></h3>
                <h3><a
                className="Text-link"
                href="https://web.groupme.com/join_group/54153253/amEHm3MR"
                target="_blank"
                rel="noopener noreferrer"
                >
                web.groupme.com/join_group/54153253/amEHm3MR
                </a></h3>
            </div>
            <div className="Outer-button">
            <Link to="/homepage">
                <button>
                    <div className="Inner-button">
                        <h4 className= "Text">Home Page</h4>
                    </div>
                </button>
                </Link>
            </div>
        </div>
    );
}

export default ReturningUserProfile;
