import React from 'react';
import img1 from './image/facebook.png';
import img2 from './image/google.png';

const InlineStyle = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>InlineStyle</h1>

    <div
      style={{
        marginLeft: '30%',
        display: 'flex',
        flexDirection: 'column',
        border: '',
        width: '30em',
        height: '30em',
        position: 'relative',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#b3ffe6',
        borderRadius: '10px',
        boxShadow: '0 0.188em 1.550em rgb(156, 156, 156)',
      }}
    >
      <h2
        style={{
          padding: '10px 20px',
          textAlign: 'center',
          color: '#000',
          marginLeft: '8px',
        }}
      >
        Log in
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form>
          <input
            style={{
              padding: '20px ',
              textAlign: '',
              color: 'black',
              margin: '10px',
              marginLeft: '4%',
              width: '300px',
              border: 'none',
              borderRadius: '10px',
            }}
            type="text"
            placeholder="Username..."
          />
          <input
            style={{
              padding: '20px ',
              textAlign: '',
              color: 'black',
              margin: '10px',
              marginLeft: '4%',
              width: '300px',
              border: 'none',
              borderRadius: '10px',
            }}
            type="password"
            placeholder="Password..."
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <label
              style={{
                padding: '10px 20px',
                textAlign: 'center',
                color: 'blue',
              }}
            >
              Forgot Password?
            </label>
          </div>
          <button
            style={{
              padding: '20px',
              textAlign: 'center',
              color: '',
              margin: '10px',
              marginLeft: '4%',
              width: '50%',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: 'white',
            }}
          >
            Log in
          </button>
        </form>
        <p>or Log in Using...</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={img1}
            style={{
              padding: '1px',
              width: '10%',
              borderRadius: '10px',
              border: 'none',
              justifyContent: 'center',
              margin: '10px',
            }}
            alt=""
          />
          <img
            src={img2}
            style={{
              padding: '1px',
              width: '10%',
              borderRadius: '10px',
              border: 'none',
              justifyContent: 'center',
              margin: '10px',
            }}
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default InlineStyle;



