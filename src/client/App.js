import React, { Component } from 'react';
import './app.css';


export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = { username: null, worldCup: null };

  }

  componentDidMount() {
      fetch('/api/getUsername')
          .then(res => res.json())
          .then(user => this.setState({ username: user.username }));

      fetch('/api/getWorldCup')
          .then(res => res.json())
          .then(worldCup => this.setState({worldCup: worldCup}));
  }

    render() {

        return (

                <div>
          {this.state.worldCup ? (
                  <div>{JSON.stringify(this.state.worldCup['stadiums'])}</div>
            ) : (
          <h1>Loading.. please wait!</h1>
            )}

            </div>

      // <div>
      //       {this.state.username ? (
      //     <h1>Hello {this.state.username}</h1>
      //       ) : (
      //     <h1>Loading.. please wait!</h1>
      //     )}


      //   </div>

        
        

    );
    }
}
