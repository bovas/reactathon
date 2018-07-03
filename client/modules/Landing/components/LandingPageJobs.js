import React, { PropTypes } from 'react';

// Import Style
import styles from './LandingPageJobs.css';

// Import Components
import JobItem from './JobItem/JobItem';

function LandingPageJobs(props) {
  console.log('props', props);
  if (props.jobs) {
    return (
      <table className="table" className={styles.tableContent}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Job Code</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
        {
          props.jobs.map(job => (
            <JobItem
              job={job}
              key={job.code}
              onClick={() => props.handleClickJob(job.code)}
            />
          ))
        }
        </tbody>
      </table>
      /* <div className="listView" >
        {
          props.jobs.map(job => (
            <JobItem
              job={job}
              key={job.code}
              onClick={() => props.handleClickJob(job.code)}
            />
          ))
        }
      </div> */
    );
  }
  return (<div>Error in Loading...</div>);
}

LandingPageJobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    interviewDate: PropTypes.string.isRequired,
    appliedDate: PropTypes.string.isRequired,
  })).isRequired,
  handleClickJob: PropTypes.func.isRequired,
};

export default LandingPageJobs;
