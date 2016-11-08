import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewPost.css';
import FormNovaPochta from 'yz-react-delivery-newpochta-form'

class NewPost extends React.Component {

  constructor(props) {
    super(props);
    this.apiKey = "a044d0f647b24e6a5fc8ab8e0d69b0a8";
    this.resData = {
      selectArea: '',
      selectCity: '',
      selectWarehous: ''
    };
    this.onClick = this.onClick.bind(this);
    this.cbResult = this.cbResult.bind(this);
  }

  cbResult(res) {
    this.resData =res;
  }

  onClick() {
//    console.log('Result', this.resData);
    alert(JSON.stringify(this.resData))
  };

  render() {
    console.log('render');
    return (
      <Layout>
        <div>
          <FormNovaPochta  apiKey={this.apiKey} cb={this.cbResult} />
          <button onClick={this.onClick}> jjjjj </button>
        </div>
     </Layout>
    )
  }
}

NewPost.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(NewPost);
