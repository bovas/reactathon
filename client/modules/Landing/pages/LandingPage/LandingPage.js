import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppliedJobs } from '../../LandingActions';
import { getAppliedJobs } from '../../LandingReducer';

class LandingPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAppliedJobs());
  }
  render() {
    return (
      <div>Landing Page</div>
    );
  }
}

LandingPage.need = [() => { return fetchAppliedJobs(); }];

function mapStateToProps(state) {
  return {
    jobs: getAppliedJobs(state),
  };
}

LandingPage.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.id,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

LandingPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(LandingPage);
