import {Data} from './data';

export class AJAX {
  /**
   * Uses HTTP get to issue a XHR request and returns a promise which resolves
   * on success and rejects otherwise with the respective response object
   * @param {string} url request url
   */
  static get(url){
    return new Promise((resolve, reject) => {
      // let req = new XMLHttpRequest();
      // req.open('GET', url, true);
      // req.onload = () => {
      //   if (req.status >= 200 && req.status < 400) {
      //     resolve(req);
      //   }
      // };
      // req.onerror = () => {
      //   reject(req);
      // };
      // req.send();
      // ! Rolled back to static page (loading page contents still from JS)
      // ! Thus removing the need to AJAX.get the resource from the API.
      // ! This renders the API obsolete, but it persists for now until cleanup
      // ! is done.
      switch(url){
        case '/api/albums' :
          resolve(Data.Albums.reduce((p, c) => {
            return p + c.toString();
          }, '')); break;
        case '/api/singles' :
          resolve(Data.Singles.reduce((p, c) => {
            return p + c.toString();
          }, '')); break;
        default:
          reject('No url specified, yet one is required.'); break;
      }
    });
  }
}