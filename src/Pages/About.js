import React, { useState } from 'react';
import "./Pages.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function About() {
  const [value, onChange] = useState(new Date());
  function handleDisabled(){
    const test=new Date(12-12-2021)
  }
  return (
    <div className="sector">
      <h2>About</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eum
      unde dolore temporibus, nostrum eos neque, aliquam saepe ullam sunt
      similique delectus ex! Hic ab laborum dolorum itaque molestias quos
      assumenda omnis, dignissimos asperiores ad aspernatur optio nobis
      possimus, commodi repudiandae consequuntur debitis fugiat aliquam. Tempore
      cumque beatae harum dignissimos.
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        tileDisabled={handleDisabled}
      />
    </div>
  );
}

export default About;
