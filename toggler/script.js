var toggleHolder = document.querySelector('.toggle-holder');
var toggler = document.querySelector('.toggler');
var body = document.querySelector('.body');
var content = document.querySelector('.content');
var switcher = false;

toggleHolder.addEventListener('click', () => {
    switcher = !switcher; 
    
    if(switcher){
        toggleHolder.classList += ' on';
        toggler.classList += ' on-toggler';
        body.classList = 'black';
        content.innerHTML = 'DARK MODE';

    }
    else{
        toggleHolder.classList.remove('on');
        toggler.classList.remove('on-toggler');
        body.classList.remove('black');
        content.innerHTML = 'LIGHT MODE';
    }
})