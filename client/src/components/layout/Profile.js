import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utils/API';
class Profile extends React.Component {
  state = {
    userProfile: null
  };

  async componentDidMount() {
    const res = await API.getuserinfo();
    console.log(res);
    this.setState({ userProfile: res.data });
  }

  render() {
    if (!this.state.userProfile) {
      return 'Loading...';
    }
    return (
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'> {this.state.userProfile.user.name}</h1>
            <p className='lead'>Company: {this.state.userProfile.company} </p>
            {/* put in for loop */}

            <p className='lead'>Skills: {this.state.userProfile.skills}, </p>

            <p className='lead'>Status: {this.state.userProfile.status} </p>
            <div className='buttons'></div>
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
