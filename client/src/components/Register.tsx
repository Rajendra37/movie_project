import React, { useState } from "react";
import './form.css'
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddUser } from "../Actions/Action";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const Register = () => {
  const history: any = useHistory();
  const dispatch = useDispatch();
  const [UersData, setUersData] = useState({
    Name: "",
    email: "",
    password: "",
  });

  const handleUserData = (e: any) => {
    setUersData({ ...UersData, [e.target.name]: e.target.value });
  };
  const SubmitUserData = async (e: any) => {
    e.preventDefault();
    const response: any = await dispatch(AddUser(UersData));
    if (response.status == 201) {
      toast.dark("Register Successfully...!", {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/login");
    }
  };

  return (
    <div className="container">
      <div className="main-class">
        <div>
          <div className="card-one">
            <form onSubmit={SubmitUserData}>
              <h1>Register Here</h1>
              <input
                type="text"
                className="form-control"
                name="Name"
                value={UersData.Name}
                onChange={handleUserData}
                placeholder="Enter Your Name"
              />
              <input
                type="email"
                className="form-control"
                name="email"
                value={UersData.email}
                onChange={handleUserData}
                placeholder="Enter Email"
              />
              <input
                type="password"
                className="form-control"
                name="password"
                value={UersData.password}
                onChange={handleUserData}
                placeholder="Enter password"
              />
              <button className="btn-dark">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
