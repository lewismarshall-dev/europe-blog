const quotes = [
    '"Travel is fatal to prejudice, bigotry, and narrow-mindedness." \u2013 Mark Twain', 
    '"The world is a book and those who do not travel read only one page." \u2013 St. Augustine',
    '"There are no foreign lands. It is the traveler only who is foreign." \u2013 Robert Louis Stevenson',
    '"The use of traveling is to regulate imagination by reality, and instead of thinking how things may be, to see them as they are." \u2013 Samuel Johnson',
    '"Our battered suitcases were piled on the sidewalk again; we had longer ways to go. But no matter, the road is life." \u2013 Jack Kerouac',
    '"People travel to faraway places to watch, in fascination, the kind of people they ignore at home." \u2013 Dagobert D. Runes',
    '"A journey is like marriage. The certain way to be wrong is to think you control it." \u2013 John Steinbeck',
    '"No one realizes how beautiful it is to travel until he comes home and rests his head on his old, familiar pillow." \u2013 Lin Yutang',
    '"For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move." \u2013 Robert Louis Stevenson',
    '"One’s destination is never a place, but a new way of seeing things." \u2013 Henry Miller',
    '"A traveler without observation is a bird without wings." \u2013 Moslih Eddin Saadi',
    '"To awaken quite alone in a strange town is one of the pleasantest sensations in the world." \u2013 Freya Stark',
    '"Travel is more than the seeing of sights; it is a change that goes on, deep and permanent, in the ideas of living." \u2013 Miriam Beard',
    '"All journeys have secret destinations of which the traveler is unaware." \u2013 Martin Buber',
    '"Tourists don’t know where they’ve been, travelers don’t know where they’re going." \u2013 Paul Theroux',
    '"Do not follow where the path may lead. Go instead where there is no path and leave a trail" \u2013 Ralph Waldo Emerson',
    '"Two roads diverged in a wood and I – I took the one less traveled by." \u2013 Robert Frost',
    '"A journey of a thousand miles must begin with a single step." \u2013 Lao Tzu',
    '"There is no moment of delight in any pilgrimage like the beginning of it." \u2013 Charles Dudley Warner',
    '"A good traveler has no fixed plans and is not intent on arriving." \u2013 Lao Tzu',
    '"If you reject the food, ignore the customs, fear the religion and avoid the people, you might better stay at home." \u2013 James Michener',
    '"The journey not the arrival matters." \u2013 T. S. Eliot',
    '"A journey is best measured in friends, rather than miles." \u2013 Tim Cahill',
    '"I have found out that there ain’t no surer way to find out whether you like people or hate them than to travel with them." \u2013 Mark Twain',
    '"Once you have traveled, the voyage never ends, but is played out over and over again in the quiestest chambers. The mind can never break off from the journey." \u2013 Pat Conroy',
    '"Like all great travelers, I have seen more than I remember, and remember more than I have seen." \u2013 Benjamin Disraeli',
    '"Too often travel, instead of broadening the mind, merely lengthens the conversation." \u2013 Elizabeth Drew',
    '"Wandering re-establishes the original harmony which once existed between man and the universe." \u2013 Anatole France',
    '"Travel and change of place impart new vigor to the mind." \u2013 Seneca',
    '"I soon realized that no journey carries one far unless, as it extends into the world around us, it goes an equal distance into the world within." \u2013 Lillian Smith',
    '"To travel is to discover that everyone is wrong about other countries." \u2013 Aldous Huxley',
    '"The first condition of understanding a foreign country is to smell it." \u2013 Rudyard Kipling',
    '"Travel is glamorous only in retrospect." \u2013 Paul Theroux',
    '"The whole object of travel is not to set foot on foreign land; it is at last to set foot on one’s own country as a foreign land." \u2013 G. K. Chesterton',
    '"A wise traveler never despises his own country." \u2013 Carlo Goldoni',
];

const quoteContainer = document.querySelector('.random-quote');

const fadeOut = () => {
    quoteContainer.classList.remove('fade-in');
    quoteContainer.classList.add('fade-out');
    setTimeout(fadeIn, 300);
}

const fadeIn = () => {
    const randomQuoteNum = Math.floor(Math.random() * quotes.length);
    quoteContainer.innerHTML = quotes[randomQuoteNum];
    quoteContainer.classList.remove('fade-out');
    quoteContainer.classList.add('fade-in');
}

setInterval(fadeOut, 4000);