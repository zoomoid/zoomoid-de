export class AJAX {
  /**
   * Uses HTTP get to issue a XHR request and returns a promise which resolves
   * on success and rejects otherwise with the respective response object
   * @param {string} url request url
   */
  static get(url){
    return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.onload = () => {
        if (req.status >= 200 && req.status < 400) {
          resolve(req);
        }
      };
      req.onerror = () => {
        reject(req);
      };
      req.send();
    });
  }
  static post(url, data){
    return new Promise((resolve, reject) => {
      /** NOT YET IMPLEMENTED due to brevity */
    });
  }
}