
import img1 from './image/facebook.png';
import img2 from './image/google.png';

const ObjectVariable = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>ObjectVariable</h1>
      
    <div style={Container}>
      <h2 style={Header}>Log in</h2>

      <div style={FormContainer}>
        <form>
          <input style={InputStyle} type="text" placeholder="Username..." />
          <input style={InputStyle} type="password" placeholder="Password..." />
          <div style={LabelContainer}>
            <label style={Label}>Forgot Password?</label>
          </div>
          <button style={ButtonStyle}>Log in</button>
        </form>
        <p>or Log in Using...</p>
        <div style={ImageContainer}>
          <img src={img1} style={ImageStyle} alt='' />
          <img src={img2} style={ImageStyle} alt=''  />
        </div>
      </div>
    </div>
    </div>
  );
};

const Container = {
  marginLeft: '30%',
  display: 'flex',
  flexDirection: 'column',
  border: '',
  width: '30em',
  height: '30em',
  position: 'relative',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: ' #b3ffe6',
  borderRadius: '10px',
  boxShadow: '0 0.188em 1.550em rgb(156, 156, 156)',
};

const Header = { padding: '10px 20px', textAlign: 'center', color: '#000', marginLeft: '8px' };

const LabelContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Label = { padding: '10px 20px', textAlign: 'center', color: 'blue' };

const FormContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const InputStyle = {
  padding: '20px ',
  textAlign: '',
  color: 'black',
  margin: '10px',
  marginLeft: '4%',
  width: '300px',
  border: 'none',
  borderRadius: '10px',
};

const ButtonStyle = {
  padding: '20px',
  textAlign: 'center',
  color: '',
  margin: '10px',
  marginLeft: '4%',
  width: '50%',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: 'white',
};

const ImageContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const ImageStyle = {
  padding: '1px',
  width: '10%',
  borderRadius: '10px',
  border: 'none',
  justifyContent: 'center',
  margin: '10px',
};



export default ObjectVariable;


