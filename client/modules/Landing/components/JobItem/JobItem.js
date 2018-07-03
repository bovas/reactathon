import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './JobItem.css';

function JobItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/jobs/${props.job.code}`} >
          {props.job.code}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.job.name}</p>
      <p className={styles['post-desc']}>{props.job.description}</p>
      <p className={styles['post-action']}><a href="#" onClick={props.onClick}><FormattedMessage id="viewJob" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

JobItem.propTypes = {
  job: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    interviewDate: PropTypes.string.isRequired,
    appliedDate: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default JobItem;
