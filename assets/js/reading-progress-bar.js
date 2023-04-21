const articleContainer = document.querySelector('.post-content');
const footerContainer = document.querySelector('.site-footer');
const postFooterContainer = document.querySelector('.post-footer');
const postCommentsContainer = document.querySelector('.post-comments');
const postStoriesContainer = document.querySelector('.post-more-stories');
const aboutContainer = document.querySelector('.site-about');
const readingTimeProgress = document.querySelector('.reading-progress-bar');

const updateScrollProgressBar = () => {
    let postCommentsHeight = 0;
    let aboutHeight = 0;
    let postStoriesHeight = 0;

    let articleTop = articleContainer.offsetTop;
    let articleHeight = articleContainer.offsetHeight;
    let footerHeight = footerContainer.offsetHeight;

    let postFooterHeight = postFooterContainer.offsetHeight;
    postFooterHeight += parseInt(window.getComputedStyle(postFooterContainer).getPropertyValue('margin-top'));

    if (postCommentsContainer !== null) {
        postCommentsHeight = postCommentsContainer.offsetHeight;
        postCommentsHeight += parseInt(window.getComputedStyle(postCommentsContainer).getPropertyValue('margin-top'));
        postCommentsHeight += parseInt(window.getComputedStyle(postCommentsContainer).getPropertyValue('margin-bottom'));
    }

    if (aboutContainer !== null) {
        aboutHeight = aboutContainer.offsetHeight;
    }

    if (postStoriesContainer !== null) {
        postStoriesHeight = postStoriesContainer.offsetHeight;
    }

    const windowScroll = document.documentElement.scrollTop - articleTop;
    const documentVisibleHeight = document.documentElement.clientHeight;
    if (windowScroll >= 0) {
        const scrollPercentage = (windowScroll / (articleHeight - documentVisibleHeight + footerHeight + postFooterHeight + postCommentsHeight + postStoriesHeight + aboutHeight)) * 100;
        readingTimeProgress.style.width = scrollPercentage + "%";
    }
    else {
        readingTimeProgress.style.width = 0 + "%";
    }
}

updateScrollProgressBar();

document.addEventListener('scroll', updateScrollProgressBar);
document.addEventListener('load', updateScrollProgressBar);