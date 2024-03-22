
import { Link, useNavigate } from "react-router-dom";
import "./UserRegister.css";
import userImage from "../../assets/user.png";
import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";

const UserRegister = () => {
    const navigation =  useNavigate();
    const {register,handleSubmit,formState:{errors}}  = useForm();

    const onSubmit = handleSubmit((data,e) =>{
      e.preventDefault()
      console.log("form data",data);
      try{
        const submitHandler = async ()  =>{

          const signupRespond = await axios.post("http://localhost:8080/user_reg",{
            ...data
          })

          if(signupRespond){
            navigation("/user")
            console.log("sign up respond",signupRespond);
          }
        }
        submitHandler();

      }catch(err){
        console.log("signup error")
      }
     
      
    })
  return (
    <div className="userRegister_main">
      <h1>User Register</h1>
      <form className="serRegister_sub" onSubmit={onSubmit}>
        <section className="serRegister_sub_sec register_sec_1">
          <img src={userImage}  alt="user-image"  />
        </section>
        <section className="serRegister_sub_sec register_sec_2">
          <div className="register_sec_2_input_div">
            <label>User name</label>
            <input type="text"  placeholder=""   {...register("username",{required:"This field is required"})} />
            {errors.username  && (<p>{errors.username.message}</p>)}
          </div>
          <div className="register_sec_2_input_div">
            <label>Email</label>
            <input type="email"  placeholder=""   {...register("email",{required:"This field is required"})} />
            {errors.email  && (<p>{errors.email.message}</p>)}
          </div>
          <div className="register_sec_2_input_div">
            <label>Pasword</label>
            <input type="password"    {...register("password",{required:"This field is required"})}  />
            {errors.password  && (<p>{errors.password.message}</p>)}
          </div>
          <div className="register_sec_2_input_div">
            <label>Confirm Pasword</label>
            <input type="password"     {...register("confirmPassword",{required:"This field is required"})}  />
            {errors.confirmPassword  && (<p>{errors.confirmPassword.message}</p>)}
          </div>
          <div className="register_sec_2_input_div">
            <label>Mobile</label>
            <input type="text"  placeholder=""    {...register("mobile",{required:"This field is required"})} />
            {errors.mobile  && (<p>{errors.mobile.message}</p>)}
          </div>
          <div className="register_sec_2_input_div">
            <label>City</label>
            <input type="text"  placeholder=""  {...register("city",{required:"This field is required"})} />
            {errors.city  && (<p>{errors.city.message}</p>)}
          </div>
        <button>Sign Up</button>
        </section>
      </form>
      
      
    </div>
  )
}

export default UserRegister