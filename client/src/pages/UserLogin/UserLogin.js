import { Link, useNavigate } from "react-router-dom";
import "./UserLogin.css";

import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";

const UserLogin = () => {
    const navigation =  useNavigate();
    const {register,handleSubmit,formState:{errors}}  = useForm();

    const onSubmit = handleSubmit((data,e) =>{
      e.preventDefault()
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
        <input type="text"  placeholder="Username "  {...register("üsername",{required:"This field is required"})} />
        </div>
        {errors.üsername  && (<p>{errors.üsername.message}</p>)}
       
        
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


