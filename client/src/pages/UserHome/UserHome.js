import "./UserHome.css"
import { FaHouseUser } from "react-icons/fa6";
import { BiSolidError } from "react-icons/bi";
const UserHome = ()  =>{
    return(
        <div className="userHome_main">
            <h1>User Home</h1>
            <div className="userHome_sub">
                <section className="userHome_sub_sec">
               <span>
               <FaHouseUser />
                </span> 
                <h3>My Profile</h3>
                </section>
                <section className="userHome_sub_sec">
               <span>
               <BiSolidError id="complain_svg" />
                </span> 
                <h3>My Complain</h3>
                </section>
            </div>
        </div>
    )
}

export default UserHome;