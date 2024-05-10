import { useForm } from "react-hook-form";
import "../styles/css/style.css";
import "../styles/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const registerUser = async (data) => {
    const {
      name,
      goal,
      activityLevel,
      gender,
      dob,
      height,
      weight,
      targetWeight,
      email,
      password,
    } = data;

    const registrationData = {
      name,
      email,
      password,
      height,
      initialWeight: weight,
      dob,
      gender,
      goals: {
        goal,
        targetWeight,
        activityLevel,
      },
    };

    console.log(registrationData);

    fetch("https://tungabhadra-recursion-038.onrender.com/users/register", {
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
                  <p role="alert" style={{ color: "red" }}>
                    Name is required
                  </p>
                )}
              </div>

              <div className="form-wrapper">
                <label htmlFor="">Goal:</label>
                <div className="form-holder select">
                  <select
                    name=""
                    id=""
                    defaultValue={""}
                    className="form-control"
                    {...register("goal", { required: true })}
                    aria-invalid={errors.goal ? "true" : "false"}
                  >
                    <option value="" disabled>
                      -select goal-
                    </option>

                    <option value="Lose weight">Lose weight</option>
                    <option value="Maintain weight">Maintain weight</option>
                    <option value="Gain weight">Gain weight</option>
                  </select>
                  <i className="zmdi zmdi-fire"></i>
                </div>
                {errors.goal?.type === "required" && (
                  <p role="alert" style={{ color: "red" }}>
                    Goal is required
                  </p>
                )}
              </div>
            </div>

            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor="">Baseline Activity:</label>
                <div className="form-holder select">
                  <select
                    name=""
                    id=""
                    defaultValue={""}
                    className="form-control"
                    {...register("activityLevel", { required: true })}
                    aria-invalid={errors.activityLevel ? "true" : "false"}
                  >
                    <option value="" disabled>
                      -select baseline activity-
                    </option>

                    <option value="Sedentary">Not Very Active</option>
                    <option value="Lightly Active">Lightly Active</option>
                    <option value="Moderately Active">Moderately Active</option>
                    <option value="Very Active">Very Active</option>
                  </select>
                  <i className="zmdi zmdi-run"></i>
                </div>
                {errors.activityLevel?.type === "required" && (
                  <p role="alert" style={{ color: "red" }}>
                    Baseline Activity is required
                  </p>
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
                  <p role="alert" style={{ color: "red" }}>
                    Gender is required
                  </p>
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
                  <p role="alert" style={{ color: "red" }}>
                    DOB is required
                  </p>
                )}
              </div>

              <div className="form-wrapper">
                <label htmlFor="">Height (in cm):</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-sort-asc"></i>
                  <input
                    type="number"
                    className="form-control"
                    {...register("height", { required: true })}
                    aria-invalid={errors.height ? "true" : "false"}
                  />
                </div>
                {errors.height?.type === "required" && (
                  <p role="alert" style={{ color: "red" }}>
                    Height is required
                  </p>
                )}
              </div>
            </div>

            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor="">Current Weight:</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-code"></i>
                  <input
                    type="number"
                    className="form-control"
                    {...register("weight", { required: true })}
                    aria-invalid={errors.weight ? "true" : "false"}
                  />
                </div>
                {errors.weight?.type === "required" && (
                  <p role="alert" style={{ color: "red" }}>
                    Weight is required
                  </p>
                )}
              </div>

              <div className="form-wrapper">
                <label htmlFor="">Target weight:</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-code"></i>
                  <input
                    type="number"
                    className="form-control"
                    {...register("targetWeight", { required: true })}
                    aria-invalid={errors.targetWeight ? "true" : "false"}
                  />
                </div>
                {errors.targetWeight?.type === "required" && (
                  <p role="alert" style={{ color: "red" }}>
                    Target Weight is required
                  </p>
                )}
              </div>
            </div>

            <div className="form-group">
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
                  <p role="alert" style={{ color: "red" }}>
                    Email is required
                  </p>
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
                  <p role="alert" style={{ color: "red" }}>
                    Password is required
                  </p>
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
