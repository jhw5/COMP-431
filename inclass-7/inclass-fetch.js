// Inclass Fetch Exercise
// ======================
//
// Navigate to https://webdev-dummy.herokuapp.com/sample
//
// This endpoint returns a list of articles.  Your assignment is to
// write a function countWords that uses fetch() to query the endpoint,
// and return a map from the article id to the number of words in the
// article's text.
//
// Also write two "helper" functions that call this initial function.
//
// If there are any exceptions then fetch() will throw an error.
// Provide a "safe" version of the countWords function that always
// returns a map, which will be empty in the case of errors.
//
// Finally, write a function that returns the article id with the
// most number of words.
//
// Below I have provided you a template, you just need to fill in
// the implementation.
//
// Navigate to mocha-inclass-fetch.html to see if your implementation
// provides the expected results.
//
(function(exports) {
    console.log('new');
    'use strict';
    var idArray = {};
    var val = 0;
    var key = -1;

    function parser (string) {
        // return JSON.parse(article);

        return string.split(/\s+/).length;
    }
    function insert(item, index){
        var iden = item['_id'];
        var txt = item['text'];
        idArray[iden] = parser(txt);
    }
    function insertSafe(item, index){
        (item == null) ? idArray[""] = "" : idArray[item['_id']]['text'];
    }
    function countWords(url) {
        idArray = {};
        var DATA = fetch(url).then(r => r.json().then(r => r.articles.forEach(insert)));
        console.log(idArray);
        return idArray;
        // throw new Error('Implement me!')

    }

    function countWordsSafe(url) {
        var DATA = fetch(url).then(r => r.json().then(r => r.articles.forEach(insertSafe)));
        return idArray;
        // throw new Error('Implement me!')

    }
    function largest(item, index){
        (idArray[item] > val) ? (val = idArray[item] , key = item) : null;
    }

    function getLargest(url) {
        countWords(url);
        console.log(idArray.keys());
        idArray.keys().forEach(largest);

        return key;
        // throw new Error('Implement me!')
    }

    exports.inclass = {
        author: "Jeffrey Wang",
        countWords, countWordsSafe, getLargest
    }

})(this);
