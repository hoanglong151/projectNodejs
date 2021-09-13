const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)
const btnSearch = $('.header_btn-search');
const textSearch = $('input[name="search"]');
const formSearch = $('.header_form-search');
const menuMobile = $('.menu-mobile');
const headerMenuMobile = $('.header_menu-mobile');
const headerMain = $('.header_main');
const btndropdownMenumobile = $$('.btn-dropdown-menu-mobile');
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
  window.scrollY > 600 ? headerMain.classList.add('sticky') : headerMain.classList.remove('sticky')
})