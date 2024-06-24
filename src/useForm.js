import { useState, useEffect } from 'react';

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
        const mockQuestions = [
            `What do you think about the current state of ${values.surveyTopic}?`,
            `What improvements would you suggest for ${values.surveyTopic}?`,
          ];
          setAdditionalQuestions(mockQuestions);
          setSubmitted(true);
      }
    }
  }, [isSubmitting, values, validate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  const fetchAdditionalQuestions = async (topic) => {
    try {
      const response = await fetch(`https://api.example.com/questions?topic=${topic}`);
      const data = await response.json();
      setAdditionalQuestions(data.questions);
      setSubmitted(true);
    } catch (error) {
      console.error('Error fetching additional questions:', error);
    }
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
