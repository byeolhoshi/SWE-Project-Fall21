import './StudentQuizResult.css';
import ACM from './ACM.png';
import {Link } from 'react-router-dom';

function StudentQuizResult() {
    return (
        <div className= "Backcolor">
            <div className="Header">
                <h1 className= "Alert">We got a club match!</h1>
            </div>
            <div className= "Org-info">
                <img src={ACM}/> <h3 className= "Student-Text">Association of Computing Machinery, Howard Chapter</h3> 
                <h3 className= "Student-Text">Contact Information:</h3>
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

export default StudentQuizResult;
