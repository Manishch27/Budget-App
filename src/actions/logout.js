// React Router Dom imports
import { redirect } from "react-router-dom";
import {toast} from "react-toastify";


// Helpers Function import
import { deleteItem } from "../Helpers";

export const logoutAction =   async () => {
    // delete the username from local storage
    deleteItem("userName");

    // show the toast message
    toast.success("Logged out successfully");

    // redirect to the login page
    return redirect("/");
}