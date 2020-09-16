import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="messagesList">
        <div className="message first">
          <div className="message__container first">
            <div className="message__flower">
              <img src={require("./images/flower.png")} />
            </div>
            <div className="message__title">
              <img src={require("./images/Rome-and-Gel-Title.png")} alt="" />
              <p>
                are getting married on Saturday, 26th of September 2020, 2:00 in
                the afternoon.
              </p>
            </div>
          </div>
        </div>
        <div className="message second">
          <div className="message__container second">
            <div>
              <p className="message__invite">
                You are cordially invited to watch our socially-distanced simple
                wedding.
              </p>
              {/* <p className="message__span">
                We want you there but of course we will understand if you can’t
                come.
              </p> */}
            </div>
            <div className="message__flower2">
              <img src={require("./images/flower-2.png")} />
            </div>

            {/* <p className="message__note">
                We would like to respectfully inform you that since we are
                following social guidelines please refrain from bringing an
                individual that has not been explicitly invited.
              </p> */}
            <div className="message__map">
              <a
                href="https://www.messenger.com/groupcall/LINK:7VQCjiGjpc2H72AV/"
                target="_blank"
              >
                Watch in Messenger Room
              </a>
              <br />
              <br />
              <p>
                We would be very happy for everyone to join our wedding via
                Messenger Room. Due to the pandemic, only immediate family can
                participate directly. We hope you’ll understand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
