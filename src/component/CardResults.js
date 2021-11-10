import React from "react";

const CardResults = ({ address }) => {
  const { ip, location, timezone, isp } = address;
  return (
    <div>
      <div id="card-result">
        <div className="card-body">
          <h2 className="card-title">IP ADDRESS</h2>
          <p id="ip-address">
            <i className="fas fa-spinner fa-pulse"></i>
            {ip}
          </p>
        </div>

        <div className="card-body">
          <h2 className="card-title">LOCATION</h2>
          <p id="location">
            <i className="fas fa-spinner fa-pulse"></i>
            {location}
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-title">TIMEZONE</h2>
          <p id="timezone">
            <i className="fas fa-spinner fa-pulse"></i>
            {timezone}
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-title">ISP</h2>
          <p id="isp">
            <i className="fas fa-spinner fa-pulse"></i>
            {isp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardResults;
