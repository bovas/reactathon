import Job from '../models/job';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getJobs(req, res) {
  Job.find().sort('-dateAdded').exec((err, jobs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ jobs });
  });
}
