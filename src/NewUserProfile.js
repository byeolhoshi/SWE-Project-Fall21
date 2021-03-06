import './UserProfile.css';
import {Link } from 'react-router-dom';
import { useState } from 'react';

function NewUserProfile() {
    const [data, setData] = useState(null)
    function getData(val){
        setData(val.target.value)
    }
    return (
        <div className= "Background">
            <div className= "Header">
                <h1 className= "Title">Profile</h1>
            </div>

            <div className="Form" >
                <p>Major: </p>
                <input type="text" onChange={getData} />
                <p>Classification (Freshman, Sophomore, Junior, Senior): </p>
                <select classname="Form-field" name="classificationList" id="classificationList" >
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                </select>
                <p>User type (Student or Organization): </p>
                <select classname="Form-field" name="classificationList" id="classificationList" >
                    <option value="student">Student</option>
                    <option value="organization">Organization</option>
                </select>
            </div>
                <div className="Outer-button">
                <Link to="/returnUserProfile">
                    <button>
                        <div className="Inner-button">
                            <h4 className= "Text">Submit</h4>
                        </div>
                    </button>
                    </Link>
                </div>
        </div>
    );
}

export default NewUserProfile;
