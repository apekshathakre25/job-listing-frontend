import React from "react";
import { JobPost } from "../../components/JobPost/JobPost";
import JobImage from "../../assets/job.png";

const JobPostPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <JobPost />
      <img style={{ maxHeight: "100vh", width: "50vw" }} src={JobImage} />
    </div>
  );
};

export default JobPostPage;
