import { IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonButton } from '@ionic/react';
import './Tab1.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState } from 'react';

const Tab1: any = () => {

  const [ visible, SetVisible] = useState<any>(false);
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 52.632591, lng: -1.136164
  }

  const onHandleClick = () => {
    // SetVisible(true);
    SetVisible(!visible);
    console.log("helloooo!!!!!!!!!!");
  }
  return (
    <div>
      <div className="btn-div">
      <button className="btn-find" onClick={onHandleClick}>Find my buddy!!</button>
      </div>
      {visible ? 
      <LoadScript
        googleMapsApiKey='AIzaSyBGqCiK4kQ2qq_7GmJJo2H05YDxeyWfeMk'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
       : null
      //  <div>
      //    <h5>Oops! You clicked twice</h5>
      //    </div>
       }
    </div>
  );
};

export default Tab1;
