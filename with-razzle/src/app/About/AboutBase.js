import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  static async getInitialProps({ req, res, match, history, location }) {
    return { about: 'more stuffs' };
  }

  render() {
    return (
      <div>
        <Link to="/about/wew">wew</Link>
        {JSON.stringify(this.props, null, 2)}
        {this.props.about && 'hi'}
      </div>
    );
  }
}

export default About;
