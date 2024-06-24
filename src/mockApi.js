export const fetchAdditionalQuestions = (surveyTopic) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const questions = {
          Technology: [
            "What is your preferred IDE?",
            "Do you contribute to open-source projects?"
          ],
          Health: [
            "Do you take any supplements?",
            "How many hours do you sleep on average?"
          ],
          Education: [
            "What was your favorite subject in school?",
            "Do you have any teaching experience?"
          ],
        };
        resolve(questions[surveyTopic] || []);
      }, 1000);
    });
  };
  