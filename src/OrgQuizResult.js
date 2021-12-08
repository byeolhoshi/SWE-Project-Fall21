import './StudentQuizResult.css';
import {Link } from 'react-router-dom';

function OrgQuizResult() {
    return (
        <div className= "Backcolor">
            <div className="Header">
                <h1 className= "Alert">You're all done!</h1>
            </div>
            <div className= "Org-message">
                <div className="Org-padding">
                    <h4 className= "Student-Text">
                        Thank you for taking our questionnaire.
                        If this is your first time using our application, your organisation will be added to our database. 
                        If you’re a returning user, your information will be updated to help match you to students better. 
                        <br></br>
                        <br></br>
                        HU, you know!
                    </h4>
                </div>
            </div>
            <div className="Align-buttons" >
                <div className="Right-outer-button">
                    <Link to="/homepage">
                        <button>
                            <div className="Inner-button">
                                <h4 className= "Student-Text">Home Page  </h4>
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="Outer-button">
                    <Link to="/homepage">
                        <button>
                            <div className="Inner-button">
                                <h4 className= "Student-Text">New Quiz</h4>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrgQuizResult;
