const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)
const btnSearch = $('.header_btn-search');
const textSearch = $('input[name="search"]');
const formSearch = $('.header_form-search');
const menuMobile = $('.menu-mobile');
const headerMenuMobile = $('.header_menu-mobile');
const headerBlock = $('.header_block');
const btndropdownMenumobile = $$('.btn-dropdown-menu-mobile');
const counters = $$('.counter');
// Open Search
btnSearch.onclick = (e) => {
  if(textSearch.value === ''){
    formSearch.classList.toggle('open-search');
    e.preventDefault();
  }
}
// When click outside form search => close form Search
window.onclick = (e) => {
  if(e.target.closest('.header_form-search') == null){
    formSearch.classList.remove('open-search');
  }
}
// Dropdown list Menu on mobile device
btndropdownMenumobile.forEach(value => {
  value.onclick = (e) => {
    if(e.target.closest('li') != null){
      e.target.closest('li').classList.toggle('open-menu');
    }
  }
})
// Toggle menu on mobile device
menuMobile.onclick = (e) => {
  headerMenuMobile.classList.toggle('open-menu-mobile');
}
// Scroll window show header sticky
document.addEventListener('scroll', (e) =>{
  window.scrollY > 600 ? headerBlock.classList.add('sticky') : headerBlock.classList.remove('sticky')
})
// Counter
counters.forEach(counter => {
  let speed = 100;
  (function updateCounter(){
    let value = +counter.getAttribute('data-target') ;
    let getValue = +counter.innerText;
    let inc = Math.ceil(value / speed);
    if(getValue < value){
      counter.innerText = getValue + inc;
      setTimeout(updateCounter, 0);
    }else{
      counter.innerText = value;
    }
  })()
})
