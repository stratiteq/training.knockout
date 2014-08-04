###What is databinding and why should we use it?
* Code example DOM manipulation vs databinding

###Knockout functionality
#### observable
#### observableArray
#### computed
#### Scopes
* $data
* foreach
* with
* $parent, $parents[]

###The data-bind attribute
####Is it legal?
Yes, the data-* attributes are valid in HTML5 and is the recommended way to add custom attributes to your application.
####The syntax
It might not be obvious at first but the syntax you use inside the data-bind attribute is actually a valid javascript object literal, meaning that

This:
```html
<h2 data-bind="text:name,attr:{title:desription},css:{selected: selectedId() === id()}"></h2>
```
Will be interpreted as this:
```javascript
{
  text: name,
  attr: {
    title: description
  },
  css: {
    selected: selectedId() === id()
  }
}
```

This means that we can write any valid javascript inside this attribute and use our observables/computed as they will be wrapped and executed by knockout. Things like these are perfectly valid:
```html
//inline function
<h2 data-bind="click: function(){ alert('h2 clicked';}"></h2>

//bind on global function
<h2 data-bind="click: alert.bind(undefined,'h2 clicked')"></h2>

//long unreadable logic
<h2 data-bind="css:{selected: function(){
  var selected = false;
  for(var i = 0 ; i < collection.count; i++){
    if(collection[i].preventsSelection()){
      selected = true;
      //More logic
    }
  }
  return selected;
}}"></h2>
```
But it doesn't mean that you should put complex logic into the view. The more convoluted example should be refactored to the ViewModel or maybe even to the Model.

###Structure of a small single page application
