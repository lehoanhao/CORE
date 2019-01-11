import React from 'react'
import { Route, Link } from 'react-router-dom'
import {IntlProvider, addLocaleData} from "react-intl";
import {
  LocaleProvider, Pagination, DatePicker, TimePicker, Calendar,
  Popconfirm, Table, Modal, Button, Select, Transfer, Radio, Layout, Menu, Breadcrumb
} from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import messages_de from "./../../translations/de.json";
import messages_en from "./../../translations/en.json";
import Header from "../../components/layout/header"
import locale_en from 'react-intl/locale-data/en';
import locale_ja from 'react-intl/locale-data/ja';
const { Content, Footer } = Layout;
const messages = {
  'ja': messages_de,
  'en': messages_en
};
addLocaleData([...locale_en, ...locale_ja]);
class App extends React.Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { lang } = this.props;
    console.log(lang)
    return (
      <IntlProvider locale={lang.name} messages={messages[lang.name]}>
        <LocaleProvider locale={lang.value}>
          <Layout>
          <Header/>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>

              <main style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                {/* <Route exact path="/" render={() => (<Home />)} />
                <Route exact path="/about-us" component={About} /> */}
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
const mapStateToProps = ({ app }) => ({
  lang: app.lang,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

