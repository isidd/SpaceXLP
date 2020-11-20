import { connect } from "react-redux";
import SpaceXlp from './../components/spaceXlp'
import {onPageData} from './../store/action/dispatch/userAction'

export const mapStateToProps = state => {
  return {
    state : state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _onPageData : (query)=> dispatch(onPageData(query))
  }
};


const spaceXlpContainer = connect(mapStateToProps, mapDispatchToProps)(
  SpaceXlp
);

export default spaceXlpContainer;
