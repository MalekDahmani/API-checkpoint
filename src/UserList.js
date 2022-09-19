import React, { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setList(response.data);
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="userList">
            {list.map((item, key) => (
                <div key={key}>
                    <UserItem list={item} />
                </div>
            ))}
        </div>
    );
};
export default UserList;