import { useState } from "react";
import styles from "../JobPost/JobPost.module.css";
import { DEFAULT_SKILLS } from "../../utils/constant";
import { useEffect } from "react";
import { createJobPost } from "../../api/job";

export const JobPost = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    title: "",
    logoURL: "",
    salary: "",
    jobType: "",
    remote: "",
    location: "",
    description: "",
    skills: [],
    locationType: "",
    duration: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addSkills = (event) => {
    const skill = event.target.value;
    const actualSkills = formData.skills;
    const skillExists = actualSkills.includes(skill);
    if (!skillExists) {
      const updatedSkills = [...formData.skills, skill];
      setFormData({
        ...formData,
        skills: updatedSkills,
      });
    }
  };

  const removeSkills = (skillToRemove) => {
    const updatedSkills = formData.skills.filter(
      (skill) => skill !== skillToRemove
    );

    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !formData.companyName ||
      !formData.title ||
      !formData.logoURL ||
      !formData.description ||
      !formData.salary ||
      !formData.location ||
      !formData.locationType ||
      !formData.duration ||
      !formData.skills
    ) {
      alert("Please fill in all fields.");
      return;
    }
    await createJobPost(formData);
  };

  
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  
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
          <label className={styles.label} htmlFor="title">
            title:
          </label>
          <input
            className={styles.input}
            type="text"
            name="title"
            value={formData.title}
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
          <label className={styles.label} htmlFor="duration">
            Duration:
          </label>
          <textarea
            className={styles.input}
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Enter duration"
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
            onChange={addSkills}>
            <option disabled selected>
              Please select skills
            </option>
            {DEFAULT_SKILLS.map((element) => (
              <option>{element}</option>
            ))}
          </select>
        </div>
        <div>
          {/* Render skills and remove button */}
          {formData.skills.map((skill, index) => (
            <span key={index}>
              {skill} <button onClick={() => removeSkills(skill)}>X</button>
            </span>
          ))}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="locationType">
            locationType:
          </label>
          <input
            className={styles.input}
            type="text"
            name="locationType"
            value={formData.locationType}
            onChange={handleChange}
            placeholder="locationType"
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
