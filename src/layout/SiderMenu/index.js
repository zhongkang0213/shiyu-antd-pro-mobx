import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

// import style from './style.less';

@withRouter
class SiderMenu extends Component {
  handleMenuClick = ({ key }) => {
    const { history } = this.props;

    if (key === '/project') {
      history.push(key);
    }
  }

  render() {
    const { collapsed, location } = this.props;

    return (
      <Menu
        defaultSelectedKeys={['/project']}
        selectedKeys={[location.pathname]}
        // defaultOpenKeys={['exchangemgr']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        onClick={this.handleMenuClick}
      >
        {/* <Menu.Item key="/project">
          <Icon type="pie-chart" />
          <span>首页</span>
        </Menu.Item>
        <SubMenu key="form" title={<span><Icon type="mail" /><span>表单页</span></span>}>
          <Menu.Item key="/project/form/basic"><Link to="/project/form/basic">基础表单</Link></Menu.Item>
          <Menu.Item key="/project/form/step"><Link to="/project/form/step">分步表单</Link></Menu.Item>
        </SubMenu> */}
        <SubMenu key="list" title={<span><Icon type="table" /><span>学生信息</span></span>}>
          {/* <Menu.Item key="/project/list/search"><Link to="/project/list/search">查询列表</Link></Menu.Item> */}
          <Menu.Item key="/project/list/student"><Link to="/project/list/student">查询列表</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="food" title={<span><Icon type="table" /><span>膳食管理</span></span>}>
          {/* <Menu.Item key="/project/food/weeklyrecipe"><Link to="/project/food/weeklyrecipe">一周食谱</Link></Menu.Item> */}
          <Menu.Item key="/project/food/weeklyrecipeedit"><Link to="/project/food/weeklyrecipeedit">一周食谱编辑</Link></Menu.Item>
          <Menu.Item key="/project/food/menulistedit"><Link to="/project/food/menulistedit">菜谱编辑</Link></Menu.Item>
        </SubMenu>
        {/* <SubMenu key="result" title={<span><Icon type="table" /><span>结果页</span></span>}>
          <Menu.Item key="/project/result/success">
            <Link to="/project/result/success">成功页</Link>
          </Menu.Item>
          <Menu.Item key="/project/result/error">
            <Link to="/project/result/error">失败页</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="exception" title={<span><Icon type="table" /><span>异常页</span></span>}>
          <Menu.Item key="/project/exception/403">
            <Link to="/project/exception/403">403</Link>
          </Menu.Item>
          <Menu.Item key="/project/exception/404">
            <Link to="/project/exception/404">404</Link>
          </Menu.Item>
          <Menu.Item key="/project/exception/500">
            <Link to="/project/exception/500">500</Link>
          </Menu.Item>
        </SubMenu> */}
       
        <SubMenu key="usercenter" title={<span><Icon type="user" /><span>个人中心</span></span>}>
          <Menu.Item key="/project/usercenter/account"><Link to="/project/usercenter/account">修改密码</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default SiderMenu;
