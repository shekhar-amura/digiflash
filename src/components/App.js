import React from 'react';
import git from '../api/git';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';

class App extends React.Component {

  state = { pulls: {}, reviews: {} };

  // git urls
  // to fetch repos = `/users/${term}/repos`
  // to fetch user info = `/users/${term}`
  // to fetch pulls form perticular repo = GET '/repos/:owner/:repo/pulls'
  // to_check_urls_for_user = > curl -u "username" https://api.github.com
  // to check review status = /repos/amuratech/crm/pulls/18448/reviews
  // to check how many pulls are there = /repos/amuratech/crm/pulls

  onSearchSubmit = async (term) => {
    const response = await git.get(`/repos/amuratech/crm/pulls`,{
    });
    this.state.setState({ pulls: response.data });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar searchText={this.onSearchSubmit}/>
        <UserInfo userData={this.state.data} />
      </div>
    )
  }
}

export default App;