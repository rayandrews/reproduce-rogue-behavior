import React from 'react';
import { Link } from 'react-router-dom';

export default class Another extends React.Component {
  static async getInitialProps({ req, res, match, history, location }) {
    return { bla: 'bla stuffs' };
  }

  render() {
    return (
      <div className="Home">
        <Link to="/about">About</Link>
      </div>
    );
  }
}
