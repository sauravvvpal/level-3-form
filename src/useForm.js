import { useState, useEffect } from 'react';
import { fetchAdditionalQuestions } from './mockApi';

export const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (isSubmitting) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setIsSubmitting(false);
      if (Object.keys(validationErrors).length === 0) {
        fetchAdditionalQuestions(values.surveyTopic)
          .then((questions) => {
            setAdditionalQuestions(questions);
            setSubmitted(true);
          })
          .catch((error) => {
            console.error("Error fetching additional questions:", error);
          });
      }
    }
  }, [isSubmitting, values, validate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    submitted,
    additionalQuestions,
  };
};
