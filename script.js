document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.word');
    const selectedWord = document.getElementById('selectedWord');
    const wordDescription = document.getElementById('wordDescription');
    const imageDescription = document.getElementById('imageDescription');
    const summaryText = document.getElementById('summaryText');
    const wordImage = document.getElementById('wordImage');

    const descriptions = {
        'Social Media': 'Online platforms that allow users to create, share, and interact with digital content.',
        'Algorithm': 'Set of rules used by social media platforms to determine what content to show users.',
        'Engagement': 'Level of interaction users have with content on social media, including likes, comments, and shares.',
        'Hashtag': 'Word or phrase preceded by the # symbol, used to categorize and make content easier to find.',
        'Influencer': 'Person with a large social media following who can influence others\' opinions and purchasing decisions.',
        'Analytics': 'Tools and metrics used to measure and analyze the performance of social media content.',
        'Viral Content': 'Content that becomes extremely popular and is widely shared in a short period of time.',
        'Blogger': 'Person who creates and maintains a blog, often sharing personal or specialized content.',
        'Brands': 'Companies or products that use social media to promote themselves and connect with customers.',
        'Social Media Post': 'Any piece of content shared on a social media platform, such as text, images, or videos.'
    };

    const imageDescriptions = {
        'Social Media': 'An interconnected network of icons representing people of different ages and ethnicities, joined by bright lines symbolizing digital connections, on a light blue background.',
        'Algorithm': 'A complex maze with an illuminated path running through it, symbolizing how algorithms find the most efficient route through complex data.',
        'Engagement': 'Hands of different colors holding "like", comment, and share icons, surrounded by colorful speech bubbles representing interaction.',
        'Hashtag': 'A large, three-dimensional hashtag (#) symbol composed of popular keywords in different sizes and colors, floating over a cloud background.',
        'Influencer': 'A charismatic figure in the center, surrounded by a bright aura, with lines extending to smaller icons of people, representing their reach and influence.',
        'Analytics': 'A modern dashboard with colorful graphs, charts, and metrics, showing upward trends and positive data.',
        'Viral Content': 'A representative image or video in the center, with arrows rapidly expanding in all directions, symbolizing the quick spread of content.',
        'Blogger': 'A desk with an open laptop, a coffee cup, and colorful notes around, with a screen showing an attractively designed blog.',
        'Brands': 'Logos of well-known brands forming a circle around a social media icon, symbolizing the integration of brands into the social media ecosystem.',
        'Social Media Post': 'A smartphone with a screen showing a social media post under construction, with floating icons of images, video, text, and emojis around it.'
    };

    const images = {
        'Social Media': './images/social-media.jpg',
        'Algorithm': './images/algorithm.jpg',
        'Engagement': './images/engagement.jpg',
        'Hashtag': './images/hashtag.jpg',
        'Influencer': './images/influencer.jpg',
        'Analytics': './images/analytics.jpg',
        'Viral Content': './images/viral-content.jpg',
        'Blogger': './images/blogger.jpg',
        'Brands': './images/brands.jpg',
        'Social Media Post': './images/social-media-post.jpg'
    };

    const summary = `Social media has transformed how we connect and share. Algorithms personalize our experience, facilitating the discovery of relevant content. Engagement fosters meaningful dialogues, while hashtags unite global conversations. Influencers, with their authenticity, redefine communication between brands and audiences. Analytics tools provide valuable insights for constant improvement. Viral content has the power to spread important ideas and unite people. Bloggers offer unique perspectives, enriching our consumption of information. Brands build deeper relationships with their customers through authentic content strategies. Each social media post is an opportunity to educate, inspire, or connect. Used responsibly, social media can build a more inclusive, informed, and collaborative digital world.`;

    summaryText.textContent = summary;

    words.forEach(word => {
        word.addEventListener('click', () => {
            words.forEach(w => w.classList.remove('active'));
            word.classList.add('active');
            const wordText = word.getAttribute('data-word');
            selectedWord.textContent = wordText;
            wordDescription.textContent = descriptions[wordText];
            imageDescription.innerHTML = `<p><strong>Image description:</strong> ${imageDescriptions[wordText]}</p>`;
            wordImage.src = images[wordText];
            wordImage.alt = `Illustration for ${wordText}`;
            wordImage.style.display = 'block';
        });
    });
});