function firstMostWord(article) {
    if (!article) {
        return;
    }
    article = article.trim().toLowerCase()

    let wordList = article.match(/[a-z]+/g),
        visited = [],
        maxNum = 0,
        maxWord = "";

    article = " " + wordList.join("  ") + " "

    console.log(wordList);
    console.log(article);
    wordList.forEach((item) => {
        if (!visited.includes(item)) {
            visited.push(item)
            let word = new RegExp(" " + item + " ", "g"),
                num = article.match(word).length;
            console.log(article.match(word));

            if (num > maxNum) {
                maxNum = num
                maxWord = item
            }
        }
    })

    return maxWord + "  " + maxNum

}

let article = 'I am going to tell you my whole life, the life which did not really begin until the day I first saw you. What I can recall before that day is gloomy and confused, a memory as of a cellar filled with dusty, dull, and cobwebbed things and peoplea place with which my heart has no concern.'
console.log(firstMostWord(article));