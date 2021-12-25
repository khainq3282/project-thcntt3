import img from '../img/livingroom.jpg';
import React, { useEffect, useState } from 'react';
import fire from '../firebase';
import { getDatabase, ref, set, get, child } from '@firebase/database';

export default function ShowContent() {
  const [doorStatus, setDoorStatus] = useState(false);
  const [sensorStatus, setSensorStatus] = useState(false);

   useEffect(  () => {
    //  GetValue('/doorControl')
    //  GetValue('/doorMode')
    if (sensorStatus === true) {
      document.getElementById('light__Button1').style.pointerEvents = 'none';
    } else {
      document.getElementById('light__Button1').style.pointerEvents = 'auto';
    }
  }, []);
 
  //  async function GetValue(url){
  //     let value 
  //    const dbRef = ref(getDatabase());
  //      await get(child(dbRef, `${url}`))
  //     .then((snapshot) => {
  //       // if (snapshot.exists() && Number(snapshot.val())  === 1 && url === "/doorMode") {
  //       //   setSensorStatus(true)
  //       // } else if (snapshot.exists() && Number(snapshot.val()) === 0 && url === "/doorMode") {
  //       //   setSensorStatus(false)
  //       // } else if (snapshot.exists() && Number(snapshot.val()) === 1 && url === "/doorControl") {
  //       //   setDoorStatus(true);
  //       // } else 
  //       if (snapshot.exists()) {
  //          value = snapshot.val()
  //       } else {
  //         console.log('No data available');
  //       }
  //     }).then(res => {
  //         Number(value) === 0 ? setDoorStatus(true) : setDoorStatus(false)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const HandleDoor = () => {
    
    if (doorStatus === false) {
      document.getElementsByClassName('card-img-top')[0].style.opacity = '1';
      document.getElementById('light__Button1').innerHTML = `
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                ĐÓNG CỬA`;
      document.getElementById('light__sensor1').innerHTML = 'ON';
      setDoorStatus(true);
      // set firebase cửa mở
      const database = getDatabase(fire);
      set(ref(database, '/doorControl'), 1);
    } else {
      document.getElementsByClassName('card-img-top')[0].style.opacity = '0.5';
      document.getElementById('light__Button1').innerHTML = `
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                MỞ CỬA`;
      document.getElementById('light__sensor1').innerHTML = 'OFF';
      setDoorStatus(false);
      // set firebase cửa đóng
      const database = getDatabase(fire);
      set(ref(database, '/doorControl'), 0);
    }
  };
  const HandleSensor = () => {
   
    if (sensorStatus === false) {
      document.getElementById('light__Button1').style.pointerEvents = 'none';
      document.getElementById('sensor__Button1').innerHTML = `
        <span></span>
        <span></span>
        <span></span>
        <span></span>
          TẮT SENSOR`;
      // update firebase, để giá trị là 1
     
      document.getElementById('pir__sensor1').innerHTML = 'ON';
      setSensorStatus(true);
      const database = getDatabase(fire);
      set(ref(database, '/doorMode'), 1);
    } else {
      document.getElementById('light__Button1').style.pointerEvents = 'auto';
      document.getElementById('sensor__Button1').innerHTML = `
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        BẬT SENSOR`;
      // update firebase khi tắt sensor, để giá trị là 0
    
      document.getElementById('pir__sensor1').innerHTML = 'OFF';
      setSensorStatus(false);
      const database = getDatabase(fire);
      set(ref(database, '/doorMode'), 0);
    }
  };
  return (
    <div className="homepage">
      <div className="room__management">
        <div className="container">
          <div className="row heading">
            <div
              className="
                          team__title
                          d-flex
                          justify-content-center
                          col-md-12 col-md-offset-3
                        "
            >
              <h2 className="about__us text-center bottom-line">SMART HOME</h2>
            </div>
            <div className="container">
              <div id="room__row" className="row room__row">
                <div className="room__card col-6">
                  <div className="card">
                    <img className="card-img-top" src={img} alt="Card  cap" />
                    <div className="card-body">
                      <h5 className="card-title">Living room</h5>
                      <p className="card-text">
                        Trạng thái cửa:
                        <span id="light__sensor1" className="light__sensor">
                          OFF
                        </span>
                        <span className="ml-4 card-text">
                          Chế độ tự động:
                          <span id="pir__sensor1" className="pir__sensor">
                            OFF
                          </span>
                        </span>
                      </p>
                      <div
                        id="light__Button1"
                        className="button2 light__Button"
                        onClick={HandleDoor}
                      >
                        <span />
                        <span />
                        <span />
                        <span />
                        MỞ CỬA
                      </div>
                      <div
                        id="sensor__Button1"
                        className="button2 sensor__Button"
                        onClick={HandleSensor}
                      >
                        <span />
                        <span />
                        <span />
                        <span />
                        BẬT SENSOR
                      </div>
                      <a
                        id="diary1"
                        className="diary__button button2"
                        href="#popup1"
                      >
                        <span />
                        <span />
                        <span />
                        <span />
                        <i className="fas fa-book" />
                      </a>
                      <div id="popup1" className="overlay__popup">
                        <div className="popup1">
                          <h2>Nhật ký của living room</h2>
                          <a id="close1" className="close" href="#room__row">
                            ×
                          </a>
                          <div id="popcontent1" className="content">
                            <table id="table1" className="tableDiary">
                              <tbody>
                                <tr>
                                  <th>Ngày</th>
                                  <th>Thời gian</th>
                                  <th>Đèn</th>
                                  <th>Trạng thái</th>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
