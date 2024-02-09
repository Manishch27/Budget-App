// React Router Dom imports
import { redirect } from "react-router-dom"


// Helpers Function import
import { deleteItem } from "../Helpers";

export const logoutAction =   async () => {
    // delete the username from local storage
    deleteItem("userName");

    // redirect to the login page
    return redirect("/");
}