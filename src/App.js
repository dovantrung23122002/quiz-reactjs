import "./App.scss";
import Header from "./component/Header/Header";
import { Outlet, Link } from "react-router-dom";
const App = () => {
    return (
        <div className="app-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container">
                <div className="sidenav-container"></div>
                <div className="app-content">
                    {/* Outlet để cho nội dung được hiển thị trong phần app-content*/}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default App;
