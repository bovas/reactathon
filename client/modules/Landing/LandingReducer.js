// Initial State
const initialState = { data: [] };

const LandingReducer = (state = initialState, action) => {
  switch (action.type) {    
    default:
      return state;
  }
};

/* Selectors */
 
// Get all posts
export const getAppliedJobs = state => state.appliedJobs.data;

export default LandingReducer;
