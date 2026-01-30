import { api } from '../instance';

export function getCars(params) {
  return api.get('cars/info', { ...(params?.options && params.options) });
}
