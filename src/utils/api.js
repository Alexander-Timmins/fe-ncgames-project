import axios from 'axios';

const gamesAPI = axios.create({
  baseURL: 'https://nc-games-project.onrender.com/api',
});

export const getReview = (review_Id) => {
  return gamesAPI.get(`/review/${review_Id}`).then((response) => {
    return response.data;
  });
};

export const getReviews = () => {
  return gamesAPI.get(`/review/`).then((response) => {
    return response.data.reviews;
  });
};

export const getUsers = () => {
  return gamesAPI.get('/user').then((response) => {
    return response.data.users;
  });
};

export const getComments = (review_Id) => {
  return gamesAPI
    .get(`${review_Id}/comments`)
    .then((response) => {
      return response.data.comments;
    });
};
