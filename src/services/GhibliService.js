import AbstractService from "./AbstractService";

export default class GhibliService extends AbstractService {
  /**
   * @override
   */
  baseURL() {
    return 'https://ghibliapi.herokuapp.com/'
  }

  getFilms(fields = [], limit = 10) {
    const params = {
      fields: fields.join(','),
      limit,
    };

    return this.client.get('/films', {
      params,
    })
  }

  getFilmById(id) {
    return this.client.get(`/films/${id}`);
  }
}
