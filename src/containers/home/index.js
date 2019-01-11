import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import {
  Calendar, DatePicker
} from 'antd';
import moment from 'moment';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }
  render() {
    return (
      <div>
      <h1 className="App-title">

      </h1>
      <DatePicker />
      <FormattedHTMLMessage id="app.intro"
        defaultMessage="To get started, edit <code>src/App.js</code> and save to reload."
        description="Text on main page" />
      <Calendar fullscreen={false} value={moment()} />
      <p>Count: {this.props.count}</p>
      <p>
        <button onClick={console.log()}>Log Locale</button>
        <button onClick={() => this.props.incrementAsync()} disabled={this.props.isIncrementing}>
          Increment Async
</button>
      </p>

      <p>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>
          Decrement Async
</button>
      </p>

      <p>
          {this.props.data.data && this.props.data.data.Ahri.blurb}
        </p>
    </div>
    )
  }
}


const mapStateToProps = ({ counter }, ownProps) => ({
  count: counter.count,
  data: counter.data,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  cookies: ownProps.cookies,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
