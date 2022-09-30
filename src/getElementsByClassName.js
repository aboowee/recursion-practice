
//Input class name
//Output, array of HTMLelements
//Must use document.body (to search into)
//Must use element.childnodes (check if child nodes exist and look into classlist)
  //Recursion to look into grandchild, etc
//Must use element.classList (search within each node if classList = className)

var getElementsByClassName = function(className) {

  var htmlCollection = [];

  var searchForClass = function (element) {

    if (element.classList && element.classList.contains(className)) {
      htmlCollection.push(element);
    }
    if (element.childNodes.length) {
      element.childNodes.forEach(function (item) {
        searchForClass(item);
      });
    }
  };

  searchForClass(document.body);
  return htmlCollection;
};