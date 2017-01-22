var censoredWords = ['sad', 'mad', 'bad'];
var customCensoreWords = [];

function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx]), '****';
    }
    for (idx in customCensoreWords) {
        inStr = inStr.replace(customCensoreWords[idx]), "****";
    }
    return inStr;
}

function addCensoredWord(word) {
    customCensoreWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoreWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;