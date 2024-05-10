import { useForm } from "react-hook-form";
import "../styles/css/style.css";
import "../styles/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const navigate = useNavigate();

  const registerUser = async (data) => {
    const { name, email, dob, gender, location, password } = data;

    const registrationData = {
      name,
      email,
      dob,
      gender,
      location,
      password,
    };

    fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.error) {
          alert(responseData.message);
        } else {
          alert("SignUp successful, Login now.");
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
          <form onSubmit={handleSubmit(registerUser)}>
            <h3>Registration Form</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor="">Name:</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-account-o"></i>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name", {
                      required: true,
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                </div>
                {errors.name?.type === "required" && (
                  <p role="alert">Name is required</p>
                )}
              </div>

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
            </div>
            <div className="form-group">
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
              <div className="form-wrapper">
                <label htmlFor="">Repeat Password:</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-lock-outline"></i>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                      },
                    })}
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                  />
                </div>
                {errors.confirmPassword?.type === "required" && (
                  <p role="alert">Confirm password is required</p>
                )}
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor="">Location:</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-pin"></i>
                  <input
                    type="text"
                    className="form-control"
                    {...register("location", { required: true })}
                    aria-invalid={errors.location ? "true" : "false"}
                  />
                </div>
                {errors.location?.type === "required" && (
                  <p role="alert">Location is required</p>
                )}
              </div>
              <div className="form-wrapper">
                <label htmlFor="">Gender:</label>
                <div className="form-holder select">
                  <select
                    name=""
                    id=""
                    defaultValue={""}
                    className="form-control"
                    {...register("gender", { required: true })}
                    aria-invalid={errors.gender ? "true" : "false"}
                  >
                    <option value="" disabled>
                      -select gender-
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <i className="zmdi zmdi-face"></i>
                </div>
                {errors.gender?.type === "required" && (
                  <p role="alert">Gender is required</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor="">Date Of Birth:</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-calendar"></i>
                  <input
                    type="date"
                    className="form-control"
                    {...register("dob", { required: true })}
                    aria-invalid={errors.dob ? "true" : "false"}
                  />
                </div>
                {errors.dob?.type === "required" && (
                  <p role="alert">DOB is required</p>
                )}
              </div>
            </div>
            <div className="form-end">
              <div className="checkbox">
                <label>
                  <input type="checkbox" required /> I agree all statements in
                  Terms of service.
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="button-holder">
                <button>Register Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Signup };
