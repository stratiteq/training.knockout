###What is databinding and why should we use it?
* Code example DOM manipulation vs databinding

###Knockout functionality
#### observable
#### observableArray
#### computed

###The data-bind attribute
####What does it do?
####Is it legal?
Yes, the data-* attributes are valid in HTML5 and is the recommended way to add custom attributes to your application.
####The syntax
It might not be obvious at first but the syntax you use inside the data-bind attribute is actually a valid javascript object literal, meaning that

This:
```html
<h2 data-bind="text:name,
               attr:{title:desription},
               css:{selected: selectedId === id}"></h2>
```
Will be interpreted as this:
```javascript
{
  text: name,
  attr: {
    title: description
  },
  css: {
    selected: selectedId === id
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

### Binding context
A binding context in Knockout is an object which you can use in your bindings. There is always one implicit context which Knockout will try to execute your bindings on. But you can also set explicit ones that allow you to call functionality from other parts of your application, or scope a view to a specific ViewModel.
#### $root
Root is the the object that you used in your `ko.applyBindings()` call, this is the implicit binding context in the toplevel (outside any other context) of your view.
```javascript
ko.applyBindings({
  myName: ko.observable('my name')
});
```
```html
//These are the same since $root is implicit here.
<h2 data-bind="text: myName"></h2>
<h2 data-bind="text: $root.myName"></h2>
```
#### foreach
#### $data
Data refers to the current context which might seem weird, but sometimes you need to reference the context object itself instead of a property on it. $data and $root refers to the same object on the top level (outside any other context).
```javascript
ko.applyBindings({
  texts: ko.observableArray(['item 1','item 2']),
  doStuff: function(){
    //Do stuff with "this" here
  }
});
```
```html
//We have to use $data since we want to print the 
//text itself.
<ul data-bind="foreach: texts">
  <li data-bind="text: $data"></li>
</ul>

//Set the referenced object as "this" when calling this function
<button data-bind="click: doStuff.bind($data)"></button>
```
#### with
#### $parent, $parents[]

###Structure of a small single page application
