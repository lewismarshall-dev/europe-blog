const headerActionsElement = document.querySelector('.site-header-actions');

const scrollPosition = () => {
    const scrollPositionY = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scrollPositionY > windowHeight) {
        headerActionsElement.classList.remove('inactive');
        headerActionsElement.classList.add('active');
    }
    else {
        headerActionsElement.classList.add('inactive');
        headerActionsElement.classList.remove('active');
    }
}

document.addEventListener('scroll', scrollPosition);