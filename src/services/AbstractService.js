import axios from 'axios'

export default class AbstractService {
  constructor(config = {}) {
    this.config  = config;
    this.headers = {};
    this.client = axios.create(
      this.buildConfig()
    )
  }

  buildConfig() {
    return {
      baseURL: this.baseURL(),
      headers: this.getDefaultHeaders(),
      ...this.config,
    }
  }

  baseURL() {
    return '';
  }

  setDefaultHeaders(headers = {}) {
    this.headers = {
      ...this.headers,
      ...headers,
    };
    return this
  }

  getDefaultHeaders() {
    return this.headers;
  }
}
