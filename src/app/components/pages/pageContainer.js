import { connect } from 'react-redux'
import PageContent from './pageContent.react'

const mapStateToProps = (state) => {
  return {
    page: state.currentPage,
  }
};

const PageContainer = connect(
  mapStateToProps
)(PageContent)

export default PageContainer;