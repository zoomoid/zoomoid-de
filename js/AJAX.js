export class AJAX {
  /**
   * Uses HTTP get to issue a XHR request and returns a promise which resolves
   * on success and rejects otherwise with the respective response object
   * @param {string} url request url
   * @param {*} options request options
   */
  static get(url, options){
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
    }).then((data) => {
      console.info(`HTTP GET was successful from ${data.responseUrl} with data ${data.responseText}`);
    }).catch((data) => {
      console.warn(`HTTP GET FAILED from ${data.responseUrl} with data ${data.responseText}`);
    });
  }
  static post(url, data, options){
    return new Promise((resolve, reject) => {
      /** NOT YET IMPLEMENTED due to brevity */
    });
  }
}