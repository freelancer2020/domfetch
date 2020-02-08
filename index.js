class DomApp {
    constructor(link, dataType) {
      this._link = link;
      this._dataType = dataType;
    }
  
    domParse(root, tag, index) {
      fetch(this._link)
      .then(response => {
       return  response.text();
      })
      .then(data => {
        let host, content, roo;
        let parser = new DOMParser();
        let parserDom = parser.parseFromString(data, this._dataType);
        if (typeof(index) == "number") {
          content = parserDom.getElementsByClassName(tag)[index] || parserDom.getElementsByTagName(tag)[index];
        } else {
          content = parserDom.getElementById(tag);
        }
        root.append(content);
      })
      .catch(err => console.log(err.message));
    }
  }

  module.exports.domfetch = DomApp;