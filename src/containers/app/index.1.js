import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import {
  LocaleProvider, Pagination, DatePicker, TimePicker, Calendar,
  Popconfirm, Table, Modal, Button, Select, Transfer, Radio,Layout, Menu, Breadcrumb 
} from 'antd';
import de from 'antd/lib/locale-provider/ja_JP';
import moment from 'moment';
import messages_de from "./../../translations/de.json";
import messages_en from "./../../translations/en.json";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/ja';
import {IntlProvider} from "react-intl";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
moment.locale('en');
addLocaleData([...locale_en, ...locale_de]);


const messages = {
  'ja': messages_de,
  'en': messages_en
};
const langValue = {
  'ja': de,
  'en': null
}
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      locale: {name: 'en', value: langValue['en']},
    };
  }

  changeLocale = (e) => {
    const localeValue = e.target.value;
    this.setState({ locale: {value: localeValue, name: localeValue ? localeValue.locale :'en'}});
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('ja');
    }
    //window.location.reload()
  }

  render() {
    const { locale } = this.state;
    return (
      <IntlProvider locale={locale.name} messages={messages[locale.name]}>
      <LocaleProvider locale={locale.value}>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about-us"><Button type="primary">Button</Button></Link>
              </Menu.Item>
              <Menu.Item key="3">
                <div className="change-locale">
                  <span style={{ marginRight: 16 }}>Change locale of components: </span>
                  <Radio.Group defaultValue={messages[locale.name]} onChange={this.changeLocale}>
                    <Radio.Button key="en" value={undefined}>English</Radio.Button>
                    <Radio.Button key="de" value={de}>中文</Radio.Button>
                  </Radio.Group>
                </div>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <main style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              <Route exact path="/" render={() => (<Home cookies={this.props.cookies}/>)}/>
              <Route exact path="/about-us" component={About} />
            </main>


          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </LocaleProvider>
      </IntlProvider>
    );
  }
}
export default App
