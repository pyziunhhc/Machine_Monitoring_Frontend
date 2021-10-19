import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FeedValue = ({ feed }) => {
  const [feedValue, setFeedValue] = useState();
  const classNamePerFeedValue = feed >= 90 ? "good" : "bad";
  useEffect(() => {
    setFeedValue(feed);
    return () => {
      setFeedValue(null);
    };
  }, [feed]);
  return feed ? (
    <p className={`feed feed-${classNamePerFeedValue}`}>
      Prędkość posuwu: {feedValue}
    </p>
  ) : null;
};

FeedValue.propTypes = { feed: PropTypes.string };

export default FeedValue;
