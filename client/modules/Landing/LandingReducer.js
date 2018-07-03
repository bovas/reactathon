// Initial State
const initialState = { data: [] };

import { FETCH_APPLIED_JOBS } from './LandingActions';

const LandingReducer = (state = initialState, action) => {  
  switch (action.type) {
    case FETCH_APPLIED_JOBS :
      return {
        data: action.jobs,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getAppliedJobs = state => state.jobs.data;

export default LandingReducer;
