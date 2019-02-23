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
  const links = (schema.links.length > 0 
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
  const videos = (schema.video.length > 0 
    ? schema.video.map((v) => {
        /** 
         * Sanitize video links
         * We do not require strict embedding links, though we don't mind them,
         * otherwise we sanitize the link to be a valid YouTube embedding url
         */
        const video_url = (v.url.indexOf('embed') == -1
          ? v.url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/') /** plain youtube link to embed */
            
          : v.url); /** already embedding link */
        return (v.length > 0 
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
   * Lastly produce final entry html representation
   */
  return `
    <article id="${schema.id}">
      <h1>
        <span class="artist">${schema.artists}</span>
        <span class="title">${schema.title}</span></h1>
      <h2>${schema.subtitle}</h2>
      <p>
        ${schema.text}
      </p>
      <div class="links">
        ${links}
      </div>
      <div class="video">
        ${videos}
      </div>
    </article>
  `;
};