import React from 'react';
// import Image from './Image.jsx';
import '../css/datetime.css';

const DateTime = (props) => {

  var d  = new Date(props.datetime);
  var day = d.getDate();

  var handleChange = () => {
    console.log("Handling the datetime change...");
    props.onChange("hellooooo");
  }

  // var style = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: '10px'
  //
  // };
  //
  // var textStyle = {
  //   margin: '5px',
  //   marginRight: '15px',
  //
  //   // paddingRight: '15px'
  // }
  //


  // return (
  //   <div style={style}>
  //     <Image src={src} />
  //     <p style={textStyle}>{text}</p>
  //   </div>
  // );

  return (
    <div className='datetimepanel'>
      <p className='datetimeItem'>DateTime:{day}</p>
      <div className='datetimeItem'>
        <input type='number' max='31' min='1' onChange={ () => handleChange()}></input>&nbsp;- DD -&nbsp; <input type='number' max='12' min='1'></input>&nbsp;- MM - 2017 @
        &nbsp;<input type='number' max='24' min='1'></input>&nbsp;: HH &nbsp;<input type='number' max='60' min='1'></input>&nbsp;: MM
      </div>
    </div>

  )

};

export default DateTime;
