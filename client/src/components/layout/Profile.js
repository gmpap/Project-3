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
            <h1 className='x-large'>Connector</h1>
            <p className='lead'>Create a profile/portfolio, share posts</p>
            <div className='buttons'>
              {this.state.userProfile.company}
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
