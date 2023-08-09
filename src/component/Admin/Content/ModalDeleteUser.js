import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUsers } from "../../../services/apiServices";
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);
    const handleSubmitDelete = async () => {
        let data = await deleteUsers(dataDelete.id)
        console.log('check data', data)
        if(data && data.EC === 0){
            toast.success(data.EM);
            handleClose();
            await props.fetchListUser()
        }
        if(data && data.EC !== 0){
            toast.error(data.EM);
            handleClose();
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure delete <b>{dataDelete && dataDelete.email ? dataDelete.email : ""} ? </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDelete()}
                    >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;
