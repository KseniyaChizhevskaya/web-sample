import { api } from '../instance';

export function rentCar(data, params) {
  return api.post('cars/rent', data, {
    ...(params?.options && params.options)
  });
}
