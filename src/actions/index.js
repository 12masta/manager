export condst emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text
  };
};
