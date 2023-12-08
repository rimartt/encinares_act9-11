import {styles} from "./Styles";
import img1 from './image/facebook.png';
import img2 from './image/google.png';


const StyledComponent = () => {
    return (
  <div style={{ textAlign: 'center' }}>

    <h1>StyledComponent</h1>
    
    
      
      <div style={styles.Container}>
        
      <h2 style={styles.Header}>Log in</h2>

      <div style={styles.FormContainer}>
        <form>
          <input style={styles.InputStyle} type="text" placeholder="Username..." />
          <input style={styles.InputStyle} type="password" placeholder="Password..." />
          <div style={styles.LabelContainer}>
            <label style={styles.Label}>Forgot Password?</label>
          </div>
          <button style={styles.ButtonStyle}>Log in</button>
        </form>
        <p>or Log in Using...</p>
        <div style={styles.ImageContainer}>
          <img src={img1} style={styles.ImageStyle} alt='' />
          <img src={img2} style={styles.ImageStyle} alt=''  />
        </div>
      </div>
    </div>
    </div>
       
      );
}


 
export default StyledComponent;