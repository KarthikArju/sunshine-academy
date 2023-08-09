import "../dashboard/dashboard.css";
import "../home/home.css";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState(0);

    function gotoSection(value) {
      setSelectedSection(value);
    }
    return (
        <section className="home-bg" >
        {/* ......................Nav-Bar...................................... */}
        <div className="header-style">
          <div className="top-flag-style"></div>
          <div className="header-components">
            <div className="app-logo">
              <img src="/assets/app-logo.png"></img>
            </div>
            <div className="app-services">
              <div onClick={()=>gotoSection(0)}>
              <div className="app-services-style">Home</div>
               {selectedSection==0 ?  <div className="selected-section"></div> : <div/>}
              </div>
              <div onClick={()=>gotoSection(1)}>
              <div className="app-services-style">Service</div>
              {selectedSection==1 ?  <div className="selected-section"></div> : <div/>}
              </div>
              <div onClick={()=>gotoSection(2)}>
              <div className="app-services-style">Course</div>
              {selectedSection==2 ?  <div className="selected-section"></div> : <div/>}
              </div>
              <div onClick={()=>gotoSection(3)}>
              <div className="app-services-style">About Us</div>
              {selectedSection==3 ?  <div className="selected-section"></div> : <div/>}
              </div>
              <div onClick={()=>gotoSection(4)}>
              <div className="app-services-style">Contact</div>
              {selectedSection==4 ?  <div className="selected-section"></div> : <div/>}
              </div>
              <div className="apply-btn" onClick={()=>navigate("/apply-online")}>Apply Online</div>  
            </div>
          </div>
        </div>
        {/* .........................End............................................... */}
        {/* ............................Home-banner.................... */}
        <div className="header-content">
          <div className="txt-contents">
            <div className="hash-txt-style">
              <div>#Medical coder</div>
              <div>#HealthCare</div>
            </div>
            <div className="big-txt-style">
            BECOME A MEDICAL CODING SPECIALIST ENJOY A REWARDING CAREER!
            </div>
            <div className="sub-title-style">Provides training and equips them with sound knowledgein all domain and does its best to create job opportunities.</div>
            <div className="apply-btn" style={{marginRight:"80%",marginTop:"23px"}}>Apply Online</div>
          </div>
          <div>
          <img src="/assets/main-banner-bg.png"></img> 
          </div>
          
        </div>
      </section>
    );
}
export default Dashboard;