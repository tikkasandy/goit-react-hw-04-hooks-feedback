import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

function App() {
  const [feedback, setFedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const leaveFeedback = vote => {
    setFedback(prevState => ({ ...prevState, [vote]: prevState[vote] + 1 }));
  };

  const total = Object.keys(feedback).reduce(
    (acc, key) => acc + feedback[key],
    0,
  );

  const positivePercentage = Math.round((feedback['good'] / total) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            options={feedback}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
