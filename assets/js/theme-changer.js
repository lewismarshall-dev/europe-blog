const toggleSwitch = document.querySelector('.changeTheme');
const currentTheme = localStorage.getItem('jekyll-happycrossroads-theme') ? localStorage.getItem('jekyll-happycrossroads-theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

const switchTheme = () => {
    const currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('jekyll-happycrossroads-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('jekyll-happycrossroads-theme', 'light');
    }    
}
toggleSwitch.addEventListener('click', switchTheme, false);