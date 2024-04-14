import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJobs } from "../../api/job";
import styles from "../Home/Home.module.css";
import { DEFAULT_SKILLS } from "../../utils/constant";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState("");
  const [token] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const fetchJobDetailsById = async () => {
    const filteredSkills = skills.join(",");
    const response = await getAllJobs({ skills: filteredSkills, title });
    setJobs(response.data);
  };

  useEffect(() => {
    fetchJobDetailsById();
  }, []);

  const handleSkill = (event) => {
    const newArr = skills.filter((skill) => skill === event.target.value);
    if (newArr.length === 0) {
      setSkills([...skills, event.target.value]);
    }
  };

  const removeSkill = (selectedSkills) => {
    const newArr2 = skills.filter((skill) => skill == !selectedSkills);
    setSkills([...newArr2]);
  };

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className={styles.container}>
        {token ? <button onClick={handleLogOut}>Logout</button> : " "}
        <div className={styles.containerTop}>
          <input
            className={styles.inputTop}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            name="search"
            placeholder="Type any job title"
          />
        </div>
        <div className={styles.containerBottom}>
          <select
            onChange={handleSkill}
            className={styles.inputSelect}
            name="remote">
            <option value="">Skills</option>
            {DEFAULT_SKILLS.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
          {skills.map((skill) => {
            return (
              <span className={styles.chip} key={skill}>
                {skill}
                <span
                  onClick={() => removeSkill(skill)}
                  className={styles.cross}>
                  X
                </span>
              </span>
            );
          })}
          <button
            onClick={() => {
              setSkills([]);
              setTitle("");
            }}
            className={styles.edit}>
            Clear
          </button>
          <button onClick={fetchJobDetailsById} className={styles.edit}>
            Apply Filter
          </button>
          <button onClick={() => navigate("/job-post")} className={styles.edit}>
            Add Job
          </button>
        </div>
      </div>
      {/* <div className={styles.bottom}> */}
      {jobs.map((data) => {
        return (
          <div key={data._id} className={styles.list}>
            <div className={styles.listLeft}>
              <div>
                <img src={data.logoURL} />
              </div>
              <div className={styles.infoLeft}>
                <p className={styles.position}>{data.position}</p>
                <p className={styles.extraInfo}>
                  <span className={styles.greyText}>11-50</span>
                  <span className={styles.greyText}>{data.salary}</span>
                  <span className={styles.greyText}>{data.location}</span>
                </p>
                <p className={styles.extraInfo}>
                  <span className={styles.redText}>{data.remote}</span>
                  <span className={styles.redText}>{data.jobType}</span>
                  <button onClick={() => navigate(`/job-details/${data._id}`)}>
                    View Details
                  </button>
                </p>
              </div>
            </div>
            <div>
              <div>
                {data?.skills?.map((skill) => {
                  return (
                    <span className={styles.skill} key={skill}>
                      {skill}
                    </span>
                  );
                })}
              </div>
              <div className={styles.btnGroup}>
                {/* <button
                            onClick={() =>
                                navigate("/addJob", {
                                    state: { id: data._id, edit: true },
                                })
                            }
                            className={styles.edit}
                        >
                            Edit job
                        </button> */}
                <button
                  // onClick={() =>
                  //     navigate(`/job-detail${data._id}`)
                  // }
                  className={styles.view}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* </div> */}
    </>
  );
};

export default Home;
