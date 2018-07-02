import callApi from '../../util/apiCaller';

export function fetchAppliedJobs() {
  return (dispatch) => {
    return callApi('jobs').then(res => {
      dispatch(fetchAppliedJobs(res.appliedJobs));
    });
  };
}