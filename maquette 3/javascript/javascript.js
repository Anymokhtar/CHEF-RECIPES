const sections = document.querySelectorAll('section');
const navLi =document.querySelectorAll ('#switsh nav');

window.addEventListener('scroll',()=>{
    let current ='';
    
    sections.forEach(section=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        var pageYOffset 
        if(pageYOffset>=(sectionTop - sectionHeight/2)){
            current=section.getAttribute('id');
        }
    })
    


navLi.forEach(li => {
    li.classList.remove('Active');
    if (li.classList.contains(current)) {
      li.classList.add('Active')
    }
  })


})