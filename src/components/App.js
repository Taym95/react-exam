import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../style/App.css';
import {addJedi} from '../reducers/reducer';
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
    event.preventDefault();
    this
      .props
      .dispatch(addJedi({jedi: event.target.jedi.value}));
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
