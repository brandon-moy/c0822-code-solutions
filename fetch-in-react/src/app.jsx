import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.ok) {
        const data = await response.json();
        this.setState({ users: data, isLoading: false });
      }
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
