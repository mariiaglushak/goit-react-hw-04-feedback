import { FeedbackBtn } from './FeedbackOptionsStyle';

const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <>
      <FeedbackBtn onClick={good} type="button">
        good
      </FeedbackBtn>
      <FeedbackBtn onClick={neutral} type="button">
        neutral
      </FeedbackBtn>
      <FeedbackBtn onClick={bad} type="button">
        bad
      </FeedbackBtn>
    </>
  );
};

export default FeedbackOptions;
