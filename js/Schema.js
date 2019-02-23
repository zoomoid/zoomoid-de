import {Template} from './Template';

/**
 * Entry class for modelling data for zoomoid.de front page
 */
export class Entry {
  /**
   * 
   * @param {{id: string, title: string, subtitle: string, text: string, artists:
 * string, links:[{label: string,url: string}],video:[{url: string}] }} p 
   */
  constructor(p){
    if(!p.hasOwnProperty('title')){
      throw new Error('Title for entry must be present');
    }
    this.title = p.title; /** required */
    this.id = p.id || ''; /** optional */
    this.subtitle = p.subtitle || ''; /** optional */
    this.text = p.text || ''; /** optional */
    this.links = this.__checkLinks(p.links) || []; /** content-optional, wrapper-required */
    this.video = this.__checkVideos(p.video) || []; /** content-optional, wrapper-required */
    this.artists = p.artists || 'zoomoid'; /** optional, default=zoomoid */
  }
  __checkLinks(l) {
    if(Array.isArray(l)){
      l.forEach((link) => {
        if(!link.hasOwnProperty('label') || !link.hasOwnProperty('url') || !Object.keys(link).length === 2){
          throw new Error('Invalid link format: ' + link.toString());
        }
      });
      return l;
    } else {
      if(l !== undefined)
        throw new Error('Links must come in an array');
      else
        return [];
    }
  }
  __checkVideos(v) {
    if(Array.isArray(v)){
      v.forEach((video) => {
        if(!video.hasOwnProperty('url') || !Object.keys(video).length === 1){
          throw new Error('Invalid video format: ' + video.toString());
        }
      });
      return v;
    } else {
      if(v !== undefined)
        throw new Error('Videos must come in an array');
      else
        return [];
    }
  }
  toString(){
    return Template({
      id: this.id,
      title: this.title,
      subtitle: this.subtitle,
      text: this.text,
      artists: this.artists,
      links: this.links,
      video: this.video
    });
  }
}