import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="messagesList">
        <div className="message first">
          <div className="gallery">
            <img src={require("./images/img-1.png")} alt="" />
          </div>
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
                You are cordially invited to watch our socially-distanced
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
                Watch our socially-distanced wedding on Youtube
              </a>
              <br />
              <br />
              <p>
                We would be very happy for everyone to join our wedding via
                Youtube Live on September 26, 2020, 2:00 in the afternoon. Due
                to the pandemic, only immediate family can participate directly.
                We hope you’ll understand.
              </p>
            </div>
          </div>
        </div>
        <div className="message third">
          <div className="message__container third">
            <div className="flower__container">
              <img src={require("./images/flower-2.png")} className="flower" />
            </div>
            <div className="message__sponsor">
              <p className="message__principal">
                With the blessing of our Parents
              </p>
              <ul>
                <li>Mr. Estelito Escultura & Mrs. Victoriana Escultura</li>
                <li>Mr. Arsenio Herbolario & Mrs. Natividad Herbolario</li>
              </ul>
              <p className="message__principal">Principal Sponsors</p>
              <ul>
                <li>
                  Congressman Edgar R. "Egay" Erice & Mrs. Merlita Nina Cayetano
                </li>
                <li>
                  Councilor Christopher "PJ" Malonzo & Mrs. Marcelina Manalo
                </li>
                <li>
                  Prof. Godofredo T. Munieza Jr. & Prof. Joemen G. Barrios
                </li>
                <li>Mr. Cherubim Clement Barrios & Mrs. Cielo Araceli</li>
                <li>Mr. Dionisio Vasquez & Mrs. Terisita Herbolario</li>
                <li>Mr. Samuel Santiago & Mrs. Andrea Maala</li>
                <li>Mr. William & Mrs. Alme Aillen Schwingel</li>
                <li>Mr. Ronald Paul & Mrs. Isabel Loretcha</li>
                <li>Mr. Eduardo & Mrs. Simeona Rodriguez</li>
              </ul>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
