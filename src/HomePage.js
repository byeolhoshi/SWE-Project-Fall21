import './HomePage.css'
import {Link } from 'react-router-dom';

function HomePage() {
    return(
        <div className= "Background">
            <div className= "Header">
                <h1 className= "Title">Welcome!</h1>
            </div>
            <div className= "Center">
            <div className="Outer">
            <Link to="/homepage">
                <button>
                    <div className="Inner">
                        <h4 className= "Text">Start Quiz</h4>
                    </div>
                </button>
                </Link>
            </div>

            <div className="Outer">
            <Link to="/returnUserProfile">
                <button>
                    <div className="Inner">
                        <h4 className= "Text">View Profile</h4>
                    </div>
                </button>
                </Link>
            </div>
            </div>
        </div>
        
    )
}

export default HomePage;
