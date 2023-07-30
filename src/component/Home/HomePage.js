import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="title-main">Forms that break the norm</div>
                <div className="des-main">
                    Get more data—like signups, feedback, and anything else—with
                    forms designed to be <b>refreshingly different.</b>
                </div>
                <div className="des-main-btn">
                    <button className="get-started">Get started-it's free</button>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
