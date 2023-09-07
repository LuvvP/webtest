let items = document.querySelectorAll('.allowActive');
    let containerFuild = document.querySelector('.container-fuild');
    
    containerFuild.addEventListener('scroll', ()=>{
        items.forEach(item => {
            if(item.offsetTop - containerFuild.scrollTop < window.innerHeight*(3/4)){
                item.classList.add('active');
            }else{
                item.classList.remove('active');
            }
        })
    })
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        })
    })
    
    function removeActiveClasses(){
        panels.forEach(panel => {
            panel.classList.remove('active');
        })
    }