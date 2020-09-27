import React from "react";
import "./App.css";

import YouTube from "react-youtube";

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
              <img src={require("./images/flower.png")} alt="" />
            </div>
            <div className="message__title">
              <img src={require("./images/Rome-and-Gel-Title.png")} alt="" />
              <p>are married last September 26, 2020, 2:00 in the afternoon.</p>
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
              <YouTube videoId="Pm8HfXA6UGE" className="youtube-live" />
              <YouTube videoId="U_ITbXWemdM" className="youtube-live" />
            </div>
            <div className="message__map">
              <p>
                Due to the pandemic, only immediate family participated
                directly. We hope you understand.
              </p>
            </div>
          </div>
        </div>
        <div className="message third">
          <div className="message__container third">
            <div className="flower__container">
              <img
                src={require("./images/flower-2.png")}
                className="flower"
                alt=""
              />
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
