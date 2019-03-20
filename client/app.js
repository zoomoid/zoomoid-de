// import {AJAX} from './js/AJAX';
import './node_modules/waypoints/lib/noframework.waypoints';

const waypoints = [];

(() => {
  // const el_albums = document.querySelector('#albums');
  // const el_singles = document.querySelector('#singles-eps');
  // const el_more = document.querySelector('#more');

  document.querySelectorAll('.animatable').forEach((el) => {
    let waypoint = new Waypoint({
      element: el,
      handler: function () {
        el.classList.add('anim--appear');
      }
    });
    waypoints.push(waypoint);
  });

  document.querySelectorAll('nav.in-page').forEach((el) => {
    let fixed_nav = document.querySelector('nav:not(.in-page)');
    let waypoint = new Waypoint({
      element: el,
      offset: -200,
      handler: function (direction) {
        if (direction == 'down')
          fixed_nav.classList.remove('is-hidden');
        else
          fixed_nav.classList.add('is-hidden');
      }
    });
    waypoints.push(waypoint);
  });
  let removeActiveNavItem = () => {
    document.querySelectorAll('nav ul li.is-active').forEach((e) => {
      e.classList.remove('is-active');
    });
  };
  document.querySelectorAll('section').forEach((el) => {
    let handler = function () {
      removeActiveNavItem();
      let nav_item = document.querySelector(`nav:not(.in-page) ul li[for=${el.id}]`);
      nav_item.classList.add('is-active');
    };
    let waypoint;
    if (el.id == 'intro') {
      waypoint = new Waypoint({
        element: el,
        offset: -16,
        handler: handler
      });
    } else {
      waypoint = new Waypoint({
        element: el,
        offset: 0,
        handler: handler
      });
    }

    waypoints.push(waypoint);
  });
  let collapse_button = document.querySelector('.collapse-button');
  let ul = document.querySelector('nav:not(.in-page) ul');
  let nav = document.querySelector('nav:not(.in-page)');
  collapse_button.addEventListener('click', () => {
    if (ul.classList.contains('is-hidden')) {
      ul.classList.remove('is-hidden');
      nav.classList.remove('is-collapsed');
    }
    else {
      ul.classList.add('is-hidden');
      nav.classList.add('is-collapsed');
    }
  });
  document.querySelectorAll('nav:not(.in-page) li a').forEach((e) => {
    e.addEventListener('click', () => {
      ul.classList.add('is-hidden');
      nav.classList.add('is-collapsed');
    });
  });
})();