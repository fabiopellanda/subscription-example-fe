import React, { Component } from 'react';
import logo from './img/logo-white.svg';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import Poll from './Poll';
import { getUserId } from './session';
import { GraphQL } from './GraphQL';
import { Users } from './Users';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, userId: '' };
  }

  componentDidMount() {
    getUserId().then((userId) => {
      this.setState({ loading: false, userId });
    });
  }

  render() {
    // if (this.state.loading) return <p>Loading...</p>;
    return (
      <ApolloProvider client={client}>
        <div className="App">

          <header className="App-header displayFlex">
            <div className="container displayFlex">
              <h1 className="App-title">Subscription example</h1>
            </div>
          </header>

          <Users />

          <Poll userId={this.state.userId} />

          <GraphQL />

          <footer className="App-footer displayFlex">
          
          </footer>

        </div>
      </ApolloProvider>
    );
  }
}

export default App;
