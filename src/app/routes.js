const ROUTES = {
  newQuizRoute: () => "/quizzes/new",
  quizRoute: (id) => `/quizzes/${id}`,
  quizzesRoute: () => "/quizzes",
  newCardRoute: (quizId) => `/quizzes/${quizId}/new`,
  newTopicRoute: () => "/topics/new",
  topicRoute: (id) => `/topics/${id}`,
  topicsRoute: () => "/topics",
};

export default ROUTES;
