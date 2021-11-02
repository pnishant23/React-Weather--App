import React from 'react';
import ThreeDays from './ThreeDays';
import { Link } from 'react-router-dom';
import SevenDays from './SevenDays';

export default function Daily({ daily }) {
  function seven() {
    daily.map((x) => {
      return <SevenDays s={x} />;
    });
  }
  return (
    <>
      {daily ? (
        <>
          {}
        </>
      ) : (
        <div>D loading....</div>
      )}
    </>
  );
}
