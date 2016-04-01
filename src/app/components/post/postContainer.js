import { connect } from 'react-redux'
import PostList from './postList.react'
import {fetchPostAsync} from '../../state/actions';


const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClicked: (postUrl) => {
      dispatch(fetchPostAsync(postUrl));
    }
  }
};

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

export default PostContainer;