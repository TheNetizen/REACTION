import React, { useState, useEffect } from "react";
import "./ListOfServices.css";
import ServiceData from "./db.json";
import { useHistory } from "react-router-dom";

const ListOfServices = (props) => {
  const [data, setData] = useState(ServiceData.services);
  const history = useHistory();

  const handleClick = (e) => {
    data.forEach((serv, index) => {
      if (parseInt(serv.id) === parseInt(e.target.id)) {
        sessionStorage.setItem("serv",JSON.stringify(serv))
        history.push('/serviceDetails')
      }
    });

  };

  return (
    <React.Fragment>
      <div className="card bg" style={{ height: "30vh" }}></div>
      <div className="card" style={{ textAlign: "center", height: "60vh" }}>
        <h3 style={{ margin: "2vh" }}>
          <u style={{ textDecorationColor: "red" }}>Our Services</u>
        </h3>
        <p style={{ marginLeft: "100px", marginRight: "100px" }}>
          Nimbus-2001 believes in serving clients at doorsteps. We think "The
          best certification in quality is the measurement of the smile in
          customer's face."
        </p>
        <div className="row">
          <div className="col-2 offset-2">
            <div
              id="2"
              className="card gradminicard shadow  mb-5 "
              style={{
                margin: "2vh",
                height: "30vh",
                alignItems: "center",
                borderRadius: "3vh",
                paddingTop: "7vh",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <b style={{ textAlign: "center", fontSize: "1.8vh" }}>
                INTERNATIONAL EXPRESS
              </b>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.8vh",
                  margin: "2vh",
                }}
              >
                We send packages 'internationally' any where in the world, 365
                days a year.
              </p>
            </div>
          </div>
          <div className="col-2 ">
            <div
              id="1"
              className="card gradminicard shadow  mb-5 "
              style={{
                margin: "2vh",
                height: "30vh",
                alignItems: "center",
                borderRadius: "3vh",
                paddingTop: "7vh",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <b style={{ textAlign: "center", fontSize: "1.8vh" }}>
                DOMESTIC EXPRESS
              </b>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.8vh",
                  margin: "2vh",
                }}
              >
                We send packages 'domestically' any where in the world, 365 days
                a year.
              </p>
            </div>
          </div>
          <div className="col-2 ">
            <div
              id="3"
              className="card gradminicard shadow  mb-5 "
              style={{
                margin: "2vh",
                height: "30vh",
                alignItems: "center",
                borderRadius: "3vh",
                paddingTop: "7vh",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <b style={{ textAlign: "center", fontSize: "1.8vh" }}>
                COLD EXPRESS
              </b>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.8vh",
                  margin: "2vh",
                }}
              >
                We send 'cold' packages any where in the world, 365 days a year.
              </p>
            </div>
          </div>
          <div className="col-2 ">
            <div
              id="4"
              className="card gradminicard shadow  mb-5 "
              style={{
                margin: "2vh",
                height: "30vh",
                alignItems: "center",
                borderRadius: "3vh",
                paddingTop: "7vh",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <b style={{ textAlign: "center", fontSize: "1.8vh" }}>
                MAIL EXPRESS
              </b>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.8vh",
                  margin: "2vh",
                }}
              >
                We send 'mailers' and 'letters' any where in the world, 365 days
                a year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListOfServices;
