import api from '@/lib/api';

export const getAllFilms = async (page = 1, take = 10) => {
  const response = await api.get(`/films?take=${take}&page=${page}`);
  return response.data;
};

export const getFilmDetail = async (id: string) => {
  const response = await api.get(`/films/${id}`);
  return response.data;
};

export const createReview = async (reviewData: { film_id: string, rating: number, comment: string }) => {
  const response = await api.post('/reviews', reviewData);
  return response.data;
};
