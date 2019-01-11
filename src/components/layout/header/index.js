import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button, Layout, Radio, Menu
} from 'antd';
import {
  changeLanguage
} from '../../../modules/app'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import messages_de from "./../../../translations/de.json";
import messages_en from "./../../../translations/en.json";
import de from 'antd/lib/locale-provider/ja_JP';
const { Header } = Layout;
const messages = {
  'ja': messages_de,
  'en': messages_en
};
class HeaderLayout extends React.Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
  }

  onChangeLanguage = (e) => {
    const localeValue = e.target.value;
    this.props.changeLanguage({ value: localeValue, name: localeValue ? localeValue.locale : 'en' })
  }

  render() {
    const { lang } = this.props;
    return (
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
              <Radio.Group defaultValue={messages[lang.name]} onChange={this.onChangeLanguage}>
                <Radio.Button key="en" value={undefined}>English</Radio.Button>
                <Radio.Button key="de" value={de}>中文</Radio.Button>
              </Radio.Group>
            </div>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
const mapStateToProps = ({ app }) => ({
  lang: app.lang,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeLanguage
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLayout)

