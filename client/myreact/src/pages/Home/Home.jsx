import React from "react";
import './home.css'
import Flow from "../../component/HomeComponents/Flow/Flow";
import Left from "../../component/HomeComponents/LeftHome/Left";
import { useSelector } from "react-redux";
import Share from "../../component/HomeComponents/Share/Share";




const Home = () => {

  const { _id, picturePath } = useSelector((state) => state.user)
  console.log(picturePath)

  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* -----------------Left Buradan Başlıyor --------------------------------------------------*/}
      <div >
        <Left userId={_id} picturePath={picturePath}/>
      </div>
            
      {/* -----------------Middle Buradan Başlıyor --------------------------------------------------*/}

      <div className="mid">
        <Share picturePath={picturePath}/>
        <Flow userId={_id} />
      </div>

      {/* -----------------Right Buradan Başlıyor --------------------------------------------------*/}

      <div className="right">
        <div className="tournament">
          <h5 >Upcoming Tournaments</h5>
          <div className="tournament-info">
            <div >
              <p style={{float:'left',marginLeft:'15px'}}>PUBG: Battlegrounds</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>S Tier</p>
            </div>
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>PUBG: Battlegrounds</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>A Tier</p>
            </div>
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>Apex Legends</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>S Tier</p>
            </div>
            
          </div>
        </div>
        <div className="teams">
          <h5 style={{marginLeft:'15px',marginTop:'40px'}}>Looking For Team</h5>
          <div className="teams-info">
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>Thunder</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>PUBG: Battlegrounds</p>
            </div>
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>PULSE</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>Apex Legends</p>
            </div>
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>Silver Ferms</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>Apex Legends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
