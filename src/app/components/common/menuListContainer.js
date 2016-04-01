import { connect } from 'react-redux'
import MenuList from './menuList.react'
import {menuClicked, fetchPageAsync, fetchLatestPostAsync} from '../../state/actions';

const mapStateToProps = (state) => {
  return {
    menus: state.menus,
    selectedMenu : state.selectedMenu,
    menuInfo : state.menuInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: (menuName) => {
      dispatch(menuClicked(menuName));
      dispatch(fetchPageAsync(menuName));
    },
    onBrandClick: () => {
      dispatch(fetchLatestPostAsync());
    }
  }
};

const MenuListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuList)

export default MenuListContainer;