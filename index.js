const navbarScroll1 = document.querySelectorAll('.nav-link-scroll1')

navbarScroll1.forEach((item)=>{
  item.addEventListener('click',()=>{
    let el = document.getElementById('scroll1') 
    el.scrollIntoView({behavior:"smooth",block:"start"}) 
  })
})
const navbarScroll2 = document.querySelectorAll('.nav-link-scroll2')

navbarScroll2.forEach((item)=>{
  item.addEventListener('click',()=>{
    let el = document.getElementById('scroll2') 
    el.scrollIntoView({behavior:"smooth"}) 
  })
})
