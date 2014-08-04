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

###Structure of a small single page application
