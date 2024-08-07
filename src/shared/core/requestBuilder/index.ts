const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}api/`;


export default class RequestBuilder {
  private url: URL;

  constructor(url = "") {
    this.url = new URL(url, BACKEND_URL);
  }

  toString() {
    return this.url.toString();
  }

  addPagination(start: number, end: number) {
    this.url.searchParams.set("_start", start.toString());
    this.url.searchParams.set("_end", end.toString());
    return this;
  }

  addSort(sort: string, order: string) {
    this.url.searchParams.set("_sort", sort);
    this.url.searchParams.set("_order", order);
    return this;
  }

  addFilter(priceLte: number, priceGte: number) {
    this.url.searchParams.set("price_lte", priceLte.toString());
    this.url.searchParams.set("price_gte", priceGte.toString());
    return this;
  }

  addSearch(titleLike: string) {
    this.url.searchParams.set("title_like", titleLike);
    return this;
  }

  resetSearchParams() {
    const keys = [...this.url.searchParams.keys()];
    for (const key of keys) {
      this.url.searchParams.delete(key);
    }
    return this;
  }
}
