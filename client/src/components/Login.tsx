import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../Actions/Action";
import { useHistory } from "react-router-dom";
import './form.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export const Login = () => {
  const history: any = useHistory();
  const dispatch = useDispatch();
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleLogindata = (e: any) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitLogindata = async (e: any) => {
    e.preventDefault();
    const response: any = await dispatch(LoginUser(loginData));
    if (response.status == 200) {
      toast.dark("login Successfully...!", {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/home");
    }
  };
  return (
    <div className="container">
      <div className="main-class">
        <div>
          <div className="card-one">
            <form onSubmit={submitLogindata}>
              <h1>Login Here</h1>
              <input
                type="email"
                className="form-control"
                name="email"
                value={loginData.email}
                onChange={handleLogindata}
                placeholder="Enter username"
              />
              <input
                type="password"
                className="form-control"
                name="password"
                value={loginData.password}
                onChange={handleLogindata}
                placeholder="Enter password"
              />
              <button className="btn-dark">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
