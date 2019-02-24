// import {AJAX} from './js/AJAX';
import {Entries} from './js/Entries';

(() => {
  const el_albums = document.querySelector('#albums');
  const el_singles = document.querySelector('#singles-eps');
  // const el_more = document.querySelector('#more');

  document.querySelectorAll('nav li').forEach((li) => {
    li.addEventListener('click', (e) => {
      document.querySelectorAll('nav li.is-active').forEach((el) => {
        el.classList.remove('is-active');
      });
      e.target.classList.add('is-active');
  
      document.querySelectorAll('main .content-wrapper section').forEach((el) => {
        el.classList.add('is-hidden');
      });
      const target = document.querySelector('nav li.is-active').attributes.getNamedItem('for').value;
      const container = document.querySelector('#' + target);
      container.classList.remove('is-hidden');
      container.classList.add('is-active');
    });
  });
  const data_albums = Entries.Albums;
  const data_singles = Entries.Singles;
  // const data_more = [];

  data_albums.forEach((a) => {
    el_albums.insertAdjacentHTML('beforeend', a.toString());
  });
  data_singles.forEach((a) => {
    el_singles.insertAdjacentHTML('beforeend', a.toString());
  });

  document.querySelectorAll('nav li')[0].classList.add('is-active');
  document.querySelectorAll('main .content-wrapper section')[0].classList.add('is-active');
})();