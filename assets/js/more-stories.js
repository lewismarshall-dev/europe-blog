---
layout: none
---

const postsWrapper = document.querySelector('#more-stories');
const numberOfPosts = "{{site.moreStoriesLimit}}";
const allPosts = [
    {% for post in site.posts %}
        {
            index: "{{forloop.index}}",
            url: "{{post.url | absolute_url}}",
            title: "{{post.title}}",
            date: "{{post.date | date: '%B, %Y'}}",
            datetime: "{{post.date | date_to_xmlschema}}",
            cover: "{{post.cover}}",
        }
        {% unless forloop.last %},{% endunless %}
    {% endfor %}
];

const generateRandomUniqueNumber = (min, max) => {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return (allPosts[number].url === window.location.pathname) ? generateRandomUniqueNumber(0, max) : number;
}

const generateAvailablePosts = (min, max) => {
    let nums = new Set();
    while (nums.size < (numberOfPosts > max ? max : numberOfPosts)) {
        nums.add(generateRandomUniqueNumber(min, max));
    }
    return [...nums];
}

const randomIndexUsed = generateAvailablePosts(0, allPosts.length - 1);

randomIndexUsed.forEach(number => {
    const post = {
        title: allPosts[number].title,
        url: allPosts[number].url,
        date: allPosts[number].date,
        datetime: allPosts[number].datetime,
        cover: allPosts[number].cover
    }

    let article = document.createElement('article');
    article.classList.add('post-compact');
    article.setAttribute('role', 'article');

    article.innerHTML = `<article class="post-compact" role="article">
        <a href="${post.url}" style="background-image: url(${post.cover})">
            <h2 class="post-title">${post.title}</h2>
            <time class="post-date" datetime="${post.datetime}">${post.date}</time>
        </a>
    </article>`;

    postsWrapper.append(article);
});