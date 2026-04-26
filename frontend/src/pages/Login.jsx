import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/login",
        formData
      );

      if (res.data.message === "Login successful") {
        alert("Login Successful");
        navigate("/test");
      } else {
        alert("Invalid Credentials");
      }

    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow p-4">
            <h2 className="text-center mb-4">
              Institute Login
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="user"
                placeholder="Enter Username"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <button className="btn btn-primary w-100">
                Login
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;