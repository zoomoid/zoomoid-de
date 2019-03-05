const Entry = require('./Schema');

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
module.exports = {
  Albums: [
    new Entry({
      id: 'life-is-about-making-memories',
      title: 'Life Is About Making Memories',
      subtitle: 'The 1<sup>st</sup> Full-stretch album made in 2018',
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
      text: 'Daydream features 3 tracks from <i>Liquid Drum &amp; Bass</i> to <i>Melodic Techno</i> with multitudes of influences.',
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
      text: `Lange wurde gewartet auf die epische Kollaboration, jetzt ist sie da: tanzbar, mitsingbar (ob man den Text kennt/versteht), kontrovers!
        Möglich gemacht durch <b><a href="https://www.comsys.rwth-aachen.de/team/dirk-thissen/">Dr. Dirk Thißen</a> himself</b>, präsentieren wir euch den ersten von vielen <i>Best Of RWTH Informatik</i>-Songs!
        <img src="https://cdn.occloxium.com/i/zoomoid/covers/0158d025.png">
      `,
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
      text: 'Electronic hommage to one of the greatest movies with the greatest soundtrack of this century',
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
    new Entry({
      id: 'bloodrush',
      title: 'Blood Rush',
      subtitle: '',
      text: 'My baby attempt to Drum &amp; Bass. Sufficient to say: No one wanted to sign it. Nevertheless, a few people digged it!',
      links: [
        {
          label: 'Listen',
          url: 'https://distrokid.com/hyperfollow/zoomoid/dv91'
        },
        {
          label: 'Download',
          url: 'https://soundcloud.com/zoomoid/blood-rush-original-mix'
        }
      ],
      video: [
        {
          url: 'https://www.youtube.com/embed/qRuEaTvd_SM'
        }
      ]
    }),
    new Entry({
      id: 'wildworld',
      title: 'Wild World',
      subtitle: '',
      text: 'Animal Crossing was there for me when I needed it the most. This is what I gave back!',
      links: [
        {
          label: 'Listen',
          url: 'https://distrokid.com/hyperfollow/zoomoid/dv9V'
        },
        {
          label: 'Download',
          url: 'https://soundcloud.com/zoomoid/wild-world-original-mix'
        }
      ],
      video: [
        {
          url: 'https://www.youtube.com/embed/YgF_L0b-Fe8'
        }
      ]
    }),
    new Entry({
      id: 'lucid',
      title: 'Lucid (Original Mix)',
      subtitle: '',
      text: 'A little harder this time!',
      links: [
        {
          label: 'Listen',
          url: 'https://distrokid.com/hyperfollow/zoomoid/egj4'
        },
        {
          label: 'Download',
          url: 'https://soundcloud.com/zoomoid/lucid-original-mix'
        }
      ],
      video: [
        {
          url: 'https://www.youtube.com/embed/FNOJa_xOq0U'
        }
      ]
    }),
    new Entry({
      id: 'atomicspark',
      title: 'Atomic Spark (Original Mix)',
      subtitle: '',
      text: 'Let the journey of Techno for Zoomoid begin!',
      links: [
        {
          label: 'Listen',
          url: 'https://distrokid.com/hyperfollow/zoomoid/dAAh'
        },
        {
          label: 'Download',
          url: 'https://soundcloud.com/zoomoid/atomic-spark-original-mix'
        }
      ],
      video: [
        {
          url: 'https://www.youtube.com/embed/kUHx6uQ4TPw'
        }
      ]
    }),
    new Entry({
      id: 'memories',
      artists: 'David Guetta',
      title: 'Memories (zoomoid Remix)',
      subtitle: '',
      text: 'This was my remix debut!',
      links: [
        {
          label: 'Listen',
          url: 'https://soundcloud.com/zoomoid/memories-zoomoid-remix'
        },
      ],
      video: [
        {
          url: 'https://www.youtube.com/embed/yUcnqvwN5AQ'
        }
      ]
    }),
    new Entry({
      id: 'higherthanclouds',
      title: 'Higher Than Clouds (Original Mix)',
      subtitle: 'OG Zoomoid - Progressive House all the way',
      text: 'This was my remix debut!',
      links: [
        {
          label: 'Listen &amp; Download',
          url: 'https://soundcloud.com/zoomoid/higher-than-clouds-original-mix'
        },
      ],
      video: [
        {
          url: 'https://www.youtube.com/embed/Eu3elgNkdZI'
        }
      ]
    }),
    new Entry({
      id: 'intospace',
      title: 'Into Space (Original Mix)',
      subtitle: '',
      text: '',
      links: [
        {
          label: 'Listen',
          url: 'https://distrokid.com/hyperfollow/zoomoid/dAAr'
        },
        {
          label: 'Download',
          url: 'https://soundcloud.com/zoomoid/into-space-original-mix'
        }
      ],
      video: [
        {
          url: 'https://www.youtube.com/embed/AHje2WKLTz4'
        }
      ]
    })
  ]
};
  