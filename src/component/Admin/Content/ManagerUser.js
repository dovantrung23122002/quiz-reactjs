import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});


    const [listUser, setListUser] = useState([]);
    // chạy sau khi return chạy
    useEffect(() => {
        fetchListUser();
    }, []);
    const fetchListUser = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    };

    const resetDataUpdate = () => {
        setDataUpdate({});
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user)
    };

    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowCreateUser(true)}
                    >
                        <FcPlus />
                        Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowCreateUser}
                    fetchListUser={fetchListUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    resetDataUpdate={resetDataUpdate}
                />
            </div>
        </div>
    );
};

export default ManageUser;
