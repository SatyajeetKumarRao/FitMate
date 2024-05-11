import { useForm } from "react-hook-form";
import "../styles/css/style.css";
import "../styles/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button, useToast } from "@chakra-ui/react";

const initialData = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { auth, setAuth } = useContext(AuthContext);

  const [formState, setFormState] = useState(initialData);

  const toast = useToast();

  const navigate = useNavigate();

  const loginUser = async (data) => {
    setFormState({ ...formState, isLoading: true, isError: false });

    fetch("https://tungabhadra-recursion-038.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.error) {
          setFormState({ ...formState, isLoading: false, isError: true });

          // alert(responseData.message);

          toast({
            title: responseData.message,
            // description: "We've created your account for you.",
            status: "error",
            duration: 5000,
            position: "top-right",
            isClosable: true,
          });
        } else {
          // console.log(responseData);

          localStorage.setItem("accessToken", responseData.accessToken);
          localStorage.setItem("userId", responseData.data.userId);
          localStorage.setItem("email", responseData.data.email);

          setAuth({
            ...auth,
            isAuth: true,
            userId: responseData.data.userId,
            email: responseData.data.email,
            accessToken: responseData.accessToken,
          });

          // alert("Login Successful");

          setFormState({
            ...formState,
            isLoading: false,
            isError: false,
            isSuccess: true,
          });

          toast({
            title: "Login Successful",
            // description: "We've created your account for you.",
            status: "success",
            duration: 5000,
            position: "top-right",
            isClosable: true,
          });

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);

        setFormState({ ...formState, isLoading: false, isError: true });

        // alert(responseData.message);

        toast({
          title: error,
          status: "error",
          duration: 5000,
          position: "top-right",
          isClosable: true,
        });
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
              <Button
                isLoading={formState.isLoading}
                type="submit"
                loadingText="Loading"
                colorScheme="teal"
                variant="outline"
                spinnerPlacement="start"
              >
                Login Now
              </Button>

              {/* <button>Login Now</button> */}
            </div>

            <div
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "14px",
                color: "#4299E1",
                fontWeight: "bold",
              }}
            >
              <Link to={"/signup"}>
                Don&apos;t have an account? <span>Signup</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
