import './UserProfile.css';
import {Link } from 'react-router-dom';

function NewUserProfile() {
    return (
        <div className= "Background">
            <div className= "Header">
                <h1 className= "Title">Profile</h1>
            </div>

            <div className="Form" >
                <p>Name: </p>
                <div className="Form-field"></div>
                <p>Major: </p>
                <div className="Form-field"></div>
                <p>Classification (Freshman, Sophomore, Junior, Senior): </p>
                <div className="Form-field"></div>
                <p>User type (Student or Organization): </p>
                <div className="Form-field"></div>
            </div>
            <div className="Align-buttons" >
                <div className="Right-outer-button">
                    <button>
                        <div className="Inner-button">
                            <h4 className= "Text">Submit  </h4>
                        </div>
                    </button>
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
        </div>
    );
}

export default NewUserProfile;
