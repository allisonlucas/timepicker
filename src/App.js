import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: moment()
    };

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DatePicker
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
          maxDate={moment()}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="LLL"
          placeholderText="Select a Date & Time"
          className='datePicker'
          minTime={moment().hours(0).minutes(0)}
          maxTime={moment()}
        />

        <DatePicker
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
          maxDate={moment()}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="LLL"
          className='datePicker'
          minTime={moment().hours(0).minutes(0)}
          maxTime={moment()}
        />
      </div>
    );
  }
}

export default App;
