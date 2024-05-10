import { useForm } from "react-hook-form";
import "../styles/css/style.css";
import "../styles/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginUser = async (data) => {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.error) {
          alert(responseData.message);
        } else {
          console.log(responseData);

          localStorage.setItem("accessToken", responseData.accessToken);
          localStorage.setItem("refreshAccessToken", responseData.refreshToken);
          localStorage.setItem("username", responseData.data.username);

          // setAuth({
          //   ...auth,
          //   isAuth: true,
          //   username: responseData.data.username,
          //   accessToken: responseData.accessToken,
          // });

          alert("Login Successful");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginSignupContainer">
      <div className="wrapper">
        <div className="inner">
          <form onSubmit={handleSubmit(loginUser)}>
            <h3>Login Form</h3>

            <div className="form-wrapper">
              <label htmlFor="">Email:</label>
              <div className="form-holder">
                <i style={{ fontStyle: "normal", fontSize: "15px" }}>@</i>
                <input
                  type="email"
                  className="form-control"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
              </div>
              {errors.email?.type === "required" && (
                <p role="alert">Email is required</p>
              )}
            </div>

            <div className="form-wrapper">
              <label htmlFor="">Password:</label>
              <div className="form-holder">
                <i className="zmdi zmdi-lock-outline"></i>
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                  {...register("password", { required: true })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
              </div>
              {errors.password?.type === "required" && (
                <p role="alert">Password is required</p>
              )}
            </div>

            <div className="form-end">
              <button>Login Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
