import "./Home.css";
import homeBackground from "../../assets/garbage 1.jpg";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigatoin = useNavigate();
    return(
        <div className="home_main">
          <div className="home_main_sub_1">
            <img src={homeBackground}   alt="home background"/>
          </div>
          <div className="home_main_sub_2"> 
          <button  onClick={()=>{navigatoin("/user")}}  className="home_sub_2_btn">User</button>
          <button className="home_sub_2_btn">Employee</button>
          </div>
        </div>
    )
}

export default Home;


