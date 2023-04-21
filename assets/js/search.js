const searchButton = document.querySelector('.site-search-icon');
const searchWrapper = document.querySelector('.site-search-wrapper');
const siteSearch = document.querySelector('.site-search');
const siteSearchInput = document.querySelector('#site-search-input');
const siteSearchResultContainer = document.querySelector('#site-search-results-container');

const toggleSearch = () => {
    searchWrapper.classList.add('active');
}

searchButton.addEventListener('click', toggleSearch, false);
document.addEventListener('click', (event) => {
    const isClickInside = siteSearch.contains(event.target);

    if (!isClickInside) {
        searchWrapper.classList.remove('active');
        siteSearchInput.value = '';
        siteSearchResultContainer.innerHTML = '';
    }
});