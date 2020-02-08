# what is this ?

Get data from html page in the server by [tagname, id, classname] 
render this data to html page in user side (UI) page.

* class constructor will have two arguments :
1- first one is data raw link for data in the server which we need to fetch it.
2- data type (mimiType).

ex:- const data = new DomApp(url, "text/html");

* The class has only one method for fetching data required and parse it into document object model (DOM).
* method is domParser has 3 arguments 

1- root element which you will use it to render your data from the server into UI (dom element).
2- specified element you are fetching in the html page in server this argument can be (id, class, tagName) if you fetching elements by className or tagName you must to specifiy the index for the elements in third argument.But if you are fetching element by his id no need to use third argument.
remember this argument must be string includes the name of (id, class, tagName);
3- index for element.

ex:- data.domParser(root, "div", 0) => here you are fetching first div.
     data.domParser(root, "container", 1) => here you are fetching element by its className container index 1.
     same as document.getElementsByClassName("container")[1]; but here you just writing "container", 1
     data.domParser(root, "myElement") => here you are fetching element by its id so no need for third arguments.

# installation

`npm i fetchdom --save `




