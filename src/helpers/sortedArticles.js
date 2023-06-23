function sortedArticles(articles) {
        return articles.slice().sort((a, b) => b.id - a.id).slice(0, 5);
}

export default sortedArticles;
