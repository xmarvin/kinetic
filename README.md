# kinetic

[![Greenkeeper badge](https://badges.greenkeeper.io/buxlabs/kinetic.svg?token=2e82b76b98dc7471a959729d07c9033cb8bfddf964cc356a10e3aa365f4181db&ts=1522790975101)](https://greenkeeper.io/)

Simple library which adds smooth drag scrolling with gradual deceleration to containers.

All props go to [vanilla.kinetic](https://github.com/dzek69/vanilla.kinetic) and [jQuery.kinetic](https://github.com/davetayls/jquery.kinetic/). This repository holds a modern version and publishes the package via npm.

## Installation

`npm install @buxlabs/kinetic`

## Usage

```js
import Kinetic from '@buxlabs/kinetic'

const node = document.getElementById('wrapper')
const kinetic = new Kinetic(node)
// ...
kinetic.destroy()
```

## Compatibility

This plugin works with every browser supporting (natively or via polyfills) requestAnimationFrame, classList and addEventListener.

### Browsers ###

- ie: 10+ (7+)
- firefox: 23+ (3.6+)
- chrome: 24+ (13+)
- safari: 6.1+ (5+)
- iOS Safari: 7.1+ (4+) 

## Options

    cursor          {string}    default: move   Specify the cursor to use on the wrapper
    slowdown        {number}    default: 0.9    This option affects the speed at which the scroll slows
    threshold       {number|function(target, e)}    default: 0   This is the number of pixels the mouse needs to move before the element starts scrolling
    x               {string}    default: true   Toggles movement along the x axis
    y               {string}    default: true   Toggles movement along the y axis
    maxvelocity     {number}    default: 40     This option puts a cap on speed at which the container
                                                can scroll
    throttleFPS     {number}    default: 60     This adds throttling to the mouse move events to boost
                                                performance when scrolling
    triggerHardware {boolean} false             This adds css to the wrapper which
                                                will trigger iOS to use hardware acceleration
    invert          {boolean}   default: false  Invert movement direction

    filterTarget    {function(target)}          Return false from this function to
                                                prevent capturing the scroll

    movingClass     {object}
        up:         {string}    default: 'kinetic-moving-up'
        down:       {string}    default: 'kinetic-moving-down'
        left:       {string}    default: 'kinetic-moving-left'
        right:      {string}    default: 'kinetic-moving-right'

    deceleratingClass {object}
        up:         {string}    default: 'kinetic-decelerating-up'
        down:       {string}    default: 'kinetic-decelerating-down'
        left:       {string}    default: 'kinetic-decelerating-left'
        right:      {string}    default: 'kinetic-decelerating-right'

    Listeners:  All listeners are called with:
                - this = the instance of the Kinetic class

    moved       {function()}           A function which is called on every move
    stopped     {function()}           A function which is called once all
                                               movement has stopped
    selectStart {function()}           A function which is called on user try to drag (select text),
                                               return false to prevent selection when dragging

    Methods:    You can call methods by running the kinetic plugin
                on an element which has already been activated.

                eg  DOM_element.kinetic(); // activate
                    DOM_element._VanillaKinetic.methodname(options);

    start       Start movement in the scroll container at a particular velocity.
                This velocity will not slow until the end method is called.

                The following line scrolls the container left.
                DOM_element._VanillaKinetic.start({ velocity: -30 });

                The following line scrolls the container right.
                DOM_element._VanillaKinetic.start({ velocity: 30 });

                The following line scrolls the container diagonally.
                DOM_element._VanillaKinetic.start({ velocity: -30, velocityY: -10 });

    end         Begin slowdown of any scrolling velocity in the container.
                DOM_element._VanillaKinetic.end();

    stop        Stop the scrolling immediately

    detach      Detach listeners and functionality from the wrapper
                NOTE: This won't destroy the associated data, such method is currently
                in @TODO state

    attach      Re-attach listeners and functionality previously detached using
                the detach method



## License

MIT
