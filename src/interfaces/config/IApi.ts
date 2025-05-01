export interface IApi {
  keyword: string;
  name: string;
  paths: {
    src: string;
    test: string;
  };
}
