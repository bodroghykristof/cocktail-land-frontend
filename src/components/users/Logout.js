import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import apiService from "../services/Api";

function Logout() {
    const history = useHistory();

    useEffect(() => {
        apiService.logout(localStorage.getItem("token"));
        localStorage.clear();
        history.push("/home");
    }, []);

    return null;
}

export default Logout;
