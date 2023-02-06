import axios from 'axios';

const gamesAPI = axios.create({
  baseURL: 'https://nc-games-project.onrender.com/api',
});

export const getReviews = (review) => {
  let path = '/review';
  return gamesAPI
    .get(path, { params: { review_id: review } })
    .then((response) => {
      return response.data.reviews;
    });
};

export const getUsers = () => {
  return gamesAPI.get('/user').then((response) => {
    return response.data.users;
  });
};
