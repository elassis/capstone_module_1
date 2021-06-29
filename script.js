function displayMenu(){
    let container = document.getElementById('popup');
    let menuWrapper = document.createElement('ul');
    let CloseLi = document.createElement('li');
    let HomeLi = document.createElement('li');
    let AboutLi = document.createElement('li');
    let btnClose = document.createElement('button');
    let btnHome = document.createElement('a');
    let btnAbout = document.createElement('a');

    container.setAttribute('class','popup-menu');
    menuWrapper.setAttribute('class','popup-items');
    CloseLi.setAttribute('class','popup-item');
    HomeLi.setAttribute('class','popup-item');
    AboutLi.setAttribute('class','popup-item');
    btnClose.setAttribute('onclick','closeMenu()');
    btnHome.setAttribute('href','index.html');
    btnAbout.setAttribute('href','about.html');
    btnClose.innerText ='X';
    btnHome.innerText = 'home';
    btnAbout.innerText = 'about';

    CloseLi.appendChild(btnClose);
    HomeLi.appendChild(btnHome);
    AboutLi.appendChild(btnAbout);
    menuWrapper.appendChild(CloseLi);
    menuWrapper.appendChild(HomeLi);
    menuWrapper.appendChild(AboutLi);
    container.appendChild(menuWrapper);

    
}

function closeMenu(){
    let container = document.getElementById('popup');
    container.innerHTML ='';
    container.classList.toggle('display')
}


