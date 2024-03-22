import { Link, useNavigate } from "react-router-dom";
import "./UserLogin.css";

import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserLogin = () => {
    const navigation =  useNavigate();
    const {register,handleSubmit,formState:{errors}}  = useForm();

    const onSubmit = handleSubmit((data,e) =>{
      e.preventDefault()
      try{

        const loginHandler = async() =>{

          let loginRespond = await axios.post("http://localhost:8080/user_login",{
            ...data
          }) 
          console.log("loginRespond",loginRespond);
        };

  
        loginHandler()

      }catch(err){
        console.log("login error")
      }
     
      console.log("form data",data);
    })

  return (
    <div className="userLogin_main">
      <form className="userLogin_sub" onSubmit={onSubmit}>
      
      <h1>Login Here</h1>
      <section className="userLogin_sub_login_sec login_sec_1">
        <div>
        <span> 
        <FaUser />
        </span>
        <input type="text"  placeholder="Username "  {...register("username",{required:"This field is required"})} />
        </div>
        {errors.username  && (<p>{errors.username.message}</p>)}
       
        
      </section>
      <section className="userLogin_sub_login_sec login_sec_2">
        <div>
        <span>
        <FaLock />
        </span>
        <input type="password"  placeholder="Password"    {...register("password",{required:"This field is required"})} />
        </div>
        {errors.password  && (<p>{errors.password.message}</p>)}
      </section>
    
      <button>submit</button>
      <p>Don't have an account  <Link to={"./register"}> Register here</Link></p>
      </form>
    </div>
  )
}

export default UserLogin


