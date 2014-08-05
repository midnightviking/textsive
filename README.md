Textsive
========

#### A jQuery plugin for creating responsive container filling text.
---
Very often in graphic design the urge to stack words arises and you want that stack to be nice and square. Such was the case with Midnight and Viking. How do I get the bottom 6 letters to scale up and fill the same space as the top 8 without a whole bunch of styles AND keep it responsive? Well this plugin is that answer. 

####Usage is very simple. 
```javascript 
$("class/element/id").textsive();
```
#### Thats it!
## Settings
---
Currently there are only 3 settings: maxFontSize, minFontSize, & lineHeight. Guess what they do...
Usage is as with anything: 
```javascript
$(".fillDiv").textsive({maxFontSize: 1000, minFontSize: 10, lineHeight:0.95});
```

Line-height is set to ***EMs*** in order to maintain relations between the lines. 0.95 is the default and seems to the sweet spot. Adjust it as you will to get a desireable effect that will scale with the container.

I plan to possibly implement some more features at a future time. Perhaps the options to give your own block element to use in the expansion or assign class. I also like the idea of creating easing/animation functions to smooth the transition in size.


##End
Well, goodbye for now. I'm open to suggestions for improvement as it will only benefit my own usage of the plugin in production.


#### For an example check it out here:
### http://codepen.io/midnightviking/pen/wksbL

