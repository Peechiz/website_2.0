document.addEventListener("DOMContentLoaded", function(event) {


  //  highlite the appropriate nav link
  const full = window.location.href.split('/');
  let root = full[full.length-1];
  root = root.slice(0,root.length-5);
  console.log(root);
  root = root || 'index'
  let page = document.querySelector(`#${root}`);
  console.log(page);
  page.classList.add('active');


  // hamburger
  let burger = document.querySelector('#hamburger');
  let header = document.querySelector('header');
  burger.addEventListener('click', () => {
    header.classList.toggle('closed')
  })
});
