import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowCreateUser] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" 
                    onClick={() => setShowCreateUser(true)}>
                        <FcPlus/>
                        Add new users
                    </button>
                </div>
                <div className="table-users-container" 
                > 
                    table users
                </div>
                    <ModalCreateUser show={showModalCreateUser}
                    setShow = {setShowCreateUser}
                    />
            </div> 
        </div>
    );
};

export default ManageUser;
