import { useState } from "react";
import styles from "../JobPost/JobPost.module.css";
import { DEFAULT_SKILLS } from "../../utils/constant";

export const JobPost = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    logoURL: "",
    position: "",
    salary: "",
    jobType: "",
    remote: "",
    location: "",
    description: "",
    about: "",
    skillsRequired: "",
    information: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.companyName ||
      !formData.logoURL ||
      !formData.position ||
      !formData.salary ||
      !formData.jobType ||
      !formData.remote ||
      !formData.location ||
      !formData.description ||
      !formData.about ||
      !formData.skillsRequired ||
      !formData.information
    ) {
      alert("Please fill in all fields.");
      return;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Add job description</h1>
      <div className={styles.jobForm}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="companyName">
            Company Name:
          </label>
          <input
            className={styles.input}
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="logoURL">
            Logo URL:
          </label>
          <input
            className={styles.input}
            type="text"
            name="logoURL"
            value={formData.logoURL}
            onChange={handleChange}
            placeholder="Enter logo URL"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="position">
            Position:
          </label>
          <input
            className={styles.input}
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Enter job position"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="salary">
            Salary:
          </label>
          <input
            className={styles.input}
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Enter job salary"
          />
        </div>

        <div className={styles.selectGroup}>
          <label className={styles.label} htmlFor="jobType">
            Job Type:
          </label>
          <select
            className={styles.select}
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}>
            <option value="">Select job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label className={styles.label} htmlFor="remote">
            Remote:
          </label>
          <select
            className={styles.select}
            name="remote"
            value={formData.remote}
            onChange={handleChange}>
            <option value="Remote">Remote</option>
            <option value="Office">Office</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="location">
            Location:
          </label>
          <input
            className={styles.input}
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter job location"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="description">
            Description:
          </label>
          <textarea
            className={styles.input}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter job description"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="about">
            About:
          </label>
          <textarea
            className={styles.input}
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Enter company description"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="skills">
            Skills:
          </label>
          <select
            className={styles.input}
            type="text"
            name="skills"
            onChange={ handleChange}>
            <option disabled selected>
              Please select skills
            </option>
            {DEFAULT_SKILLS.map((element) => (
              <option>{element}</option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="skills">
            Information:
          </label>
          <input
            className={styles.input}
            type="text"
            name="information"
            value={formData.information}
            onChange={handleChange}
            placeholder="information"
          />
        </div>
      </div>
      <button onClick={handleSubmit} className={styles.add}>
        + Add Job
      </button>
      <button className={styles.cancel}>Cancel</button>
    </div>
  );
};
