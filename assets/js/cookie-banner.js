const cookiesBanner = document.querySelector('.cookie-banner');
const acceptCookiesButton = document.querySelector('#acceptCookiesButton');
const cookiesAccepted = localStorage.getItem('jekyll-happycrossroads-cookies') ? localStorage.getItem('jekyll-happycrossroads-cookies') : null;

if (!cookiesAccepted) {
    cookiesBanner.classList.add('active');
}

const acceptCookies = () => {
    localStorage.setItem('jekyll-happycrossroads-cookies', true);
    cookiesBanner.classList.remove('active');
}

acceptCookiesButton.addEventListener('click', acceptCookies, false);