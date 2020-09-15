import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="messagesList">
        <div className="message first">
          <div className="message__container first">
            <div className="message__flower">
              <img src={require("./images/flower.svg")} />
            </div>
            <div className="message__title">
              <h1>Rome</h1>
              <p className="message__and">&</p>
              <h1>Gel</h1>
              <p>
                are getting married on Saturday, 26th of September 2020, 2:00 in
                the afternoon.
              </p>
            </div>
          </div>
        </div>
        <div className="message second">
          <div className="message__container second">
            <div className="message__flower2">
              <img src={require("./images/flower-2.svg")} />
            </div>
            <div>
              <p className="message__invite">
                You Are Cordially Invited to Our Socially Distanced Simple
                Wedding
              </p>
              <p className="message__span">
                We want you there but of course we will understand if you can’t
                come
              </p>
            </div>
            <img
              src={require("./images/division.png")}
              className="message__division"
            />

            <div>
              <p className="message__note">
                We would like to respectfully inform you that since we are
                following social guidelines please refrain from bringing an
                individual that has not been explicitly invited.
              </p>
              {/* <div className="message__map">
                <a href="https://goo.gl/maps/Pafi4iZZkKSsn7kJ8">View on Maps</a>
                <p>
                  Block 34 Lot 26 Santan St. Evegreen Heights Subdivision, San
                  Jose Del Monte Bulacan
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
