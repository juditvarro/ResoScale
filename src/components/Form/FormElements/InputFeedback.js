import React from 'react';

// Input feedback
const inputFeedback = ({ error }) =>
  error ? <div style={{ color: "#eb4d4b" }}>{error}</div> : null;


export default inputFeedback