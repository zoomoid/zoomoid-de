<template>
  <section>
    <div class="h1">Events</div>
    <template v-if="events.length">
      <section class="events">
        <div class="event" v-for="(event, index) in events" v-bind:key="event.id">
          <transition name="fadeCover">
            <div class="card" :style="{'transition-delay': `${Math.log(index + 1) * 0.2}s`}">
              <div class="banner" :style="{'background-image': `url(${event.banner})`}"></div>
              <div class="card-body">
                <h1 class="title" v-if="event.title">{{event.title}}</h1>
                <h2 class="place" v-if="event.place">{{event.place}}</h2>
                <h2 class="time" v-if="event.time">{{event.time}}</h2>
                <p class="additional-info" v-if="event.additionalInfo" v-html="event.additionalInfo"></p>
              </div>
              <div class="card-actions">
                <div class="ref" v-for="(action) in event.actions" v-bind:key="action.name">
                  <a :href="action.href">
                    <i class="fab fa-facebook"></i>
                    <span>{{action.name}}</span>
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </template>
    <template v-else>
      <div class="no-events">
        <span>There are no upcoming events.</span>
        <span>If you want to book Zoomoid for your party, contact him at <a href="mailto:alex@zoomoid.de">alex@zoomoid.de</a></span>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  name: 'Events',
  data: () => ({
    events: [
      {
        banner: 'https://i1.sndcdn.com/artworks-000650117866-rhrgqu-t500x500.jpg',
        title: 'Tanzaffäre',
        place: 'Bonn, Rheinufer',
        additionalInfo: 'Line-Up and Time: <b>TBA</b>',
        time: '',
        actions: [
          {
            name: 'Event',
            href: 'https://facebook.com/', // TODO get real event link
          }
        ],
      }
    ],
  })
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins';
@include mixins.headline;

section {
  padding-bottom: 4em;
}

.no-events {
  span {
    text-align: center;
    display: block;
    font-weight: 300;
    color: #636363;
    margin: 2em auto;
    max-width: 30%;
    line-height: 2;
    a {
      color: #212121;
    }
  }
}

.events {
  padding: 2em;
  .card {
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 16px 16px rgba(0,0,0,0.2);
    border-radius: 6px;
    .banner {
      height: 300px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center bottom;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
    .card-body {
      padding: 2em 1em;
      h1.title {
        font-size: 3em;
        font-weight: 300;
        margin: 0;
      }
      h2.place, h2.time {
        // &::before {
        //   content: '@';
        //   opacity: 0.66;
        //   margin-right: 6px;
        //   font-weight: 300;
        //   font-size: 0.8em;
        //   vertical-align: top;
        // }
        font-size: 2em;
        font-weight: 600;
        margin: 0;
      }
      
      p.additional-info {
        letter-spacing: 1pt;
        font-size: 18pt;
        font-weight: 300;
      }
    }
    .card-actions {
      .ref {
        display: flex;
        align-items: center;
        padding: 1em 0;
        margin: 0 1em;
        a {
          color: inherit;
          font-size: 18pt;
          background: #1a1a1a;
          color: white;  
          text-decoration: none;
          padding: 4px 8px;
          border-radius: 6px;
          box-shadow: 0 4px 4px rgba(0,0,0,0.2);
          i {

          }
          span {
            margin: 0 6px;
          }
        }
      }
    }
  }
}
</style>
