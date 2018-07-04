import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import LandingPageJobDetails from '../../components/LandingPageJobDetails';

import { fetchJobDetails } from '../../LandingActions';
import { getJobDetails } from '../../LandingJobDetailsReducer';

class JobDetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobDetails(this.props.params.code));
  }
  render() {
    return (
      <div>
        <LandingPageJobDetails jobDetails={this.props.jobDetails} />
      </div>
    );
  }
}

JobDetailsPage.need = [params => { return fetchJobDetails(params.code); }];

function mapStateToProps(state, props) {
  console.log(state);
  return {
    jobDetails: getJobDetails(state, props.params.code),
  };
}

JobDetailsPage.propTypes = {
  jobDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    managerfeedback: PropTypes.string.isRequired,
    HrMessage: PropTypes.string.isRequired,
    interviewDate: PropTypes.string.isRequired,
    interviewDetails: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    progressCode: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

JobDetailsPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(JobDetailsPage);
