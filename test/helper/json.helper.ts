import * as data from "../../data/data_provider.json";
class DataProvider {
  getCredential(key: string): Object {
    try {
      const credential = data.login[key];
      return credential;
    } catch (error) {
      error.message =
        "Getting error while reading data_provider json file ${error.message}";
      throw error;
    }
  }
  getData(key: string): string {
    try {
      let field = data[key];
      return field;
    } catch (error) {
      error.message =
        "Getting error while reading data_provider json file ${error.message}";
      throw error;
    }
  }
}
export default new DataProvider();
