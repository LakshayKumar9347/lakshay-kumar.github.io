const navbarScroll = document.querySelectorAll('.nav-link-scroll')

navbarScroll.forEach((item)=>{
  item.addEventListener('click',()=>{
    let el = document.getElementById('scroll1') 
    el.scrollIntoView({behavior:"smooth",block:"start"}) 
  })
})
navbarScroll.forEach((item)=>{
  item.addEventListener('click',()=>{
    let el = document.getElementById('scroll2') 
    el.scrollIntoView({behavior:"smooth"}) 
  })
})
