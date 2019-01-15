# 🤠 Y7K Style 

 [Version](project.json), [Changelog](changelog.md)

An extensive, opinionated SCSS boilerplate for the modern web.

## Structure

### Boot
A place for defaults, reset, util functions and everything that you need *before* starting to style things.

### Components
Components encapsulate independent, reusable parts of the page.
-> One file, one component

### Global

#### Animations
A place for global animation styles

#### Hacks
Place all nasty, *temporary* things here

#### Layouts
This folder contains global layout styles, like "pageWrapper". Layouts define core layout styles that are used on multiple pages.

#### Reusables
Global, reusable style bits. A bit like components, but CSS-Only. For example,
a `.link` class that helps to style links or a `.box` style that you apply on various things.

The styles applied to html elements.
* Headings
* Images
* Tables


### Mixins
A place for Mixins and functions. No Class Output is allowed here.

### Pages
Place page-specific styles here. One file = One page. All styles
should then be part of that page only, otherwise, create components.

### Variables
A place for Configuration and Variables. No Class Output is allowed here.

### Vendor
Put Vendor CSS files from 3rd party libraries here.



## Third Party Libraries

https://github.com/meodai)
* [Susy](http://susy.oddbird.net)
* [Sass MQ](http://sass-mq.github.io/sass-mq/)

## Credit & Contributions
Inspired by and based on [inuitcss](https://github.com/inuitcss/inuitcss). 🙌

## Contributions
* [@exophunk](https://github.com/exophunk)
* [@jorisnoo](https://github.com/jorisnoo)
* [@blackyukon](https://github.com/blackyukon)
* [@gabriellakovacs](https://github.com/gabriellakovacs)
* [@bergrebell](https://github.com/Bergrebell)
* [@vdrnn](https://github.com/vdrnn)

## License

This is free and unencumbered software released into the public domain.

However, if you find it useful, postcards to our office are appreciated: Y7K, Zurlindenstr. 134, CH-8003 Zurich. ✈️ 







