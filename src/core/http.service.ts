export const Headers = {
  headers: {
    Authorization: `Bearer  ${localStorage.getItem('token')}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
};
