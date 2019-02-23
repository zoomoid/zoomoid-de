import {Entry} from './Schema';

/**
 * JS file containing a listing of all entries regarding
 * zoomoid.de front page
 * 
 * Since we have not yet crossed the line to use a database
 * for such kind of tasks, we will use JSON
 * 
 * Since pure JSON files do not allow comments, we opt 
 * for a javascript file.
 * 
 * These CAN be served from a REST API but since this is yet a static
 * webpage (docker+nginx container), there is currently no infrastructure for
 * serving this data to a potential web client
 */
export const Entries = {
  Albums: [
    new Entry({
      id: 'life-is-about-making-memories',
      title: 'Life Is About Making Memories',
      subtitle: 'The 1st Full-stretch album made in 2018',
      text: `<b>Life Is About Making Memories</b> is my first full-feature album!
      It is comprised out of 11 songs and there are a lot of different gems
      on there, have a listen and decide for yourself which tracks you like
      the most. If you do, tell me about it on social media like Instagram
      or SoundCloud and tell your friends!`,
      links: [
        {
          label: 'Listen',
          url: 'https://distrokid.com/hyperfollow/zoomoid/eNFU'
        },
        {
          label: 'Download &amp; more',
          url: 'https://www.zoomoid.de/life-is-about-making-memories'
        }
      ],
      video: [
        {
          url: 'https://www.youtube.com/watch?v=afv5rcTrYt8'
        }
      ]
    }),
  ],
  Singles: [
    new Entry({
      id: 'daydream-ep',
      title: 'Daydream EP',
      subtitle: 'First EP in 2019 comprising a lot of different emotions',
      text: '',
      links: [
        {
          label: 'Listen',
          url: 'https://distrokid.com/hyperfollow/zoomoid/daydream-ep-2'
        }
      ],
      video: [
        {
          url: 'https://www.youtube.com/embed/aoDXE9Wol0A'
        },
        {
          url: 'https://www.youtube.com/embed/lBmZLseIHGw'
        }
      ]
    }),
    new Entry({
      id: 'datenkommunikation-und-sicherheit',
      artists: 'Zoomoid, Simon Kaiser & Dirk Thißen',
      title: 'Datenkommunkation & Sicherheit',
      subtitle: '',
      text: '<img src="https://cdn.occloxium.com/i/zoomoid/covers/0158d025.png">',
      links: [
        {
          label: 'Listen',
          url: 'https://distrokid.com/hyperfollow/zoomoid/ghko'
        },
        {
          label: 'Download & more',
          url: 'https://www.zoomoid.de/datkomm'
        }
      ],
      video: [
        
      ]
    }),
    new Entry({
      id: 'interstellar',
      title: 'Interstellar',
      subtitle: '',
      text: '',
      links: [
        {
          label: 'Listen',
          url: 'https://distrokid.com/hyperfollow/zoomoid/d3kj'
        },
        {
          label: 'Download',
          url: 'https://soundcloud.com/zoomoid/interstellar'
        }
      ],
      video: [
        {
          url: 'https://www.youtube.com/embed/sYhaHHmGFjk'
        }
      ]
    }),
  ]
};
  