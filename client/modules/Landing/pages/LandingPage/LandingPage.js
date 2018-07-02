import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import {fetchAppliedJobs} from '../../LandingActions';

class LandingPage extends Component{
    componentDidMount() {
        this.props.dispatch(fetchAppliedJobs());
    }
    render(){
        return(
            <div>Landing Page</div>
        )
    }
}

LandingPage.need = [() => { return fetchAppliedJobs(); }];

function mapStateToProps(state, props) {
    return {      
    };
  }

  PostListPage.contextTypes = {
    router: React.PropTypes.object,
  };
  
export default connect(mapStateToProps)(LandingPage);