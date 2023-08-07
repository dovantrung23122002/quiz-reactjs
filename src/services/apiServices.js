import instance from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
    // fetch data api
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return instance.post('api/v1/participant', data);
};

const getAllUsers = () => {
    return instance.get('api/v1/participant/all');
}

const putUpdateUser = (id, username, role, image) => {
    // fetch data api
    const data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return instance.put('api/v1/participant', data);
};

export { postCreateNewUser, getAllUsers, putUpdateUser };
