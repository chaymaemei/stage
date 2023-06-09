import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { message } from "antd";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Function to get all users
  const getAllUsers = async () => {
    try {
      const response = await axios.get("/api/v1/user/get-users");
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  // Lifecycle method to fetch users on component mount
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1> Users List</h1>
            <div className="d-flex flex-wrap">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="card m-2"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    {/* Display other user information */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
