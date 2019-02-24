/**
 * Templating function for converting data entries to HTML for zoomoid.de front page
 * 
 * We guarantee data consistency, thus no further checking
 * @param {{id: string, title: string, subtitle: string, text: string, artists:
 * string, links:[{label: string,url: string}],video:[{url: string}] }} schema 
 */
export const Template = function(schema){
  /**
   * 1st handle all links
   */
  let links = (schema.links.length > 0 
    ? schema.links.map((v) => {
        return `
          <a href="${v.url}">${v.label}</a>
        `;
      }).reduce((p,c) => {
        return p + c; /** Concatenate link with previously generated html */
      })
    : ''
  );
  /**
   * 2nd handle all videos
   */
  let videos = (schema.video.length > 0 
    ? schema.video.map((v) => {
        /** 
         * Sanitize video links
         * We do not require strict embedding links, though we don't mind them,
         * otherwise we sanitize the link to be a valid YouTube embedding url
         */
        const video_url = (v.url.indexOf('embed') == -1
          ? v.url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/') /** plain youtube link to embed */
            
          : v.url); /** already embedding link */
        return (video_url.length > 0 
          ? `  
            <iframe 
              src="${video_url}?rel=0&amp;showinfo=0" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          `
          : '' /** Do not add empty div with no video! */
        );
      }).reduce((p,c) => {
        return p + c; /** Simply concatenate current video with previously generated html */
      })
    : ''
  );
  /**
   * We dont want video containers to be present if there are no videos:
   */
  videos = (videos.length > 0
    ? `<div class="video">
      ${videos}
    </div>`
    : ''
  );
  /**
   * Same goes with links
   */
  links = (links.length > 0
    ? `<div class="links">
      ${links}
    </div>`
    : ''
  );
  /**
   * Lastly produce final entry html representation
   */
  return `
    <article id="${schema.id}" class="track">
      <h1 class="title">
        <span class="artist">${schema.artists}</span>
        <span class="title">${schema.title}</span>
      </h1>
      <h2 class="subtitle">${schema.subtitle}</h2>
      <p class="text">
        ${schema.text}
      </p>
      ${links}
      ${videos}
    </article>
  `;
};