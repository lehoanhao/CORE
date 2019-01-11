import React from 'react'
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {
  Calendar, DatePicker
} from 'antd';
import moment from 'moment';
const About = () => (
  <div>
    <h1>About Page</h1>
    <p>Did you get here via Redux?</p>
    <FormattedMessage id="app.intro"
                      defaultMessage="abcasdasd {what}"
                      description="Welcome header on app main page"
                      values={{ what: 'react-intl' }}/>
                      <Calendar fullscreen={false} value={moment()} />
  </div>
)

export default About
