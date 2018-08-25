import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import List from './components/List/List';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.searchComics = this.searchComics.bind(this);

    this.state = {
      result: []
    }
  }

  searchComics(search) {
    search = (search) ? '&titleStartsWith=' + search : '';

    axios
    .get('https://gateway.marvel.com/v1/public/comics?format=comic&startYear=2018&formatType=comic&orderBy=modified&apikey=4c4180c92047d125cd72cbd256e62f57&ts=1533790666&hash=daff9eb8c8be71dd37410b6d9bac0c09&limit=12' + search)
    .then(res => {
      const r = res.data.data.results;
      this.setState({ result: r });
    });
  }

  componentDidMount() {
    this.searchComics();
  }

  render() {
    return (
      <div className="App">
      <Title/>
      <Search submit={this.searchComics}/>
      <List items={this.state.result}/>

      </div>
      );
  }
}

export default App;
