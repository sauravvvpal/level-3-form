import React from 'react';
import { useForm } from './useForm';
import { validate } from './validate';
import './SurveyForm.css';

const SurveyForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    submitted,
    additionalQuestions,
  } = useForm(initialValues, validate);

  return (
    <div className="container">
      {!submitted ? (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="surveyTopic">Survey Topic</label>
            <select
              id="surveyTopic"
              name="surveyTopic"
              value={values.surveyTopic}
              onChange={handleChange}
            >
              <option value="">Select a topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && <p className="error">{errors.surveyTopic}</p>}
          </div>

          {values.surveyTopic === 'Technology' && (
            <>
              <div className="form-group">
                <label htmlFor="favoriteLanguage">Favorite Programming Language</label>
                <select
                  id="favoriteLanguage"
                  name="favoriteLanguage"
                  value={values.favoriteLanguage}
                  onChange={handleChange}
                >
                  <option value="">Select a language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>
                {errors.favoriteLanguage && <p className="error">{errors.favoriteLanguage}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="yearsOfExperience">Years of Experience</label>
                <input
                  type="number"
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={values.yearsOfExperience}
                  onChange={handleChange}
                />
                {errors.yearsOfExperience && <p className="error">{errors.yearsOfExperience}</p>}
              </div>
            </>
          )}

          {values.surveyTopic === 'Health' && (
            <>
              <div className="form-group">
                <label htmlFor="exerciseFrequency">Exercise Frequency</label>
                <select
                  id="exerciseFrequency"
                  name="exerciseFrequency"
                  value={values.exerciseFrequency}
                  onChange={handleChange}
                >
                  <option value="">Select frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {errors.exerciseFrequency && <p className="error">{errors.exerciseFrequency}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="dietPreference">Diet Preference</label>
                <select
                  id="dietPreference"
                  name="dietPreference"
                  value={values.dietPreference}
                  onChange={handleChange}
                >
                  <option value="">Select a diet</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
                {errors.dietPreference && <p className="error">{errors.dietPreference}</p>}
              </div>
            </>
          )}

          {values.surveyTopic === 'Education' && (
            <>
              <div className="form-group">
                <label htmlFor="highestQualification">Highest Qualification</label>
                <select
                  id="highestQualification"
                  name="highestQualification"
                  value={values.highestQualification}
                  onChange={handleChange}
                >
                  <option value="">Select a qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.highestQualification && <p className="error">{errors.highestQualification}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="fieldOfStudy">Field of Study</label>
                <input
                  type="text"
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  value={values.fieldOfStudy}
                  onChange={handleChange}
                />
                {errors.fieldOfStudy && <p className="error">{errors.fieldOfStudy}</p>}
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
            ></textarea>
            {errors.feedback && <p className="error">{errors.feedback}</p>}
          </div>

          <button type="submit" className="btn">Submit</button>
        </form>
      ) : (
        <div className="summary">
          <h2>Survey Summary</h2>
          <p><strong>Full Name:</strong> {values.fullName}</p>
          <p><strong>Email:</strong> {values.email}</p>
          <p><strong>Survey Topic:</strong> {values.surveyTopic}</p>
          {values.surveyTopic === 'Technology' && (
            <>
              <p><strong>Favorite Programming Language:</strong> {values.favoriteLanguage}</p>
              <p><strong>Years of Experience:</strong> {values.yearsOfExperience}</p>
            </>
          )}
          {values.surveyTopic === 'Health' && (
            <>
              <p><strong>Exercise Frequency:</strong> {values.exerciseFrequency}</p>
              <p><strong>Diet Preference:</strong> {values.dietPreference}</p>
            </>
          )}
          {values.surveyTopic === 'Education' && (
            <>
              <p><strong>Highest Qualification:</strong> {values.highestQualification}</p>
              <p><strong>Field of Study:</strong> {values.fieldOfStudy}</p>
            </>
          )}
          <p><strong>Feedback:</strong> {values.feedback}</p>
          {additionalQuestions.length > 0 && (
            <div className="additional-questions">
              <h3>Additional Questions</h3>
              {additionalQuestions.map((question, index) => (
                <p key={index}>{question}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
