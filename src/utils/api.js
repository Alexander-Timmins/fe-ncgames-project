import axios from 'axios';

const gamesAPI = axios.create({
  baseURL: 'https://nc-games-project.onrender.com/api',
});

export const getCategories = () => {
  return gamesAPI.get(`/categories`).then((response) => {
    return response.data;
  });
};

export const getReview = (review_Id) => {
  return gamesAPI.get(`/review/${review_Id}`).then((response) => {
    return response.data;
  });
};

export const getReviews = (category) => {
  return gamesAPI
    .get(`/review`, { params: { category: category.categoryInUse } })
    .then((response) => {
      return response.data.reviews;
    });
};

export const getUsers = () => {
  return gamesAPI.get('/user').then((response) => {
    return response.data.users;
  });
};

export const getComments = (review_Id) => {
  return gamesAPI.get(`${review_Id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const voteReviewFunc = (review_Id, number) => {
  return gamesAPI
    .patch(`review/${review_Id}`, { inc_votes: number })
    .then((response) => {
      return response.data;
    });
};

export const voteCommentFunc = (comment_id, number) => {
  return gamesAPI
    .patch(`comments/${comment_id}`, { inc_votes: number })
    .then((response) => {
      return response.data;
    });
};

export const postComment = (review_id, username, comment) => {
  return gamesAPI
    .post(`review/${review_id}/comments`, { username: username, body: comment })
    .then((response) => {
      return response.data;
    });
};

export const deleteComment = (commentId) => {
  return gamesAPI.delete(`comments/${commentId}`).then((response) => {
    return response.data;
  })
}