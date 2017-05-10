import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../style/App.css';
import {postJedi} from '../actions/action';

import JediList from './jediList';
import JediForm from './jediForm';
import {fetchJedi} from '../actions/action';

class App extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this
      .onSubmit
      .bind(this);
  }

  onSubmit(event) {
    const jedi = {
      id: Object
        .keys(this.props.jedi)
        .length + 1,
      name: event.target.jedi.value
    }
    event.preventDefault();
    this
      .props
      .dispatch(postJedi(jedi));
    event.target.jedi.value = '';
  }

  componentWillMount() {
    this.fetchJedi();
  }

  fetchJedi() {
    this
      .props
      .dispatch(fetchJedi());
  }

  render() {
    const {jedi} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <JediList jedi={jedi}/>
        <JediForm submit={this.onSubmit}/>
      </div>
    );
  }
}

App.propTypes = {
  jedi: PropTypes.array
};

function mapStateToProps(state) {
  return {jedi: state.jedi};
}

export default connect(mapStateToProps)(App);
