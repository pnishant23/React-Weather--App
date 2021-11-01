import React from 'react';

export default function Hourly({ value }) {
  return (
    <>
      {value ? (
        <div className="hourly">
          <div className="date">date</div>
          <div className="icon">icon</div>
          <div className="temp">{value.temp}</div>
        </div>
      ) : (
        <div className="loading-cnt">
          <div className="loading">load..</div>
        </div>
      )}
    </>
  );
}
