import React, { Component } from 'react';
import { TextField, InputAdornment, Select } from '@material-ui/core';
import { DateRange, ArrowDropDown } from '@material-ui/icons';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static _roundMinutesTo15() {
    const hour = moment().hour();
    const minute = moment().minute();
    return moment().hour(hour).minute(Math.round(minute / 10) * 10);
  }

  constructor (props) {
    super(props);
    this.state = {
      startDate: moment().date(1),
      endDate: moment(),
      startTime: moment().hour(0).minute(0),
      endTime: App._roundMinutesTo15()
    };

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleTimeChangeStart = this.handleTimeChangeStart.bind(this);
    this.handleTimeChangeEnd = this.handleTimeChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleTimeChangeStart(time) {
    this.setState({
      startTime: time
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  handleTimeChangeEnd(time) {
    this.setState({
      endTime: time
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Awesome Date/Time Picker!</h1>
        </header>
        <div className='pickerWrapper'>
          <DatePicker
            customInput={
              <TextField
                InputProps={{
                  startAdornment: <InputAdornment position="start"><DateRange/></InputAdornment>
                }}
              />
            }
            selected={ this.state.startDate }
            selectsStart
            startDate={ this.state.startDate }
            endDate={ this.state.endDate }
            onChange={ this.handleChangeStart }
            maxDate={ moment() }
            dateFormat="LL"
            className='datePicker'
          />
          <DatePicker
            customInput={
              <TextField
                InputProps={{
                  endAdornment: <InputAdornment position="end"><ArrowDropDown/></InputAdornment>
                }}
              />
            }
            selected={ this.state.startTime }
            onChange={ this.handleTimeChangeStart }
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            timeIntervals={ 15 }
            dateFormat="LT"
            timeCaption="Time"
            openToDate={ moment() }
            minTime={ moment().hours(0).minutes(0) }
            maxTime={ moment() }
            className='datePicker timePicker'
          />
        </div>
        <div className='pickerWrapper'>
          <DatePicker
            customInput={
              <TextField
                InputProps={{
                  startAdornment: <InputAdornment position="start"><DateRange/></InputAdornment>
                }}
              />
            }
            selected={ this.state.endDate }
            selectsEnd
            startDate={ this.state.startDate }
            endDate={ this.state.endDate }
            onChange={ this.handleChangeEnd }
            maxDate={ moment() }
            dateFormat="LL"
            className='datePicker'
          />
          <DatePicker
            customInput={
              <TextField
                InputProps={{
                  endAdornment: <InputAdornment position="end"><ArrowDropDown/></InputAdornment>
                }}
              />
            }
            selected={ this.state.endTime }
            onChange={ this.handleTimeChangeEnd }
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            timeIntervals={ 15 }
            dateFormat="LT"
            timeCaption="Time"
            openToDate={ moment() }
            minTime={ this.state.startTime || moment().hours(0).minutes(0) }
            maxTime={ moment() }
            className='datePicker timePicker'
          />
        </div>
      </div>
    );
  }
}

export default App;
