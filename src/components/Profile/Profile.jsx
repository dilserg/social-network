import React from 'react';
import styles from './Profile.module.css';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import Preloader from '../common/Preloader/Preloader';
import MyPhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import {NavLink} from 'react-router-dom';


const Profile = (props) => {
  if (props.isFetching) {
    return <div className={styles.preloader}><Preloader/></div>;
  }
  
  return (
    <div className={styles.content}>
      <div className={styles.avatar}>
        <img src={props.photo || MyPhoto} alt=""/><br/>
        <NavLink to="/edit">
          <button className={styles.button}>Edit</button>
        </NavLink>
      </div>
      <Info name={props.name} surname={props.surname} university={props.university} city={props.city}
            age={props.age}/>
      <Posts postsData={props.postsData} postInputText={props.postInputText} addPost={props.addPost}
             updateText={props.updateText}/>
    </div>
  );
};

export default Profile;