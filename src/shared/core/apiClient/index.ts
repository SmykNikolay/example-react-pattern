import httpRequest from "../request";
import RequestBuilder from "../requestBuilder";

class ApiClient {
  private requestBuilder: RequestBuilder;

  constructor(baseUrl = "") {
    this.requestBuilder = new RequestBuilder(baseUrl);
  }

  setBaseUrl(baseUrl: string) {
    this.requestBuilder = new RequestBuilder(baseUrl);
  }

  addPagination(start: number, end: number) {
    this.requestBuilder.addPagination(start, end);
    return this;
  }

  addSort(sort: string, order: string) {
    this.requestBuilder.addSort(sort, order);
    return this;
  }

  addFilter(priceLte: number, priceGte: number) {
    this.requestBuilder.addFilter(priceLte, priceGte);
    return this;
  }

  addSearch(titleLike: string) {
    this.requestBuilder.addSearch(titleLike);
    return this;
  }

  resetSearchParams() {
    this.requestBuilder.resetSearchParams();
    return this;
  }

  async get(options = {}) {
    const url = this.requestBuilder.toString();
    return await httpRequest.get(url, options);
  }

  async post(options = {}) {
    const url = this.requestBuilder.toString();
    return await httpRequest.post(url, options);
  }

  async put(options = {}) {
    const url = this.requestBuilder.toString();
    return await httpRequest.put(url, options);
  }

  async delete(options = {}) {
    const url = this.requestBuilder.toString();
    return await httpRequest.delete(url, options);
  }
}

export default ApiClient;
