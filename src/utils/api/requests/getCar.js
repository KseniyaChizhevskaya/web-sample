import { api } from '../instance';

export function getCarById(id, params) {
  return api.get(`cars/info/${id}`, { ...(params?.options && params.options) });
}
