/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 746:
/***/ (function(module) {

/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';
  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */

  var doc = typeof document === 'undefined' ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ''
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    location: {
      hash: ''
    }
  } : document; // eslint-disable-line

  var win = typeof window === 'undefined' ? {
    document: doc,
    navigator: {
      userAgent: ''
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {}
  } : window; // eslint-disable-line

  /**
   * Dom7 2.1.3
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2019, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: February 11, 2019
   */

  var Dom7 = function Dom7(arr) {
    var self = this; // Create array-like object

    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }

    self.length = arr.length; // Return collection with methods

    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;

    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }

    if (selector) {
      // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();

        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';

          if (html.indexOf('<li') === 0) {
            toCreate = 'ul';
          }

          if (html.indexOf('<tr') === 0) {
            toCreate = 'tbody';
          }

          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) {
            toCreate = 'tr';
          }

          if (html.indexOf('<tbody') === 0) {
            toCreate = 'table';
          }

          if (html.indexOf('<option') === 0) {
            toCreate = 'select';
          }

          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;

          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }

          for (i = 0; i < els.length; i += 1) {
            if (els[i]) {
              arr.push(els[i]);
            }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }

    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }

    return uniqueArray;
  } // Classes and attributes


  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }

    var classes = className.split(' ');

    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.add(classes[i]);
        }
      }
    }

    return this;
  }

  function removeClass(className) {
    var classes = className.split(' ');

    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.remove(classes[i]);
        }
      }
    }

    return this;
  }

  function hasClass(className) {
    if (!this[0]) {
      return false;
    }

    return this[0].classList.contains(className);
  }

  function toggleClass(className) {
    var classes = className.split(' ');

    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.toggle(classes[i]);
        }
      }
    }

    return this;
  }

  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) {
        return this[0].getAttribute(attrs);
      }

      return undefined;
    } // Set attrs


    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }

    return this;
  } // eslint-disable-next-line


  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }

    return this;
  }

  function data(key, value) {
    var el;

    if (typeof value === 'undefined') {
      el = this[0]; // Get value

      if (el) {
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute("data-" + key);

        if (dataKey) {
          return dataKey;
        }

        return undefined;
      }

      return undefined;
    } // Set value


    for (var i = 0; i < this.length; i += 1) {
      el = this[i];

      if (!el.dom7ElementDataStorage) {
        el.dom7ElementDataStorage = {};
      }

      el.dom7ElementDataStorage[key] = value;
    }

    return this;
  } // Transforms
  // eslint-disable-next-line


  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }

    return this;
  }

  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }

    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }

    return this;
  } // Events


  function on() {
    var assign;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];

    if (typeof args[1] === 'function') {
      assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
      targetSelector = undefined;
    }

    if (!capture) {
      capture = false;
    }

    function handleLiveEvent(e) {
      var target = e.target;

      if (!target) {
        return;
      }

      var eventData = e.target.dom7EventData || [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      if ($(target).is(targetSelector)) {
        listener.apply(target, eventData);
      } else {
        var parents = $(target).parents(); // eslint-disable-line

        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) {
            listener.apply(parents[k], eventData);
          }
        }
      }
    }

    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      listener.apply(this, eventData);
    }

    var events = eventType.split(' ');
    var j;

    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];

          if (!el.dom7Listeners) {
            el.dom7Listeners = {};
          }

          if (!el.dom7Listeners[event]) {
            el.dom7Listeners[event] = [];
          }

          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];

          if (!el.dom7LiveListeners) {
            el.dom7LiveListeners = {};
          }

          if (!el.dom7LiveListeners[event$1]) {
            el.dom7LiveListeners[event$1] = [];
          }

          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }

    return this;
  }

  function off() {
    var assign;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];

    if (typeof args[1] === 'function') {
      assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
      targetSelector = undefined;
    }

    if (!capture) {
      capture = false;
    }

    var events = eventType.split(' ');

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;

        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }

        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];

            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }

    return this;
  }

  function trigger() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var events = args[0].split(' ');
    var eventData = args[1];

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = void 0;

        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        } // eslint-disable-next-line


        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }

    return this;
  }

  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;

    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) {
        return;
      }

      callback.call(this, e);

      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }

    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }

    return this;
  }

  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }

      return this[0].offsetWidth;
    }

    return null;
  }

  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }

      return this[0].offsetHeight;
    }

    return null;
  }

  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }

    return null;
  }

  function styles() {
    if (this[0]) {
      return win.getComputedStyle(this[0], null);
    }

    return {};
  }

  function css(props, value) {
    var i;

    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) {
          return win.getComputedStyle(this[0], null).getPropertyValue(props);
        }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }

        return this;
      }
    }

    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }

      return this;
    }

    return this;
  } // Iterate over the collection passing elements to `callback`


  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) {
      return this;
    } // Iterate over the current collection


    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    } // Return `this` to allow chained DOM operations


    return this;
  } // eslint-disable-next-line


  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }

    return this;
  } // eslint-disable-next-line


  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }

      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }

    return this;
  }

  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;

    if (!el || typeof selector === 'undefined') {
      return false;
    }

    if (typeof selector === 'string') {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      }

      compareWith = $(selector);

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }

      return false;
    } else if (selector === doc) {
      return el === doc;
    } else if (selector === win) {
      return el === win;
    }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }

      return false;
    }

    return false;
  }

  function index() {
    var child = this[0];
    var i;

    if (child) {
      i = 0; // eslint-disable-next-line

      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) {
          i += 1;
        }
      }

      return i;
    }

    return undefined;
  } // eslint-disable-next-line


  function eq(index) {
    if (typeof index === 'undefined') {
      return this;
    }

    var length = this.length;
    var returnIndex;

    if (index > length - 1) {
      return new Dom7([]);
    }

    if (index < 0) {
      returnIndex = length + index;

      if (returnIndex < 0) {
        return new Dom7([]);
      }

      return new Dom7([this[returnIndex]]);
    }

    return new Dom7([this[index]]);
  }

  function append() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];

      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;

          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }

  function prepend(newChild) {
    var i;
    var j;

    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;

        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }

    return this;
  }

  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }

        return new Dom7([]);
      }

      if (this[0].nextElementSibling) {
        return new Dom7([this[0].nextElementSibling]);
      }

      return new Dom7([]);
    }

    return new Dom7([]);
  }

  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];

    if (!el) {
      return new Dom7([]);
    }

    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line

      if (selector) {
        if ($(next).is(selector)) {
          nextEls.push(next);
        }
      } else {
        nextEls.push(next);
      }

      el = next;
    }

    return new Dom7(nextEls);
  }

  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];

      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }

        return new Dom7([]);
      }

      if (el.previousElementSibling) {
        return new Dom7([el.previousElementSibling]);
      }

      return new Dom7([]);
    }

    return new Dom7([]);
  }

  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];

    if (!el) {
      return new Dom7([]);
    }

    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line

      if (selector) {
        if ($(prev).is(selector)) {
          prevEls.push(prev);
        }
      } else {
        prevEls.push(prev);
      }

      el = prev;
    }

    return new Dom7(prevEls);
  }

  function parent(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) {
            parents.push(this[i].parentNode);
          }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }

    return $(unique(parents));
  }

  function parents(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line

      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) {
            parents.push(parent);
          }
        } else {
          parents.push(parent);
        }

        parent = parent.parentNode;
      }
    }

    return $(unique(parents));
  }

  function closest(selector) {
    var closest = this; // eslint-disable-line

    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }

    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }

    return closest;
  }

  function find(selector) {
    var foundElements = [];

    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);

      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }

    return new Dom7(foundElements);
  }

  function children(selector) {
    var children = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) {
            children.push(childNodes[j]);
          }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }

    return new Dom7(unique(children));
  }

  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) {
        this[i].parentNode.removeChild(this[i]);
      }
    }

    return this;
  }

  function add() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var dom = this;
    var i;
    var j;

    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);

      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }

    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles
  };
  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = Methods[methodName];
  });
  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {// no getter for object
        }

        try {
          delete object[key];
        } catch (e) {// something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if (delay === void 0) delay = 0;
      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if (axis === void 0) axis = 'x';
      var matrix;
      var curTransform;
      var transformMatrix;
      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;

        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) {
            return a.replace(',', '.');
          }).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case


        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) {
          curTransform = transformMatrix.m41;
        } // Crazy IE10 Matrix
        else if (matrix.length === 16) {
          curTransform = parseFloat(matrix[12]);
        } // Normal Browsers
        else {
          curTransform = parseFloat(matrix[4]);
        }
      }

      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) {
          curTransform = transformMatrix.m42;
        } // Crazy IE10 Matrix
        else if (matrix.length === 16) {
          curTransform = parseFloat(matrix[13]);
        } // Normal Browsers
        else {
          curTransform = parseFloat(matrix[5]);
        }
      }

      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;

      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) {
          return paramsPart !== '';
        });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }

      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [],
          len$1 = arguments.length;

      while (len$1--) args[len$1] = arguments[len$1];

      var to = Object(args[0]);

      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];

        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));

          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }

      return to;
    }
  };

  var Support = function Support() {
    var testDiv = doc.createElement('div');
    return {
      touch: win.Modernizr && win.Modernizr.touch === true || function checkTouch() {
        return !!(win.navigator.maxTouchPoints > 0 || 'ontouchstart' in win || win.DocumentTouch && doc instanceof win.DocumentTouch);
      }(),
      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || 'maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,
      transition: function checkTransition() {
        var style = testDiv.style;
        return 'transition' in style || 'webkitTransition' in style || 'MozTransition' in style;
      }(),
      transforms3d: win.Modernizr && win.Modernizr.csstransforms3d === true || function checkTransforms3d() {
        var style = testDiv.style;
        return 'webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style;
      }(),
      flexbox: function checkFlexbox() {
        var style = testDiv.style;
        var styles = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');

        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) {
            return true;
          }
        }

        return false;
      }(),
      observer: function checkObserver() {
        return 'MutationObserver' in win || 'WebkitMutationObserver' in win;
      }(),
      passiveListener: function checkPassiveListener() {
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            }
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {// No support
        }

        return supportsPassive;
      }(),
      gestures: function checkGestures() {
        return 'ongesturestart' in win;
      }()
    };
  }();

  var Browser = function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }

    return {
      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent)
    };
  }();

  var SwiperClass = function SwiperClass(params) {
    if (params === void 0) params = {};
    var self = this;
    self.params = params; // Events

    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = {
    components: {
      configurable: true
    }
  };

  SwiperClass.prototype.on = function on(events, handler, priority) {
    var self = this;

    if (typeof handler !== 'function') {
      return self;
    }

    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) {
        self.eventsListeners[event] = [];
      }

      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once(events, handler, priority) {
    var self = this;

    if (typeof handler !== 'function') {
      return self;
    }

    function onceHandler() {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      handler.apply(self, args);
      self.off(events, onceHandler);

      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }

    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off(events, handler) {
    var self = this;

    if (!self.eventsListeners) {
      return self;
    }

    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.f7proxy && eventHandler.f7proxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var self = this;

    if (!self.eventsListeners) {
      return self;
    }

    var events;
    var data;
    var context;

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams(instanceParams) {
    var instance = this;

    if (!instance.modules) {
      return;
    }

    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules(modulesParams) {
    if (modulesParams === void 0) modulesParams = {};
    var instance = this;

    if (!instance.modules) {
      return;
    }

    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Extend instance methods and props

      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];

          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      } // Add event listeners


      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;

    if (!Class.use) {
      return;
    }

    Class.use(components);
  };

  SwiperClass.installModule = function installModule(module) {
    var params = [],
        len = arguments.length - 1;

    while (len-- > 0) params[len] = arguments[len + 1];

    var Class = this;

    if (!Class.prototype.modules) {
      Class.prototype.modules = {};
    }

    var name = module.name || Object.keys(Class.prototype.modules).length + "_" + Utils.now();
    Class.prototype.modules[name] = module; // Prototype

    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    } // Class


    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    } // Callback


    if (module.install) {
      module.install.apply(Class, params);
    }

    return Class;
  };

  SwiperClass.use = function use(module) {
    var params = [],
        len = arguments.length - 1;

    while (len-- > 0) params[len] = arguments[len + 1];

    var Class = this;

    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Class.installModule(m);
      });
      return Class;
    }

    return Class.installModule.apply(Class, [module].concat(params));
  };

  Object.defineProperties(SwiperClass, staticAccessors);

  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;

    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }

    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }

    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    } // Subtract paddings


    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height
    });
  }

  function updateSlides() {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children("." + swiper.params.slideClass);
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    var offsetBefore = params.slidesOffsetBefore;

    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;

    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;

    if (typeof swiperSize === 'undefined') {
      return;
    }

    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    }

    swiper.virtualSize = -spaceBetween; // reset margins

    if (rtl) {
      slides.css({
        marginLeft: '',
        marginTop: ''
      });
    } else {
      slides.css({
        marginRight: '',
        marginBottom: ''
      });
    }

    var slidesNumberEvenToRows;

    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }

      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    } // Calc slides


    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);

      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = void 0;
        var column = void 0;
        var row = void 0;

        if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - column * slidesPerColumn;

          if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
            row += 1;

            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }

          newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
          slide.css({
            '-webkit-box-ordinal-group': newSlideOrderIndex,
            '-moz-box-ordinal-group': newSlideOrderIndex,
            '-ms-flex-order': newSlideOrderIndex,
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex
          });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }

        slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px").attr('data-swiper-column', column).attr('data-swiper-row', row);
      }

      if (slide.css('display') === 'none') {
        continue;
      } // eslint-disable-line


      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;

        if (currentTransform) {
          slide[0].style.transform = 'none';
        }

        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }

        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width'));
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            var boxSizing = slideStyles.getPropertyValue('box-sizing');

            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height'));
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');

            if (boxSizing$1 && boxSizing$1 === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }

        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }

        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }

        if (params.roundLengths) {
          slideSize = Math.floor(slideSize);
        }
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;

        if (params.roundLengths) {
          slideSize = Math.floor(slideSize);
        }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }

      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }

      slidesSizesGrid.push(slideSize);

      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;

        if (prevSlideSize === 0 && i !== 0) {
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        }

        if (i === 0) {
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        }

        if (Math.abs(slidePosition) < 1 / 1000) {
          slidePosition = 0;
        }

        if (params.roundLengths) {
          slidePosition = Math.floor(slidePosition);
        }

        if (index % params.slidesPerGroup === 0) {
          snapGrid.push(slidePosition);
        }

        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) {
          slidePosition = Math.floor(slidePosition);
        }

        if (index % params.slidesPerGroup === 0) {
          snapGrid.push(slidePosition);
        }

        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }

    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px"
      });
    }

    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px"
        });
      } else {
        $wrapperEl.css({
          height: swiper.virtualSize + params.spaceBetween + "px"
        });
      }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;

      if (swiper.isHorizontal()) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px"
        });
      } else {
        $wrapperEl.css({
          height: swiper.virtualSize + params.spaceBetween + "px"
        });
      }

      if (params.centeredSlides) {
        newSlidesGrid = [];

        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];

          if (params.roundLengths) {
            slidesGridItem = Math.floor(slidesGridItem);
          }

          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) {
            newSlidesGrid.push(slidesGridItem);
          }
        }

        snapGrid = newSlidesGrid;
      }
    } // Remove last grid elements depending on width


    if (!params.centeredSlides) {
      newSlidesGrid = [];

      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];

        if (params.roundLengths) {
          slidesGridItem$1 = Math.floor(slidesGridItem$1);
        }

        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }

      snapGrid = newSlidesGrid;

      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }

    if (snapGrid.length === 0) {
      snapGrid = [0];
    }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) {
          slides.css({
            marginLeft: spaceBetween + "px"
          });
        } else {
          slides.css({
            marginRight: spaceBetween + "px"
          });
        }
      } else {
        slides.css({
          marginBottom: spaceBetween + "px"
        });
      }
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;

      if (allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }

    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      swiper.emit('snapGridLengthChange');
    }

    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;

    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    } // Find slides currently in view


    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;

        if (index > swiper.slides.length) {
          break;
        }

        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    } // Find new height from highest slide in view


    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    } // Update Height


    if (newHeight) {
      swiper.$wrapperEl.css('height', newHeight + "px");
    }
  }

  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress(translate) {
    if (translate === void 0) translate = this && this.translate || 0;
    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) {
      return;
    }

    if (typeof slides[0].swiperSlideOffset === 'undefined') {
      swiper.updateSlidesOffset();
    }

    var offsetCenter = -translate;

    if (rtl) {
      offsetCenter = translate;
    } // Visible Slides


    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = slideBefore >= 0 && slideBefore < swiper.size || slideAfter > 0 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }

      slide.progress = rtl ? -slideProgress : slideProgress;
    }

    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress(translate) {
    if (translate === void 0) translate = this && this.translate || 0;
    var swiper = this;
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;

    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }

    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesProgress(translate);
    }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }

    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }

    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
    var activeSlide;

    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
    } else {
      activeSlide = slides.eq(activeIndex);
    } // Active classes


    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
      }
    } // Next Slide


    var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    } // Prev Slide


    var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }

    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
      }

      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;

    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      } // Normalize slideIndex


      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') {
          activeIndex = 0;
        }
      }
    }

    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }

    if (snapIndex >= snapGrid.length) {
      snapIndex = snapGrid.length - 1;
    }

    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }

      return;
    } // Get real index


    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');

    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }

    swiper.emit('slideChange');
  }

  function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;

    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
        }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;

      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }

    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
  };

  function getTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
    var swiper = this;
    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);

    if (rtl) {
      currentTranslate = -currentTranslate;
    }

    return currentTranslate || 0;
  }

  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (!params.virtualTranslate) {
      if (Support.transforms3d) {
        $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
      } else {
        $wrapperEl.transform("translate(" + x + "px, " + y + "px)");
      }
    }

    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }

    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate() {
    return -this.snapGrid[0];
  }

  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate
  };

  function setTransition(duration, byController) {
    var swiper = this;
    swiper.$wrapperEl.transition(duration);
    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;

    if (!dir) {
      if (activeIndex > previousIndex) {
        dir = 'next';
      } else if (activeIndex < previousIndex) {
        dir = 'prev';
      } else {
        dir = 'reset';
      }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }

      swiper.emit('slideChangeTransitionStart');

      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);
    var dir = direction;

    if (!dir) {
      if (activeIndex > previousIndex) {
        dir = 'next';
      } else if (activeIndex < previousIndex) {
        dir = 'prev';
      } else {
        dir = 'reset';
      }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }

      swiper.emit('slideChangeTransitionEnd');

      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1
  };

  function slideTo(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var slideIndex = index;

    if (slideIndex < 0) {
      slideIndex = 0;
    }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);

    if (snapIndex >= snapGrid.length) {
      snapIndex = snapGrid.length - 1;
    }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex]; // Update progress

    swiper.updateProgress(translate); // Normalize slideIndex

    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    } // Directions locks


    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }

      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }

    var direction;

    if (slideIndex > activeIndex) {
      direction = 'next';
    } else if (slideIndex < activeIndex) {
      direction = 'prev';
    } else {
      direction = 'reset';
    } // Update Index


    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex); // Update Height

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      swiper.updateSlidesClasses();

      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }

      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }

      return false;
    }

    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);

      if (!swiper.animating) {
        swiper.animating = true;

        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) {
              return;
            }

            if (e.target !== this) {
              return;
            }

            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }

        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var newIndex = index;

    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }
  /* eslint no-unused-vars: "off" */


  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;

    if (params.loop) {
      if (animating) {
        return false;
      }

      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }

    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }
  /* eslint no-unused-vars: "off" */


  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) {
        return false;
      }

      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }

    var translate = rtlTranslate ? swiper.translate : -swiper.translate;

    function normalize(val) {
      if (val < 0) {
        return -Math.floor(Math.abs(val));
      }

      return Math.floor(val);
    }

    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    var normalizedSlidesGrid = slidesGrid.map(function (val) {
      return normalize(val);
    });
    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;

    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);

      if (prevIndex < 0) {
        prevIndex = swiper.activeIndex - 1;
      }
    }

    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  /* eslint no-unused-vars: "off" */


  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  /* eslint no-unused-vars: "off" */


  function slideToClosest(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if (translate - currentSnap > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;

    if (params.loop) {
      if (swiper.animating) {
        return;
      }

      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
  };

  function loopCreate() {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
    var slides = $wrapperEl.children("." + params.slideClass);

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
          $wrapperEl.append(blankNode);
        }

        slides = $wrapperEl.children("." + params.slideClass);
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) {
      params.loopedSlides = slides.length;
    }

    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;

    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);

      if (index < swiper.loopedSlides) {
        appendSlides.push(el);
      }

      if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
        prependSlides.push(el);
      }

      slide.attr('data-swiper-slide-index', index);
    });

    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }

    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix() {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);

      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2 || activeIndex >= slides.length - loopedSlides) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);

      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }

    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
  };

  function setGrabCursor(moving) {
    var swiper = this;

    if (Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked) {
      return;
    }

    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor() {
    var swiper = this;

    if (Support.touch || swiper.params.watchOverflow && swiper.isLocked) {
      return;
    }

    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
  };

  function appendSlide(slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;

    if (params.loop) {
      swiper.loopDestroy();
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) {
          $wrapperEl.append(slides[i]);
        }
      }
    } else {
      $wrapperEl.append(slides);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }

    var newActiveIndex = activeIndex + 1;

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) {
          $wrapperEl.prepend(slides[i]);
        }
      }

      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }

    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide(index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;

    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }

    var baseLength = swiper.slides.length;

    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }

    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }

    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];

    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) {
          $wrapperEl.append(slides[i$1]);
        }
      }

      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }

    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;

    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }

    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];

        if (swiper.slides[indexToRemove]) {
          swiper.slides.eq(indexToRemove).remove();
        }

        if (indexToRemove < newActiveIndex) {
          newActiveIndex -= 1;
        }
      }

      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;

      if (swiper.slides[indexToRemove]) {
        swiper.slides.eq(indexToRemove).remove();
      }

      if (indexToRemove < newActiveIndex) {
        newActiveIndex -= 1;
      }

      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }

    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides() {
    var swiper = this;
    var slidesIndexes = [];

    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }

    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides
  };

  var Device = function Device() {
    var ua = win.navigator.userAgent;
    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap
    };
    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line

    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/); // Windows

    if (windows) {
      device.os = 'windows';
      device.osVersion = windows[2];
      device.windows = true;
    } // Android


    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }

    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    } // iOS


    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }

    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }

    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.iphone = true;
    } // iOS 8+ changed UA


    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    } // Desktop


    device.desktop = !(device.os || device.android || device.webView); // Webview

    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i); // Minimal UI

    if (device.os && device.os === 'ios') {
      var osVersionArr = device.osVersion.split('.');
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi = !device.webView && (ipod || iphone) && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    } // Pixel Ratio


    device.pixelRatio = win.devicePixelRatio || 1; // Export object

    return device;
  }();

  function onTouchStart(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }

    var e = event;

    if (e.originalEvent) {
      e = e.originalEvent;
    }

    data.isTouchEvent = e.type === 'touchstart';

    if (!data.isTouchEvent && 'which' in e && e.which === 3) {
      return;
    }

    if (!data.isTouchEvent && 'button' in e && e.button > 0) {
      return;
    }

    if (data.isTouched && data.isMoved) {
      return;
    }

    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
      swiper.allowClick = true;
      return;
    }

    if (params.swipeHandler) {
      if (!$(e).closest(params.swipeHandler)[0]) {
        return;
      }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= win.screen.width - edgeSwipeThreshold)) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;

    if (params.threshold > 0) {
      data.allowThresholdMove = false;
    }

    if (e.type !== 'touchstart') {
      var preventDefault = true;

      if ($(e.target).is(data.formElements)) {
        preventDefault = false;
      }

      if (doc.activeElement && $(doc.activeElement).is(data.formElements) && doc.activeElement !== e.target) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }

    swiper.emit('touchStart', e);
  }

  function onTouchMove(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;

    if (e.originalEvent) {
      e = e.originalEvent;
    }

    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }

      return;
    }

    if (data.isTouchEvent && e.type === 'mousemove') {
      return;
    }

    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }

    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;

      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = Utils.now();
      }

      return;
    }

    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }

    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }

    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }

    if (e.targetTouches && e.targetTouches.length > 1) {
      return;
    }

    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;

    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) {
      return;
    }

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;

      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }

    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }

    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }

    if (!data.startMoving) {
      return;
    }

    swiper.allowClick = false;
    e.preventDefault();

    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }

      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);

      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }

      data.allowMomentumBounce = false; // Grab Cursor

      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }

      swiper.emit('sliderFirstMove', e);
    }

    swiper.emit('sliderMove', e);
    data.isMoved = true;
    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;

    if (rtl) {
      diff = -diff;
    }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;

    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }

    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;

      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
      }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;

      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
      }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    } // Directions locks


    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }

    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    } // Threshold


    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger) {
      return;
    } // Update active index in free mode


    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime
        });
      }

      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now()
      });
    } // Update progress


    swiper.updateProgress(data.currentTranslate); // Update translate

    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;

    if (e.originalEvent) {
      e = e.originalEvent;
    }

    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }

    data.allowTouchCallbacks = false;

    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }

      data.isMoved = false;
      data.startMoving = false;
      return;
    } // Return Grab Cursor


    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    } // Time diff


    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap', e);

      if (timeDiff < 300 && touchEndTime - data.lastClickTime > 300) {
        if (data.clickTimeout) {
          clearTimeout(data.clickTimeout);
        }

        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) {
            return;
          }

          swiper.emit('click', e);
        }, 300);
      }

      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        if (data.clickTimeout) {
          clearTimeout(data.clickTimeout);
        }

        swiper.emit('doubleTap', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) {
        swiper.allowClick = true;
      }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }

    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;

    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }

        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();
          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;

          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          } // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.


          if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }

        swiper.velocity *= params.freeModeMomentumVelocityRatio;
        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;
        var newPosition = swiper.translate + momentumDistance;

        if (rtl) {
          newPosition = -newPosition;
        }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;

        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }

            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }

          if (params.loop && params.centeredSlides) {
            needsLoopFix = true;
          }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }

            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }

          if (params.loop && params.centeredSlides) {
            needsLoopFix = true;
          }
        } else if (params.freeModeSticky) {
          var nextSlide;

          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }

          newPosition = -newPosition;
        }

        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        } // Fix duration


        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) {
              return;
            }

            swiper.emit('momentumBounce');
            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) {
                return;
              }

              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);

          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) {
                return;
              }

              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      return;
    } // Find current slide


    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];

    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    } // Find current slide size


    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) {
          swiper.slideTo(stopIndex + params.slidesPerGroup);
        } else {
          swiper.slideTo(stopIndex);
        }
      }

      if (swiper.swipeDirection === 'prev') {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + params.slidesPerGroup);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize() {
    var swiper = this;
    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) {
      return;
    } // Breakpoints


    if (params.breakpoints) {
      swiper.setBreakpoint();
    } // Save locks


    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid; // Disable locks on resize

    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();

    if (params.freeMode) {
      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();

      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    } // Return locks after resize


    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick(e) {
    var swiper = this;

    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) {
        e.preventDefault();
      }

      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;
    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested; // Touch Events

    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
            passive: false,
            capture: capture
          } : capture);
          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }

        if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
          target.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener('click', swiper.onClick, true);
      }
    } // Resize handler

    swiper.on(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  }

  function detachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;
    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested; // Touch Events

    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }

        if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
          target.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener('click', swiper.onClick, true);
      }
    } // Resize handler

    swiper.off(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
  };

  function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides;
    if (loopedSlides === void 0) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;

    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) {
      return;
    } // Set breakpoint for window width and update parameters


    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];

          if (typeof paramValue === 'undefined') {
            return;
          }

          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      Utils.extend(swiper.params, breakpointParams);
      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
      });
      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint(breakpoints) {
    var swiper = this; // Get breakpoint for window width

    if (!breakpoints) {
      return undefined;
    }

    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) {
      return parseInt(a, 10) - parseInt(b, 10);
    });

    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];

      if (swiper.params.breakpointsInverse) {
        if (point <= win.innerWidth) {
          breakpoint = point;
        }
      } else if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }

    return breakpoint || 'max';
  }

  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint
  };

  function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];
    suffixes.push('initialized');
    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }

    if (!Support.flexbox) {
      suffixes.push('no-flexbox');
    }

    if (params.autoHeight) {
      suffixes.push('autoheight');
    }

    if (rtl) {
      suffixes.push('rtl');
    }

    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
    }

    if (Device.android) {
      suffixes.push('android');
    }

    if (Device.ios) {
      suffixes.push('ios');
    } // WP8 Touch Events Fix


    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      suffixes.push("wp8-" + params.direction);
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });
    $el.addClass(classNames.join(' '));
  }

  function removeClasses() {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;
    $el.removeClass(classNames.join(' '));
  }

  var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
  };

  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;

    function onReady() {
      if (callback) {
        callback();
      }
    }

    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;

        if (sizes) {
          image.sizes = sizes;
        }

        if (srcset) {
          image.srcset = srcset;
        }

        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');

    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) {
        return;
      }

      if (swiper.imagesLoaded !== undefined) {
        swiper.imagesLoaded += 1;
      }

      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) {
          swiper.update();
        }

        swiper.emit('imagesReady');
      }
    }

    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;
    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked; // events

    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = {
    checkOverflow: checkOverflow
  };
  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventInteractionOnTransition: false,
    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsInverse: false,
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: 'swiper-container-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true
  };
  /* eslint no-param-reassign: "off" */

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images
  };
  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/function (SwiperClass) {
    function Swiper() {
      var assign;
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      var el;
      var params;

      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        assign = args, el = assign[0], params = assign[1];
      }

      if (!params) {
        params = {};
      }

      params = Utils.extend({}, params);

      if (el && !params.el) {
        params.el = el;
      }

      SwiperClass.call(this, params);
      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      }); // Swiper Instance

      var swiper = this;

      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }

      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];

        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];

          if (typeof moduleParams !== 'object' || moduleParams === null) {
            return;
          }

          if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            return;
          }

          if (params[moduleParamName] === true) {
            params[moduleParamName] = {
              enabled: true
            };
          }

          if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
            params[moduleParamName].enabled = true;
          }

          if (!params[moduleParamName]) {
            params[moduleParamName] = {
              enabled: false
            };
          }
        }
      }); // Extend defaults with modules params

      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams); // Extend defaults with passed params

      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params); // Save Dom lib

      swiper.$ = $; // Find el

      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper); // Find Wrapper

      var $wrapperEl = $el.children("." + swiper.params.wrapperClass); // Extend Swiper

      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],
        // Classes
        classNames: [],
        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEvents: function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];

          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          } else if (Support.prefixedPointerEvents) {
            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
          }

          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2]
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2]
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      }); // Install Modules

      swiper.useModules(); // Init

      if (swiper.params.init) {
        swiper.init();
      } // Return app instance


      return swiper;
    }

    if (SwiperClass) Swiper.__proto__ = SwiperClass;
    Swiper.prototype = Object.create(SwiperClass && SwiperClass.prototype);
    Swiper.prototype.constructor = Swiper;
    var staticAccessors = {
      extendedDefaults: {
        configurable: true
      },
      defaults: {
        configurable: true
      },
      Class: {
        configurable: true
      },
      $: {
        configurable: true
      }
    };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;

      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;

        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;

            if (slideSize > swiperSize) {
              breakLoop = true;
            }
          }
        }

        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;

            if (slideSize > swiperSize) {
              breakLoop = true;
            }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }

      return spv;
    };

    Swiper.prototype.update = function update() {
      var swiper = this;

      if (!swiper || swiper.destroyed) {
        return;
      }

      var snapGrid = swiper.snapGrid;
      var params = swiper.params; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      }

      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      var translated;

      if (swiper.params.freeMode) {
        setTranslate();

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (!translated) {
          setTranslate();
        }
      }

      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }

      swiper.emit('update');
    };

    Swiper.prototype.changeDirection = function changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) needUpdate = true;
      var swiper = this;
      var currentDirection = swiper.params.direction;

      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }

      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
        return swiper;
      }

      if (currentDirection === 'vertical') {
        swiper.$el.removeClass(swiper.params.containerModifierClass + "vertical wp8-vertical").addClass("" + swiper.params.containerModifierClass + newDirection);

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(swiper.params.containerModifierClass + "wp8-" + newDirection);
        }
      }

      if (currentDirection === 'horizontal') {
        swiper.$el.removeClass(swiper.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + swiper.params.containerModifierClass + newDirection);

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(swiper.params.containerModifierClass + "wp8-" + newDirection);
        }
      }

      swiper.params.direction = newDirection;
      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });
      swiper.emit('changeDirection');

      if (needUpdate) {
        swiper.update();
      }

      return swiper;
    };

    Swiper.prototype.init = function init() {
      var swiper = this;

      if (swiper.initialized) {
        return;
      }

      swiper.emit('beforeInit'); // Set breakpoint

      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      } // Add Classes


      swiper.addClasses(); // Create loop

      if (swiper.params.loop) {
        swiper.loopCreate();
      } // Update size


      swiper.updateSize(); // Update slides

      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      } // Set Grab Cursor


      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      } // Slide To Initial Slide


      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      } // Attach events


      swiper.attachEvents(); // Init Flag

      swiper.initialized = true; // Emit

      swiper.emit('init');
    };

    Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) deleteInstance = true;
      if (cleanStyles === void 0) cleanStyles = true;
      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy'); // Init Flag

      swiper.initialized = false; // Detach events

      swiper.detachEvents(); // Destroy loop

      if (params.loop) {
        swiper.loopDestroy();
      } // Cleanup styles


      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');

        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy'); // Detach emitter events

      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }

      swiper.destroyed = true;
      return null;
    };

    Swiper.extendDefaults = function extendDefaults(newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties(Swiper, staticAccessors);
    return Swiper;
  }(SwiperClass);

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device
    },
    static: {
      device: Device
    }
  };
  var Support$1 = {
    name: 'support',
    proto: {
      support: Support
    },
    static: {
      support: Support
    }
  };
  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser
    },
    static: {
      browser: Browser
    }
  };
  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) {
              return;
            }

            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) {
              return;
            }

            swiper.emit('orientationchange');
          }
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this; // Emit resize

        win.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      }
    }
  };
  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if (options === void 0) options = {};
      var swiper = this;
      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }

        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;

      if (!Support.observer || !swiper.params.observer) {
        return;
      }

      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();

        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      } // Observe container


      swiper.observer.attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren
      }); // Observe wrapper

      swiper.observer.attach(swiper.$wrapperEl[0], {
        attributes: false
      });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    }
  };
  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: []
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      }
    }
  };
  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;
      var offsetProp;

      if (swiper.rtlTranslate) {
        offsetProp = 'right';
      } else {
        offsetProp = swiper.isHorizontal() ? 'left' : 'top';
      }

      var slidesAfter;
      var slidesBefore;

      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }

      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, offset + "px");
        }

        swiper.updateProgress();
        return;
      }

      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: function getSlides() {
            var slidesToRender = [];

            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }

            return slidesToRender;
          }()
        });
        onRendered();
        return;
      }

      var prependIndexes = [];
      var appendIndexes = [];

      if (force) {
        swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
          }
        }
      }

      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) {
              appendIndexes.push(i$1);
            }

            if (i$1 < previousFrom) {
              prependIndexes.push(i$1);
            }
          }
        }
      }

      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) {
        return b - a;
      }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;

      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }

      var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");

      if (!$slideEl.attr('data-swiper-slide-index')) {
        $slideEl.attr('data-swiper-slide-index', index);
      }

      if (params.cache) {
        swiper.virtual.cache[index] = $slideEl;
      }

      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            swiper.virtual.slides.push(slides[i]);
          }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }

      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            swiper.virtual.slides.unshift(slides[i]);
          }
        }

        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }

      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }

      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;

      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) {
        return;
      }

      var activeIndex = swiper.activeIndex;

      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);

          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }

          if (slidesIndexes[i] < activeIndex) {
            activeIndex -= 1;
          }

          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }

        if (slidesIndexes < activeIndex) {
          activeIndex -= 1;
        }

        activeIndex = Math.max(activeIndex, 0);
      }

      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];

      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }

      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    }
  };
  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {}
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;

        if (!swiper.params.virtual.enabled) {
          return;
        }

        swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
        var overwriteParams = {
          watchSlidesProgress: true
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;

        if (!swiper.params.virtual.enabled) {
          return;
        }

        swiper.virtual.update();
      }
    }
  };
  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;

      if (e.originalEvent) {
        e = e.originalEvent;
      } // jquery fix


      var kc = e.keyCode || e.charCode; // Directions locks

      if (!swiper.allowSlideNext && (swiper.isHorizontal() && kc === 39 || swiper.isVertical() && kc === 40)) {
        return false;
      }

      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && kc === 37 || swiper.isVertical() && kc === 38)) {
        return false;
      }

      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }

      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }

      if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false; // Check that swiper should be inside of visible area of window

        if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
          return undefined;
        }

        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();

        if (rtl) {
          swiperOffset.left -= swiper.$el[0].scrollLeft;
        }

        var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];

          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            inView = true;
          }
        }

        if (!inView) {
          return undefined;
        }
      }

      if (swiper.isHorizontal()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }

        if (kc === 39 && !rtl || kc === 37 && rtl) {
          swiper.slideNext();
        }

        if (kc === 37 && !rtl || kc === 39 && rtl) {
          swiper.slidePrev();
        }
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }

        if (kc === 40) {
          swiper.slideNext();
        }

        if (kc === 38) {
          swiper.slidePrev();
        }
      }

      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;

      if (swiper.keyboard.enabled) {
        return;
      }

      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;

      if (!swiper.keyboard.enabled) {
        return;
      }

      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    }
  };
  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper)
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;

        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      }
    }
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = (eventName in doc);

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported && doc.implementation && doc.implementation.hasFeature // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    && doc.implementation.hasFeature('', '') !== true) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }

  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: function getEvent() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) {
        return 'DOMMouseScroll';
      }

      return isEventSupported() ? 'wheel' : 'mousewheel';
    }(),
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;
      var sX = 0;
      var sY = 0; // spinX, spinY

      var pX = 0;
      var pY = 0; // pixelX, pixelY
      // Legacy

      if ('detail' in e) {
        sY = e.detail;
      }

      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }

      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }

      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      } // side scrolling on FF with DOMMouseScroll


      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }

      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      } // Fall-back if spin cannot be determined


      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }

      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (!swiper.mouseEntered && !params.releaseOnEdges) {
        return true;
      }

      if (e.originalEvent) {
        e = e.originalEvent;
      } // jquery fix


      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;
      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) {
            delta = data.pixelX * rtlFactor;
          } else {
            return true;
          }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) {
          delta = data.pixelY;
        } else {
          return true;
        }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) {
        return true;
      }

      if (params.invert) {
        delta = -delta;
      }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) {
              return true;
            }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) {
            return true;
          }
        }

        swiper.mousewheel.lastScrollTime = new win.Date().getTime();
      } else {
        // Freemode or scrollContainer:
        if (swiper.params.loop) {
          swiper.loopFix();
        }

        var position = swiper.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) {
          position = swiper.minTranslate();
        }

        if (position <= swiper.maxTranslate()) {
          position = swiper.maxTranslate();
        }

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        } // Emit event


        swiper.emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) {
          swiper.autoplay.stop();
        } // Return page scroll on edge positions


        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) {
          return true;
        }
      }

      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }

      return false;
    },
    enable: function enable() {
      var swiper = this;

      if (!Mousewheel.event) {
        return false;
      }

      if (swiper.mousewheel.enabled) {
        return false;
      }

      var target = swiper.$el;

      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }

      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;

      if (!Mousewheel.event) {
        return false;
      }

      if (!swiper.mousewheel.enabled) {
        return false;
      }

      var target = swiper.$el;

      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }

      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    }
  };
  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container'
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now()
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;

        if (swiper.params.mousewheel.enabled) {
          swiper.mousewheel.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (swiper.mousewheel.enabled) {
          swiper.mousewheel.disable();
        }
      }
    }
  };
  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) {
        return;
      }

      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }

        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }

      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }

        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();

      if (swiper.isBeginning && !swiper.params.loop) {
        return;
      }

      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();

      if (swiper.isEnd && !swiper.params.loop) {
        return;
      }

      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;

      if (!(params.nextEl || params.prevEl)) {
        return;
      }

      var $nextEl;
      var $prevEl;

      if (params.nextEl) {
        $nextEl = $(params.nextEl);

        if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }

      if (params.prevEl) {
        $prevEl = $(params.prevEl);

        if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }

      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0]
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }

      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    }
  };
  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock'
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper)
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;

        if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
          var isHidden;

          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }

          if (isHidden === true) {
            swiper.emit('navigationShow', swiper);
          } else {
            swiper.emit('navigationHide', swiper);
          }

          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }

          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      }
    }
  };
  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;

      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
        return;
      }

      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el; // Current/Total

      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }

        if (current > total - 1) {
          current -= total;
        }

        if (current < 0 && swiper.params.paginationType !== 'bullets') {
          current = total + current;
        }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      } // Types


      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;

        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

            if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }

          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }

        bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();

            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }

            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(params.bulletActiveClass + "-main");
              }

              if (bulletIndex === firstIndex) {
                $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              }

              if (bulletIndex === lastIndex) {
                $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);

          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);

            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(params.bulletActiveClass + "-main");
            }

            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }

        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
        }
      }

      if (params.type === 'fraction') {
        $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
        $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
      }

      if (params.type === 'progressbar') {
        var progressbarDirection;

        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }

        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;

        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }

        $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
      }

      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }

      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;

      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
        return;
      }

      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      var paginationHTML = '';

      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
          }
        }

        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find("." + params.bulletClass);
      }

      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + "<span class=\"" + params.totalClass + "\"></span>";
        }

        $el.html(paginationHTML);
      }

      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
        }

        $el.html(paginationHTML);
      }

      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;

      if (!params.el) {
        return;
      }

      var $el = $(params.el);

      if ($el.length === 0) {
        return;
      }

      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass("" + params.modifierClass + params.type + "-dynamic");
        swiper.pagination.dynamicBulletIndex = 0;

        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }

      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', "." + params.bulletClass, function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;

          if (swiper.params.loop) {
            index += swiper.loopedSlides;
          }

          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0]
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;

      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
        return;
      }

      var $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);

      if (swiper.pagination.bullets) {
        swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      }

      if (params.clickable) {
        $el.off('click', "." + params.bulletClass);
      }
    }
  };
  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets',
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) {
          return number;
        },
        formatFractionTotal: function (number) {
          return number;
        },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-',
        // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable',
        // NEW
        lockClass: 'swiper-pagination-lock'
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;

        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;

        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;

        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;

        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;

        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

          if (isHidden === true) {
            swiper.emit('paginationShow', swiper);
          } else {
            swiper.emit('paginationHide', swiper);
          }

          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      }
    }
  };
  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;

      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }

      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;
      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;

      if (rtl) {
        newPos = -newPos;

        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }

      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
        } else {
          $dragEl.transform("translateX(" + newPos + "px)");
        }

        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
        } else {
          $dragEl.transform("translateY(" + newPos + "px)");
        }

        $dragEl[0].style.height = newSize + "px";
      }

      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;

      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }

      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;

      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;

      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }

      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }

      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var pointerPosition;

      if (swiper.isHorizontal()) {
        pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX;
      } else {
        pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
      }

      var positionRatio;
      positionRatio = (pointerPosition - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - dragSize / 2) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);

      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      e.preventDefault();
      e.stopPropagation();
      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);
      clearTimeout(swiper.scrollbar.dragTimeout);
      $el.transition(0);

      if (params.hide) {
        $el.css('opacity', 1);
      }

      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) {
        return;
      }

      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }

      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) {
        return;
      }

      swiper.scrollbar.isTouched = false;

      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }

      swiper.emit('scrollbarDragEnd', e);

      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;

      if (!swiper.params.scrollbar.el) {
        return;
      }

      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;

      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;

      if (!swiper.params.scrollbar.el) {
        return;
      }

      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;

      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;

      if (!swiper.params.scrollbar.el) {
        return;
      }

      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;
      var $el = $(params.el);

      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

      if ($dragEl.length === 0) {
        $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0]
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    }
  };
  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag'
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      }
    }
  };
  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;
      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;
      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if (x.indexOf('%') >= 0) {
        x = parseInt(x, 10) * progress * rtlFactor + "%";
      } else {
        x = x * progress * rtlFactor + "px";
      }

      if (y.indexOf('%') >= 0) {
        y = parseInt(y, 10) * progress + "%";
      } else {
        y = y * progress + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        $el[0].style.opacity = currentOpacity;
      }

      if (typeof scale === 'undefined' || scale === null) {
        $el.transform("translate3d(" + x + ", " + y + ", 0px)");
      } else {
        var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index, el) {
        swiper.parallax.setTransform(el, progress);
      });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;

        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }

        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index, el) {
          swiper.parallax.setTransform(el, slideProgress);
        });
      });
    },
    setTransition: function setTransition(duration) {
      if (duration === void 0) duration = this.params.speed;
      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index, parallaxEl) {
        var $parallaxEl = $(parallaxEl);
        var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;

        if (duration === 0) {
          parallaxDuration = 0;
        }

        $parallaxEl.transition(parallaxDuration);
      });
    }
  };
  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;

        if (!swiper.params.parallax.enabled) {
          return;
        }

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;

        if (!swiper.params.parallax.enabled) {
          return;
        }

        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;

        if (!swiper.params.parallax.enabled) {
          return;
        }

        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;

        if (!swiper.params.parallax.enabled) {
          return;
        }

        swiper.parallax.setTransition(duration);
      }
    }
  };
  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) {
        return 1;
      }

      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;

      if (!Support.gestures) {
        if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
          return;
        }

        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }

      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');

        if (gesture.$slideEl.length === 0) {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }

        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }

      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;

      if (!Support.gestures) {
        if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
          return;
        }

        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }

      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
      }

      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }

      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
      }

      gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;

      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }

        if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
          return;
        }

        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }

      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;

      if (zoom.scale === 1) {
        gesture.$slideEl = undefined;
      }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }

      if (image.isTouched) {
        return;
      }

      if (Device.android) {
        e.preventDefault();
      }

      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }

      swiper.allowClick = false;

      if (!image.isTouched || !gesture.$slideEl) {
        return;
      }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);

        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      } // Define if we need image drag


      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) {
        return;
      }

      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          return;
        }

        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          return;
        }
      }

      e.preventDefault();
      e.stopPropagation();
      image.isMoved = true;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
      }

      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
      }

      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
      }

      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
      } // Velocity


      if (!velocity.prevPositionX) {
        velocity.prevPositionX = image.touchesCurrent.x;
      }

      if (!velocity.prevPositionY) {
        velocity.prevPositionY = image.touchesCurrent.y;
      }

      if (!velocity.prevTime) {
        velocity.prevTime = Date.now();
      }

      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;

      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) {
        velocity.x = 0;
      }

      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) {
        velocity.y = 0;
      }

      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }

      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }

      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY; // Fix duration

      if (velocity.x !== 0) {
        momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      }

      if (velocity.y !== 0) {
        momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      }

      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY; // Define if we need image drag

      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;

      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }

      gesture.$slideEl.addClass("" + params.zoomedSlideClass);
      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }

        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }

        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }

      gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
      gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    out: function out() {
      var swiper = this;
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.enabled) {
        return;
      }

      zoom.enabled = true;
      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false; // Scale image

      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } // Move image


      swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;

      if (!zoom.enabled) {
        return;
      }

      swiper.zoom.enabled = false;
      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false; // Scale image

      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } // Move image


      swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove);
    }
  };
  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed'
      }
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined
        }
      };
      'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom
      });
      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }

          scale = value;
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;

        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;

        if (!swiper.zoom.enabled) {
          return;
        }

        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;

        if (!swiper.zoom.enabled) {
          return;
        }

        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;

        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;

        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      }
    }
  };
  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if (loadInDuplicate === void 0) loadInDuplicate = true;
      var swiper = this;
      var params = swiper.params.lazy;

      if (typeof index === 'undefined') {
        return;
      }

      if (swiper.slides.length === 0) {
        return;
      }

      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
      var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }

      if ($images.length === 0) {
        return;
      }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);
        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');
        swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) {
            return;
          }

          if (background) {
            $imageEl.css('background-image', "url(\"" + background + "\")");
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }

            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }

            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find("." + params.preloaderClass).remove();

          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }

          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });
        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;
      var slidesPerView = swiperParams.slidesPerView;

      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
            return true;
          }
        } else if (slides[index]) {
          return true;
        }

        return false;
      }

      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }

        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) {
        swiper.lazy.initialImageLoaded = true;
      }

      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (elIndex, slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) {
            swiper.lazy.loadInSlide(i);
          }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }

      if (params.loadPrevNext) {
        if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) {
              swiper.lazy.loadInSlide(i$1);
            }
          } // Prev Slides


          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) {
              swiper.lazy.loadInSlide(i$2);
            }
          }
        } else {
          var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);

          if (nextSlide.length > 0) {
            swiper.lazy.loadInSlide(slideIndex(nextSlide));
          }

          var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);

          if (prevSlide.length > 0) {
            swiper.lazy.loadInSlide(slideIndex(prevSlide));
          }
        }
      }
    }
  };
  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader'
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;

        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;

        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;

        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;

        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;

        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;

        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;

        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      }
    }
  };
  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;

          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;

            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }

          return maxIndex;
        };
      }();

      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.

      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) {
          return 0;
        } // Get the indexes of x1 and x3 (the array indexes before and after given x2):


        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };

      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;

      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;

      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out

          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }

        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }

      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;

      function setControlledTransition(c) {
        c.setTransition(duration, swiper);

        if (duration !== 0) {
          c.transitionStart();

          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }

          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) {
              return;
            }

            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }

            c.transitionEnd();
          });
        }
      }

      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide' // or 'container'

      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper)
        }
      });
    },
    on: {
      update: function update() {
        var swiper = this;

        if (!swiper.controller.control) {
          return;
        }

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;

        if (!swiper.controller.control) {
          return;
        }

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;

        if (!swiper.controller.control) {
          return;
        }

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;

        if (!swiper.controller.control) {
          return;
        }

        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;

        if (!swiper.controller.control) {
          return;
        }

        swiper.controller.setTransition(duration, byController);
      }
    }
  };
  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;

      if (e.keyCode !== 13) {
        return;
      }

      var $targetEl = $(e.target);

      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }

        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }

      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }

        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }

      if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;

      if (notification.length === 0) {
        return;
      }

      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) {
        return;
      }

      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;

      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;
      swiper.$el.append(swiper.a11y.liveRegion); // Navigation

      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;

      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }

      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }

      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }

      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      } // Pagination


      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) {
        swiper.a11y.liveRegion.remove();
      }

      var $nextEl;
      var $prevEl;

      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }

      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }

      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }

      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      } // Pagination


      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
      }
    }
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}'
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
        }
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;

        if (!swiper.params.a11y.enabled) {
          return;
        }

        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;

        if (!swiper.params.a11y.enabled) {
          return;
        }

        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;

        if (!swiper.params.a11y.enabled) {
          return;
        }

        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;

        if (!swiper.params.a11y.enabled) {
          return;
        }

        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;

        if (!swiper.params.a11y.enabled) {
          return;
        }

        swiper.a11y.destroy();
      }
    }
  };
  var History = {
    init: function init() {
      var swiper = this;

      if (!swiper.params.history) {
        return;
      }

      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }

      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();

      if (!history.paths.key && !history.paths.value) {
        return;
      }

      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) {
        return part !== '';
      });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return {
        key: key,
        value: value
      };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;

      if (!swiper.history.initialized || !swiper.params.history.enabled) {
        return;
      }

      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));

      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }

      var currentState = win.history.state;

      if (currentState && currentState.value === value) {
        return;
      }

      if (swiper.params.history.replaceState) {
        win.history.replaceState({
          value: value
        }, null, value);
      } else {
        win.history.pushState({
          value: value
        }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;

      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));

          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    }
  };
  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides'
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper)
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;

        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;

        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      }
    }
  };
  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();

        if (typeof newIndex === 'undefined') {
          return;
        }

        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;

      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) {
        return;
      }

      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || 0);
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;

      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) {
        return;
      }

      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');

      if (hash) {
        var speed = 0;

        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');

          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }

      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    }
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper)
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;

        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;

        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      }
    }
  };
  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;

      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }

      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;

      if (typeof swiper.autoplay.timeout !== 'undefined') {
        return false;
      }

      if (swiper.autoplay.running) {
        return false;
      }

      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;

      if (!swiper.autoplay.running) {
        return false;
      }

      if (typeof swiper.autoplay.timeout === 'undefined') {
        return false;
      }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }

      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;

      if (!swiper.autoplay.running) {
        return;
      }

      if (swiper.autoplay.paused) {
        return;
      }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
      }

      swiper.autoplay.paused = true;

      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    }
  };
  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) {
              return;
            }

            if (e.target !== this) {
              return;
            }

            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;

            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          }
        }
      });
    },
    on: {
      init: function init() {
        var swiper = this;

        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;

        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;

        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      }
    }
  };
  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;

        if (!swiper.params.virtualTranslate) {
          tx -= swiper.translate;
        }

        var ty = 0;

        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }

        var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl.css({
          opacity: slideOpacity
        }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);

      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) {
            return;
          }

          if (!swiper || swiper.destroyed) {
            return;
          }

          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }
  };
  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;

        if (swiper.params.effect !== 'fade') {
          return;
        }

        swiper.classNames.push(swiper.params.containerModifierClass + "fade");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;

        if (swiper.params.effect !== 'fade') {
          return;
        }

        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;

        if (swiper.params.effect !== 'fade') {
          return;
        }

        swiper.fadeEffect.setTransition(duration);
      }
    }
  };
  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }

          $cubeShadowEl.css({
            height: swiperWidth + "px"
          });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');

          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;

        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }

        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);

        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }

        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;

        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }

        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;

          if (rtl) {
            wrapperRotate = -slideIndex * 90 - progress * 90;
          }
        }

        $slideEl.transform(transform);

        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

          if (shadowBefore.length === 0) {
            shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
            $slideEl.append(shadowBefore);
          }

          if (shadowAfter.length === 0) {
            shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
            $slideEl.append(shadowAfter);
          }

          if (shadowBefore.length) {
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          }

          if (shadowAfter.length) {
            shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
      }

      $wrapperEl.css({
        '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
        '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
        '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
        'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
        }
      }

      var zFactor = Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
      $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    }
  };
  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;

        if (swiper.params.effect !== 'cube') {
          return;
        }

        swiper.classNames.push(swiper.params.containerModifierClass + "cube");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;

        if (swiper.params.effect !== 'cube') {
          return;
        }

        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;

        if (swiper.params.effect !== 'cube') {
          return;
        }

        swiper.cubeEffect.setTransition(duration);
      }
    }
  };
  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;

        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }

        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;

        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

          if (shadowBefore.length === 0) {
            shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
            $slideEl.append(shadowBefore);
          }

          if (shadowAfter.length === 0) {
            shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
            $slideEl.append(shadowAfter);
          }

          if (shadowBefore.length) {
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          }

          if (shadowAfter.length) {
            shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }

        $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false; // eslint-disable-next-line

        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) {
            return;
          }

          if (!swiper || swiper.destroyed) {
            return;
          } // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;


          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }
  };
  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;

        if (swiper.params.effect !== 'flip') {
          return;
        }

        swiper.classNames.push(swiper.params.containerModifierClass + "flip");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;

        if (swiper.params.effect !== 'flip') {
          return;
        }

        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;

        if (swiper.params.effect !== 'flip') {
          return;
        }

        swiper.flipEffect.setTransition(duration);
      }
    }
  };
  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth; // Each slide offset from center

      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

        var translateZ = -translate * Math.abs(offsetMultiplier);
        var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
        var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

        if (Math.abs(translateX) < 0.001) {
          translateX = 0;
        }

        if (Math.abs(translateY) < 0.001) {
          translateY = 0;
        }

        if (Math.abs(translateZ) < 0.001) {
          translateZ = 0;
        }

        if (Math.abs(rotateY) < 0.001) {
          rotateY = 0;
        }

        if (Math.abs(rotateX) < 0.001) {
          rotateX = 0;
        }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
            $slideEl.append($shadowBeforeEl);
          }

          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
            $slideEl.append($shadowAfterEl);
          }

          if ($shadowBeforeEl.length) {
            $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          }

          if ($shadowAfterEl.length) {
            $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      } // Set correct perspective for IE10


      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    }
  };
  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;

        if (swiper.params.effect !== 'coverflow') {
          return;
        }

        swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;

        if (swiper.params.effect !== 'coverflow') {
          return;
        }

        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;

        if (swiper.params.effect !== 'coverflow') {
          return;
        }

        swiper.coverflowEffect.setTransition(duration);
      }
    }
  };
  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;

      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false
        }));
        swiper.thumbs.swiperCreated = true;
      }

      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;

      if (!thumbsSwiper) {
        return;
      }

      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;

      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) {
        return;
      }

      if (typeof clickedIndex === 'undefined' || clickedIndex === null) {
        return;
      }

      var slideToIndex;

      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }

      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;

        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix(); // eslint-disable-next-line

          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }

        var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();

        if (typeof prevIndex === 'undefined') {
          slideToIndex = nextIndex;
        } else if (typeof nextIndex === 'undefined') {
          slideToIndex = prevIndex;
        } else if (nextIndex - currentIndex < currentIndex - prevIndex) {
          slideToIndex = nextIndex;
        } else {
          slideToIndex = prevIndex;
        }
      }

      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;

      if (!thumbsSwiper) {
        return;
      }

      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;

        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix(); // eslint-disable-next-line

            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          } // Find actual thumbs index to slide to


          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();

          if (typeof prevThumbsIndex === 'undefined') {
            newThumbsIndex = nextThumbsIndex;
          } else if (typeof nextThumbsIndex === 'undefined') {
            newThumbsIndex = prevThumbsIndex;
          } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
            newThumbsIndex = currentThumbsIndex;
          } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
            newThumbsIndex = nextThumbsIndex;
          } else {
            newThumbsIndex = prevThumbsIndex;
          }
        } else {
          newThumbsIndex = swiper.realIndex;
        }

        if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }

          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      } // Activate thumbs


      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      thumbsSwiper.slides.removeClass(thumbActiveClass);

      if (thumbsSwiper.params.loop) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    }
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs'
      }
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;

        if (!thumbs || !thumbs.swiper) {
          return;
        }

        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;

        if (!swiper.thumbs.swiper) {
          return;
        }

        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;

        if (!swiper.thumbs.swiper) {
          return;
        }

        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;

        if (!swiper.thumbs.swiper) {
          return;
        }

        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;

        if (!swiper.thumbs.swiper) {
          return;
        }

        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;

        if (!thumbsSwiper) {
          return;
        }

        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;

        if (!thumbsSwiper) {
          return;
        }

        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      }
    }
  }; // Swiper Class

  var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);
  return Swiper;
});

/***/ }),

/***/ "./resources/scripts/main.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./resources/scripts/util/Router.js");
/* harmony import */ var _routes_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./resources/scripts/routes/common.js");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./resources/scripts/routes/home.js");
/* harmony import */ var _routes_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./resources/scripts/routes/about.js");
// import external dependencies
 // Import everything from autoload
//import './autoload/**/*'
// import local dependencies





/** Populate Router instance with DOM routes */

const routes = new _util_Router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  // All pages
  common: _routes_common__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Home page
  home: _routes_home__WEBPACK_IMPORTED_MODULE_3__["default"],
  // About Us page, note the change from about-us to aboutUs.
  aboutUs: _routes_about__WEBPACK_IMPORTED_MODULE_4__["default"]
}); // Load Events

jQuery(document).ready(() => routes.loadEvents());

/***/ }),

/***/ "./resources/scripts/routes/about.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init() {// JavaScript to be fired on the about us page
  }

});

/***/ }),

/***/ "./resources/scripts/routes/common.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_galleryCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./resources/scripts/util/galleryCarousel.js");
/* harmony import */ var _util_burgerMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./resources/scripts/util/burgerMenu.js");
/* harmony import */ var _util_svgMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./resources/scripts/util/svgMap.js");
/* harmony import */ var _util_floorGallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./resources/scripts/util/floorGallery.js");
/* harmony import */ var _util_downArrow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./resources/scripts/util/downArrow.js");
/* harmony import */ var _util_mapFS_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./resources/scripts/util/mapFS.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(711);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);



 //import ScrollToAnchor from '../util/scrolltoAnchor.js';




/* harmony default export */ __webpack_exports__["default"] = ({
  init() {// JavaScript to be fired on all pages
    // const scrolltoAnchor = new ScrolltoAnchor();
  },

  finalize() {
    aos__WEBPACK_IMPORTED_MODULE_6___default().init(); // JavaScript to be fired on all pages, after page specific JS is fired

    const galleryCarousel = new _util_galleryCarousel__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const burgerMenu = new _util_burgerMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const svgMap = new _util_svgMap_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const floorGallery = new _util_floorGallery_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const mapFS = new _util_mapFS_js__WEBPACK_IMPORTED_MODULE_5__["default"](); //const ScrollToAnchor = new ScrollToAnchor();

    const downArrow = new _util_downArrow_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }

});

/***/ }),

/***/ "./resources/scripts/routes/home.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_goatAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./resources/scripts/util/goatAnimation.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  init() {// JavaScript to be fired on the home page
  },

  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    const goatAnimation = new _util_goatAnimation__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

});

/***/ }),

/***/ "./resources/scripts/util/Router.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./resources/scripts/util/camelCase.js");

/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */

class Router {
  /**
   * Create a new Router
   * @param {Object} routes
   */
  constructor(routes) {
    this.routes = routes;
  }
  /**
   * Fire Router events
   * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
   * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
   * @param {string} [arg] Any custom argument to be passed to the event.
   */


  fire(route) {
    let event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';
    let arg = arguments.length > 2 ? arguments[2] : undefined;
    document.dispatchEvent(new CustomEvent('routed', {
      bubbles: true,
      detail: {
        route,
        fn: event
      }
    }));
    const fire = route !== '' && this.routes[route] && typeof this.routes[route][event] === 'function';

    if (fire) {
      this.routes[route][event](arg);
    }
  }
  /**
   * Automatically load and fire Router events
   *
   * Events are fired in the following order:
   *  * common init
   *  * page-specific init
   *  * page-specific finalize
   *  * common finalize
   */


  loadEvents() {
    // Fire common init JS
    this.fire('common'); // Fire page-specific init JS, and then finalize JS

    document.body.className.toLowerCase().replace(/-/g, '_').split(/\s+/).map(_camelCase__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(className => {
      this.fire(className);
      this.fire(className, 'finalize');
    }); // Fire common finalize JS

    this.fire('common', 'finalize');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./resources/scripts/util/burgerMenu.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// eslint-disable-next-line no-unused-vars




class BurgerMenu {
  doAThing() {//console.log('Do a thing')
  }

  constructor() {
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_2__.ScrollToPlugin); //let mobile = true;

    let menuOpen = false;
    let menuToggle = '#show-menu';
    let menuWrapper = '.menu-wrapper';
    let header = '.burger-menu-style';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(menuToggle).click(function () {
      //console.log('-------- main-navbar click');
      if (menuOpen) {
        //console.log('close');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(header).removeClass('menu-open');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(menuWrapper).removeClass('menu-open');
        menuOpen = false;
      } else {
        //console.log('open');
        //$(menuToggle).addClass('open');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(header).addClass('menu-open');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(menuWrapper).addClass('menu-open');
        menuOpen = true;
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.anchor a').on('click', function (event) {
      event.preventDefault();
      let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      menuOpen = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(header).removeClass('menu-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(menuWrapper).removeClass('menu-open');
      event.preventDefault();
      let target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');
      var scrollYPos = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).offset().top;
      console.log(scrollYPos);
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(window, {
        scrollTo: {
          y: scrollYPos,
          autoKill: false
        },
        ease: 'sine.inOut',
        duration: 0.5
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scroll(function () {//console.log($(document).scrollTop())
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BurgerMenu);

/***/ }),

/***/ "./resources/scripts/util/camelCase.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
/* harmony default export */ __webpack_exports__["default"] = (str => `${str.charAt(0).toLowerCase()}${str.replace(/[\W_]/g, '|').split('|').map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`).join('').slice(1)}`);

/***/ }),

/***/ "./resources/scripts/util/downArrow.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);




class DownArrow {
  constructor() {
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_2__.ScrollToPlugin); //console.log('DownArrow')
    //gsap.set(window, {scrollTo: 0});
    //let hash = window.location.hash;
    // eslint-disable-next-line no-unused-vars
    // let target = window.location.hash;
    //target = target.replace('#', '');
    //window.location.hash = '';
    ////console.log('hash', hash);

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.down-arrow').on('click', function (event) {
      event.preventDefault();
      let target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'); ////console.log('target ', target)

      var scrollYPos = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).offset().top;
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(window, {
        scrollTo: {
          y: scrollYPos,
          autoKill: false
        },
        duration: 0.5
      }); //var scrollPos = $(document).scrollTop();
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DownArrow);

/***/ }),

/***/ "./resources/scripts/util/floorGallery.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autoload_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(746);
/* harmony import */ var _autoload_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_autoload_swiper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class FloorGallery {
  doAThing() {
    console.log('animations Do a thing');
  }

  constructor() {
    console.log('GalleryCarousel');
    var swiperClass = '.floor-gallery';
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(swiperClass).each(function (index) {
      console.log('GalleryCarousel');
      var swiperID = 'floor-gallery-' + index;
      var swiperIDHash = '#floor-gallery-' + index;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('id', swiperID);
      var homeSwiper = new (_autoload_swiper__WEBPACK_IMPORTED_MODULE_0___default())(swiperIDHash, {
        slidesPerView: 'auto',
        centeredSlides: true,
        speed: 500,
        loop: true,
        effect: 'fade',
        //loop: true,

        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        spaceBetween: 10,*/
        pagination: {
          el: swiperIDHash + ' .swiper-pagination'
        },
        navigation: {
          nextEl: swiperIDHash + ' .swiper-button-next',
          prevEl: swiperIDHash + ' .swiper-button-prev'
        },
        on: {
          init() {
            setTimeout(() => {
              window.dispatchEvent(new Event('resize'));
            }, 200);
          }

        }
      });
      homeSwiper.on('transitionStart', function () {//console.log('transitionStart');
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FloorGallery);

/***/ }),

/***/ "./resources/scripts/util/galleryCarousel.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autoload_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(746);
/* harmony import */ var _autoload_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_autoload_swiper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class GalleryCarousel {
  doAThing() {
    console.log('animations Do a thing');
  }

  constructor() {
    console.log('GalleryCarousel');
    var swiperClass = '.section-gallery';
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(swiperClass).each(function (index) {
      console.log('GalleryCarousel');
      var swiperID = 'gallery-' + index;
      var swiperIDHash = '#gallery-' + index;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.gallery-wrapper', this).attr('id', swiperID); //$('.swiper-button-next', this).attr('id', swiperID + '-next');
      //$('.swiper-button-prev', this).attr('id', swiperID + '-next');

      var homeSwiper = new (_autoload_swiper__WEBPACK_IMPORTED_MODULE_0___default())(swiperIDHash + ' .gallery-swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        speed: 500,
        spaceBetween: 10,
        //loop: true,
        //effect: 'fade',
        loop: true,

        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        spaceBetween: 10,*/
        pagination: {
          el: swiperIDHash + ' .gallery-pagination',
          clickable: true
        },
        navigation: {
          nextEl: swiperIDHash + ' .swiper-button-next',
          prevEl: swiperIDHash + ' .swiper-button-prev'
        },
        on: {
          init() {
            setTimeout(() => {
              window.dispatchEvent(new Event('resize'));
            }, 200);
          }

        }
      });
      homeSwiper.on('transitionStart', function () {//console.log('transitionStart');
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GalleryCarousel);

/***/ }),

/***/ "./resources/scripts/util/goatAnimation.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



class GoatAnimation {
  constructor() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-gy-home").length) {
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('.down-arrow', {
        opacity: 0
      });
      let images = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.animated-image').children(),
          // images in the sequence
      //fps = 14,
      fps = 19,
          duration = 1 / fps; //let gsapDuration = 16;

      let goatDuration = 10;
      let slideDuration = 5;
      let slideDelay = 0;
      let sequence = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
        repeat: -1
      }).staggerTo(images, 0, {
        position: 'static',
        visibility: 'visible'
      }, duration, 0).staggerTo(images.not(images.last()), 0, {
        position: 'absolute',
        visibility: 'hidden',
        immediateRender: false
      }, duration, duration).set({}, {}, "+=" + duration);
      let element = document.getElementById('sprite');
      let positionInfo = element.getBoundingClientRect(); //let height = positionInfo.height;

      let spriteWidth = positionInfo.width;
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#goat', {
        left: -spriteWidth
      });
      let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      function goatFinished() {
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to('.down-arrow', {
          opacity: 1
        });
      }

      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to('#goat', {
        left: "100%",
        duration: goatDuration,
        ease: "linear",
        onComplete: goatFinished
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to('#bg', {
        left: 0,
        duration: slideDuration,
        ease: "linear",
        delay: slideDelay
      }); //gsap.to('.goat-image', {left})
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GoatAnimation);

/***/ }),

/***/ "./resources/scripts/util/mapFS.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


class MapFS {
  constructor() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-fullscreen-map').length) {
      console.log("---------------------------- section-map");
      let pointArray = [];
      let markers = [];
      let currentMarker; //console.log("---------------------------- Map");

      function getWindowSize() {
        if (document.body && document.body.offsetWidth) {
          self.winW = document.body.offsetWidth;
          self.winH = document.body.offsetHeight;
        }

        if (document.compatMode === 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
          self.winW = document.documentElement.offsetWidth;
          self.winH = document.documentElement.offsetHeight;
        }

        if (window.innerWidth && window.innerHeight) {
          self.winW = window.innerWidth;
          self.winH = window.innerHeight;
        }

        return {
          width: self.winW,
          height: self.winH
        };
      }

      function startMap() {
        var pointArray = [];
        var markers = [];
        var infoWindows = [];
        var title = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("title");
        var description = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("description");
        var lat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("lat");
        var lon = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("lon");
        var mapZoom = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("zoom");
        var marker = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("marker");
        var markerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("marker-w");
        var markerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("marker-h");
        var markerX = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("marker-x");
        var markerY = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.map-info').data("marker-y");
        var mapOptions;
        console.log('markerWidth ' + markerWidth + " markerHeight " + markerHeight); //console.log(lat, lon, mapZoom)

        var MapPoints = new google.maps.LatLng(lat, lon);
        mapOptions = {
          zoom: mapZoom,
          center: MapPoints,
          disableDefaultUI: true,
          panControl: false,
          zoomControl: true,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'blue']
          },
          scaleControl: false,
          //draggable: false,
          scrollwheel: false,
          styles: window.data.map_styles
        };
        let map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var markerBounds = new google.maps.LatLngBounds();
        const icon = {
          url: window.data.map_marker,
          anchor: new google.maps.Point(5, 8),
          scaledSize: new google.maps.Size(10, 16)
        };

        function createTestMarker() {
          const mainIcon = {//url: marker,
            //anchor: new google.maps.Point(0,0),
            //scaledSize: new google.maps.Size(52,60),
          };
          var myMarker = new google.maps.Marker({
            position: MapPoints,
            map: map,
            title: title,
            description: description,
            icon: mainIcon
          });
        }

        function createMainMarker() {
          const mainIcon = {
            url: marker,
            //anchor: new google.maps.Point(8,0),
            //scaledSize: new google.maps.Size(52,60),
            anchor: new google.maps.Point(markerX, markerY),
            scaledSize: new google.maps.Size(markerWidth, markerHeight)
          };
          var myMarker = new google.maps.Marker({
            position: MapPoints,
            map: map,
            title: title,
            description: description,
            icon: mainIcon
          });
          let link; ////console.log('add link ' + link);
          // if (m.ex_link) {
          //  link = '<a class="link" href="'+ m.ex_link +'" target="_blank">Get directions  <i class="far fa-chevron-right"></i></a>'
          // }
          //console.log('link ' + link)

          let contentString = '<div class="content">' + '<h3>' + title + '</h3>' + '<div class="body-content">' + '<div class="address">' + description + '</div>' + '</div>' + '</div>';
          markerBounds.extend(MapPoints); //console.log('contentString ', contentString)

          myMarker.infoWindow = new google.maps.InfoWindow({
            content: contentString,
            disableAutoPan: true
          });
          markers.push(myMarker);
          google.maps.event.addListener(myMarker, 'click', function () {
            currentMarker = myMarker;
            map.panTo(myMarker.getPosition());

            for (var i = 0; i < markers.length; i++) {
              markers[i].infoWindow.close();
            }

            myMarker.infoWindow.open(map, myMarker);
          });
          google.maps.event.addListener(myMarker.infoWindow, 'closeclick', function () {
            map.panTo(currentMarker.getPosition());
          });
        }

        createMainMarker(); //createTestMarker ();
        //////////////////////////////////////////
        //////////////////////////////////////////

        function addMapMarker(m) {
          //console.log("m ", m)
          var icon = {
            //path: google.maps.SymbolPath.CIRCLE,
            path: 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
            fillColor: m.colour,
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 0.6
          };
          var myMarker = new google.maps.Marker({
            position: m.points,
            map: map,
            title: m.name,
            icon: icon,
            type: m.type,
            label: {
              text: m.label,
              color: 'white',
              weight: 'bold'
            }
          });
          myMarker.setVisible(false);
          let contentString = '<div class="content">' + '<h3>' + m.title + '</h3>' + '<div class="body-content">' + '<div class="address">' + m.description + '</div>' + '</div>' + '</div>';
          markerBounds.extend(m.points);
          myMarker.infoWindow = new google.maps.InfoWindow({
            content: contentString,
            disableAutoPan: true
          });
          markers.push(myMarker);
          google.maps.event.addListener(myMarker, 'click', function () {
            currentMarker = myMarker;
            map.panTo(myMarker.getPosition());

            for (let i = 0; i < markers.length; i++) {
              markers[i].infoWindow.close();
            }

            myMarker.infoWindow.open(map, myMarker);
          });
          google.maps.event.addListener(myMarker.infoWindow, 'closeclick', function () {
            map.panTo(currentMarker.getPosition());
          });
        } //console.log("map");


        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".map-marker").each(function (index) {
          //console.log("map link");
          var p = {};
          p.lat = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-lat");
          p.lon = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-lon");
          p.title = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-title");
          p.description = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-description");
          p.colour = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-colour");
          p.label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-label");
          p.type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type");
          pointArray.push(p);
        });

        if (pointArray.length > 0) {
          for (var i = 0; i < pointArray.length; i++) {
            var m = {}; //console.log("label " + i);

            m.points = new google.maps.LatLng(pointArray[i].lat, pointArray[i].lon);
            m.title = pointArray[i].title;
            m.description = pointArray[i].description;
            m.colour = pointArray[i].colour;
            m.label = pointArray[i].label;
            m.type = pointArray[i].type;
            m.lat = pointArray[i].lat;
            m.lon = pointArray[i].lon;
            addMapMarker(m);
          }
        }
        /*for (let i = 0; i < markers.length; i++) {
           console.log('markers loop dining')
           console.log('markers[i].type ', markers[i].type)
             if (markers[i].type === 'dining') {
             console.log('dining')
             markers[i].setVisible(false);
          }
         }*/


        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".marker-type").click(function () {
          //alert( "Handler for .click() called." );
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('markers-hidden')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('markers-hidden');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('markers-hidden');
          }

          let type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type");

          for (let i = 1; i < markers.length; i++) {
            if (markers[i].type === type) {
              if (markers[i].visible === true) {
                markers[i].setVisible(false);
              } else {
                markers[i].setVisible(true);
              }
            } else {
              markers[i].setVisible(false);
            }
          }

          let bounds = new google.maps.LatLngBounds();
          let visible = 0;

          for (let i = 0; i < markers.length; i++) {
            if (markers[i].visible === true) {
              bounds.extend(markers[i].position);
              visible++; //console.log(markers[i])
            }
          }

          if (visible > 1) {
            map.fitBounds(bounds);
          } else {
            map.setCenter(markers[0].position);
            map.setZoom(mapZoom);
          } // set bounds

        });
      }

      function runAPITimercheck() {
        console.log("runAPITimercheck");
        console.log(window.data.apiLoaded);

        if (window.data.apiLoaded === true) {
          console.log('run map');
          startMap(); //run map
        } else {
          console.log('check map API again'); // / setTimeout(runAPITimercheck, 500);
        }
      }

      runAPITimercheck();
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MapFS);

/***/ }),

/***/ "./resources/scripts/util/svgMap.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



class GoatAnimation {
  constructor() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#svg-map").length) {
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#m1 text', {
        x: "+=1"
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#m10 text', {
        x: "+=0.5"
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#m11 text', {
        x: "+=0.5"
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#m14 text', {
        x: "+=0.5"
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#m17 text', {
        x: "+=0.5"
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#m21 text', {
        x: "+=0.5"
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#w6', {
        y: "+=1"
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#w12', {
        y: "+=1"
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('.window', {
        autoAlpha: 0,
        scaleX: 0,
        scaleY: 0,
        transformOrigin: '50% 100%'
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.marker').mouseover(function () {
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), {
          scaleX: 1.3,
          scaleY: 1.3,
          duration: 0.25,
          transformOrigin: '50% 50%'
        });
        let id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id');
        let number = id.substring(1);
        let window = '#w' + number;
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(window, {
          autoAlpha: 1,
          scaleX: 1,
          scaleY: 1,
          duration: 0.25
        });
      }).mouseout(function () {
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), {
          scaleX: 1,
          scaleY: 1
        });
        let id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id');
        let number = id.substring(1);
        let window = '#w' + number;
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(window, {
          autoAlpha: 0,
          scaleX: 0,
          scaleY: 0,
          duration: 0.25
        });
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GoatAnimation);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[13].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[4]!./resources/styles/app.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/TTNormsProRg.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/TTNormsProRg.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/TTNormsProBd.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/TTNormsProBd.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/TTNormsProMd.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/TTNormsProMd.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%27%20fill%3D%27%23007aff%27%2F%3E%3C%2Fsvg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%27%20fill%3D%27%23007aff%27%2F%3E%3C%2Fsvg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%27%20fill%3D%27%23ffffff%27%2F%3E%3C%2Fsvg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%27%20fill%3D%27%23ffffff%27%2F%3E%3C%2Fsvg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%27%20fill%3D%27%23000000%27%2F%3E%3C%2Fsvg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%27%20fill%3D%27%23000000%27%2F%3E%3C%2Fsvg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%20120%20120%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%3E%3Cdefs%3E%3Cline%20id%3D%27l%27%20x1%3D%2760%27%20x2%3D%2760%27%20y1%3D%277%27%20y2%3D%2727%27%20stroke%3D%27%236c6c6c%27%20stroke-width%3D%2711%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2830%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2860%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2890%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28120%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28150%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.37%27%20transform%3D%27rotate%28180%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.46%27%20transform%3D%27rotate%28210%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.56%27%20transform%3D%27rotate%28240%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.66%27%20transform%3D%27rotate%28270%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.75%27%20transform%3D%27rotate%28300%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.85%27%20transform%3D%27rotate%28330%2060%2C60%29%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%20120%20120%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%3E%3Cdefs%3E%3Cline%20id%3D%27l%27%20x1%3D%2760%27%20x2%3D%2760%27%20y1%3D%277%27%20y2%3D%2727%27%20stroke%3D%27%23fff%27%20stroke-width%3D%2711%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2830%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2860%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2890%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28120%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28150%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.37%27%20transform%3D%27rotate%28180%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.46%27%20transform%3D%27rotate%28210%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.56%27%20transform%3D%27rotate%28240%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.66%27%20transform%3D%27rotate%28270%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.75%27%20transform%3D%27rotate%28300%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.85%27%20transform%3D%27rotate%28330%2060%2C60%29%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3Csvg version=%271.1%27 id=%27Layer_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 x=%270px%27 y=%270px%27 viewBox=%270 0 715.7 886%27 style=%27enable-background:new 0 0 715.7 886;%27 xml:space=%27preserve%27%3E%3Cstyle type=%27text/css%27%3E .st0%7Bfill:%2360B4A1;%7D .st1%7Bfill:%23E1B9C2;%7D%0A%3C/style%3E%3Cpath id=%27Path_1%27 class=%27st0%27 d=%27M73.2,0v403.1H0v329.3h263.4V886h452.3V0H73.2z%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3Csvg version=%271.1%27 id=%27Layer_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 x=%270px%27 y=%270px%27 viewBox=%270 0 1068.6 668%27 style=%27enable-background:new 0 0 1068.6 668;%27 xml:space=%27preserve%27%3E%3Cstyle type=%27text/css%27%3E .st0%7Bfill:%2360B4A1;%7D .st1%7Bfill:%23E1B9C2;%7D%0A%3C/style%3E%3Cpath id=%27Path_2%27 class=%27st1%27 d=%27M0,0v493.8h599.6V668h242.7v-71.2h226.3V0H0z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(//hello.myfonts.net/count/40f25f);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @license\n * MyFonts Webfont Build ID 4256351, 2021-12-21T08:45:56-0500\n *\n * The fonts listed in this notice are subject to the End User License\n * Agreement(s) entered into by the website owner. All other parties are\n * explicitly restricted from using the Licensed Webfonts(s).\n *\n * You may obtain a valid license at the URLs below.\n *\n * Webfont: TTNormsPro-Rg by TypeType\n * URL: https://www.myfonts.com/fonts/type-type/tt-norms/regular/\n *\n * Webfont: TTNormsPro-Md by TypeType\n * URL: https://www.myfonts.com/fonts/type-type/tt-norms/medium/\n *\n * Webfont: TTNormsPro-Bd by TypeType\n * URL: https://www.myfonts.com/fonts/type-type/tt-norms/bold/\n *\n *\n * Webfonts copyright: Copyright (c) 2016-2021 by TypeType. All rights reserved.\n *\n * © 2021 MyFonts Inc\n*/\n/* @import must be at top of file, otherwise CSS will not work */\n@font-face {\n  font-family: \"TTNormsPro-Rg\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"TTNormsPro-Bd\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"TTNormsPro-Md\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\");\n}\n/** Import Bootstrap functions */\n/** Bootstrap navbar fix (https://git.io/fADqW) */\n/*!\n * Bootstrap v5.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --bs-blue: #0d6efd;\n  --bs-indigo: #6610f2;\n  --bs-purple: #6f42c1;\n  --bs-pink: #d63384;\n  --bs-red: #dc3545;\n  --bs-orange: #fd7e14;\n  --bs-yellow: #ffc107;\n  --bs-green: #198754;\n  --bs-teal: #20c997;\n  --bs-cyan: #0dcaf0;\n  --bs-white: #fff;\n  --bs-gray: #6c757d;\n  --bs-gray-dark: #343a40;\n  --bs-gray-100: #f8f9fa;\n  --bs-gray-200: #e9ecef;\n  --bs-gray-300: #dee2e6;\n  --bs-gray-400: #ced4da;\n  --bs-gray-500: #adb5bd;\n  --bs-gray-600: #6c757d;\n  --bs-gray-700: #495057;\n  --bs-gray-800: #343a40;\n  --bs-gray-900: #212529;\n  --bs-primary: #525ddc;\n  --bs-primary-rgb: 82, 93, 220;\n  --bs-white-rgb: 255, 255, 255;\n  --bs-black-rgb: 0, 0, 0;\n  --bs-body-color-rgb: 33, 37, 41;\n  --bs-body-bg-rgb: 255, 255, 255;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n  --bs-body-font-family: var(--bs-font-sans-serif);\n  --bs-body-font-size: 1rem;\n  --bs-body-font-weight: 400;\n  --bs-body-line-height: 1.5;\n  --bs-body-color: #212529;\n  --bs-body-bg: #fff;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n@media (prefers-reduced-motion: no-preference) {\n  :root {\n    scroll-behavior: smooth;\n  }\n}\nbody {\n  margin: 0;\n  font-family: var(--bs-body-font-family);\n  font-size: var(--bs-body-font-size);\n  font-weight: var(--bs-body-font-weight);\n  line-height: var(--bs-body-line-height);\n  color: var(--bs-body-color);\n  text-align: var(--bs-body-text-align);\n  background-color: var(--bs-body-bg);\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  background-color: currentColor;\n  border: 0;\n  opacity: 0.25;\n}\nhr:not([size]) {\n  height: 1px;\n}\nh6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1, .h1 {\n  font-size: calc(1.375rem + 1.5vw);\n}\n@media (min-width: 1200px) {\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n}\nh2, .h2 {\n  font-size: calc(1.325rem + 0.9vw);\n}\n@media (min-width: 1200px) {\n  h2, .h2 {\n    font-size: 2rem;\n  }\n}\nh3, .h3 {\n  font-size: calc(1.3rem + 0.6vw);\n}\n@media (min-width: 1200px) {\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n}\nh4, .h4 {\n  font-size: calc(1.275rem + 0.3vw);\n}\n@media (min-width: 1200px) {\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n}\nh5, .h5 {\n  font-size: 1.25rem;\n}\nh6, .h6 {\n  font-size: 1rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title],\nabbr[data-bs-original-title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul {\n  padding-left: 2rem;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: 700;\n}\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1rem;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\nsmall, .small {\n  font-size: 0.875em;\n}\nmark, .mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\na {\n  color: #0d6efd;\n  text-decoration: underline;\n}\na:hover {\n  color: #0a58ca;\n}\na:not([href]):not([class]), a:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n  direction: ltr /* rtl:ignore */;\n  unicode-bidi: bidi-override;\n}\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\ncode {\n  font-size: 0.875em;\n  color: #d63384;\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 0.875em;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 1em;\n  font-weight: 700;\n}\nfigure {\n  margin: 0 0 1rem;\n}\nimg,\nsvg {\n  vertical-align: middle;\n}\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #6c757d;\n  text-align: left;\n}\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\nlabel {\n  display: inline-block;\n}\nbutton {\n  border-radius: 0;\n}\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton,\nselect {\n  text-transform: none;\n}\n[role=button] {\n  cursor: pointer;\n}\nselect {\n  word-wrap: normal;\n}\nselect:disabled {\n  opacity: 1;\n}\n[list]::-webkit-calendar-picker-indicator {\n  display: none;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ntextarea {\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit;\n}\n@media (min-width: 1200px) {\n  legend {\n    font-size: 1.5rem;\n  }\n}\nlegend + * {\n  clear: left;\n}\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n::-webkit-inner-spin-button {\n  height: auto;\n}\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield;\n}\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n::file-selector-button {\n  font: inherit;\n}\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput {\n  display: inline-block;\n}\niframe {\n  border: 0;\n}\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\nprogress {\n  vertical-align: baseline;\n}\n[hidden] {\n  display: none !important;\n}\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1 {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-1 {\n    font-size: 5rem;\n  }\n}\n.display-2 {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-2 {\n    font-size: 4.5rem;\n  }\n}\n.display-3 {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-3 {\n    font-size: 4rem;\n  }\n}\n.display-4 {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-4 {\n    font-size: 3.5rem;\n  }\n}\n.display-5 {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-5 {\n    font-size: 3rem;\n  }\n}\n.display-6 {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-6 {\n    font-size: 2.5rem;\n  }\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.initialism {\n  font-size: 0.875em;\n  text-transform: uppercase;\n}\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote > :last-child {\n  margin-bottom: 0;\n}\n.blockquote-footer {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"— \";\n}\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n.figure {\n  display: inline-block;\n}\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption {\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.container,\n.container-fluid,\n.container-xxl,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  width: 100%;\n  padding-right: var(--bs-gutter-x, 15px);\n  padding-left: var(--bs-gutter-x, 15px);\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 1800px) {\n  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1640px;\n  }\n}\n.row {\n  --bs-gutter-x: 30px;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n.row > * {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n.col {\n  flex: 1 0 0%;\n}\n.row-cols-auto > * {\n  flex: 0 0 auto;\n  width: auto;\n}\n.row-cols-1 > * {\n  flex: 0 0 auto;\n  width: 100%;\n}\n.row-cols-2 > * {\n  flex: 0 0 auto;\n  width: 50%;\n}\n.row-cols-3 > * {\n  flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n.row-cols-4 > * {\n  flex: 0 0 auto;\n  width: 25%;\n}\n.row-cols-5 > * {\n  flex: 0 0 auto;\n  width: 20%;\n}\n.row-cols-6 > * {\n  flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n}\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.33333333%;\n}\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%;\n}\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.66666667%;\n}\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%;\n}\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.33333333%;\n}\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.66666667%;\n}\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%;\n}\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.33333333%;\n}\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.66666667%;\n}\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n.offset-1 {\n  margin-left: 8.33333333%;\n}\n.offset-2 {\n  margin-left: 16.66666667%;\n}\n.offset-3 {\n  margin-left: 25%;\n}\n.offset-4 {\n  margin-left: 33.33333333%;\n}\n.offset-5 {\n  margin-left: 41.66666667%;\n}\n.offset-6 {\n  margin-left: 50%;\n}\n.offset-7 {\n  margin-left: 58.33333333%;\n}\n.offset-8 {\n  margin-left: 66.66666667%;\n}\n.offset-9 {\n  margin-left: 75%;\n}\n.offset-10 {\n  margin-left: 83.33333333%;\n}\n.offset-11 {\n  margin-left: 91.66666667%;\n}\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0;\n}\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0;\n}\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem;\n}\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem;\n}\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem;\n}\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem;\n}\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem;\n}\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem;\n}\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem;\n}\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem;\n}\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem;\n}\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem;\n}\n@media (min-width: 576px) {\n  .col-sm {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-sm-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-sm-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-sm-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-sm-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-sm-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-sm-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-sm-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-sm-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-sm-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-sm-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-sm-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-sm-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-sm-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-sm-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-sm-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-sm-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n\n  .offset-sm-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-sm-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n\n  .offset-sm-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-sm-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n\n  .offset-sm-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-sm-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n\n  .offset-sm-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-sm-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-sm-0,\n.gx-sm-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-sm-0,\n.gy-sm-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-sm-1,\n.gx-sm-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-sm-1,\n.gy-sm-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-sm-2,\n.gx-sm-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-sm-2,\n.gy-sm-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-sm-3,\n.gx-sm-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-sm-3,\n.gy-sm-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-sm-4,\n.gx-sm-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-sm-4,\n.gy-sm-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-sm-5,\n.gx-sm-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-sm-5,\n.gy-sm-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-md-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-md-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-md-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-md-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-md-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-md-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-md-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-md-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-md-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-md-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-md-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-md-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-md-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-md-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-md-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-md-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-md-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-md-0 {\n    margin-left: 0;\n  }\n\n  .offset-md-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-md-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n\n  .offset-md-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-md-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n\n  .offset-md-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-md-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n\n  .offset-md-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-md-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-md-0,\n.gx-md-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-md-0,\n.gy-md-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-md-1,\n.gx-md-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-md-1,\n.gy-md-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-md-2,\n.gx-md-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-md-2,\n.gy-md-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-md-3,\n.gx-md-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-md-3,\n.gy-md-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-md-4,\n.gx-md-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-md-4,\n.gy-md-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-md-5,\n.gx-md-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-md-5,\n.gy-md-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-lg-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-lg-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-lg-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-lg-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-lg-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-lg-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-lg-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-lg-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n\n  .offset-lg-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-lg-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n\n  .offset-lg-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-lg-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n\n  .offset-lg-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-lg-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n\n  .offset-lg-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-lg-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-lg-0,\n.gx-lg-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-lg-0,\n.gy-lg-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-lg-1,\n.gx-lg-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-lg-1,\n.gy-lg-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-lg-2,\n.gx-lg-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-lg-2,\n.gy-lg-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-lg-3,\n.gx-lg-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-lg-3,\n.gy-lg-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-lg-4,\n.gx-lg-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-lg-4,\n.gy-lg-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-lg-5,\n.gx-lg-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-lg-5,\n.gy-lg-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-xl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-xl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-xl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-xl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-xl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-xl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-xl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-xl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-xl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-xl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-xl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-xl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-xl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-xl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-xl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-xl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-xl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-xl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-xl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xl-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-xl-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xl-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-xl-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xl-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-xl-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xl-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-xl-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-xl-0,\n.gx-xl-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-xl-0,\n.gy-xl-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-xl-1,\n.gx-xl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-xl-1,\n.gy-xl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-xl-2,\n.gx-xl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-xl-2,\n.gy-xl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-xl-3,\n.gx-xl-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-xl-3,\n.gy-xl-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-xl-4,\n.gx-xl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-xl-4,\n.gy-xl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-xl-5,\n.gx-xl-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-xl-5,\n.gy-xl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1800px) {\n  .col-xxl {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-xxl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-xxl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-xxl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-xxl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-xxl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-xxl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-xxl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-xxl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-xxl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-xxl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-xxl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-xxl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-xxl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-xxl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-xxl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-xxl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-xxl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-xxl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-xxl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-xxl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xxl-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-xxl-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-xxl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xxl-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-xxl-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-xxl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xxl-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-xxl-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-xxl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xxl-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-xxl-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-xxl-0,\n.gx-xxl-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-xxl-0,\n.gy-xxl-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-xxl-1,\n.gx-xxl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-xxl-1,\n.gy-xxl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-xxl-2,\n.gx-xxl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-xxl-2,\n.gy-xxl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-xxl-3,\n.gx-xxl-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-xxl-3,\n.gy-xxl-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-xxl-4,\n.gx-xxl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-xxl-4,\n.gy-xxl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-xxl-5,\n.gx-xxl-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-xxl-5,\n.gy-xxl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n.table {\n  --bs-table-bg: transparent;\n  --bs-table-accent-bg: transparent;\n  --bs-table-striped-color: #212529;\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\n  --bs-table-active-color: #212529;\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\n  --bs-table-hover-color: #212529;\n  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n  vertical-align: top;\n  border-color: #dee2e6;\n}\n.table > :not(caption) > * > * {\n  padding: 0.5rem 0.5rem;\n  background-color: var(--bs-table-bg);\n  border-bottom-width: 1px;\n  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);\n}\n.table > tbody {\n  vertical-align: inherit;\n}\n.table > thead {\n  vertical-align: bottom;\n}\n.table > :not(:first-child) {\n  border-top: 2px solid currentColor;\n}\n.caption-top {\n  caption-side: top;\n}\n.table-sm > :not(caption) > * > * {\n  padding: 0.25rem 0.25rem;\n}\n.table-bordered > :not(caption) > * {\n  border-width: 1px 0;\n}\n.table-bordered > :not(caption) > * > * {\n  border-width: 0 1px;\n}\n.table-borderless > :not(caption) > * > * {\n  border-bottom-width: 0;\n}\n.table-borderless > :not(:first-child) {\n  border-top-width: 0;\n}\n.table-striped > tbody > tr:nth-of-type(odd) > * {\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\n  color: var(--bs-table-striped-color);\n}\n.table-active {\n  --bs-table-accent-bg: var(--bs-table-active-bg);\n  color: var(--bs-table-active-color);\n}\n.table-hover > tbody > tr:hover > * {\n  --bs-table-accent-bg: var(--bs-table-hover-bg);\n  color: var(--bs-table-hover-color);\n}\n.table-primary {\n  --bs-table-bg: #cfe2ff;\n  --bs-table-striped-bg: #c5d7f2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bacbe6;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfd1ec;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bacbe6;\n}\n.table-secondary {\n  --bs-table-bg: #e2e3e5;\n  --bs-table-striped-bg: #d7d8da;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #cbccce;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #d1d2d4;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #cbccce;\n}\n.table-success {\n  --bs-table-bg: #d1e7dd;\n  --bs-table-striped-bg: #c7dbd2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bcd0c7;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #c1d6cc;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bcd0c7;\n}\n.table-info {\n  --bs-table-bg: #cff4fc;\n  --bs-table-striped-bg: #c5e8ef;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #badce3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfe2e9;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #badce3;\n}\n.table-warning {\n  --bs-table-bg: #fff3cd;\n  --bs-table-striped-bg: #f2e7c3;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e6dbb9;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ece1be;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #e6dbb9;\n}\n.table-danger {\n  --bs-table-bg: #f8d7da;\n  --bs-table-striped-bg: #eccccf;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfc2c4;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5c7ca;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfc2c4;\n}\n.table-light {\n  --bs-table-bg: #f8f9fa;\n  --bs-table-striped-bg: #ecedee;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfe0e1;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5e6e7;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfe0e1;\n}\n.table-dark {\n  --bs-table-bg: #212529;\n  --bs-table-striped-bg: #2c3034;\n  --bs-table-striped-color: #fff;\n  --bs-table-active-bg: #373b3e;\n  --bs-table-active-color: #fff;\n  --bs-table-hover-bg: #323539;\n  --bs-table-hover-color: #fff;\n  color: #fff;\n  border-color: #373b3e;\n}\n.table-responsive {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1799.98px) {\n  .table-responsive-xxl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n.form-label {\n  margin-bottom: 0.5rem;\n}\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n}\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n}\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n.form-control[type=file] {\n  overflow: hidden;\n}\n.form-control[type=file]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control:focus {\n  color: #212529;\n  background-color: #fff;\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-control::-webkit-date-and-time-value {\n  height: 1.5em;\n}\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.form-control::file-selector-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::file-selector-button {\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::file-selector-button {\n  background-color: #dde0e3;\n}\n.form-control::-webkit-file-upload-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::-webkit-file-upload-button {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n  background-color: #dde0e3;\n}\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n.form-control-sm::file-selector-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  margin-inline-end: 0.5rem;\n}\n.form-control-sm::-webkit-file-upload-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  margin-inline-end: 0.5rem;\n}\n.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n.form-control-lg::file-selector-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  margin-inline-end: 1rem;\n}\n.form-control-lg::-webkit-file-upload-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  margin-inline-end: 1rem;\n}\ntextarea.form-control {\n  min-height: calc(1.5em + 0.75rem + 2px);\n}\ntextarea.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n}\ntextarea.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n}\n.form-control-color {\n  width: 3rem;\n  height: auto;\n  padding: 0.375rem;\n}\n.form-control-color:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control-color::-moz-color-swatch {\n  height: 1.5em;\n  border-radius: 0.25rem;\n}\n.form-control-color::-webkit-color-swatch {\n  height: 1.5em;\n  border-radius: 0.25rem;\n}\n.form-select {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  -moz-padding-start: calc(0.75rem - 3px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-select {\n    transition: none;\n  }\n}\n.form-select:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-select[multiple], .form-select[size]:not([size=\"1\"]) {\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.form-select:disabled {\n  background-color: #e9ecef;\n}\n.form-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #212529;\n}\n.form-select-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n.form-select-lg {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n.form-check {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem;\n}\n.form-check .form-check-input {\n  float: left;\n  margin-left: -1.5em;\n}\n.form-check-input {\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  -webkit-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n}\n.form-check-input[type=checkbox] {\n  border-radius: 0.25em;\n}\n.form-check-input[type=radio] {\n  border-radius: 50%;\n}\n.form-check-input:active {\n  filter: brightness(90%);\n}\n.form-check-input:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.form-check-input:checked[type=checkbox] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.form-check-input:checked[type=radio] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n.form-check-input[type=checkbox]:indeterminate {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n.form-check-input:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.5;\n}\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n  opacity: 0.5;\n}\n.form-switch {\n  padding-left: 2.5em;\n}\n.form-switch .form-check-input {\n  width: 2em;\n  margin-left: -2.5em;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n  background-position: left center;\n  border-radius: 2em;\n  transition: background-position 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-switch .form-check-input {\n    transition: none;\n  }\n}\n.form-switch .form-check-input:focus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n}\n.form-switch .form-check-input:checked {\n  background-position: right center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n}\n.form-check-inline {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.btn-check[disabled] + .btn, .btn-check:disabled + .btn {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n.form-range {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.form-range:focus {\n  outline: 0;\n}\n.form-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range::-moz-focus-outer {\n  border: 0;\n}\n.form-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-range::-webkit-slider-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n.form-range::-moz-range-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range:disabled {\n  pointer-events: none;\n}\n.form-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.form-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n.form-floating {\n  position: relative;\n}\n.form-floating > .form-control,\n.form-floating > .form-select {\n  height: calc(3.5rem + 2px);\n  line-height: 1.25;\n}\n.form-floating > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  padding: 1rem 0.75rem;\n  pointer-events: none;\n  border: 1px solid transparent;\n  transform-origin: 0 0;\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-floating > label {\n    transition: none;\n  }\n}\n.form-floating > .form-control {\n  padding: 1rem 0.75rem;\n}\n.form-floating > .form-control::placeholder {\n  color: transparent;\n}\n.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:-webkit-autofill {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-select {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:focus ~ label,\n.form-floating > .form-control:not(:placeholder-shown) ~ label,\n.form-floating > .form-select ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:-webkit-autofill ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control,\n.input-group > .form-select {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n}\n.input-group > .form-control:focus,\n.input-group > .form-select:focus {\n  z-index: 3;\n}\n.input-group .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group .btn:focus {\n  z-index: 3;\n}\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: 3rem;\n}\n.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  margin-left: -1px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #198754;\n}\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(25, 135, 84, 0.9);\n  border-radius: 0.25rem;\n}\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #198754;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #198754;\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .form-select:valid, .form-select.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size=\"1\"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:valid:focus, .form-select.is-valid:focus {\n  border-color: #198754;\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n.was-validated .form-check-input:valid, .form-check-input.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {\n  background-color: #198754;\n}\n.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #198754;\n}\n.form-check-inline .form-check-input ~ .valid-feedback {\n  margin-left: 0.5em;\n}\n.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,\n.was-validated .input-group .form-select:valid,\n.input-group .form-select.is-valid {\n  z-index: 1;\n}\n.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,\n.was-validated .input-group .form-select:valid:focus,\n.input-group .form-select.is-valid:focus {\n  z-index: 3;\n}\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #dc3545;\n}\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .form-select:invalid, .form-select.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size=\"1\"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-check-input:invalid, .form-check-input.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {\n  background-color: #dc3545;\n}\n.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n.form-check-inline .form-check-input ~ .invalid-feedback {\n  margin-left: 0.5em;\n}\n.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,\n.was-validated .input-group .form-select:invalid,\n.input-group .form-select.is-invalid {\n  z-index: 2;\n}\n.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,\n.was-validated .input-group .form-select:invalid:focus,\n.input-group .form-select.is-invalid:focus {\n  z-index: 3;\n}\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n.btn:hover {\n  color: #212529;\n}\n.btn-check:focus + .btn, .btn:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.btn:disabled, .btn.disabled, fieldset:disabled .btn {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #525ddc;\n  border-color: #525ddc;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #464fbb;\n  border-color: #424ab0;\n}\n.btn-check:focus + .btn-primary, .btn-primary:focus {\n  color: #fff;\n  background-color: #464fbb;\n  border-color: #424ab0;\n  box-shadow: 0 0 0 0.25rem rgba(108, 117, 225, 0.5);\n}\n.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #424ab0;\n  border-color: #3e46a5;\n}\n.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(108, 117, 225, 0.5);\n}\n.btn-primary:disabled, .btn-primary.disabled {\n  color: #fff;\n  background-color: #525ddc;\n  border-color: #525ddc;\n}\n.btn-outline-primary {\n  color: #525ddc;\n  border-color: #525ddc;\n}\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #525ddc;\n  border-color: #525ddc;\n}\n.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {\n  box-shadow: 0 0 0 0.25rem rgba(82, 93, 220, 0.5);\n}\n.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {\n  color: #fff;\n  background-color: #525ddc;\n  border-color: #525ddc;\n}\n.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(82, 93, 220, 0.5);\n}\n.btn-outline-primary:disabled, .btn-outline-primary.disabled {\n  color: #525ddc;\n  background-color: transparent;\n}\n.btn-link {\n  font-weight: 400;\n  color: #0d6efd;\n  text-decoration: underline;\n}\n.btn-link:hover {\n  color: #0a58ca;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n}\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n.fade {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n.collapse:not(.show) {\n  display: none;\n}\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n.collapsing.collapse-horizontal {\n  width: 0;\n  height: auto;\n  transition: width 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing.collapse-horizontal {\n    transition: none;\n  }\n}\n.dropup,\n.dropend,\n.dropdown,\n.dropstart {\n  position: relative;\n}\n.dropdown-toggle {\n  white-space: nowrap;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  z-index: 1000;\n  display: none;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.dropdown-menu[data-bs-popper] {\n  top: 100%;\n  left: 0;\n  margin-top: 0.125rem;\n}\n.dropdown-menu-start {\n  --bs-position: start;\n}\n.dropdown-menu-start[data-bs-popper] {\n  right: auto;\n  left: 0;\n}\n.dropdown-menu-end {\n  --bs-position: end;\n}\n.dropdown-menu-end[data-bs-popper] {\n  right: 0;\n  left: auto;\n}\n@media (min-width: 576px) {\n  .dropdown-menu-sm-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-sm-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-sm-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-sm-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 768px) {\n  .dropdown-menu-md-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-md-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-md-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-md-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 992px) {\n  .dropdown-menu-lg-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-lg-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-lg-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-lg-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-xl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1800px) {\n  .dropdown-menu-xxl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xxl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-xxl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xxl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n.dropup .dropdown-menu[data-bs-popper] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n.dropend .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropend .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-toggle::after {\n  vertical-align: 0;\n}\n.dropstart .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n.dropstart .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  display: none;\n}\n.dropstart .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropstart .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle::before {\n  vertical-align: 0;\n}\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid rgba(0, 0, 0, 0.15);\n}\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #1e2125;\n  background-color: #e9ecef;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #0d6efd;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #adb5bd;\n  pointer-events: none;\n  background-color: transparent;\n}\n.dropdown-menu.show {\n  display: block;\n}\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1rem;\n  color: #212529;\n}\n.dropdown-menu-dark {\n  color: #dee2e6;\n  background-color: #343a40;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.dropdown-menu-dark .dropdown-item {\n  color: #dee2e6;\n}\n.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {\n  color: #fff;\n  background-color: #0d6efd;\n}\n.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {\n  color: #adb5bd;\n}\n.dropdown-menu-dark .dropdown-divider {\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.dropdown-menu-dark .dropdown-item-text {\n  color: #dee2e6;\n}\n.dropdown-menu-dark .dropdown-header {\n  color: #adb5bd;\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group > .btn-check:checked + .btn,\n.btn-group > .btn-check:focus + .btn,\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn-check:checked + .btn,\n.btn-group-vertical > .btn-check:focus + .btn,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:nth-child(n+3),\n.btn-group > :not(.btn-check) + .btn,\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn ~ .btn,\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n  color: #0d6efd;\n  text-decoration: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .nav-link {\n    transition: none;\n  }\n}\n.nav-link:hover, .nav-link:focus {\n  color: #0a58ca;\n}\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-tabs .nav-link {\n  margin-bottom: -1px;\n  background: none;\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n  isolation: isolate;\n}\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav-pills .nav-link {\n  background: none;\n  border: 0;\n  border-radius: 0.25rem;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #0d6efd;\n}\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center;\n}\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n.nav-fill .nav-item .nav-link,\n.nav-justified .nav-item .nav-link {\n  width: 100%;\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.navbar > .container,\n.navbar > .container-fluid,\n.navbar > .container-sm,\n.navbar > .container-md,\n.navbar > .container-lg,\n.navbar > .container-xl,\n.navbar > .container-xxl {\n  display: flex;\n  flex-wrap: inherit;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n}\n.navbar-text {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .navbar-toggler {\n    transition: none;\n  }\n}\n.navbar-toggler:hover {\n  text-decoration: none;\n}\n.navbar-toggler:focus {\n  text-decoration: none;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem;\n}\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n.navbar-nav-scroll {\n  max-height: var(--bs-scroll-height, 75vh);\n  overflow-y: auto;\n}\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-sm .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-sm .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-sm .offcanvas-top,\n.navbar-expand-sm .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-sm .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-md .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-md .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-md .offcanvas-top,\n.navbar-expand-md .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-md .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-lg .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-lg .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-lg .offcanvas-top,\n.navbar-expand-lg .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-lg .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xl .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-xl .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-xl .offcanvas-top,\n.navbar-expand-xl .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-xl .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 1800px) {\n  .navbar-expand-xxl {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xxl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xxl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xxl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xxl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xxl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xxl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xxl .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-xxl .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-xxl .offcanvas-top,\n.navbar-expand-xxl .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-xxl .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n.navbar-expand {\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand .navbar-nav {\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n.navbar-expand .navbar-nav-scroll {\n  overflow: visible;\n}\n.navbar-expand .navbar-collapse {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n.navbar-expand .offcanvas-header {\n  display: none;\n}\n.navbar-expand .offcanvas {\n  position: inherit;\n  bottom: 0;\n  z-index: 1000;\n  flex-grow: 1;\n  visibility: visible !important;\n  background-color: transparent;\n  border-right: 0;\n  border-left: 0;\n  transition: none;\n  transform: none;\n}\n.navbar-expand .offcanvas-top,\n.navbar-expand .offcanvas-bottom {\n  height: auto;\n  border-top: 0;\n  border-bottom: 0;\n}\n.navbar-expand .offcanvas-body {\n  display: flex;\n  flex-grow: 0;\n  padding: 0;\n  overflow-y: visible;\n}\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.55);\n}\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.55);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: none;\n}\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.55);\n}\n.navbar-light .navbar-text a,\n.navbar-light .navbar-text a:hover,\n.navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.55);\n}\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.55);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: none;\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.55);\n}\n.navbar-dark .navbar-text a,\n.navbar-dark .navbar-text a:hover,\n.navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n.card > .list-group:first-child {\n  border-top-width: 0;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card > .list-group:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card > .card-header + .list-group,\n.card > .list-group + .card-footer {\n  border-top: 0;\n}\n.card-body {\n  flex: 1 1 auto;\n  padding: 1rem 1rem;\n}\n.card-title {\n  margin-bottom: 0.5rem;\n}\n.card-subtitle {\n  margin-top: -0.25rem;\n  margin-bottom: 0;\n}\n.card-text:last-child {\n  margin-bottom: 0;\n}\n.card-link + .card-link {\n  margin-left: 1rem;\n}\n.card-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n.card-footer {\n  padding: 0.5rem 1rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n.card-header-tabs {\n  margin-right: -0.5rem;\n  margin-bottom: -0.5rem;\n  margin-left: -0.5rem;\n  border-bottom: 0;\n}\n.card-header-pills {\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n  border-radius: calc(0.25rem - 1px);\n}\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%;\n}\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card-group > .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n.card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n.card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n.card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n.card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n  border: 0;\n  border-radius: 0;\n  overflow-anchor: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button {\n    transition: none;\n  }\n}\n.accordion-button:not(.collapsed) {\n  color: #0c63e4;\n  background-color: #e7f1ff;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);\n}\n.accordion-button:not(.collapsed)::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n  transform: rotate(-180deg);\n}\n.accordion-button::after {\n  flex-shrink: 0;\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-left: auto;\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n  background-repeat: no-repeat;\n  background-size: 1.25rem;\n  transition: transform 0.2s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button::after {\n    transition: none;\n  }\n}\n.accordion-button:hover {\n  z-index: 2;\n}\n.accordion-button:focus {\n  z-index: 3;\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.accordion-header {\n  margin-bottom: 0;\n}\n.accordion-item {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.accordion-item:first-of-type {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.accordion-item:first-of-type .accordion-button {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.accordion-item:not(:first-of-type) {\n  border-top: 0;\n}\n.accordion-item:last-of-type {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.accordion-item:last-of-type .accordion-button.collapsed {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.accordion-item:last-of-type .accordion-collapse {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.accordion-body {\n  padding: 1rem 1.25rem;\n}\n.accordion-flush .accordion-collapse {\n  border-width: 0;\n}\n.accordion-flush .accordion-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.accordion-flush .accordion-item:first-child {\n  border-top: 0;\n}\n.accordion-flush .accordion-item:last-child {\n  border-bottom: 0;\n}\n.accordion-flush .accordion-item .accordion-button {\n  border-radius: 0;\n}\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 0;\n  margin-bottom: 1rem;\n  list-style: none;\n}\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  float: left;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */;\n}\n.breadcrumb-item.active {\n  color: #6c757d;\n}\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n.page-link {\n  position: relative;\n  display: block;\n  color: #0d6efd;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .page-link {\n    transition: none;\n  }\n}\n.page-link:hover {\n  z-index: 2;\n  color: #0a58ca;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-link:focus {\n  z-index: 3;\n  color: #0a58ca;\n  background-color: #e9ecef;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.page-item:not(:first-child) .page-link {\n  margin-left: -1px;\n}\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.page-link {\n  padding: 0.375rem 0.75rem;\n}\n.page-item:first-child .page-link {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n.badge {\n  display: inline-block;\n  padding: 0.35em 0.65em;\n  font-size: 0.75em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.alert {\n  position: relative;\n  padding: 1rem 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.alert-heading {\n  color: inherit;\n}\n.alert-link {\n  font-weight: 700;\n}\n.alert-dismissible {\n  padding-right: 3rem;\n}\n.alert-dismissible .btn-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 1.25rem 1rem;\n}\n.alert-primary {\n  color: #313884;\n  background-color: #dcdff8;\n  border-color: #cbcef5;\n}\n.alert-primary .alert-link {\n  color: #272d6a;\n}\n@keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem;\n  }\n}\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #0d6efd;\n  transition: width 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n.progress-bar-animated {\n  animation: 1s linear infinite progress-bar-stripes;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    animation: none;\n  }\n}\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem;\n}\n.list-group-numbered {\n  list-style-type: none;\n  counter-reset: section;\n}\n.list-group-numbered > li::before {\n  content: counters(section, \".\") \". \";\n  counter-increment: section;\n}\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.5rem 1rem;\n  color: #212529;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.list-group-item:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n}\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active {\n  margin-top: -1px;\n  border-top-width: 1px;\n}\n.list-group-horizontal {\n  flex-direction: row;\n}\n.list-group-horizontal > .list-group-item:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n.list-group-horizontal > .list-group-item:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n.list-group-horizontal > .list-group-item.active {\n  margin-top: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item {\n  border-top-width: 1px;\n  border-left-width: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n  margin-left: -1px;\n  border-left-width: 1px;\n}\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row;\n  }\n  .list-group-horizontal-md > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 1800px) {\n  .list-group-horizontal-xxl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xxl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n.list-group-flush {\n  border-radius: 0;\n}\n.list-group-flush > .list-group-item {\n  border-width: 0 0 1px;\n}\n.list-group-flush > .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n.list-group-item-primary {\n  color: #313884;\n  background-color: #dcdff8;\n}\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #313884;\n  background-color: #c6c9df;\n}\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #313884;\n  border-color: #313884;\n}\n.btn-close {\n  box-sizing: content-box;\n  width: 1em;\n  height: 1em;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") center/1em auto no-repeat;\n  border: 0;\n  border-radius: 0.25rem;\n  opacity: 0.5;\n}\n.btn-close:hover {\n  color: #000;\n  text-decoration: none;\n  opacity: 0.75;\n}\n.btn-close:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  opacity: 1;\n}\n.btn-close:disabled, .btn-close.disabled {\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n  opacity: 0.25;\n}\n.btn-close-white {\n  filter: invert(1) grayscale(100%) brightness(200%);\n}\n.toast {\n  width: 350px;\n  max-width: 100%;\n  font-size: 0.875rem;\n  pointer-events: auto;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.toast.showing {\n  opacity: 0;\n}\n.toast:not(.show) {\n  display: none;\n}\n.toast-container {\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n}\n.toast-container > :not(:last-child) {\n  margin-bottom: 15px;\n}\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.toast-header .btn-close {\n  margin-right: -0.375rem;\n  margin-left: 0.75rem;\n}\n.toast-body {\n  padding: 0.75rem;\n  word-wrap: break-word;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1055;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.modal.modal-static .modal-dialog {\n  transform: scale(1.02);\n}\n.modal-dialog-scrollable {\n  height: calc(100% - 1rem);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.modal-header .btn-close {\n  padding: 0.5rem 0.5rem;\n  margin: -0.5rem -0.5rem -0.5rem auto;\n}\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n.modal-footer > * {\n  margin: 0.25rem;\n}\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n\n  .modal-dialog-scrollable {\n    height: calc(100% - 3.5rem);\n  }\n\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg,\n.modal-xl {\n    max-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n.modal-fullscreen {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0;\n}\n.modal-fullscreen .modal-content {\n  height: 100%;\n  border: 0;\n  border-radius: 0;\n}\n.modal-fullscreen .modal-header {\n  border-radius: 0;\n}\n.modal-fullscreen .modal-body {\n  overflow-y: auto;\n}\n.modal-fullscreen .modal-footer {\n  border-radius: 0;\n}\n@media (max-width: 575.98px) {\n  .modal-fullscreen-sm-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-sm-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-sm-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .modal-fullscreen-md-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-md-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-md-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .modal-fullscreen-lg-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-lg-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-lg-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .modal-fullscreen-xl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-xl-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 1799.98px) {\n  .modal-fullscreen-xxl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-xxl-down .modal-footer {\n    border-radius: 0;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1080;\n  display: block;\n  margin: 0;\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: 0.9;\n}\n.tooltip .tooltip-arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n.tooltip .tooltip-arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {\n  bottom: 0;\n}\n.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {\n  top: -1px;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {\n  right: -1px;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {\n  top: 0;\n}\n.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {\n  bottom: -1px;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {\n  left: -1px;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0 /* rtl:ignore */;\n  z-index: 1070;\n  display: block;\n  max-width: 276px;\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover .popover-arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n}\n.popover .popover-arrow::before, .popover .popover-arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {\n  bottom: calc(-0.5rem - 1px);\n}\n.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n}\n.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {\n  top: calc(-0.5rem - 1px);\n}\n.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: \"\";\n  border-bottom: 1px solid #f0f0f0;\n}\n.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {\n  right: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n}\n.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n.popover-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header:empty {\n  display: none;\n}\n.popover-body {\n  padding: 1rem 1rem;\n  color: #212529;\n}\n.carousel {\n  position: relative;\n}\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n/* rtl:end:ignore */\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-start,\n.carousel-fade .carousel-item-prev.carousel-item-end {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n    transition: none;\n  }\n}\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n.carousel-control-next {\n    transition: none;\n  }\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n.carousel-control-prev {\n  left: 0;\n}\n.carousel-control-next {\n  right: 0;\n}\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n}\n.carousel-control-next-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin-right: 15%;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators [data-bs-target] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  padding: 0;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators [data-bs-target] {\n    transition: none;\n  }\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center;\n}\n.carousel-dark .carousel-control-prev-icon,\n.carousel-dark .carousel-control-next-icon {\n  filter: invert(1) grayscale(100);\n}\n.carousel-dark .carousel-indicators [data-bs-target] {\n  background-color: #000;\n}\n.carousel-dark .carousel-caption {\n  color: #000;\n}\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: 0.75s linear infinite spinner-border;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  animation: 0.75s linear infinite spinner-grow;\n}\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n.spinner-grow {\n    animation-duration: 1.5s;\n  }\n}\n.offcanvas {\n  position: fixed;\n  bottom: 0;\n  z-index: 1045;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  visibility: hidden;\n  background-color: #fff;\n  background-clip: padding-box;\n  outline: 0;\n  transition: transform 0.3s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .offcanvas {\n    transition: none;\n  }\n}\n.offcanvas-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.offcanvas-backdrop.fade {\n  opacity: 0;\n}\n.offcanvas-backdrop.show {\n  opacity: 0.5;\n}\n.offcanvas-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n}\n.offcanvas-header .btn-close {\n  padding: 0.5rem 0.5rem;\n  margin-top: -0.5rem;\n  margin-right: -0.5rem;\n  margin-bottom: -0.5rem;\n}\n.offcanvas-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.offcanvas-body {\n  flex-grow: 1;\n  padding: 1rem 1rem;\n  overflow-y: auto;\n}\n.offcanvas-start {\n  top: 0;\n  left: 0;\n  width: 400px;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n  transform: translateX(-100%);\n}\n.offcanvas-end {\n  top: 0;\n  right: 0;\n  width: 400px;\n  border-left: 1px solid rgba(0, 0, 0, 0.2);\n  transform: translateX(100%);\n}\n.offcanvas-top {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 30vh;\n  max-height: 100%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  transform: translateY(-100%);\n}\n.offcanvas-bottom {\n  right: 0;\n  left: 0;\n  height: 30vh;\n  max-height: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  transform: translateY(100%);\n}\n.offcanvas.show {\n  transform: none;\n}\n.placeholder {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: wait;\n  background-color: currentColor;\n  opacity: 0.5;\n}\n.placeholder.btn::before {\n  display: inline-block;\n  content: \"\";\n}\n.placeholder-xs {\n  min-height: 0.6em;\n}\n.placeholder-sm {\n  min-height: 0.8em;\n}\n.placeholder-lg {\n  min-height: 1.2em;\n}\n.placeholder-glow .placeholder {\n  animation: placeholder-glow 2s ease-in-out infinite;\n}\n@keyframes placeholder-glow {\n  50% {\n    opacity: 0.2;\n  }\n}\n.placeholder-wave {\n  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n          mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n  -webkit-mask-size: 200% 100%;\n          mask-size: 200% 100%;\n  animation: placeholder-wave 2s linear infinite;\n}\n@keyframes placeholder-wave {\n  100% {\n    -webkit-mask-position: -200% 0%;\n            mask-position: -200% 0%;\n  }\n}\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.link-primary {\n  color: #525ddc;\n}\n.link-primary:hover, .link-primary:focus {\n  color: #424ab0;\n}\n.ratio {\n  position: relative;\n  width: 100%;\n}\n.ratio::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: \"\";\n}\n.ratio > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ratio-1x1 {\n  --bs-aspect-ratio: 100%;\n}\n.ratio-4x3 {\n  --bs-aspect-ratio: 75%;\n}\n.ratio-16x9 {\n  --bs-aspect-ratio: 56.25%;\n}\n.ratio-21x9 {\n  --bs-aspect-ratio: 42.8571428571%;\n}\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n.sticky-top {\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n}\n@media (min-width: 576px) {\n  .sticky-sm-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 768px) {\n  .sticky-md-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 992px) {\n  .sticky-lg-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1200px) {\n  .sticky-xl-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1800px) {\n  .sticky-xxl-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n.hstack {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n.vstack {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\";\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.vr {\n  display: inline-block;\n  align-self: stretch;\n  width: 1px;\n  min-height: 1em;\n  background-color: currentColor;\n  opacity: 0.25;\n}\n.align-baseline {\n  vertical-align: baseline !important;\n}\n.align-top {\n  vertical-align: top !important;\n}\n.align-middle {\n  vertical-align: middle !important;\n}\n.align-bottom {\n  vertical-align: bottom !important;\n}\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n.align-text-top {\n  vertical-align: text-top !important;\n}\n.float-start {\n  float: left !important;\n}\n.float-end {\n  float: right !important;\n}\n.float-none {\n  float: none !important;\n}\n.opacity-0 {\n  opacity: 0 !important;\n}\n.opacity-25 {\n  opacity: 0.25 !important;\n}\n.opacity-50 {\n  opacity: 0.5 !important;\n}\n.opacity-75 {\n  opacity: 0.75 !important;\n}\n.opacity-100 {\n  opacity: 1 !important;\n}\n.overflow-auto {\n  overflow: auto !important;\n}\n.overflow-hidden {\n  overflow: hidden !important;\n}\n.overflow-visible {\n  overflow: visible !important;\n}\n.overflow-scroll {\n  overflow: scroll !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block {\n  display: block !important;\n}\n.d-grid {\n  display: grid !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-row {\n  display: table-row !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.d-inline-flex {\n  display: inline-flex !important;\n}\n.d-none {\n  display: none !important;\n}\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n.shadow-none {\n  box-shadow: none !important;\n}\n.position-static {\n  position: static !important;\n}\n.position-relative {\n  position: relative !important;\n}\n.position-absolute {\n  position: absolute !important;\n}\n.position-fixed {\n  position: fixed !important;\n}\n.position-sticky {\n  position: sticky !important;\n}\n.top-0 {\n  top: 0 !important;\n}\n.top-50 {\n  top: 50% !important;\n}\n.top-100 {\n  top: 100% !important;\n}\n.bottom-0 {\n  bottom: 0 !important;\n}\n.bottom-50 {\n  bottom: 50% !important;\n}\n.bottom-100 {\n  bottom: 100% !important;\n}\n.start-0 {\n  left: 0 !important;\n}\n.start-50 {\n  left: 50% !important;\n}\n.start-100 {\n  left: 100% !important;\n}\n.end-0 {\n  right: 0 !important;\n}\n.end-50 {\n  right: 50% !important;\n}\n.end-100 {\n  right: 100% !important;\n}\n.translate-middle {\n  transform: translate(-50%, -50%) !important;\n}\n.translate-middle-x {\n  transform: translateX(-50%) !important;\n}\n.translate-middle-y {\n  transform: translateY(-50%) !important;\n}\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n.border-0 {\n  border: 0 !important;\n}\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n.border-top-0 {\n  border-top: 0 !important;\n}\n.border-end {\n  border-right: 1px solid #dee2e6 !important;\n}\n.border-end-0 {\n  border-right: 0 !important;\n}\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n.border-start {\n  border-left: 1px solid #dee2e6 !important;\n}\n.border-start-0 {\n  border-left: 0 !important;\n}\n.border-primary {\n  border-color: #525ddc !important;\n}\n.border-white {\n  border-color: #fff !important;\n}\n.border-1 {\n  border-width: 1px !important;\n}\n.border-2 {\n  border-width: 2px !important;\n}\n.border-3 {\n  border-width: 3px !important;\n}\n.border-4 {\n  border-width: 4px !important;\n}\n.border-5 {\n  border-width: 5px !important;\n}\n.w-25 {\n  width: 25% !important;\n}\n.w-50 {\n  width: 50% !important;\n}\n.w-75 {\n  width: 75% !important;\n}\n.w-100 {\n  width: 100% !important;\n}\n.w-auto {\n  width: auto !important;\n}\n.mw-100 {\n  max-width: 100% !important;\n}\n.vw-100 {\n  width: 100vw !important;\n}\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n.h-25 {\n  height: 25% !important;\n}\n.h-50 {\n  height: 50% !important;\n}\n.h-75 {\n  height: 75% !important;\n}\n.h-100 {\n  height: 100% !important;\n}\n.h-auto {\n  height: auto !important;\n}\n.mh-100 {\n  max-height: 100% !important;\n}\n.vh-100 {\n  height: 100vh !important;\n}\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n.flex-row {\n  flex-direction: row !important;\n}\n.flex-column {\n  flex-direction: column !important;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.gap-0 {\n  gap: 0 !important;\n}\n.gap-1 {\n  gap: 0.25rem !important;\n}\n.gap-2 {\n  gap: 0.5rem !important;\n}\n.gap-3 {\n  gap: 1rem !important;\n}\n.gap-4 {\n  gap: 1.5rem !important;\n}\n.gap-5 {\n  gap: 3rem !important;\n}\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n.justify-content-center {\n  justify-content: center !important;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.justify-content-around {\n  justify-content: space-around !important;\n}\n.justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.align-items-start {\n  align-items: flex-start !important;\n}\n.align-items-end {\n  align-items: flex-end !important;\n}\n.align-items-center {\n  align-items: center !important;\n}\n.align-items-baseline {\n  align-items: baseline !important;\n}\n.align-items-stretch {\n  align-items: stretch !important;\n}\n.align-content-start {\n  align-content: flex-start !important;\n}\n.align-content-end {\n  align-content: flex-end !important;\n}\n.align-content-center {\n  align-content: center !important;\n}\n.align-content-between {\n  align-content: space-between !important;\n}\n.align-content-around {\n  align-content: space-around !important;\n}\n.align-content-stretch {\n  align-content: stretch !important;\n}\n.align-self-auto {\n  align-self: auto !important;\n}\n.align-self-start {\n  align-self: flex-start !important;\n}\n.align-self-end {\n  align-self: flex-end !important;\n}\n.align-self-center {\n  align-self: center !important;\n}\n.align-self-baseline {\n  align-self: baseline !important;\n}\n.align-self-stretch {\n  align-self: stretch !important;\n}\n.order-first {\n  order: -1 !important;\n}\n.order-0 {\n  order: 0 !important;\n}\n.order-1 {\n  order: 1 !important;\n}\n.order-2 {\n  order: 2 !important;\n}\n.order-3 {\n  order: 3 !important;\n}\n.order-4 {\n  order: 4 !important;\n}\n.order-5 {\n  order: 5 !important;\n}\n.order-last {\n  order: 6 !important;\n}\n.m-0 {\n  margin: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n.mt-0 {\n  margin-top: 0 !important;\n}\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n.mt-3 {\n  margin-top: 1rem !important;\n}\n.mt-4 {\n  margin-top: 1.5rem !important;\n}\n.mt-5 {\n  margin-top: 3rem !important;\n}\n.mt-auto {\n  margin-top: auto !important;\n}\n.me-0 {\n  margin-right: 0 !important;\n}\n.me-1 {\n  margin-right: 0.25rem !important;\n}\n.me-2 {\n  margin-right: 0.5rem !important;\n}\n.me-3 {\n  margin-right: 1rem !important;\n}\n.me-4 {\n  margin-right: 1.5rem !important;\n}\n.me-5 {\n  margin-right: 3rem !important;\n}\n.me-auto {\n  margin-right: auto !important;\n}\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n.mb-4 {\n  margin-bottom: 1.5rem !important;\n}\n.mb-5 {\n  margin-bottom: 3rem !important;\n}\n.mb-auto {\n  margin-bottom: auto !important;\n}\n.ms-0 {\n  margin-left: 0 !important;\n}\n.ms-1 {\n  margin-left: 0.25rem !important;\n}\n.ms-2 {\n  margin-left: 0.5rem !important;\n}\n.ms-3 {\n  margin-left: 1rem !important;\n}\n.ms-4 {\n  margin-left: 1.5rem !important;\n}\n.ms-5 {\n  margin-left: 3rem !important;\n}\n.ms-auto {\n  margin-left: auto !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n.pt-0 {\n  padding-top: 0 !important;\n}\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n.pt-3 {\n  padding-top: 1rem !important;\n}\n.pt-4 {\n  padding-top: 1.5rem !important;\n}\n.pt-5 {\n  padding-top: 3rem !important;\n}\n.pe-0 {\n  padding-right: 0 !important;\n}\n.pe-1 {\n  padding-right: 0.25rem !important;\n}\n.pe-2 {\n  padding-right: 0.5rem !important;\n}\n.pe-3 {\n  padding-right: 1rem !important;\n}\n.pe-4 {\n  padding-right: 1.5rem !important;\n}\n.pe-5 {\n  padding-right: 3rem !important;\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pb-3 {\n  padding-bottom: 1rem !important;\n}\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pb-5 {\n  padding-bottom: 3rem !important;\n}\n.ps-0 {\n  padding-left: 0 !important;\n}\n.ps-1 {\n  padding-left: 0.25rem !important;\n}\n.ps-2 {\n  padding-left: 0.5rem !important;\n}\n.ps-3 {\n  padding-left: 1rem !important;\n}\n.ps-4 {\n  padding-left: 1.5rem !important;\n}\n.ps-5 {\n  padding-left: 3rem !important;\n}\n.font-monospace {\n  font-family: var(--bs-font-monospace) !important;\n}\n.fs-1 {\n  font-size: calc(1.375rem + 1.5vw) !important;\n}\n.fs-2 {\n  font-size: calc(1.325rem + 0.9vw) !important;\n}\n.fs-3 {\n  font-size: calc(1.3rem + 0.6vw) !important;\n}\n.fs-4 {\n  font-size: calc(1.275rem + 0.3vw) !important;\n}\n.fs-5 {\n  font-size: 1.25rem !important;\n}\n.fs-6 {\n  font-size: 1rem !important;\n}\n.fst-italic {\n  font-style: italic !important;\n}\n.fst-normal {\n  font-style: normal !important;\n}\n.fw-light {\n  font-weight: 300 !important;\n}\n.fw-lighter {\n  font-weight: lighter !important;\n}\n.fw-normal {\n  font-weight: 400 !important;\n}\n.fw-bold {\n  font-weight: 700 !important;\n}\n.fw-bolder {\n  font-weight: bolder !important;\n}\n.lh-1 {\n  line-height: 1 !important;\n}\n.lh-sm {\n  line-height: 1.25 !important;\n}\n.lh-base {\n  line-height: 1.5 !important;\n}\n.lh-lg {\n  line-height: 2 !important;\n}\n.text-start {\n  text-align: left !important;\n}\n.text-end {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-decoration-underline {\n  text-decoration: underline !important;\n}\n.text-decoration-line-through {\n  text-decoration: line-through !important;\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n/* rtl:begin:remove */\n.text-break {\n  word-wrap: break-word !important;\n  word-break: break-word !important;\n}\n/* rtl:end:remove */\n.text-primary {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;\n}\n.text-black {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;\n}\n.text-white {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;\n}\n.text-body {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;\n}\n.text-muted {\n  --bs-text-opacity: 1;\n  color: #6c757d !important;\n}\n.text-black-50 {\n  --bs-text-opacity: 1;\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  --bs-text-opacity: 1;\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-reset {\n  --bs-text-opacity: 1;\n  color: inherit !important;\n}\n.text-opacity-25 {\n  --bs-text-opacity: 0.25;\n}\n.text-opacity-50 {\n  --bs-text-opacity: 0.5;\n}\n.text-opacity-75 {\n  --bs-text-opacity: 0.75;\n}\n.text-opacity-100 {\n  --bs-text-opacity: 1;\n}\n.bg-primary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-black {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-white {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-body {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-transparent {\n  --bs-bg-opacity: 1;\n  background-color: transparent !important;\n}\n.bg-opacity-10 {\n  --bs-bg-opacity: 0.1;\n}\n.bg-opacity-25 {\n  --bs-bg-opacity: 0.25;\n}\n.bg-opacity-50 {\n  --bs-bg-opacity: 0.5;\n}\n.bg-opacity-75 {\n  --bs-bg-opacity: 0.75;\n}\n.bg-opacity-100 {\n  --bs-bg-opacity: 1;\n}\n.bg-gradient {\n  background-image: var(--bs-gradient) !important;\n}\n.user-select-all {\n  -webkit-user-select: all !important;\n          user-select: all !important;\n}\n.user-select-auto {\n  -webkit-user-select: auto !important;\n          user-select: auto !important;\n}\n.user-select-none {\n  -webkit-user-select: none !important;\n          user-select: none !important;\n}\n.pe-none {\n  pointer-events: none !important;\n}\n.pe-auto {\n  pointer-events: auto !important;\n}\n.rounded {\n  border-radius: 0.25rem !important;\n}\n.rounded-0 {\n  border-radius: 0 !important;\n}\n.rounded-1 {\n  border-radius: 0.2rem !important;\n}\n.rounded-2 {\n  border-radius: 0.25rem !important;\n}\n.rounded-3 {\n  border-radius: 0.3rem !important;\n}\n.rounded-circle {\n  border-radius: 50% !important;\n}\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n.rounded-end {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-start {\n  border-bottom-left-radius: 0.25rem !important;\n  border-top-left-radius: 0.25rem !important;\n}\n.visible {\n  visibility: visible !important;\n}\n.invisible {\n  visibility: hidden !important;\n}\n@media (min-width: 576px) {\n  .float-sm-start {\n    float: left !important;\n  }\n\n  .float-sm-end {\n    float: right !important;\n  }\n\n  .float-sm-none {\n    float: none !important;\n  }\n\n  .d-sm-inline {\n    display: inline !important;\n  }\n\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-sm-block {\n    display: block !important;\n  }\n\n  .d-sm-grid {\n    display: grid !important;\n  }\n\n  .d-sm-table {\n    display: table !important;\n  }\n\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-sm-flex {\n    display: flex !important;\n  }\n\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-sm-none {\n    display: none !important;\n  }\n\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-sm-0 {\n    gap: 0 !important;\n  }\n\n  .gap-sm-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-sm-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-sm-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-sm-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-sm-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-sm-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-sm-first {\n    order: -1 !important;\n  }\n\n  .order-sm-0 {\n    order: 0 !important;\n  }\n\n  .order-sm-1 {\n    order: 1 !important;\n  }\n\n  .order-sm-2 {\n    order: 2 !important;\n  }\n\n  .order-sm-3 {\n    order: 3 !important;\n  }\n\n  .order-sm-4 {\n    order: 4 !important;\n  }\n\n  .order-sm-5 {\n    order: 5 !important;\n  }\n\n  .order-sm-last {\n    order: 6 !important;\n  }\n\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n\n  .m-sm-auto {\n    margin: auto !important;\n  }\n\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-sm-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-sm-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-sm-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .me-sm-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-sm-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-sm-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-sm-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-sm-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-sm-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-sm-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-sm-auto {\n    margin-left: auto !important;\n  }\n\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-sm-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-sm-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-sm-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-sm-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-sm-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-sm-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-sm-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-sm-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-sm-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-sm-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-sm-start {\n    text-align: left !important;\n  }\n\n  .text-sm-end {\n    text-align: right !important;\n  }\n\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-start {\n    float: left !important;\n  }\n\n  .float-md-end {\n    float: right !important;\n  }\n\n  .float-md-none {\n    float: none !important;\n  }\n\n  .d-md-inline {\n    display: inline !important;\n  }\n\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-md-block {\n    display: block !important;\n  }\n\n  .d-md-grid {\n    display: grid !important;\n  }\n\n  .d-md-table {\n    display: table !important;\n  }\n\n  .d-md-table-row {\n    display: table-row !important;\n  }\n\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-md-flex {\n    display: flex !important;\n  }\n\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-md-none {\n    display: none !important;\n  }\n\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-md-0 {\n    gap: 0 !important;\n  }\n\n  .gap-md-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-md-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-md-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-md-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-md-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-md-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-md-center {\n    align-items: center !important;\n  }\n\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-md-center {\n    align-content: center !important;\n  }\n\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-md-center {\n    align-self: center !important;\n  }\n\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-md-first {\n    order: -1 !important;\n  }\n\n  .order-md-0 {\n    order: 0 !important;\n  }\n\n  .order-md-1 {\n    order: 1 !important;\n  }\n\n  .order-md-2 {\n    order: 2 !important;\n  }\n\n  .order-md-3 {\n    order: 3 !important;\n  }\n\n  .order-md-4 {\n    order: 4 !important;\n  }\n\n  .order-md-5 {\n    order: 5 !important;\n  }\n\n  .order-md-last {\n    order: 6 !important;\n  }\n\n  .m-md-0 {\n    margin: 0 !important;\n  }\n\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n\n  .m-md-auto {\n    margin: auto !important;\n  }\n\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-md-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-md-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-md-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-md-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-md-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-md-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-md-auto {\n    margin-top: auto !important;\n  }\n\n  .me-md-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-md-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-md-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-md-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-md-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-md-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-md-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-md-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-md-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-md-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-md-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-md-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-md-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-md-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-md-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-md-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-md-auto {\n    margin-left: auto !important;\n  }\n\n  .p-md-0 {\n    padding: 0 !important;\n  }\n\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-md-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-md-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-md-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-md-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-md-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-md-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-md-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-md-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-md-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-md-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-md-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-md-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-md-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-md-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-md-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-md-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-md-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-md-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-md-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-md-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-md-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-md-start {\n    text-align: left !important;\n  }\n\n  .text-md-end {\n    text-align: right !important;\n  }\n\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-start {\n    float: left !important;\n  }\n\n  .float-lg-end {\n    float: right !important;\n  }\n\n  .float-lg-none {\n    float: none !important;\n  }\n\n  .d-lg-inline {\n    display: inline !important;\n  }\n\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-lg-block {\n    display: block !important;\n  }\n\n  .d-lg-grid {\n    display: grid !important;\n  }\n\n  .d-lg-table {\n    display: table !important;\n  }\n\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-lg-flex {\n    display: flex !important;\n  }\n\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-lg-none {\n    display: none !important;\n  }\n\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-lg-0 {\n    gap: 0 !important;\n  }\n\n  .gap-lg-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-lg-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-lg-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-lg-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-lg-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-lg-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-lg-first {\n    order: -1 !important;\n  }\n\n  .order-lg-0 {\n    order: 0 !important;\n  }\n\n  .order-lg-1 {\n    order: 1 !important;\n  }\n\n  .order-lg-2 {\n    order: 2 !important;\n  }\n\n  .order-lg-3 {\n    order: 3 !important;\n  }\n\n  .order-lg-4 {\n    order: 4 !important;\n  }\n\n  .order-lg-5 {\n    order: 5 !important;\n  }\n\n  .order-lg-last {\n    order: 6 !important;\n  }\n\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n\n  .m-lg-auto {\n    margin: auto !important;\n  }\n\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-lg-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-lg-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-lg-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .me-lg-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-lg-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-lg-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-lg-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-lg-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-lg-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-lg-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-lg-auto {\n    margin-left: auto !important;\n  }\n\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-lg-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-lg-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-lg-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-lg-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-lg-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-lg-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-lg-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-lg-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-lg-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-lg-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-lg-start {\n    text-align: left !important;\n  }\n\n  .text-lg-end {\n    text-align: right !important;\n  }\n\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-start {\n    float: left !important;\n  }\n\n  .float-xl-end {\n    float: right !important;\n  }\n\n  .float-xl-none {\n    float: none !important;\n  }\n\n  .d-xl-inline {\n    display: inline !important;\n  }\n\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xl-block {\n    display: block !important;\n  }\n\n  .d-xl-grid {\n    display: grid !important;\n  }\n\n  .d-xl-table {\n    display: table !important;\n  }\n\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xl-flex {\n    display: flex !important;\n  }\n\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-xl-none {\n    display: none !important;\n  }\n\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-xl-0 {\n    gap: 0 !important;\n  }\n\n  .gap-xl-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-xl-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-xl-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-xl-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-xl-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-xl-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-xl-first {\n    order: -1 !important;\n  }\n\n  .order-xl-0 {\n    order: 0 !important;\n  }\n\n  .order-xl-1 {\n    order: 1 !important;\n  }\n\n  .order-xl-2 {\n    order: 2 !important;\n  }\n\n  .order-xl-3 {\n    order: 3 !important;\n  }\n\n  .order-xl-4 {\n    order: 4 !important;\n  }\n\n  .order-xl-5 {\n    order: 5 !important;\n  }\n\n  .order-xl-last {\n    order: 6 !important;\n  }\n\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n\n  .m-xl-auto {\n    margin: auto !important;\n  }\n\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-xl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-xl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-xl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .me-xl-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-xl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-xl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-xl-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-xl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-xl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-xl-auto {\n    margin-left: auto !important;\n  }\n\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-xl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-xl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-xl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-xl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-xl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-xl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-xl-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-xl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-xl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-xl-start {\n    text-align: left !important;\n  }\n\n  .text-xl-end {\n    text-align: right !important;\n  }\n\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1800px) {\n  .float-xxl-start {\n    float: left !important;\n  }\n\n  .float-xxl-end {\n    float: right !important;\n  }\n\n  .float-xxl-none {\n    float: none !important;\n  }\n\n  .d-xxl-inline {\n    display: inline !important;\n  }\n\n  .d-xxl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xxl-block {\n    display: block !important;\n  }\n\n  .d-xxl-grid {\n    display: grid !important;\n  }\n\n  .d-xxl-table {\n    display: table !important;\n  }\n\n  .d-xxl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xxl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xxl-flex {\n    display: flex !important;\n  }\n\n  .d-xxl-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-xxl-none {\n    display: none !important;\n  }\n\n  .flex-xxl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-xxl-row {\n    flex-direction: row !important;\n  }\n\n  .flex-xxl-column {\n    flex-direction: column !important;\n  }\n\n  .flex-xxl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-xxl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-xxl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-xxl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-xxl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-xxl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-xxl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-xxl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-xxl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-xxl-0 {\n    gap: 0 !important;\n  }\n\n  .gap-xxl-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-xxl-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-xxl-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-xxl-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-xxl-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-xxl-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-xxl-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-xxl-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-xxl-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-xxl-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-xxl-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-xxl-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-xxl-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-xxl-center {\n    align-items: center !important;\n  }\n\n  .align-items-xxl-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-xxl-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-xxl-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-xxl-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-xxl-center {\n    align-content: center !important;\n  }\n\n  .align-content-xxl-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-xxl-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-xxl-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-xxl-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-xxl-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-xxl-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-xxl-center {\n    align-self: center !important;\n  }\n\n  .align-self-xxl-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-xxl-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-xxl-first {\n    order: -1 !important;\n  }\n\n  .order-xxl-0 {\n    order: 0 !important;\n  }\n\n  .order-xxl-1 {\n    order: 1 !important;\n  }\n\n  .order-xxl-2 {\n    order: 2 !important;\n  }\n\n  .order-xxl-3 {\n    order: 3 !important;\n  }\n\n  .order-xxl-4 {\n    order: 4 !important;\n  }\n\n  .order-xxl-5 {\n    order: 5 !important;\n  }\n\n  .order-xxl-last {\n    order: 6 !important;\n  }\n\n  .m-xxl-0 {\n    margin: 0 !important;\n  }\n\n  .m-xxl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-xxl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-xxl-3 {\n    margin: 1rem !important;\n  }\n\n  .m-xxl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-xxl-5 {\n    margin: 3rem !important;\n  }\n\n  .m-xxl-auto {\n    margin: auto !important;\n  }\n\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-xxl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-xxl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-xxl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-xxl-auto {\n    margin-top: auto !important;\n  }\n\n  .me-xxl-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-xxl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-xxl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-xxl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-xxl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-xxl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-xxl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xxl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-xxl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-xxl-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-xxl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-xxl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-xxl-auto {\n    margin-left: auto !important;\n  }\n\n  .p-xxl-0 {\n    padding: 0 !important;\n  }\n\n  .p-xxl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-xxl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-xxl-3 {\n    padding: 1rem !important;\n  }\n\n  .p-xxl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-xxl-5 {\n    padding: 3rem !important;\n  }\n\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-xxl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-xxl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-xxl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-xxl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-xxl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-xxl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xxl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-xxl-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-xxl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-xxl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-xxl-start {\n    text-align: left !important;\n  }\n\n  .text-xxl-end {\n    text-align: right !important;\n  }\n\n  .text-xxl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .fs-1 {\n    font-size: 2.5rem !important;\n  }\n\n  .fs-2 {\n    font-size: 2rem !important;\n  }\n\n  .fs-3 {\n    font-size: 1.75rem !important;\n  }\n\n  .fs-4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-print-block {\n    display: block !important;\n  }\n\n  .d-print-grid {\n    display: grid !important;\n  }\n\n  .d-print-table {\n    display: table !important;\n  }\n\n  .d-print-table-row {\n    display: table-row !important;\n  }\n\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-print-flex {\n    display: flex !important;\n  }\n\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-print-none {\n    display: none !important;\n  }\n}\nbody[data-aos-duration=\"50\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"50\"] {\n  transition-duration: 50ms;\n}\nbody[data-aos-delay=\"50\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"50\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"50\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"50\"].aos-animate {\n  transition-delay: 50ms;\n}\nbody[data-aos-duration=\"100\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"100\"] {\n  transition-duration: 100ms;\n}\nbody[data-aos-delay=\"100\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"100\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"100\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"100\"].aos-animate {\n  transition-delay: 100ms;\n}\nbody[data-aos-duration=\"150\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"150\"] {\n  transition-duration: 150ms;\n}\nbody[data-aos-delay=\"150\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"150\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"150\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"150\"].aos-animate {\n  transition-delay: 150ms;\n}\nbody[data-aos-duration=\"200\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"200\"] {\n  transition-duration: 200ms;\n}\nbody[data-aos-delay=\"200\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"200\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"200\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"200\"].aos-animate {\n  transition-delay: 200ms;\n}\nbody[data-aos-duration=\"250\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"250\"] {\n  transition-duration: 250ms;\n}\nbody[data-aos-delay=\"250\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"250\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"250\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"250\"].aos-animate {\n  transition-delay: 250ms;\n}\nbody[data-aos-duration=\"300\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"300\"] {\n  transition-duration: 300ms;\n}\nbody[data-aos-delay=\"300\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"300\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"300\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"300\"].aos-animate {\n  transition-delay: 300ms;\n}\nbody[data-aos-duration=\"350\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"350\"] {\n  transition-duration: 350ms;\n}\nbody[data-aos-delay=\"350\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"350\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"350\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"350\"].aos-animate {\n  transition-delay: 350ms;\n}\nbody[data-aos-duration=\"400\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"400\"] {\n  transition-duration: 400ms;\n}\nbody[data-aos-delay=\"400\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"400\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"400\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"400\"].aos-animate {\n  transition-delay: 400ms;\n}\nbody[data-aos-duration=\"450\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"450\"] {\n  transition-duration: 450ms;\n}\nbody[data-aos-delay=\"450\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"450\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"450\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"450\"].aos-animate {\n  transition-delay: 450ms;\n}\nbody[data-aos-duration=\"500\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"500\"] {\n  transition-duration: 500ms;\n}\nbody[data-aos-delay=\"500\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"500\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"500\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"500\"].aos-animate {\n  transition-delay: 500ms;\n}\nbody[data-aos-duration=\"550\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"550\"] {\n  transition-duration: 550ms;\n}\nbody[data-aos-delay=\"550\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"550\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"550\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"550\"].aos-animate {\n  transition-delay: 550ms;\n}\nbody[data-aos-duration=\"600\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"600\"] {\n  transition-duration: 600ms;\n}\nbody[data-aos-delay=\"600\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"600\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"600\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"600\"].aos-animate {\n  transition-delay: 600ms;\n}\nbody[data-aos-duration=\"650\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"650\"] {\n  transition-duration: 650ms;\n}\nbody[data-aos-delay=\"650\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"650\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"650\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"650\"].aos-animate {\n  transition-delay: 650ms;\n}\nbody[data-aos-duration=\"700\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"700\"] {\n  transition-duration: 700ms;\n}\nbody[data-aos-delay=\"700\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"700\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"700\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"700\"].aos-animate {\n  transition-delay: 700ms;\n}\nbody[data-aos-duration=\"750\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"750\"] {\n  transition-duration: 750ms;\n}\nbody[data-aos-delay=\"750\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"750\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"750\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"750\"].aos-animate {\n  transition-delay: 750ms;\n}\nbody[data-aos-duration=\"800\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"800\"] {\n  transition-duration: 800ms;\n}\nbody[data-aos-delay=\"800\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"800\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"800\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"800\"].aos-animate {\n  transition-delay: 800ms;\n}\nbody[data-aos-duration=\"850\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"850\"] {\n  transition-duration: 850ms;\n}\nbody[data-aos-delay=\"850\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"850\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"850\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"850\"].aos-animate {\n  transition-delay: 850ms;\n}\nbody[data-aos-duration=\"900\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"900\"] {\n  transition-duration: 900ms;\n}\nbody[data-aos-delay=\"900\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"900\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"900\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"900\"].aos-animate {\n  transition-delay: 900ms;\n}\nbody[data-aos-duration=\"950\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"950\"] {\n  transition-duration: 950ms;\n}\nbody[data-aos-delay=\"950\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"950\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"950\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"950\"].aos-animate {\n  transition-delay: 950ms;\n}\nbody[data-aos-duration=\"1000\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1000\"] {\n  transition-duration: 1000ms;\n}\nbody[data-aos-delay=\"1000\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1000\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1000\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate {\n  transition-delay: 1000ms;\n}\nbody[data-aos-duration=\"1050\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1050\"] {\n  transition-duration: 1050ms;\n}\nbody[data-aos-delay=\"1050\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1050\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1050\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate {\n  transition-delay: 1050ms;\n}\nbody[data-aos-duration=\"1100\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1100\"] {\n  transition-duration: 1100ms;\n}\nbody[data-aos-delay=\"1100\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1100\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1100\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate {\n  transition-delay: 1100ms;\n}\nbody[data-aos-duration=\"1150\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1150\"] {\n  transition-duration: 1150ms;\n}\nbody[data-aos-delay=\"1150\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1150\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1150\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate {\n  transition-delay: 1150ms;\n}\nbody[data-aos-duration=\"1200\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1200\"] {\n  transition-duration: 1200ms;\n}\nbody[data-aos-delay=\"1200\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1200\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1200\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate {\n  transition-delay: 1200ms;\n}\nbody[data-aos-duration=\"1250\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1250\"] {\n  transition-duration: 1250ms;\n}\nbody[data-aos-delay=\"1250\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1250\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1250\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate {\n  transition-delay: 1250ms;\n}\nbody[data-aos-duration=\"1300\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1300\"] {\n  transition-duration: 1300ms;\n}\nbody[data-aos-delay=\"1300\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1300\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1300\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate {\n  transition-delay: 1300ms;\n}\nbody[data-aos-duration=\"1350\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1350\"] {\n  transition-duration: 1350ms;\n}\nbody[data-aos-delay=\"1350\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1350\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1350\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate {\n  transition-delay: 1350ms;\n}\nbody[data-aos-duration=\"1400\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1400\"] {\n  transition-duration: 1400ms;\n}\nbody[data-aos-delay=\"1400\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1400\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1400\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate {\n  transition-delay: 1400ms;\n}\nbody[data-aos-duration=\"1450\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1450\"] {\n  transition-duration: 1450ms;\n}\nbody[data-aos-delay=\"1450\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1450\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1450\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate {\n  transition-delay: 1450ms;\n}\nbody[data-aos-duration=\"1500\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1500\"] {\n  transition-duration: 1500ms;\n}\nbody[data-aos-delay=\"1500\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1500\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1500\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate {\n  transition-delay: 1500ms;\n}\nbody[data-aos-duration=\"1550\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1550\"] {\n  transition-duration: 1550ms;\n}\nbody[data-aos-delay=\"1550\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1550\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1550\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate {\n  transition-delay: 1550ms;\n}\nbody[data-aos-duration=\"1600\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1600\"] {\n  transition-duration: 1600ms;\n}\nbody[data-aos-delay=\"1600\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1600\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1600\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate {\n  transition-delay: 1600ms;\n}\nbody[data-aos-duration=\"1650\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1650\"] {\n  transition-duration: 1650ms;\n}\nbody[data-aos-delay=\"1650\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1650\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1650\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate {\n  transition-delay: 1650ms;\n}\nbody[data-aos-duration=\"1700\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1700\"] {\n  transition-duration: 1700ms;\n}\nbody[data-aos-delay=\"1700\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1700\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1700\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate {\n  transition-delay: 1700ms;\n}\nbody[data-aos-duration=\"1750\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1750\"] {\n  transition-duration: 1750ms;\n}\nbody[data-aos-delay=\"1750\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1750\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1750\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate {\n  transition-delay: 1750ms;\n}\nbody[data-aos-duration=\"1800\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1800\"] {\n  transition-duration: 1800ms;\n}\nbody[data-aos-delay=\"1800\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1800\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1800\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate {\n  transition-delay: 1800ms;\n}\nbody[data-aos-duration=\"1850\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1850\"] {\n  transition-duration: 1850ms;\n}\nbody[data-aos-delay=\"1850\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1850\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1850\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate {\n  transition-delay: 1850ms;\n}\nbody[data-aos-duration=\"1900\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1900\"] {\n  transition-duration: 1900ms;\n}\nbody[data-aos-delay=\"1900\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1900\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1900\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate {\n  transition-delay: 1900ms;\n}\nbody[data-aos-duration=\"1950\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"1950\"] {\n  transition-duration: 1950ms;\n}\nbody[data-aos-delay=\"1950\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"1950\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"1950\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate {\n  transition-delay: 1950ms;\n}\nbody[data-aos-duration=\"2000\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2000\"] {\n  transition-duration: 2000ms;\n}\nbody[data-aos-delay=\"2000\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2000\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2000\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate {\n  transition-delay: 2000ms;\n}\nbody[data-aos-duration=\"2050\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2050\"] {\n  transition-duration: 2050ms;\n}\nbody[data-aos-delay=\"2050\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2050\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2050\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate {\n  transition-delay: 2050ms;\n}\nbody[data-aos-duration=\"2100\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2100\"] {\n  transition-duration: 2100ms;\n}\nbody[data-aos-delay=\"2100\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2100\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2100\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate {\n  transition-delay: 2100ms;\n}\nbody[data-aos-duration=\"2150\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2150\"] {\n  transition-duration: 2150ms;\n}\nbody[data-aos-delay=\"2150\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2150\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2150\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate {\n  transition-delay: 2150ms;\n}\nbody[data-aos-duration=\"2200\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2200\"] {\n  transition-duration: 2200ms;\n}\nbody[data-aos-delay=\"2200\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2200\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2200\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate {\n  transition-delay: 2200ms;\n}\nbody[data-aos-duration=\"2250\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2250\"] {\n  transition-duration: 2250ms;\n}\nbody[data-aos-delay=\"2250\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2250\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2250\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate {\n  transition-delay: 2250ms;\n}\nbody[data-aos-duration=\"2300\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2300\"] {\n  transition-duration: 2300ms;\n}\nbody[data-aos-delay=\"2300\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2300\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2300\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate {\n  transition-delay: 2300ms;\n}\nbody[data-aos-duration=\"2350\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2350\"] {\n  transition-duration: 2350ms;\n}\nbody[data-aos-delay=\"2350\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2350\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2350\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate {\n  transition-delay: 2350ms;\n}\nbody[data-aos-duration=\"2400\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2400\"] {\n  transition-duration: 2400ms;\n}\nbody[data-aos-delay=\"2400\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2400\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2400\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate {\n  transition-delay: 2400ms;\n}\nbody[data-aos-duration=\"2450\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2450\"] {\n  transition-duration: 2450ms;\n}\nbody[data-aos-delay=\"2450\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2450\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2450\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate {\n  transition-delay: 2450ms;\n}\nbody[data-aos-duration=\"2500\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2500\"] {\n  transition-duration: 2500ms;\n}\nbody[data-aos-delay=\"2500\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2500\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2500\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate {\n  transition-delay: 2500ms;\n}\nbody[data-aos-duration=\"2550\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2550\"] {\n  transition-duration: 2550ms;\n}\nbody[data-aos-delay=\"2550\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2550\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2550\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate {\n  transition-delay: 2550ms;\n}\nbody[data-aos-duration=\"2600\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2600\"] {\n  transition-duration: 2600ms;\n}\nbody[data-aos-delay=\"2600\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2600\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2600\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate {\n  transition-delay: 2600ms;\n}\nbody[data-aos-duration=\"2650\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2650\"] {\n  transition-duration: 2650ms;\n}\nbody[data-aos-delay=\"2650\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2650\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2650\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate {\n  transition-delay: 2650ms;\n}\nbody[data-aos-duration=\"2700\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2700\"] {\n  transition-duration: 2700ms;\n}\nbody[data-aos-delay=\"2700\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2700\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2700\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate {\n  transition-delay: 2700ms;\n}\nbody[data-aos-duration=\"2750\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2750\"] {\n  transition-duration: 2750ms;\n}\nbody[data-aos-delay=\"2750\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2750\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2750\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate {\n  transition-delay: 2750ms;\n}\nbody[data-aos-duration=\"2800\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2800\"] {\n  transition-duration: 2800ms;\n}\nbody[data-aos-delay=\"2800\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2800\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2800\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate {\n  transition-delay: 2800ms;\n}\nbody[data-aos-duration=\"2850\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2850\"] {\n  transition-duration: 2850ms;\n}\nbody[data-aos-delay=\"2850\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2850\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2850\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate {\n  transition-delay: 2850ms;\n}\nbody[data-aos-duration=\"2900\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2900\"] {\n  transition-duration: 2900ms;\n}\nbody[data-aos-delay=\"2900\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2900\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2900\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate {\n  transition-delay: 2900ms;\n}\nbody[data-aos-duration=\"2950\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"2950\"] {\n  transition-duration: 2950ms;\n}\nbody[data-aos-delay=\"2950\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"2950\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"2950\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate {\n  transition-delay: 2950ms;\n}\nbody[data-aos-duration=\"3000\"] [data-aos], [data-aos][data-aos][data-aos-duration=\"3000\"] {\n  transition-duration: 3000ms;\n}\nbody[data-aos-delay=\"3000\"] [data-aos], [data-aos][data-aos][data-aos-delay=\"3000\"] {\n  transition-delay: 0;\n}\nbody[data-aos-delay=\"3000\"] [data-aos].aos-animate, [data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate {\n  transition-delay: 3000ms;\n}\nbody[data-aos-easing=linear] [data-aos], [data-aos][data-aos][data-aos-easing=linear] {\n  transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);\n}\nbody[data-aos-easing=ease] [data-aos], [data-aos][data-aos][data-aos-easing=ease] {\n  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\nbody[data-aos-easing=ease-in] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in] {\n  transition-timing-function: cubic-bezier(0.42, 0, 1, 1);\n}\nbody[data-aos-easing=ease-out] [data-aos], [data-aos][data-aos][data-aos-easing=ease-out] {\n  transition-timing-function: cubic-bezier(0, 0, 0.58, 1);\n}\nbody[data-aos-easing=ease-in-out] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-out] {\n  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\n}\nbody[data-aos-easing=ease-in-back] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-back] {\n  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n}\nbody[data-aos-easing=ease-out-back] [data-aos], [data-aos][data-aos][data-aos-easing=ease-out-back] {\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\nbody[data-aos-easing=ease-in-out-back] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-out-back] {\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\nbody[data-aos-easing=ease-in-sine] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-sine] {\n  transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n}\nbody[data-aos-easing=ease-out-sine] [data-aos], [data-aos][data-aos][data-aos-easing=ease-out-sine] {\n  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);\n}\nbody[data-aos-easing=ease-in-out-sine] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-out-sine] {\n  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\nbody[data-aos-easing=ease-in-quad] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-quad] {\n  transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\nbody[data-aos-easing=ease-out-quad] [data-aos], [data-aos][data-aos][data-aos-easing=ease-out-quad] {\n  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\nbody[data-aos-easing=ease-in-out-quad] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-out-quad] {\n  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\nbody[data-aos-easing=ease-in-cubic] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-cubic] {\n  transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\nbody[data-aos-easing=ease-out-cubic] [data-aos], [data-aos][data-aos][data-aos-easing=ease-out-cubic] {\n  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\nbody[data-aos-easing=ease-in-out-cubic] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-out-cubic] {\n  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\nbody[data-aos-easing=ease-in-quart] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-quart] {\n  transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\nbody[data-aos-easing=ease-out-quart] [data-aos], [data-aos][data-aos][data-aos-easing=ease-out-quart] {\n  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\nbody[data-aos-easing=ease-in-out-quart] [data-aos], [data-aos][data-aos][data-aos-easing=ease-in-out-quart] {\n  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n/**\n * Fade animations:\n * fade\n * fade-up, fade-down, fade-left, fade-right\n * fade-up-right, fade-up-left, fade-down-right, fade-down-left\n */\n[data-aos^=fade][data-aos^=fade] {\n  opacity: 0;\n  transition-property: opacity, transform;\n}\n[data-aos^=fade][data-aos^=fade].aos-animate {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n[data-aos=fade-up] {\n  transform: translate3d(0, 100px, 0);\n}\n[data-aos=fade-down] {\n  transform: translate3d(0, -100px, 0);\n}\n[data-aos=fade-right] {\n  transform: translate3d(-100px, 0, 0);\n}\n[data-aos=fade-left] {\n  transform: translate3d(100px, 0, 0);\n}\n[data-aos=fade-up-right] {\n  transform: translate3d(-100px, 100px, 0);\n}\n[data-aos=fade-up-left] {\n  transform: translate3d(100px, 100px, 0);\n}\n[data-aos=fade-down-right] {\n  transform: translate3d(-100px, -100px, 0);\n}\n[data-aos=fade-down-left] {\n  transform: translate3d(100px, -100px, 0);\n}\n/**\n * Zoom animations:\n * zoom-in, zoom-in-up, zoom-in-down, zoom-in-left, zoom-in-right\n * zoom-out, zoom-out-up, zoom-out-down, zoom-out-left, zoom-out-right\n */\n[data-aos^=zoom][data-aos^=zoom] {\n  opacity: 0;\n  transition-property: opacity, transform;\n}\n[data-aos^=zoom][data-aos^=zoom].aos-animate {\n  opacity: 1;\n  transform: translate3d(0, 0, 0) scale(1);\n}\n[data-aos=zoom-in] {\n  transform: scale(0.6);\n}\n[data-aos=zoom-in-up] {\n  transform: translate3d(0, 100px, 0) scale(0.6);\n}\n[data-aos=zoom-in-down] {\n  transform: translate3d(0, -100px, 0) scale(0.6);\n}\n[data-aos=zoom-in-right] {\n  transform: translate3d(-100px, 0, 0) scale(0.6);\n}\n[data-aos=zoom-in-left] {\n  transform: translate3d(100px, 0, 0) scale(0.6);\n}\n[data-aos=zoom-out] {\n  transform: scale(1.2);\n}\n[data-aos=zoom-out-up] {\n  transform: translate3d(0, 100px, 0) scale(1.2);\n}\n[data-aos=zoom-out-down] {\n  transform: translate3d(0, -100px, 0) scale(1.2);\n}\n[data-aos=zoom-out-right] {\n  transform: translate3d(-100px, 0, 0) scale(1.2);\n}\n[data-aos=zoom-out-left] {\n  transform: translate3d(100px, 0, 0) scale(1.2);\n}\n/**\n * Slide animations\n */\n[data-aos^=slide][data-aos^=slide] {\n  transition-property: transform;\n}\n[data-aos^=slide][data-aos^=slide].aos-animate {\n  transform: translate3d(0, 0, 0);\n}\n[data-aos=slide-up] {\n  transform: translate3d(0, 100%, 0);\n}\n[data-aos=slide-down] {\n  transform: translate3d(0, -100%, 0);\n}\n[data-aos=slide-right] {\n  transform: translate3d(-100%, 0, 0);\n}\n[data-aos=slide-left] {\n  transform: translate3d(100%, 0, 0);\n}\n/**\n * Flip animations:\n * flip-left, flip-right, flip-up, flip-down\n */\n[data-aos^=flip][data-aos^=flip] {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition-property: transform;\n}\n[data-aos=flip-left] {\n  transform: perspective(2500px) rotateY(-100deg);\n}\n[data-aos=flip-left].aos-animate {\n  transform: perspective(2500px) rotateY(0);\n}\n[data-aos=flip-right] {\n  transform: perspective(2500px) rotateY(100deg);\n}\n[data-aos=flip-right].aos-animate {\n  transform: perspective(2500px) rotateY(0);\n}\n[data-aos=flip-up] {\n  transform: perspective(2500px) rotateX(-100deg);\n}\n[data-aos=flip-up].aos-animate {\n  transform: perspective(2500px) rotateX(0);\n}\n[data-aos=flip-down] {\n  transform: perspective(2500px) rotateX(100deg);\n}\n[data-aos=flip-down].aos-animate {\n  transform: perspective(2500px) rotateX(0);\n}\n/** Import everything from autoload */\n/**\n * Swiper 4.5.0\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: February 22, 2019\n */\n.swiper-container {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-container-no-flexbox .swiper-slide {\n  float: left;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n/* 3D Effects */\n.swiper-container-3d {\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* IE10 Windows Phone 8 Fixes */\n.swiper-container-wp8-horizontal,\n.swiper-container-wp8-horizontal > .swiper-wrapper {\n  touch-action: pan-y;\n}\n.swiper-container-wp8-vertical,\n.swiper-container-wp8-vertical > .swiper-wrapper {\n  touch-action: pan-x;\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n  left: 10px;\n  right: auto;\n}\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\n  right: 10px;\n  left: auto;\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n}\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n}\n.swiper-button-lock {\n  display: none;\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #007aff;\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progressbar,\n.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical > .swiper-pagination-progressbar,\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #ffffff;\n}\n.swiper-pagination-progressbar.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {\n  background: #ffffff;\n}\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000000;\n}\n.swiper-pagination-progressbar.swiper-pagination-black {\n  background: rgba(0, 0, 0, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {\n  background: #000000;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n/* Preloader */\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite;\n}\n.swiper-lazy-preloader:after {\n  display: block;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.swiper-lazy-preloader-white:after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ");\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  filter: blur(50px);\n  z-index: 0;\n}\n.swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-coverflow .swiper-wrapper {\n  /* Windows 8 IE 10 fix */\n  -ms-perspective: 1200px;\n}\n:root {\n  --background-color-white: #fff;\n  --background-color-black: #000;\n  --background-color-light: #f1f1f1;\n  --background-color-dark: #000;\n  /* --- */\n  --background-color-primary: #fff;\n  --background-color-primary-alt: #9b012a;\n  --background-color-secondary: #ffa202;\n  --background-color-secondary-alt: #ffa202;\n}\n.bg-colour-white {\n  background-color: var(--background-color-white);\n}\n.bg-colour-black {\n  background-color: var(--background-color-black);\n}\n.bg-colour-light {\n  background-color: var(--background-color-light);\n}\n.bg-colour-dark {\n  background-color: var(--background-color-dark);\n}\n.bg-colour-primary {\n  background-color: var(--background-color-primary);\n}\n.bg-colour-primary-alt {\n  background-color: var(--background-color-primary-alt);\n}\n.bg-colour-secondary {\n  background-color: var(--background-color-secondary);\n}\n.bg-colour-secondary-alt {\n  background-color: var(--background-color-secondary-alt);\n}\n:root {\n  /* --- */\n  --theme-primary-colour: #f00;\n  --theme-secondary-colour: #f0f;\n}\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\nbody,\nhtml {\n  width: 100vw;\n  overflow-x: hidden;\n  background: var(--background-color-primary);\n}\n.pin-spacer {\n  width: 100vw !important;\n}\ntime {\n  display: block;\n}\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left;\n  }\n}\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left;\n  }\n}\n@media (min-width: 1200px) {\n  .text-xl-right {\n    text-align: right;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg-20 {\n    position: relative;\n    width: 100%;\n    padding-right: 10px;\n    padding-left: 10px;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n}\n:root {\n  /* --- */\n  --text-color-black-headings: #010101;\n  --text-color-black-copy: #010101;\n  --text-color-black-links: #010101;\n  --text-color-black-links-hover: #010101;\n  --text-color-black-alt: #010101;\n  --text-color-black-overlay: #010101;\n  /* --- */\n  --text-color-white-headings: #fff;\n  --text-color-white-copy: #fff;\n  --text-color-white-links: #fff;\n  --text-color-white-links-hover: #fff;\n  --text-color-white-alt: #fff;\n  --text-color-white-overlay: #fff;\n  /* --- */\n  --text-color-dark-headings: #e55841;\n  --text-color-dark-copy: #e55841;\n  --text-color-dark-links: #e55841;\n  --text-color-dark-links-hover: #e55841;\n  --text-color-dark-alt: #e55841;\n  --text-color-dark-overlay: #e55841;\n  /* --- */\n  --text-color-light-headings: #fff;\n  --text-color-light-copy: #fff;\n  --text-color-light-links: #fff;\n  --text-color-light-links-hover: #fff;\n  --text-color-light-alt: #fff;\n  --text-color-light-overlay: #fff;\n}\n.text-black h1, .text-black .h1,\n.text-black h2,\n.text-black .h2,\n.text-black h3,\n.text-black .h3,\n.text-black h4,\n.text-black .h4,\n.text-black h5,\n.text-black .h5 {\n  color: var(--text-color-black-headings);\n}\n.text-black p,\n.text-black ol,\n.text-black ul,\n.text-black blockquote {\n  color: var(--text-color-black-copy);\n}\n.text-black cite {\n  color: var(--text-color-black-alt);\n}\n.text-black a {\n  color: var(--text-color-black-links);\n}\n.text-black a:hover {\n  color: var(--text-color-black-links-hover);\n}\n.text-black .alt {\n  color: var(--text-color-dark-alt);\n}\n.text-black .text-seperator .seperator-inner::before {\n  background: var(--text-color-black-copy);\n}\n.text-black .bg-overlay {\n  background: var(--text-color-black-overlay);\n}\n.text-white h1, .text-white .h1,\n.text-white h2,\n.text-white .h2,\n.text-white h3,\n.text-white .h3,\n.text-white h4,\n.text-white .h4,\n.text-white h5,\n.text-white .h5 {\n  color: var(--text-color-white-headings);\n}\n.text-white p,\n.text-white ol,\n.text-white ul,\n.text-white blockquote {\n  color: var(--text-color-white-copy);\n}\n.text-white cite {\n  color: var(--text-color-white-alt);\n}\n.text-white a {\n  color: var(--text-color-white-links);\n}\n.text-white a:hover {\n  color: var(--text-color-white-links-hover);\n}\n.text-white .alt {\n  color: var(--text-color-white-alt);\n}\n.text-white .seperator-inner::before {\n  background: var(--text-color-white-copy);\n}\n.text-white .bg-overlay {\n  background: var(--text-color-white-overlay);\n}\n.text-light h1, .text-light .h1,\n.text-light h2,\n.text-light .h2,\n.text-light h3,\n.text-light .h3,\n.text-light h4,\n.text-light .h4,\n.text-light h5,\n.text-light .h5 {\n  color: var(--text-color-light-headings);\n}\n.text-light p,\n.text-light ol,\n.text-light ul,\n.text-light blockquote {\n  color: var(--text-color-light-copy);\n}\n.text-light cite {\n  color: var(--text-color-light-alt);\n}\n.text-light a {\n  color: var(--text-color-light-links);\n}\n.text-light a:hover {\n  color: var(--text-color-light-links-hover);\n}\n.text-light .alt {\n  color: var(--text-color-light-alt);\n}\n.text-light .seperator-inner::before {\n  background: var(--text-color-light-copy);\n}\n.text-light .bg-overlay {\n  background: var(--text-color-light-overlay);\n}\n.text-dark h1, .text-dark .h1,\n.text-dark h2,\n.text-dark .h2,\n.text-dark h3,\n.text-dark .h3,\n.text-dark h4,\n.text-dark .h4,\n.text-dark h5,\n.text-dark .h5 {\n  color: var(--text-color-dark-headings);\n}\n.text-dark p,\n.text-dark ol,\n.text-dark ul,\n.text-dark blockquote {\n  color: var(--text-color-dark-copy);\n}\n.text-dark cite {\n  color: var(--text-color-dark-alt);\n}\n.text-dark a {\n  color: var(--text-color-dark-links);\n}\n.text-dark a:hover {\n  color: var(--text-color-dark-links-hover);\n}\n.text-dark .alt {\n  color: var(--text-color-dark-alt);\n}\n.text-dark .seperator-inner::before {\n  background: var(--text-color-dark-copy);\n}\n.text-dark .bg-overlay {\n  background: var(--text-color-dark-overlay);\n}\n:root {\n  /* --- */\n  --button-padding-top: 0.5rem;\n  --button-padding-right: 1.875rem;\n  --button-padding-bottom: 0.6rem;\n  --button-padding-left: 1.875rem;\n  --button-font-size: 3.125rem;\n  --button-letter-spacing: 0.5rem;\n  --button-font-weight: normal;\n  --button-text-transform: none;\n  --button-border-size: 5px;\n  --button-border-radius: 0;\n  /* --- */\n  --button-scale-xs: 1;\n  --button-scale-sm: 1;\n  --button-scale-md: 1;\n  --button-scale-lg: 1;\n  --button-scale-xl: 1;\n  --button-scale-xxl: 1;\n  /* --- */\n  --button-text-color: #fff;\n  --button-fill-color: #e55841;\n  --button-border-color: #e55841;\n  --button-border-shadow: none;\n  /* --- */\n  --button-text-color-hover: #e55841;\n  --button-fill-color-hover: transparent;\n  --button-border-color-hover: #e55841;\n  --button-border-shadow-hover: none;\n  /* --- */\n  --button-text-color-black: #fff;\n  --button-fill-color-black: #e55841;\n  --button-border-color-black: #e55841;\n  --button-border-shadow-black: none;\n  /* --- */\n  --button-text-color-hover-black: #e55841;\n  --button-fill-color-hover-black: transparent;\n  --button-border-color-hover-black: #e55841;\n  --button-border-shadow-hover-black: none;\n  /* --- */\n  --button-text-color-white: #fff;\n  --button-fill-color-white: #e55841;\n  --button-border-color-white: #e55841;\n  --button-border-shadow-white: none;\n  /* --- */\n  --button-text-color-hover-white: #e55841;\n  --button-fill-color-hover-white: transparent;\n  --button-border-color-hover-white: #e55841;\n  --button-border-shadow-hover-white: none;\n  /* --- */\n  --button-text-color-light: #fff;\n  --button-fill-color-light: #e55841;\n  --button-border-color-light: #e55841;\n  --button-border-shadow-light: none;\n  /* --- */\n  --button-text-color-hover-light: #e55841;\n  --button-fill-color-hover-light: transparent;\n  --button-border-color-hover-light: #e55841;\n  --button-border-shadow-hover-light: none;\n  /* --- */\n  --button-text-color-dark: #fff;\n  --button-fill-color-dark: #e55841;\n  --button-border-color-dark: #e55841;\n  --button-border-shadow-dark: none;\n  /* --- */\n  --button-text-color-hover-dark: #e55841;\n  --button-fill-color-hover-dark: transparent;\n  --button-border-color-hover-dark: #e55841;\n  --button-border-shadow-hover-dark: none;\n}\n.button-cta {\n  display: block;\n}\n@media (min-width: 992px) {\n  .button-cta {\n    display: inline-block;\n  }\n}\n.button-cta a {\n  text-decoration: none;\n  width: auto;\n  transition: all 0.4s ease-out;\n  display: inline-block;\n  font-weight: var(--button-font-weight);\n  text-transform: var(--button-text-transform);\n  font-family: var(--font-buttons);\n  /* colours */\n  box-shadow: var(--button-border-shadow);\n  padding: calc(var(--button-padding-top) * var(--button-scale-xs)) calc(var(--button-padding-right) * var(--button-scale-xs)) calc(var(--button-padding-bottom) * var(--button-scale-xs)) calc(var(--button-padding-left) * var(--button-scale-xs));\n  border-radius: calc(var(--button-border-radius) * var(--button-scale-xs));\n  font-size: calc(var(--button-font-size) * var(--button-scale-xs));\n  letter-spacing: calc(var(--button-letter-spacing) * var(--button-scale-xs));\n}\n@media (min-width: 576px) {\n  .button-cta a {\n    padding: calc(var(--button-padding-top) * var(--button-scale-sm)) calc(var(--button-padding-right) * var(--button-scale-sm)) calc(var(--button-padding-bottom) * var(--button-scale-sm)) calc(var(--button-padding-left) * var(--button-scale-sm));\n    border-radius: calc(var(--button-border-radius) * var(--button-scale-sm));\n    font-size: calc(var(--button-font-size) * var(--button-scale-sm));\n    letter-spacing: calc(var(--button-letter-spacing) * var(--button-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .button-cta a {\n    padding: calc(var(--button-padding-top) * var(--button-scale-md)) calc(var(--button-padding-right) * var(--button-scale-md)) calc(var(--button-padding-bottom) * var(--button-scale-md)) calc(var(--button-padding-left) * var(--button-scale-md));\n    border-radius: calc(var(--button-border-radius) * var(--button-scale-md));\n    font-size: calc(var(--button-font-size) * var(--button-scale-md));\n    letter-spacing: calc(var(--button-letter-spacing) * var(--button-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .button-cta a {\n    padding: calc(var(--button-padding-top) * var(--button-scale-lg)) calc(var(--button-padding-right) * var(--button-scale-lg)) calc(var(--button-padding-bottom) * var(--button-scale-lg)) calc(var(--button-padding-left) * var(--button-scale-lg));\n    border-radius: calc(var(--button-border-radius) * var(--button-scale-lg));\n    font-size: calc(var(--button-font-size) * var(--button-scale-lg));\n    letter-spacing: calc(var(--button-letter-spacing) * var(--button-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .button-cta a {\n    padding: calc(var(--button-padding-top) * var(--button-scale-xl)) calc(var(--button-padding-right) * var(--button-scale-xl)) calc(var(--button-padding-bottom) * var(--button-scale-xl)) calc(var(--button-padding-left) * var(--button-scale-xl));\n    border-radius: calc(var(--button-border-radius) * var(--button-scale-xl));\n    font-size: calc(var(--button-font-size) * var(--button-scale-xl));\n    letter-spacing: calc(var(--button-letter-spacing) * var(--button-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .button-cta a {\n    padding: calc(var(--button-padding-top) * var(--button-scale-xxl)) calc(var(--button-padding-right) * var(--button-scale-xxl)) calc(var(--button-padding-bottom) * var(--button-scale-xxl)) calc(var(--button-padding-left) * var(--button-scale-xxl));\n    border-radius: calc(var(--button-border-radius) * var(--button-scale-xxl));\n    font-size: calc(var(--button-font-size) * var(--button-scale-xxl));\n    letter-spacing: calc(var(--button-letter-spacing) * var(--button-scale-xxl));\n  }\n}\n.button-cta a:last-child {\n  margin-bottom: 0;\n}\n.button-cta a.submit {\n  margin-bottom: 15px;\n}\n.button-cta a:hover {\n  text-decoration: none;\n  transition: all 0.4s ease-out;\n  /* hover colours */\n  box-shadow: var(--button-border-shadow-hover);\n}\n.button-cta .text-link {\n  position: relative;\n  padding-left: 40px;\n  font-weight: 600;\n  line-height: 30px;\n  display: block;\n  transition: all 0.4s ease-out;\n  padding-bottom: 30px;\n  box-shadow: none;\n}\n.button-cta .text-link:last-child {\n  padding-bottom: 0;\n}\n.button-cta .text-link::before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  content: \"\\f054\";\n  background: #000;\n  z-index: 5000;\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n  font-weight: 900;\n  font-size: 13px;\n  color: #fff;\n  text-align: center;\n  line-height: 30px;\n  transition: background 0.4s ease-out;\n}\n.button-cta .text-link:hover {\n  text-decoration: none;\n  padding-left: 50px;\n  transition: all 0.4s ease-out;\n}\n.button-cta .text-link:hover::before {\n  background: #000;\n  transition: background 0.4s ease-out;\n}\n.button-cta.text-center {\n  text-align: center;\n  width: 100%;\n}\n.button-cta.text-center a {\n  margin: 0 auto;\n}\n.text-dark .button-cta a {\n  /* colours */\n  background: var(--button-fill-color-dark);\n  border: var(--button-border-size) solid var(--button-border-color-dark);\n  color: var(--button-text-color-dark);\n  box-shadow: var(--button-border-shadow-dark);\n}\n.text-dark .button-cta a:hover {\n  /* hover colours */\n  background: var(--button-fill-color-hover-dark);\n  border: var(--button-border-size) solid var(--button-border-color-hover-dark);\n  color: var(--button-text-color-hover-dark);\n  box-shadow: var(--button-border-shadow-hover-dark);\n}\n.text-dark .button-cta.text-link a {\n  color: var(--text-color-dark-links);\n}\n.text-dark .button-cta.text-link a:hover {\n  color: var(--text-color-dark-links-hover);\n}\n.text-light .button-cta a {\n  /* colours */\n  background: var(--button-fill-color-light);\n  border: var(--button-border-size) solid var(--button-border-color-light);\n  color: var(--button-text-color-light);\n  box-shadow: var(--button-border-shadow-light);\n}\n.text-light .button-cta a:hover {\n  /* hover colours */\n  background: var(--button-fill-color-hover-light);\n  border: var(--button-border-size) solid var(--button-border-color-hover-light);\n  color: var(--button-text-color-hover-light);\n  box-shadow: var(--button-border-shadow-hover-light);\n}\n.text-light .button-cta.text-link a {\n  color: var(--text-color-light-links);\n}\n.text-light .button-cta.text-link a:hover {\n  color: var(--text-color-light-links-hover);\n}\n.text-black .button-cta a {\n  /* colours */\n  background: var(--button-fill-color-black);\n  border: var(--button-border-size) solid var(--button-border-color-black);\n  color: var(--button-text-color-black);\n  box-shadow: var(--button-border-shadow-black);\n}\n.text-black .button-cta a:hover {\n  /* hover colours */\n  background: var(--button-fill-color-hover-black);\n  border: var(--button-border-size) solid var(--button-border-color-hover-black);\n  color: var(--button-text-color-hover-black);\n  box-shadow: var(--button-border-shadow-hover-black);\n}\n.text-black .button-cta.text-link a {\n  color: var(--text-color-black-links);\n}\n.text-black .button-cta.text-link a:hover {\n  color: var(--text-color-black-links-hover);\n}\n.text-white .button-cta a {\n  /* colours */\n  background: var(--button-fill-color-white);\n  border: var(--button-border-size) solid var(--button-border-color-white);\n  color: var(--button-text-color-white);\n  box-shadow: var(--button-border-shadow-white);\n}\n.text-white .button-cta a:hover {\n  /* hover colours */\n  background: var(--button-fill-color-hover-white);\n  border: var(--button-border-size) solid var(--button-border-color-hover-white);\n  color: var(--button-text-color-hover-white);\n  box-shadow: var(--button-border-shadow-hover-white);\n}\n.text-white .button-cta.text-link a {\n  color: var(--text-color-white-links);\n}\n.text-white .button-cta.text-link a:hover {\n  color: var(--text-color-white-links-hover);\n}\n.inline-button {\n  padding-bottom: 30px;\n}\n.inline-button a {\n  width: auto;\n  transition: all 0.4s ease-out;\n  background: #000;\n  color: #fff;\n  display: inline-block;\n  padding: 8px 30px 8px 30px;\n  text-transform: uppercase;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 700;\n}\n.inline-button a:hover {\n  background: #000;\n  color: #fff;\n  text-decoration: none;\n  transition: all 0.4s ease-out;\n}\n.serif .cta-holder .link-button,\n.serif .cta-holder .link-button-alt,\n.serif .cta-holder .text-link {\n  text-transform: none;\n  border-radius: 35px;\n  font-weight: 400;\n}\n/*\n.button-cta {\n  a {\n    width: auto;\n    -webkit-transition: all $transition*2 ease-out;\n    -moz-transition: all $transition*2 ease-out;\n    -ms-transition: all $transition*2 ease-out;\n    -o-transition: all $transition*2 ease-out;\n    transition: all $transition*2 ease-out;\n    background: #000;\n    color: #fff;\n    font-family: $font-family-sans-serif;\n    display: inline-block;\n    padding: 8px 30px 8px 30px;\n    -webkit-border-radius: 25px;\n    -moz-border-radius: 25px;\n    border-radius: 25px;\n    text-transform: uppercase;\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 700;\n    letter-spacing: 1.2px;\n\n    &:hover {\n      background: #0.button-cta {\n    display: block;\n\n    @include media-breakpoint-up(lg) {\n      display: inline-block;\n    }00;\n      color: #fff;\n      text-decoration: none;\n      -webkit-transition: all $transition*2 ease-out;\n      -moz-transition: all $transition*2 ease-out;\n      -ms-transition: all $transition*2 ease-out;\n      -o-transition: all $transition*2 ease-out;\n      transition: all $transition*2 ease-out;\n    }\n  }\n}\n*/\n/*\n.text-light {\n  .button-cta {\n    a {\n      width: auto;\n      -webkit-transition: all $transition*2 ease-out;\n      -moz-transition: all $transition*2 ease-out;\n      -ms-transition: all $transition*2 ease-out;\n      -o-transition: all $transition*2 ease-out;\n      transition: all $transition*2 ease-out;\n      background: #fff;\n      color: #000;\n      font-family: $font-family-sans-serif;\n      display: inline-block;\n      padding: 8px 30px 8px 30px;\n      -webkit-border-radius: 25px;\n      -moz-border-radius: 25px;\n      border-radius: 25px;\n      text-transform: uppercase;\n      font-size: 12px;\n      line-height: 18px;\n      font-weight: 700;\n      letter-spacing: 1.2px;\n\n      &:hover {\n        background: #fff;\n        color: #000;\n        text-decoration: none;\n        -webkit-transition: all $transition*2 ease-out;\n        -moz-transition: all $transition*2 ease-out;\n        -ms-transition: all $transition*2 ease-out;\n        -o-transition: all $transition*2 ease-out;\n        transition: all $transition*2 ease-out;\n      }\n    }\n  }\n}\n*/\n.text-dark .button-cta.text-link a,\n.text-black .button-cta.text-link a,\n.text-light .button-cta.text-link a,\n.text-white .button-cta.text-link a {\n  background: transparent;\n  padding: 0;\n  border: 0;\n  box-shadow: none;\n}\n:root {\n  /* --- */\n  --carousel-p-fill-black: #000000;\n  --carousel-p-border-black: #000000;\n  --carousel-p-fill-hover-black: #000000;\n  --carousel-p-border-hover-black: #000000;\n  --carousel-p-fill-active-black: #000000;\n  --carousel-p-border-active-black: #000000;\n  --carousel-p-fill-white: #ffffff;\n  --carousel-p-border-white: #ffffff;\n  --carousel-p-fill-hover-white: #ffffff;\n  --carousel-p-border-hover-white: #ffffff;\n  --carousel-p-fill-active-white: #ffffff;\n  --carousel-p-border-active-white: #ffffff;\n  --carousel-p-fill-dark: #000000;\n  --carousel-p-border-dark: #000000;\n  --carousel-p-fill-hover-dark: #000000;\n  --carousel-p-border-hover-dark: #000000;\n  --carousel-p-fill-active-dark: #000000;\n  --carousel-p-border-active-dark: #000000;\n  --carousel-p-fill-light: #ffffff;\n  --carousel-p-border-light: #ffffff;\n  --carousel-p-fill-hover-light: #ffffff;\n  --carousel-p-border-hover-light: #ffffff;\n  --carousel-p-fill-active-light: #ffffff;\n  --carousel-p-border-active-light: #ffffff;\n  --carousel-pagintation-size: 12px;\n  --carousel-pagintation-border: 2px;\n  --carousel-pagintation-offest: 15px;\n  --carousel-pagintation-margin: 4px;\n  --carousel-nav-width: 27px;\n  --carousel-nav-height: 44px;\n  --carousel-nav-thickness: 2;\n  --carousel-nav-offset: 15px ;\n}\n.swiper-container .swiper-button-prev,\n.swiper-container .swiper-container-rtl .swiper-button-next {\n  background-image: none;\n  left: var(--carousel-nav-offset);\n  right: auto;\n  width: var(--carousel-nav-width);\n  height: var(--carousel-nav-height);\n  margin-top: calc(-1 * var(--carousel-nav-height) / 2);\n  background-size: var(--carousel-nav-width) var(--carousel-nav-height);\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  z-index: 1000;\n}\n.swiper-container .swiper-button-next,\n.swiper-container .swiper-container-rtl .swiper-button-prev {\n  background-image: none;\n  left: auto;\n  right: var(--carousel-nav-offset);\n  width: var(--carousel-nav-width);\n  height: var(--carousel-nav-height);\n  margin-top: calc(-1 * var(--carousel-nav-height) / 2);\n  background-size: var(--carousel-nav-width) var(--carousel-nav-height);\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  z-index: 1000;\n}\n.swiper-container .gallery-nav {\n  stroke-width: var(--carousel-nav-thickness);\n  fill: none;\n  stroke: currentColor;\n}\n.swiper-container .swiper-pagination {\n  bottom: var(--carousel-pagintation-offest);\n}\n.swiper-container .swiper-pagination-bullet {\n  width: var(--carousel-pagintation-size);\n  height: var(--carousel-pagintation-size);\n  opacity: 1;\n  margin: 0 var(--carousel-pagintation-margin) !important;\n}\n.text-black .swiper-pagination-bullet {\n  background: var(--carousel-p-fill-black);\n  border: var(--carousel-pagintation-border) solid var(--carousel-p-border-black);\n}\n.text-black .swiper-pagination-bullet:hover {\n  background: var(--carousel-p-fill-hover-black);\n  border-color: var(--carousel-p-border-hover-black);\n}\n.text-black .swiper-pagination-bullet-active {\n  background: var(--carousel-p-fill-active-black);\n  border-color: var(--carousel-p-border-active-black);\n}\n.text-black .swiper-button-prev,\n.text-black .swiper-container-rtl .swiper-button-next {\n  color: var(--carousel-p-border-black);\n}\n.text-black .swiper-button-prev:hover,\n.text-black .swiper-container-rtl .swiper-button-next:hover {\n  color: var(--carousel-p-border-hover-black);\n}\n.text-black .swiper-button-next,\n.text-black .swiper-container-rtl .swiper-button-prev {\n  color: var(--carousel-p-border-black);\n}\n.text-black .swiper-button-next:hover,\n.text-black .swiper-container-rtl .swiper-button-prev:hover {\n  color: var(--carousel-p-border-hover-black);\n}\n.text-white .swiper-pagination-bullet {\n  background: var(--carousel-p-fill-white);\n  border: var(--carousel-pagintation-border) solid var(--carousel-p-border-white);\n}\n.text-white .swiper-pagination-bullet:hover {\n  background: var(--carousel-p-fill-hover-white);\n  border-color: var(--carousel-p-border-hover-white);\n}\n.text-white .swiper-pagination-bullet-active {\n  background: var(--carousel-p-fill-active-white);\n  border-color: var(--carousel-p-border-active-white);\n}\n.text-white .swiper-button-prev,\n.text-white .swiper-container-rtl .swiper-button-next {\n  color: var(--carousel-p-border-white);\n}\n.text-white .swiper-button-prev:hover,\n.text-white .swiper-container-rtl .swiper-button-next:hover {\n  color: var(--carousel-p-border-hover-white);\n}\n.text-white .swiper-button-next,\n.text-white .swiper-container-rtl .swiper-button-prev {\n  color: var(--carousel-p-border-white);\n}\n.text-white .swiper-button-next:hover,\n.text-white .swiper-container-rtl .swiper-button-prev:hover {\n  color: var(--carousel-p-border-hover-white);\n}\n.text-light .swiper-pagination-bullet {\n  background: var(--carousel-p-fill-light);\n  border: var(--carousel-pagintation-border) solid var(--carousel-p-border-light);\n}\n.text-light .swiper-pagination-bullet:hover {\n  background: var(--carousel-p-fill-hover-light);\n  border-color: var(--carousel-p-border-hover-light);\n}\n.text-light .swiper-pagination-bullet-active {\n  background: var(--carousel-p-fill-active-light);\n  border-color: var(--carousel-p-border-active-light);\n}\n.text-light .swiper-button-prev,\n.text-light .swiper-container-rtl .swiper-button-next {\n  color: var(--carousel-p-border-light);\n}\n.text-light .swiper-button-prev:hover,\n.text-light .swiper-container-rtl .swiper-button-next:hover {\n  color: var(--carousel-p-border-hover-light);\n}\n.text-light .swiper-button-next,\n.text-light .swiper-container-rtl .swiper-button-prev {\n  color: var(--carousel-p-border-light);\n}\n.text-light .swiper-button-next:hover,\n.text-light .swiper-container-rtl .swiper-button-prev:hover {\n  color: var(--carousel-p-border-hover-light);\n}\n.text-dark .swiper-pagination-bullet {\n  background: var(--carousel-p-fill-dark);\n  border: var(--carousel-pagintation-border) solid var(--carousel-p-border-dark);\n}\n.text-dark .swiper-pagination-bullet:hover {\n  background: var(--carousel-p-fill-hover-dark);\n  border-color: var(--carousel-p-border-hover-dark);\n}\n.text-dark .swiper-pagination-bullet-active {\n  background: var(--carousel-p-fill-active-dark);\n  border-color: var(--carousel-p-border-active-dark);\n}\n.text-dark .swiper-button-prev,\n.text-dark .swiper-container-rtl .swiper-button-next {\n  color: var(--carousel-p-border-dark);\n}\n.text-dark .swiper-button-prev:hover,\n.text-dark .swiper-container-rtl .swiper-button-next:hover {\n  color: var(--carousel-p-border-hover-dark);\n}\n.text-dark .swiper-button-next,\n.text-dark .swiper-container-rtl .swiper-button-prev {\n  color: var(--carousel-p-border-dark);\n}\n.text-dark .swiper-button-next:hover,\n.text-dark .swiper-container-rtl .swiper-button-prev:hover {\n  color: var(--carousel-p-border-hover-dark);\n}\n.down-arrow {\n  position: absolute;\n  background-image: none;\n  bottom: var(--carousel-nav-offset);\n  left: 50%;\n  width: var(--carousel-nav-height);\n  height: var(--carousel-nav-width);\n  margin-left: calc(-1 * var(--carousel-nav-height) / 2);\n  display: block;\n  z-index: 1000;\n}\n.down-arrow .down-nav {\n  stroke-width: var(--carousel-nav-thickness);\n  fill: none;\n  stroke: currentColor;\n}\n.text-black .down-arrow {\n  color: var(--carousel-p-border-black);\n}\n.text-black .down-arrow:hover {\n  color: var(--carousel-p-border-hover-black);\n}\n.text-white .down-arrow {\n  color: var(--carousel-p-border-white);\n}\n.text-white .down-arrow:hover {\n  color: var(--carousel-p-border-hover-white);\n}\n.text-light .down-arrow {\n  color: var(--carousel-p-border-light);\n}\n.text-light .down-arrow:hover {\n  color: var(--carousel-p-border-hover-light);\n}\n.text-dark .down-arrow {\n  color: var(--carousel-p-border-dark);\n}\n.text-dark .down-arrow:hover {\n  color: var(--carousel-p-border-hover-dark);\n}\n:root {\n  --text-size-footer-h-size: 1.2rem;\n  --text-size-footer-h-padding: 2rem;\n  --text-size-footer-h-line-height: 1;\n  --text-size-footer-h-letter-spacing: normal;\n  --text-size-footer-h-weight: 400;\n  --text-size-footer-h-transform: none;\n  /* -- */\n  --text-size-footer-p-size: 0.8rem;\n  --text-size-footer-p-padding: 1rem;\n  --text-size-footer-p-line-height: 1.5;\n  --text-size-footer-p-letter-spacing: normal;\n  --text-size-footer-p-weight: 400;\n  --text-size-footer-p-transform: none;\n  /* -- */\n  --footer-scale-xs: 1;\n  --footer-scale-sm: 1;\n  --footer-scale-md: 1;\n  --footer-scale-lg: 1;\n  --footer-scale-xl: 1;\n  --footer-scale-xxl: 1.1;\n}\n.section-footer h1, .section-footer .h1,\n.section-footer h2,\n.section-footer .h2,\n.section-footer h3,\n.section-footer .h3,\n.section-footer h4,\n.section-footer .h4,\n.section-footer h5,\n.section-footer .h5,\n.section-footer h6,\n.section-footer .h6,\n.section-footer-legal h1,\n.section-footer-legal .h1,\n.section-footer-legal h2,\n.section-footer-legal .h2,\n.section-footer-legal h3,\n.section-footer-legal .h3,\n.section-footer-legal h4,\n.section-footer-legal .h4,\n.section-footer-legal h5,\n.section-footer-legal .h5,\n.section-footer-legal h6,\n.section-footer-legal .h6 {\n  margin: 0;\n  font-size: calc(var(--text-size-footer-h-size) * var(--footer-scale-xs));\n  padding-bottom: calc(var(--text-size-footer-h-padding) * var(--footer-scale-xs));\n  line-height: var(--text-size-footer-h-line-height);\n  letter-spacing: var(--text-size-footer-h-letter-spacing);\n  font-weight: var(--text-size-footer-h-weight);\n  text-transform: var(--text-size-footer-h-transform);\n}\n@media (min-width: 576px) {\n  .section-footer h1, .section-footer .h1,\n.section-footer h2,\n.section-footer .h2,\n.section-footer h3,\n.section-footer .h3,\n.section-footer h4,\n.section-footer .h4,\n.section-footer h5,\n.section-footer .h5,\n.section-footer h6,\n.section-footer .h6,\n.section-footer-legal h1,\n.section-footer-legal .h1,\n.section-footer-legal h2,\n.section-footer-legal .h2,\n.section-footer-legal h3,\n.section-footer-legal .h3,\n.section-footer-legal h4,\n.section-footer-legal .h4,\n.section-footer-legal h5,\n.section-footer-legal .h5,\n.section-footer-legal h6,\n.section-footer-legal .h6 {\n    font-size: calc(var(--text-size-footer-h-size) * var(--footer-scale-sm));\n    padding-bottom: calc(var(--text-size-footer-h-padding) * var(--footer-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .section-footer h1, .section-footer .h1,\n.section-footer h2,\n.section-footer .h2,\n.section-footer h3,\n.section-footer .h3,\n.section-footer h4,\n.section-footer .h4,\n.section-footer h5,\n.section-footer .h5,\n.section-footer h6,\n.section-footer .h6,\n.section-footer-legal h1,\n.section-footer-legal .h1,\n.section-footer-legal h2,\n.section-footer-legal .h2,\n.section-footer-legal h3,\n.section-footer-legal .h3,\n.section-footer-legal h4,\n.section-footer-legal .h4,\n.section-footer-legal h5,\n.section-footer-legal .h5,\n.section-footer-legal h6,\n.section-footer-legal .h6 {\n    font-size: calc(var(--text-size-footer-h-size) * var(--footer-scale-md));\n    padding-bottom: calc(var(--text-size-footer-h-padding) * var(--footer-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .section-footer h1, .section-footer .h1,\n.section-footer h2,\n.section-footer .h2,\n.section-footer h3,\n.section-footer .h3,\n.section-footer h4,\n.section-footer .h4,\n.section-footer h5,\n.section-footer .h5,\n.section-footer h6,\n.section-footer .h6,\n.section-footer-legal h1,\n.section-footer-legal .h1,\n.section-footer-legal h2,\n.section-footer-legal .h2,\n.section-footer-legal h3,\n.section-footer-legal .h3,\n.section-footer-legal h4,\n.section-footer-legal .h4,\n.section-footer-legal h5,\n.section-footer-legal .h5,\n.section-footer-legal h6,\n.section-footer-legal .h6 {\n    font-size: calc(var(--text-size-footer-h-size) * var(--footer-scale-lg));\n    padding-bottom: calc(var(--text-size-footer-h-padding) * var(--footer-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .section-footer h1, .section-footer .h1,\n.section-footer h2,\n.section-footer .h2,\n.section-footer h3,\n.section-footer .h3,\n.section-footer h4,\n.section-footer .h4,\n.section-footer h5,\n.section-footer .h5,\n.section-footer h6,\n.section-footer .h6,\n.section-footer-legal h1,\n.section-footer-legal .h1,\n.section-footer-legal h2,\n.section-footer-legal .h2,\n.section-footer-legal h3,\n.section-footer-legal .h3,\n.section-footer-legal h4,\n.section-footer-legal .h4,\n.section-footer-legal h5,\n.section-footer-legal .h5,\n.section-footer-legal h6,\n.section-footer-legal .h6 {\n    font-size: calc(var(--text-size-footer-h-size) * var(--footer-scale-xl));\n    padding-bottom: calc(var(--text-size-footer-h-padding) * var(--footer-scale-xl));\n  }\n  .section-footer h1, .section-footer .h1,\n.section-footer h2,\n.section-footer .h2,\n.section-footer h3,\n.section-footer .h3,\n.section-footer h4,\n.section-footer .h4,\n.section-footer h5,\n.section-footer .h5,\n.section-footer h6,\n.section-footer .h6,\n.section-footer-legal h1,\n.section-footer-legal .h1,\n.section-footer-legal h2,\n.section-footer-legal .h2,\n.section-footer-legal h3,\n.section-footer-legal .h3,\n.section-footer-legal h4,\n.section-footer-legal .h4,\n.section-footer-legal h5,\n.section-footer-legal .h5,\n.section-footer-legal h6,\n.section-footer-legal .h6 {\n    font-size: calc(var(--text-size-footer-h-size) * var(--footer-scale-xxl));\n    padding-bottom: calc(var(--text-size-footer-h-padding) * var(--footer-scale-xxl));\n  }\n}\n.section-footer p,\n.section-footer blockquote p,\n.section-footer blockquote cite,\n.section-footer ol,\n.section-footer ul,\n.section-footer time,\n.section-footer a,\n.section-footer-legal p,\n.section-footer-legal blockquote p,\n.section-footer-legal blockquote cite,\n.section-footer-legal ol,\n.section-footer-legal ul,\n.section-footer-legal time,\n.section-footer-legal a {\n  margin: 0;\n  display: inline-block;\n  font-size: calc(var(--text-size-footer-p-size) * var(--footer-scale-xs));\n  padding-bottom: calc(var(--text-size-footer-p-padding) * var(--footer-scale-xs));\n  line-height: var(--text-size-footer-p-line-height);\n  letter-spacing: var(--text-size-footer-p-letter-spacing);\n  font-weight: var(--text-size-footer-p-weight);\n  text-transform: var(--text-size-footer-p-transform);\n}\n@media (min-width: 576px) {\n  .section-footer p,\n.section-footer blockquote p,\n.section-footer blockquote cite,\n.section-footer ol,\n.section-footer ul,\n.section-footer time,\n.section-footer a,\n.section-footer-legal p,\n.section-footer-legal blockquote p,\n.section-footer-legal blockquote cite,\n.section-footer-legal ol,\n.section-footer-legal ul,\n.section-footer-legal time,\n.section-footer-legal a {\n    font-size: calc(var(--text-size-footer-p-size) * var(--footer-scale-sm));\n    padding-bottom: calc(var(--text-size-footer-p-padding) * var(--footer-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .section-footer p,\n.section-footer blockquote p,\n.section-footer blockquote cite,\n.section-footer ol,\n.section-footer ul,\n.section-footer time,\n.section-footer a,\n.section-footer-legal p,\n.section-footer-legal blockquote p,\n.section-footer-legal blockquote cite,\n.section-footer-legal ol,\n.section-footer-legal ul,\n.section-footer-legal time,\n.section-footer-legal a {\n    font-size: calc(var(--text-size-footer-p-size) * var(--footer-scale-md));\n    padding-bottom: calc(var(--text-size-footer-p-padding) * var(--footer-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .section-footer p,\n.section-footer blockquote p,\n.section-footer blockquote cite,\n.section-footer ol,\n.section-footer ul,\n.section-footer time,\n.section-footer a,\n.section-footer-legal p,\n.section-footer-legal blockquote p,\n.section-footer-legal blockquote cite,\n.section-footer-legal ol,\n.section-footer-legal ul,\n.section-footer-legal time,\n.section-footer-legal a {\n    font-size: calc(var(--text-size-footer-p-size) * var(--footer-scale-lg));\n    padding-bottom: calc(var(--text-size-footer-p-padding) * var(--footer-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .section-footer p,\n.section-footer blockquote p,\n.section-footer blockquote cite,\n.section-footer ol,\n.section-footer ul,\n.section-footer time,\n.section-footer a,\n.section-footer-legal p,\n.section-footer-legal blockquote p,\n.section-footer-legal blockquote cite,\n.section-footer-legal ol,\n.section-footer-legal ul,\n.section-footer-legal time,\n.section-footer-legal a {\n    font-size: calc(var(--text-size-footer-p-size) * var(--footer-scale-xl));\n    padding-bottom: calc(var(--text-size-footer-p-padding) * var(--footer-scale-xl));\n  }\n  .section-footer p,\n.section-footer blockquote p,\n.section-footer blockquote cite,\n.section-footer ol,\n.section-footer ul,\n.section-footer time,\n.section-footer a,\n.section-footer-legal p,\n.section-footer-legal blockquote p,\n.section-footer-legal blockquote cite,\n.section-footer-legal ol,\n.section-footer-legal ul,\n.section-footer-legal time,\n.section-footer-legal a {\n    font-size: calc(var(--text-size-footer-p-size) * var(--footer-scale-xxl));\n    padding-bottom: calc(var(--text-size-footer-p-padding) * var(--footer-scale-xxl));\n  }\n}\n.section-footer .h1:last-child,\n.section-footer .h2:last-child,\n.section-footer .h3:last-child,\n.section-footer .h4:last-child,\n.section-footer .h5:last-child,\n.section-footer h1:last-child,\n.section-footer h2:last-child,\n.section-footer h3:last-child,\n.section-footer h4:last-child,\n.section-footer h5:last-child,\n.section-footer p:last-child,\n.section-footer-legal .h1:last-child,\n.section-footer-legal .h2:last-child,\n.section-footer-legal .h3:last-child,\n.section-footer-legal .h4:last-child,\n.section-footer-legal .h5:last-child,\n.section-footer-legal h1:last-child,\n.section-footer-legal h2:last-child,\n.section-footer-legal h3:last-child,\n.section-footer-legal h4:last-child,\n.section-footer-legal h5:last-child,\n.section-footer-legal p:last-child {\n  margin: 0;\n  padding: 0;\n}\n:root {\n  --text-size-large-h1-xs: 1rem;\n  --text-size-large-h1-sm: 1rem;\n  --text-size-large-h1-md: 1rem;\n  --text-size-large-h1-lg: 1rem;\n  --text-size-large-h1-xl: 1rem;\n  --text-size-large-h1-xxl: 1rem;\n  --text-size-large-h1-xs-p: 1rem;\n  --text-size-large-h1-sm-p: 1rem;\n  --text-size-large-h1-md-p: 1rem;\n  --text-size-large-h1-lg-p: 1rem;\n  --text-size-large-h1-xl-p: 1rem;\n  --text-size-large-h1-xxl-p: 1rem;\n  --text-size-large-h1-lh: 1.2;\n  --text-size-large-h1-ls: normal;\n  --text-size-large-h1-w: 400;\n  --text-size-large-h1-t: none;\n  --text-size-large-h2-xs: 1rem;\n  --text-size-large-h2-sm: 1rem;\n  --text-size-large-h2-md: 1rem;\n  --text-size-large-h2-lg: 1rem;\n  --text-size-large-h2-xl: 1rem;\n  --text-size-large-h2-xxl: 1rem;\n  --text-size-large-h2-xs-p: 1rem;\n  --text-size-large-h2-sm-p: 1rem;\n  --text-size-large-h2-md-p: 1rem;\n  --text-size-large-h2-lg-p: 1rem;\n  --text-size-large-h2-xl-p: 1rem;\n  --text-size-large-h2-xxl-p: 1rem;\n  --text-size-large-h2-lh: 1.2;\n  --text-size-large-h2-ls: normal;\n  --text-size-large-h2-w: 400;\n  --text-size-large-h2-t: none;\n  --text-size-large-h3-xs: 1rem;\n  --text-size-large-h3-sm: 1rem;\n  --text-size-large-h3-md: 1rem;\n  --text-size-large-h3-lg: 1rem;\n  --text-size-large-h3-xl: 1rem;\n  --text-size-large-h3-xxl: 1rem;\n  --text-size-large-h3-xs-p: 1rem;\n  --text-size-large-h3-sm-p: 1rem;\n  --text-size-large-h3-md-p: 1rem;\n  --text-size-large-h3-lg-p: 1rem;\n  --text-size-large-h3-xl-p: 1rem;\n  --text-size-large-h3-xxl-p: 1rem;\n  --text-size-large-h3-lh: 1.2;\n  --text-size-large-h3-ls: normal;\n  --text-size-large-h3-w: 400;\n  --text-size-large-h3-t: none;\n  --text-size-large-h4-xs: 1rem;\n  --text-size-large-h4-sm: 1rem;\n  --text-size-large-h4-md: 1rem;\n  --text-size-large-h4-lg: 1rem;\n  --text-size-large-h4-xl: 1rem;\n  --text-size-large-h4-xxl: 1rem;\n  --text-size-large-h4-xs-p: 1rem;\n  --text-size-large-h4-sm-p: 1rem;\n  --text-size-large-h4-md-p: 1rem;\n  --text-size-large-h4-lg-p: 1rem;\n  --text-size-large-h4-xl-p: 1rem;\n  --text-size-large-h4-xxl-p: 1rem;\n  --text-size-large-h4-lh: 1.2;\n  --text-size-large-h4-ls: normal;\n  --text-size-large-h4-w: 400;\n  --text-size-large-h4-t: none;\n  --text-size-large-h5-xs: 1rem;\n  --text-size-large-h5-sm: 1rem;\n  --text-size-large-h5-md: 1rem;\n  --text-size-large-h5-lg: 1rem;\n  --text-size-large-h5-xl: 1rem;\n  --text-size-large-h5-xxl: 1rem;\n  --text-size-large-h5-xs-p: 1rem;\n  --text-size-large-h5-sm-p: 1rem;\n  --text-size-large-h5-md-p: 1rem;\n  --text-size-large-h5-lg-p: 1rem;\n  --text-size-large-h5-xl-p: 1rem;\n  --text-size-large-h5-xxl-p: 1rem;\n  --text-size-large-h5-lh: 1.2;\n  --text-size-large-h5-ls: normal;\n  --text-size-large-h5-w: 400;\n  --text-size-large-h5-t: none;\n  --text-size-large-p-xs: 1rem;\n  --text-size-large-p-sm: 1rem;\n  --text-size-large-p-md: 1rem;\n  --text-size-large-p-lg: 1rem;\n  --text-size-large-p-xl: 1rem;\n  --text-size-large-p-xxl: 1rem;\n  --text-size-large-p-xs-p: 1rem;\n  --text-size-large-p-sm-p: 1rem;\n  --text-size-large-p-md-p: 1rem;\n  --text-size-large-p-lg-p: 1rem;\n  --text-size-large-p-xl-p: 1rem;\n  --text-size-large-p-xxl-p: 1rem;\n  --text-size-large-p-lh: 1.2;\n  --text-size-large-p-ls: normal;\n  --text-size-large-p-w: 400;\n  --text-size-large-p-t: none;\n  --text-size-large-q-xs: 1rem;\n  --text-size-large-q-sm: 1rem;\n  --text-size-large-q-md: 1rem;\n  --text-size-large-q-lg: 1rem;\n  --text-size-large-q-xl: 1rem;\n  --text-size-large-q-xxl: 1rem;\n  --text-size-large-q-xs-p: 1rem;\n  --text-size-large-q-sm-p: 1rem;\n  --text-size-large-q-md-p: 1rem;\n  --text-size-large-q-lg-p: 1rem;\n  --text-size-large-q-xl-p: 1rem;\n  --text-size-large-q-xxl-p: 1rem;\n  --text-size-large-q-lh: 1.2;\n  --text-size-large-q-ls: normal;\n  --text-size-large-q-w: 400;\n  --text-size-large-q-t: none;\n  --text-size-large-c-xs: 1rem;\n  --text-size-large-c-sm: 1rem;\n  --text-size-large-c-md: 1rem;\n  --text-size-large-c-lg: 1rem;\n  --text-size-large-c-xl: 1rem;\n  --text-size-large-c-xxl: 1rem;\n  --text-size-large-c-xs-p: 1rem;\n  --text-size-large-c-sm-p: 1rem;\n  --text-size-large-c-md-p: 1rem;\n  --text-size-large-c-lg-p: 1rem;\n  --text-size-large-c-xl-p: 1rem;\n  --text-size-large-c-xxl-p: 1rem;\n  --text-size-large-c-lh: 1.2;\n  --text-size-large-c-ls: normal;\n  --text-size-large-c-w: 400;\n  --text-size-large-c-t: none;\n}\n.large h1,\n.large .h1 {\n  margin: 0;\n  font-size: var(--text-size-large-h1-xs);\n  padding-bottom: var(--text-size-large-h1-xs-p);\n  line-height: var(--text-size-large-h1-lh);\n  letter-spacing: var(--text-size-large-h1-ls);\n  font-weight: var(--text-size-large-h1-w);\n  text-transform: var(--text-size-large-h1-t);\n}\n@media (min-width: 576px) {\n  .large h1,\n.large .h1 {\n    font-size: var(--text-size-large-h1-sm);\n    padding-bottom: var(--text-size-large-h1-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .large h1,\n.large .h1 {\n    font-size: var(--text-size-large-h1-md);\n    padding-bottom: var(--text-size-large-h1-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .large h1,\n.large .h1 {\n    font-size: var(--text-size-large-h1-lg);\n    padding-bottom: var(--text-size-large-h1-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .large h1,\n.large .h1 {\n    font-size: var(--text-size-large-h1-xl);\n    padding-bottom: var(--text-size-large-h1-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .large h1,\n.large .h1 {\n    font-size: var(--text-size-large-h1-xxl);\n    padding-bottom: var(--text-size-large-h1-xxl-p);\n  }\n}\n.large h2,\n.large .h2 {\n  margin: 0;\n  font-size: var(--text-size-large-h2-xs);\n  padding-bottom: var(--text-size-large-h2-xs-p);\n  line-height: var(--text-size-large-h2-lh);\n  letter-spacing: var(--text-size-large-h2-ls);\n  font-weight: var(--text-size-large-h2-w);\n  text-transform: var(--text-size-large-h2-t);\n}\n@media (min-width: 576px) {\n  .large h2,\n.large .h2 {\n    font-size: var(--text-size-large-h2-sm);\n    padding-bottom: var(--text-size-large-h2-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .large h2,\n.large .h2 {\n    font-size: var(--text-size-large-h2-md);\n    padding-bottom: var(--text-size-large-h2-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .large h2,\n.large .h2 {\n    font-size: var(--text-size-large-h2-lg);\n    padding-bottom: var(--text-size-large-h2-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .large h2,\n.large .h2 {\n    font-size: var(--text-size-large-h2-xl);\n    padding-bottom: var(--text-size-large-h2-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .large h2,\n.large .h2 {\n    font-size: var(--text-size-large-h2-xxl);\n    padding-bottom: var(--text-size-large-h2-xxl-p);\n  }\n}\n.large h3,\n.large .h3 {\n  margin: 0;\n  font-size: var(--text-size-large-h3-xs);\n  padding-bottom: var(--text-size-large-h3-xs-p);\n  line-height: var(--text-size-large-h3-lh);\n  letter-spacing: var(--text-size-large-h3-ls);\n  font-weight: var(--text-size-large-h3-w);\n  text-transform: var(--text-size-large-h3-t);\n}\n@media (min-width: 576px) {\n  .large h3,\n.large .h3 {\n    font-size: var(--text-size-large-h3-sm);\n    padding-bottom: var(--text-size-large-h3-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .large h3,\n.large .h3 {\n    font-size: var(--text-size-large-h3-md);\n    padding-bottom: var(--text-size-large-h3-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .large h3,\n.large .h3 {\n    font-size: var(--text-size-large-h3-lg);\n    padding-bottom: var(--text-size-large-h3-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .large h3,\n.large .h3 {\n    font-size: var(--text-size-large-h3-xl);\n    padding-bottom: var(--text-size-large-h3-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .large h3,\n.large .h3 {\n    font-size: var(--text-size-large-h3-xxl);\n    padding-bottom: var(--text-size-large-h3-xxl-p);\n  }\n}\n.large h4,\n.large .h4 {\n  margin: 0;\n  font-size: var(--text-size-large-h4-xs);\n  padding-bottom: var(--text-size-large-h4-xs-p);\n  line-height: var(--text-size-large-h4-lh);\n  letter-spacing: var(--text-size-large-h4-ls);\n  font-weight: var(--text-size-large-h4-w);\n  text-transform: var(--text-size-large-h4-t);\n}\n@media (min-width: 576px) {\n  .large h4,\n.large .h4 {\n    font-size: var(--text-size-large-h4-sm);\n    padding-bottom: var(--text-size-large-h4-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .large h4,\n.large .h4 {\n    font-size: var(--text-size-large-h4-md);\n    padding-bottom: var(--text-size-large-h4-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .large h4,\n.large .h4 {\n    font-size: var(--text-size-large-h4-lg);\n    padding-bottom: var(--text-size-large-h4-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .large h4,\n.large .h4 {\n    font-size: var(--text-size-large-h4-xl);\n    padding-bottom: var(--text-size-large-h4-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .large h4,\n.large .h4 {\n    font-size: var(--text-size-large-h4-xxl);\n    padding-bottom: var(--text-size-large-h4-xxl-p);\n  }\n}\n.large p,\n.large ul,\n.large ol,\n.large .p,\n.large time {\n  margin: 0;\n  font-size: var(--text-size-large-p-xs);\n  padding-bottom: var(--text-size-large-p-xs-p);\n  line-height: var(--text-size-large-p-lh);\n  letter-spacing: var(--text-size-large-p-ls);\n  font-weight: var(--text-size-large-p-w);\n  text-transform: var(--text-size-large-p-t);\n}\n@media (min-width: 576px) {\n  .large p,\n.large ul,\n.large ol,\n.large .p,\n.large time {\n    font-size: var(--text-size-large-p-sm);\n    padding-bottom: var(--text-size-large-p-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .large p,\n.large ul,\n.large ol,\n.large .p,\n.large time {\n    font-size: var(--text-size-large-p-md);\n    padding-bottom: var(--text-size-large-p-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .large p,\n.large ul,\n.large ol,\n.large .p,\n.large time {\n    font-size: var(--text-size-large-p-lg);\n    padding-bottom: var(--text-size-large-p-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .large p,\n.large ul,\n.large ol,\n.large .p,\n.large time {\n    font-size: var(--text-size-large-p-xl);\n    padding-bottom: var(--text-size-large-p-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .large p,\n.large ul,\n.large ol,\n.large .p,\n.large time {\n    font-size: var(--text-size-large-p-xxl);\n    padding-bottom: var(--text-size-large-p-xxl-p);\n  }\n}\n.large blockquote p {\n  margin: 0;\n  font-size: var(--text-size-large-q-xs);\n  padding-bottom: var(--text-size-large-q-xs-p);\n  line-height: var(--text-size-large-q-lh);\n  letter-spacing: var(--text-size-large-q-ls);\n  font-weight: var(--text-size-large-q-w);\n  text-transform: var(--text-size-large-q-t);\n}\n@media (min-width: 576px) {\n  .large blockquote p {\n    font-size: var(--text-size-large-q-sm);\n    padding-bottom: var(--text-size-large-q-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .large blockquote p {\n    font-size: var(--text-size-large-q-md);\n    padding-bottom: var(--text-size-large-q-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .large blockquote p {\n    font-size: var(--text-size-large-q-lg);\n    padding-bottom: var(--text-size-large-q-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .large blockquote p {\n    font-size: var(--text-size-large-q-xl);\n    padding-bottom: var(--text-size-large-q-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .large blockquote p {\n    font-size: var(--text-size-large-q-xxl);\n    padding-bottom: var(--text-size-large-q-xxl-p);\n  }\n}\n.large blockquote cite {\n  margin: 0;\n  font-size: var(--text-size-large-c-xs);\n  padding-bottom: var(--text-size-large-c-xs-p);\n  line-height: var(--text-size-large-c-lh);\n  letter-spacing: var(--text-size-large-c-ls);\n  font-weight: var(--text-size-large-c-w);\n  text-transform: var(--text-size-large-c-t);\n}\n@media (min-width: 576px) {\n  .large blockquote cite {\n    font-size: var(--text-size-large-c-sm);\n    padding-bottom: var(--text-size-large-c-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .large blockquote cite {\n    font-size: var(--text-size-large-c-md);\n    padding-bottom: var(--text-size-large-c-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .large blockquote cite {\n    font-size: var(--text-size-large-c-lg);\n    padding-bottom: var(--text-size-large-c-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .large blockquote cite {\n    font-size: var(--text-size-large-c-xl);\n    padding-bottom: var(--text-size-large-c-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .large blockquote cite {\n    font-size: var(--text-size-large-c-xxl);\n    padding-bottom: var(--text-size-large-c-xxl-p);\n  }\n}\n.large .h1:last-child,\n.large .h2:last-child,\n.large .h3:last-child,\n.large .h4:last-child,\n.large .h5:last-child,\n.large h1:last-child,\n.large h2:last-child,\n.large h3:last-child,\n.large h4:last-child,\n.large h5:last-child,\n.large p:last-child,\n.large ul:last-child,\n.large ol:last-child {\n  margin: 0;\n  padding: 0;\n}\n.large ul,\n.large ol {\n  padding-left: 2rem;\n}\n:root {\n  --text-size-medium-h1-xs: 1rem;\n  --text-size-medium-h1-sm: 1rem;\n  --text-size-medium-h1-md: 1rem;\n  --text-size-medium-h1-lg: 1rem;\n  --text-size-medium-h1-xl: 1rem;\n  --text-size-medium-h1-xxl: 1rem;\n  --text-size-medium-h1-xs-p: 1rem;\n  --text-size-medium-h1-sm-p: 1rem;\n  --text-size-medium-h1-md-p: 1rem;\n  --text-size-medium-h1-lg-p: 1rem;\n  --text-size-medium-h1-xl-p: 1rem;\n  --text-size-medium-h1-xxl-p: 1rem;\n  --text-size-medium-h1-lh: 1.2;\n  --text-size-medium-h1-ls: normal;\n  --text-size-medium-h1-w: 400;\n  --text-size-medium-h1-t: none;\n  --text-size-medium-h2-xs: 1rem;\n  --text-size-medium-h2-sm: 1rem;\n  --text-size-medium-h2-md: 1rem;\n  --text-size-medium-h2-lg: 1rem;\n  --text-size-medium-h2-xl: 1rem;\n  --text-size-medium-h2-xxl: 1rem;\n  --text-size-medium-h2-xs-p: 1rem;\n  --text-size-medium-h2-sm-p: 1rem;\n  --text-size-medium-h2-md-p: 1rem;\n  --text-size-medium-h2-lg-p: 1rem;\n  --text-size-medium-h2-xl-p: 1rem;\n  --text-size-medium-h2-xxl-p: 1rem;\n  --text-size-medium-h2-lh: 1.2;\n  --text-size-medium-h2-ls: normal;\n  --text-size-medium-h2-w: 400;\n  --text-size-medium-h2-t: none;\n  --text-size-medium-h3-xs: 1rem;\n  --text-size-medium-h3-sm: 1rem;\n  --text-size-medium-h3-md: 1rem;\n  --text-size-medium-h3-lg: 1rem;\n  --text-size-medium-h3-xl: 1rem;\n  --text-size-medium-h3-xxl: 1rem;\n  --text-size-medium-h3-xs-p: 1rem;\n  --text-size-medium-h3-sm-p: 1rem;\n  --text-size-medium-h3-md-p: 1rem;\n  --text-size-medium-h3-lg-p: 1rem;\n  --text-size-medium-h3-xl-p: 1rem;\n  --text-size-medium-h3-xxl-p: 1rem;\n  --text-size-medium-h3-lh: 1.2;\n  --text-size-medium-h3-ls: normal;\n  --text-size-medium-h3-w: 400;\n  --text-size-medium-h3-t: none;\n  --text-size-medium-h4-xs: 1rem;\n  --text-size-medium-h4-sm: 1rem;\n  --text-size-medium-h4-md: 1rem;\n  --text-size-medium-h4-lg: 1rem;\n  --text-size-medium-h4-xl: 1rem;\n  --text-size-medium-h4-xxl: 1rem;\n  --text-size-medium-h4-xs-p: 1rem;\n  --text-size-medium-h4-sm-p: 1rem;\n  --text-size-medium-h4-md-p: 1rem;\n  --text-size-medium-h4-lg-p: 1rem;\n  --text-size-medium-h4-xl-p: 1rem;\n  --text-size-medium-h4-xxl-p: 1rem;\n  --text-size-medium-h4-lh: 1.2;\n  --text-size-medium-h4-ls: normal;\n  --text-size-medium-h4-w: 400;\n  --text-size-medium-h4-t: none;\n  --text-size-medium-h5-xs: 1rem;\n  --text-size-medium-h5-sm: 1rem;\n  --text-size-medium-h5-md: 1rem;\n  --text-size-medium-h5-lg: 1rem;\n  --text-size-medium-h5-xl: 1rem;\n  --text-size-medium-h5-xxl: 1rem;\n  --text-size-medium-h5-xs-p: 1rem;\n  --text-size-medium-h5-sm-p: 1rem;\n  --text-size-medium-h5-md-p: 1rem;\n  --text-size-medium-h5-lg-p: 1rem;\n  --text-size-medium-h5-xl-p: 1rem;\n  --text-size-medium-h5-xxl-p: 1rem;\n  --text-size-medium-h5-lh: 1.2;\n  --text-size-medium-h5-ls: normal;\n  --text-size-medium-h5-w: 400;\n  --text-size-medium-h5-t: none;\n  --text-size-medium-p-xs: 1rem;\n  --text-size-medium-p-sm: 1rem;\n  --text-size-medium-p-md: 1rem;\n  --text-size-medium-p-lg: 1rem;\n  --text-size-medium-p-xl: 1rem;\n  --text-size-medium-p-xxl: 1rem;\n  --text-size-medium-p-xs-p: 1rem;\n  --text-size-medium-p-sm-p: 1rem;\n  --text-size-medium-p-md-p: 1rem;\n  --text-size-medium-p-lg-p: 1rem;\n  --text-size-medium-p-xl-p: 1rem;\n  --text-size-medium-p-xxl-p: 1rem;\n  --text-size-medium-p-lh: 1.2;\n  --text-size-medium-p-ls: normal;\n  --text-size-medium-p-w: 400;\n  --text-size-medium-p-t: none;\n  --text-size-medium-q-xs: 1rem;\n  --text-size-medium-q-sm: 1rem;\n  --text-size-medium-q-md: 1rem;\n  --text-size-medium-q-lg: 1rem;\n  --text-size-medium-q-xl: 1rem;\n  --text-size-medium-q-xxl: 1rem;\n  --text-size-medium-q-xs-p: 1rem;\n  --text-size-medium-q-sm-p: 1rem;\n  --text-size-medium-q-md-p: 1rem;\n  --text-size-medium-q-lg-p: 1rem;\n  --text-size-medium-q-xl-p: 1rem;\n  --text-size-medium-q-xxl-p: 1rem;\n  --text-size-medium-q-lh: 1.2;\n  --text-size-medium-q-ls: normal;\n  --text-size-medium-q-w: 400;\n  --text-size-medium-q-t: none;\n  --text-size-medium-c-xs: 1rem;\n  --text-size-medium-c-sm: 1rem;\n  --text-size-medium-c-md: 1rem;\n  --text-size-medium-c-lg: 1rem;\n  --text-size-medium-c-xl: 1rem;\n  --text-size-medium-c-xxl: 1rem;\n  --text-size-medium-c-xs-p: 1rem;\n  --text-size-medium-c-sm-p: 1rem;\n  --text-size-medium-c-md-p: 1rem;\n  --text-size-medium-c-lg-p: 1rem;\n  --text-size-medium-c-xl-p: 1rem;\n  --text-size-medium-c-xxl-p: 1rem;\n  --text-size-medium-c-lh: 1.2;\n  --text-size-medium-c-ls: normal;\n  --text-size-medium-c-w: 400;\n  --text-size-medium-c-t: none;\n}\n.medium h1,\n.medium .h1 {\n  margin: 0;\n  font-size: var(--text-size-medium-h1-xs);\n  padding-bottom: var(--text-size-medium-h1-xs-p);\n  line-height: var(--text-size-medium-h1-lh);\n  letter-spacing: var(--text-size-medium-h1-ls);\n  font-weight: var(--text-size-medium-h1-w);\n  text-transform: var(--text-size-medium-h1-t);\n}\n@media (min-width: 576px) {\n  .medium h1,\n.medium .h1 {\n    font-size: var(--text-size-medium-h1-sm);\n    padding-bottom: var(--text-size-medium-h1-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .medium h1,\n.medium .h1 {\n    font-size: var(--text-size-medium-h1-md);\n    padding-bottom: var(--text-size-medium-h1-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .medium h1,\n.medium .h1 {\n    font-size: var(--text-size-medium-h1-lg);\n    padding-bottom: var(--text-size-medium-h1-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .medium h1,\n.medium .h1 {\n    font-size: var(--text-size-medium-h1-xl);\n    padding-bottom: var(--text-size-medium-h1-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .medium h1,\n.medium .h1 {\n    font-size: var(--text-size-medium-h1-xxl);\n    padding-bottom: var(--text-size-medium-h1-xxl-p);\n  }\n}\n.medium h2,\n.medium .h2 {\n  margin: 0;\n  font-size: var(--text-size-medium-h2-xs);\n  padding-bottom: var(--text-size-medium-h2-xs-p);\n  line-height: var(--text-size-medium-h2-lh);\n  letter-spacing: var(--text-size-medium-h2-ls);\n  font-weight: var(--text-size-medium-h2-w);\n  text-transform: var(--text-size-medium-h2-t);\n}\n@media (min-width: 576px) {\n  .medium h2,\n.medium .h2 {\n    font-size: var(--text-size-medium-h2-sm);\n    padding-bottom: var(--text-size-medium-h2-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .medium h2,\n.medium .h2 {\n    font-size: var(--text-size-medium-h2-md);\n    padding-bottom: var(--text-size-medium-h2-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .medium h2,\n.medium .h2 {\n    font-size: var(--text-size-medium-h2-lg);\n    padding-bottom: var(--text-size-medium-h2-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .medium h2,\n.medium .h2 {\n    font-size: var(--text-size-medium-h2-xl);\n    padding-bottom: var(--text-size-medium-h2-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .medium h2,\n.medium .h2 {\n    font-size: var(--text-size-medium-h2-xxl);\n    padding-bottom: var(--text-size-medium-h2-xxl-p);\n  }\n}\n.medium h3,\n.medium .h3 {\n  margin: 0;\n  font-size: var(--text-size-medium-h3-xs);\n  padding-bottom: var(--text-size-medium-h3-xs-p);\n  line-height: var(--text-size-medium-h3-lh);\n  letter-spacing: var(--text-size-medium-h3-ls);\n  font-weight: var(--text-size-medium-h3-w);\n  text-transform: var(--text-size-medium-h3-t);\n}\n@media (min-width: 576px) {\n  .medium h3,\n.medium .h3 {\n    font-size: var(--text-size-medium-h3-sm);\n    padding-bottom: var(--text-size-medium-h3-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .medium h3,\n.medium .h3 {\n    font-size: var(--text-size-medium-h3-md);\n    padding-bottom: var(--text-size-medium-h3-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .medium h3,\n.medium .h3 {\n    font-size: var(--text-size-medium-h3-lg);\n    padding-bottom: var(--text-size-medium-h3-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .medium h3,\n.medium .h3 {\n    font-size: var(--text-size-medium-h3-xl);\n    padding-bottom: var(--text-size-medium-h3-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .medium h3,\n.medium .h3 {\n    font-size: var(--text-size-medium-h3-xxl);\n    padding-bottom: var(--text-size-medium-h3-xxl-p);\n  }\n}\n.medium h4,\n.medium .h4 {\n  margin: 0;\n  font-size: var(--text-size-medium-h4-xs);\n  padding-bottom: var(--text-size-medium-h4-xs-p);\n  line-height: var(--text-size-medium-h4-lh);\n  letter-spacing: var(--text-size-medium-h4-ls);\n  font-weight: var(--text-size-medium-h4-w);\n  text-transform: var(--text-size-medium-h4-t);\n}\n@media (min-width: 576px) {\n  .medium h4,\n.medium .h4 {\n    font-size: var(--text-size-medium-h4-sm);\n    padding-bottom: var(--text-size-medium-h4-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .medium h4,\n.medium .h4 {\n    font-size: var(--text-size-medium-h4-md);\n    padding-bottom: var(--text-size-medium-h4-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .medium h4,\n.medium .h4 {\n    font-size: var(--text-size-medium-h4-lg);\n    padding-bottom: var(--text-size-medium-h4-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .medium h4,\n.medium .h4 {\n    font-size: var(--text-size-medium-h4-xl);\n    padding-bottom: var(--text-size-medium-h4-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .medium h4,\n.medium .h4 {\n    font-size: var(--text-size-medium-h4-xxl);\n    padding-bottom: var(--text-size-medium-h4-xxl-p);\n  }\n}\n.medium p,\n.medium ul,\n.medium ol,\n.medium .p,\n.medium time {\n  margin: 0;\n  font-size: var(--text-size-medium-p-xs);\n  padding-bottom: var(--text-size-medium-p-xs-p);\n  line-height: var(--text-size-medium-p-lh);\n  letter-spacing: var(--text-size-medium-p-ls);\n  font-weight: var(--text-size-medium-p-w);\n  text-transform: var(--text-size-medium-p-t);\n}\n@media (min-width: 576px) {\n  .medium p,\n.medium ul,\n.medium ol,\n.medium .p,\n.medium time {\n    font-size: var(--text-size-medium-p-sm);\n    padding-bottom: var(--text-size-medium-p-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .medium p,\n.medium ul,\n.medium ol,\n.medium .p,\n.medium time {\n    font-size: var(--text-size-medium-p-md);\n    padding-bottom: var(--text-size-medium-p-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .medium p,\n.medium ul,\n.medium ol,\n.medium .p,\n.medium time {\n    font-size: var(--text-size-medium-p-lg);\n    padding-bottom: var(--text-size-medium-p-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .medium p,\n.medium ul,\n.medium ol,\n.medium .p,\n.medium time {\n    font-size: var(--text-size-medium-p-xl);\n    padding-bottom: var(--text-size-medium-p-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .medium p,\n.medium ul,\n.medium ol,\n.medium .p,\n.medium time {\n    font-size: var(--text-size-medium-p-xxl);\n    padding-bottom: var(--text-size-medium-p-xxl-p);\n  }\n}\n.medium blockquote p {\n  margin: 0;\n  font-size: var(--text-size-medium-q-xs);\n  padding-bottom: var(--text-size-medium-q-xs-p);\n  line-height: var(--text-size-medium-q-lh);\n  letter-spacing: var(--text-size-medium-q-ls);\n  font-weight: var(--text-size-medium-q-w);\n  text-transform: var(--text-size-medium-q-t);\n}\n@media (min-width: 576px) {\n  .medium blockquote p {\n    font-size: var(--text-size-medium-q-sm);\n    padding-bottom: var(--text-size-medium-q-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .medium blockquote p {\n    font-size: var(--text-size-medium-q-md);\n    padding-bottom: var(--text-size-medium-q-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .medium blockquote p {\n    font-size: var(--text-size-medium-q-lg);\n    padding-bottom: var(--text-size-medium-q-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .medium blockquote p {\n    font-size: var(--text-size-medium-q-xl);\n    padding-bottom: var(--text-size-medium-q-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .medium blockquote p {\n    font-size: var(--text-size-medium-q-xxl);\n    padding-bottom: var(--text-size-medium-q-xxl-p);\n  }\n}\n.medium blockquote cite {\n  margin: 0;\n  font-size: var(--text-size-medium-c-xs);\n  padding-bottom: var(--text-size-medium-c-xs-p);\n  line-height: var(--text-size-medium-c-lh);\n  letter-spacing: var(--text-size-medium-c-ls);\n  font-weight: var(--text-size-medium-c-w);\n  text-transform: var(--text-size-medium-c-t);\n}\n@media (min-width: 576px) {\n  .medium blockquote cite {\n    font-size: var(--text-size-medium-c-sm);\n    padding-bottom: var(--text-size-medium-c-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .medium blockquote cite {\n    font-size: var(--text-size-medium-c-md);\n    padding-bottom: var(--text-size-medium-c-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .medium blockquote cite {\n    font-size: var(--text-size-medium-c-lg);\n    padding-bottom: var(--text-size-medium-c-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .medium blockquote cite {\n    font-size: var(--text-size-medium-c-xl);\n    padding-bottom: var(--text-size-medium-c-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .medium blockquote cite {\n    font-size: var(--text-size-medium-c-xxl);\n    padding-bottom: var(--text-size-medium-c-xxl-p);\n  }\n}\n.medium .h1:last-child,\n.medium .h2:last-child,\n.medium .h3:last-child,\n.medium .h4:last-child,\n.medium .h5:last-child,\n.medium h1:last-child,\n.medium h2:last-child,\n.medium h3:last-child,\n.medium h4:last-child,\n.medium h5:last-child,\n.medium p:last-child,\n.medium ul:last-child,\n.medium ol:last-child {\n  margin: 0;\n  padding: 0;\n}\n.medium ul,\n.medium ol {\n  padding-left: 2rem;\n}\n:root {\n  --text-size-small-h1-xs: 1rem;\n  --text-size-small-h1-sm: 1rem;\n  --text-size-small-h1-md: 1rem;\n  --text-size-small-h1-lg: 1rem;\n  --text-size-small-h1-xl: 1rem;\n  --text-size-small-h1-xxl: 1rem;\n  --text-size-small-h1-xs-p: 1rem;\n  --text-size-small-h1-sm-p: 1rem;\n  --text-size-small-h1-md-p: 1rem;\n  --text-size-small-h1-lg-p: 1rem;\n  --text-size-small-h1-xl-p: 1rem;\n  --text-size-small-h1-xxl-p: 1rem;\n  --text-size-small-h1-lh: 1.2;\n  --text-size-small-h1-ls: normal;\n  --text-size-small-h1-w: 400;\n  --text-size-small-h1-t: none;\n  --text-size-small-h2-xs: 1rem;\n  --text-size-small-h2-sm: 1rem;\n  --text-size-small-h2-md: 1rem;\n  --text-size-small-h2-lg: 1rem;\n  --text-size-small-h2-xl: 1rem;\n  --text-size-small-h2-xxl: 1rem;\n  --text-size-small-h2-xs-p: 1rem;\n  --text-size-small-h2-sm-p: 1rem;\n  --text-size-small-h2-md-p: 1rem;\n  --text-size-small-h2-lg-p: 1rem;\n  --text-size-small-h2-xl-p: 1rem;\n  --text-size-small-h2-xxl-p: 1rem;\n  --text-size-small-h2-lh: 1.2;\n  --text-size-small-h2-ls: normal;\n  --text-size-small-h2-w: 400;\n  --text-size-small-h2-t: none;\n  --text-size-small-h3-xs: 1rem;\n  --text-size-small-h3-sm: 1rem;\n  --text-size-small-h3-md: 1rem;\n  --text-size-small-h3-lg: 1rem;\n  --text-size-small-h3-xl: 1rem;\n  --text-size-small-h3-xxl: 1rem;\n  --text-size-small-h3-xs-p: 1rem;\n  --text-size-small-h3-sm-p: 1rem;\n  --text-size-small-h3-md-p: 1rem;\n  --text-size-small-h3-lg-p: 1rem;\n  --text-size-small-h3-xl-p: 1rem;\n  --text-size-small-h3-xxl-p: 1rem;\n  --text-size-small-h3-lh: 1.2;\n  --text-size-small-h3-ls: normal;\n  --text-size-small-h3-w: 400;\n  --text-size-small-h3-t: none;\n  --text-size-small-h4-xs: 1rem;\n  --text-size-small-h4-sm: 1rem;\n  --text-size-small-h4-md: 1rem;\n  --text-size-small-h4-lg: 1rem;\n  --text-size-small-h4-xl: 1rem;\n  --text-size-small-h4-xxl: 1rem;\n  --text-size-small-h4-xs-p: 1rem;\n  --text-size-small-h4-sm-p: 1rem;\n  --text-size-small-h4-md-p: 1rem;\n  --text-size-small-h4-lg-p: 1rem;\n  --text-size-small-h4-xl-p: 1rem;\n  --text-size-small-h4-xxl-p: 1rem;\n  --text-size-small-h4-lh: 1.2;\n  --text-size-small-h4-ls: normal;\n  --text-size-small-h4-w: 400;\n  --text-size-small-h4-t: none;\n  --text-size-small-h5-xs: 1rem;\n  --text-size-small-h5-sm: 1rem;\n  --text-size-small-h5-md: 1rem;\n  --text-size-small-h5-lg: 1rem;\n  --text-size-small-h5-xl: 1rem;\n  --text-size-small-h5-xxl: 1rem;\n  --text-size-small-h5-xs-p: 1rem;\n  --text-size-small-h5-sm-p: 1rem;\n  --text-size-small-h5-md-p: 1rem;\n  --text-size-small-h5-lg-p: 1rem;\n  --text-size-small-h5-xl-p: 1rem;\n  --text-size-small-h5-xxl-p: 1rem;\n  --text-size-small-h5-lh: 1.2;\n  --text-size-small-h5-ls: normal;\n  --text-size-small-h5-w: 400;\n  --text-size-small-h5-t: none;\n  --text-size-small-p-xs: 1rem;\n  --text-size-small-p-sm: 1rem;\n  --text-size-small-p-md: 1rem;\n  --text-size-small-p-lg: 1rem;\n  --text-size-small-p-xl: 1rem;\n  --text-size-small-p-xxl: 1rem;\n  --text-size-small-p-xs-p: 1rem;\n  --text-size-small-p-sm-p: 1rem;\n  --text-size-small-p-md-p: 1rem;\n  --text-size-small-p-lg-p: 1rem;\n  --text-size-small-p-xl-p: 1rem;\n  --text-size-small-p-xxl-p: 1rem;\n  --text-size-small-p-lh: 1.2;\n  --text-size-small-p-ls: normal;\n  --text-size-small-p-w: 400;\n  --text-size-small-p-t: none;\n  --text-size-small-q-xs: 1rem;\n  --text-size-small-q-sm: 1rem;\n  --text-size-small-q-md: 1rem;\n  --text-size-small-q-lg: 1rem;\n  --text-size-small-q-xl: 1rem;\n  --text-size-small-q-xxl: 1rem;\n  --text-size-small-q-xs-p: 1rem;\n  --text-size-small-q-sm-p: 1rem;\n  --text-size-small-q-md-p: 1rem;\n  --text-size-small-q-lg-p: 1rem;\n  --text-size-small-q-xl-p: 1rem;\n  --text-size-small-q-xxl-p: 1rem;\n  --text-size-small-q-lh: 1.2;\n  --text-size-small-q-ls: normal;\n  --text-size-small-q-w: 400;\n  --text-size-small-q-t: none;\n  --text-size-small-c-xs: 1rem;\n  --text-size-small-c-sm: 1rem;\n  --text-size-small-c-md: 1rem;\n  --text-size-small-c-lg: 1rem;\n  --text-size-small-c-xl: 1rem;\n  --text-size-small-c-xxl: 1rem;\n  --text-size-small-c-xs-p: 1rem;\n  --text-size-small-c-sm-p: 1rem;\n  --text-size-small-c-md-p: 1rem;\n  --text-size-small-c-lg-p: 1rem;\n  --text-size-small-c-xl-p: 1rem;\n  --text-size-small-c-xxl-p: 1rem;\n  --text-size-small-c-lh: 1.2;\n  --text-size-small-c-ls: normal;\n  --text-size-small-c-w: 400;\n  --text-size-small-c-t: none;\n}\n.small h1,\n.small .h1 {\n  margin: 0;\n  font-size: var(--text-size-small-h1-xs);\n  padding-bottom: var(--text-size-small-h1-xs-p);\n  line-height: var(--text-size-small-h1-lh);\n  letter-spacing: var(--text-size-small-h1-ls);\n  font-weight: var(--text-size-small-h1-w);\n  text-transform: var(--text-size-small-h1-t);\n}\n@media (min-width: 576px) {\n  .small h1,\n.small .h1 {\n    font-size: var(--text-size-small-h1-sm);\n    padding-bottom: var(--text-size-small-h1-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .small h1,\n.small .h1 {\n    font-size: var(--text-size-small-h1-md);\n    padding-bottom: var(--text-size-small-h1-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .small h1,\n.small .h1 {\n    font-size: var(--text-size-small-h1-lg);\n    padding-bottom: var(--text-size-small-h1-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .small h1,\n.small .h1 {\n    font-size: var(--text-size-small-h1-xl);\n    padding-bottom: var(--text-size-small-h1-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .small h1,\n.small .h1 {\n    font-size: var(--text-size-small-h1-xxl);\n    padding-bottom: var(--text-size-small-h1-xxl-p);\n  }\n}\n.small h2,\n.small .h2 {\n  margin: 0;\n  font-size: var(--text-size-small-h2-xs);\n  padding-bottom: var(--text-size-small-h2-xs-p);\n  line-height: var(--text-size-small-h2-lh);\n  letter-spacing: var(--text-size-small-h2-ls);\n  font-weight: var(--text-size-small-h2-w);\n  text-transform: var(--text-size-small-h2-t);\n}\n@media (min-width: 576px) {\n  .small h2,\n.small .h2 {\n    font-size: var(--text-size-small-h2-sm);\n    padding-bottom: var(--text-size-small-h2-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .small h2,\n.small .h2 {\n    font-size: var(--text-size-small-h2-md);\n    padding-bottom: var(--text-size-small-h2-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .small h2,\n.small .h2 {\n    font-size: var(--text-size-small-h2-lg);\n    padding-bottom: var(--text-size-small-h2-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .small h2,\n.small .h2 {\n    font-size: var(--text-size-small-h2-xl);\n    padding-bottom: var(--text-size-small-h2-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .small h2,\n.small .h2 {\n    font-size: var(--text-size-small-h2-xxl);\n    padding-bottom: var(--text-size-small-h2-xxl-p);\n  }\n}\n.small h3,\n.small .h3 {\n  margin: 0;\n  font-size: var(--text-size-small-h3-xs);\n  padding-bottom: var(--text-size-small-h3-xs-p);\n  line-height: var(--text-size-small-h3-lh);\n  letter-spacing: var(--text-size-small-h3-ls);\n  font-weight: var(--text-size-small-h3-w);\n  text-transform: var(--text-size-small-h3-t);\n}\n@media (min-width: 576px) {\n  .small h3,\n.small .h3 {\n    font-size: var(--text-size-small-h3-sm);\n    padding-bottom: var(--text-size-small-h3-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .small h3,\n.small .h3 {\n    font-size: var(--text-size-small-h3-md);\n    padding-bottom: var(--text-size-small-h3-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .small h3,\n.small .h3 {\n    font-size: var(--text-size-small-h3-lg);\n    padding-bottom: var(--text-size-small-h3-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .small h3,\n.small .h3 {\n    font-size: var(--text-size-small-h3-xl);\n    padding-bottom: var(--text-size-small-h3-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .small h3,\n.small .h3 {\n    font-size: var(--text-size-small-h3-xxl);\n    padding-bottom: var(--text-size-small-h3-xxl-p);\n  }\n}\n.small h4,\n.small .h4 {\n  margin: 0;\n  font-size: var(--text-size-small-h4-xs);\n  padding-bottom: var(--text-size-small-h4-xs-p);\n  line-height: var(--text-size-small-h4-lh);\n  letter-spacing: var(--text-size-small-h4-ls);\n  font-weight: var(--text-size-small-h4-w);\n  text-transform: var(--text-size-small-h4-t);\n}\n@media (min-width: 576px) {\n  .small h4,\n.small .h4 {\n    font-size: var(--text-size-small-h4-sm);\n    padding-bottom: var(--text-size-small-h4-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .small h4,\n.small .h4 {\n    font-size: var(--text-size-small-h4-md);\n    padding-bottom: var(--text-size-small-h4-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .small h4,\n.small .h4 {\n    font-size: var(--text-size-small-h4-lg);\n    padding-bottom: var(--text-size-small-h4-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .small h4,\n.small .h4 {\n    font-size: var(--text-size-small-h4-xl);\n    padding-bottom: var(--text-size-small-h4-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .small h4,\n.small .h4 {\n    font-size: var(--text-size-small-h4-xxl);\n    padding-bottom: var(--text-size-small-h4-xxl-p);\n  }\n}\n.small p,\n.small ul,\n.small ol,\n.small .p,\n.small time {\n  margin: 0;\n  font-size: var(--text-size-small-p-xs);\n  padding-bottom: var(--text-size-small-p-xs-p);\n  line-height: var(--text-size-small-p-lh);\n  letter-spacing: var(--text-size-small-p-ls);\n  font-weight: var(--text-size-small-p-w);\n  text-transform: var(--text-size-small-p-t);\n}\n@media (min-width: 576px) {\n  .small p,\n.small ul,\n.small ol,\n.small .p,\n.small time {\n    font-size: var(--text-size-small-p-sm);\n    padding-bottom: var(--text-size-small-p-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .small p,\n.small ul,\n.small ol,\n.small .p,\n.small time {\n    font-size: var(--text-size-small-p-md);\n    padding-bottom: var(--text-size-small-p-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .small p,\n.small ul,\n.small ol,\n.small .p,\n.small time {\n    font-size: var(--text-size-small-p-lg);\n    padding-bottom: var(--text-size-small-p-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .small p,\n.small ul,\n.small ol,\n.small .p,\n.small time {\n    font-size: var(--text-size-small-p-xl);\n    padding-bottom: var(--text-size-small-p-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .small p,\n.small ul,\n.small ol,\n.small .p,\n.small time {\n    font-size: var(--text-size-small-p-xxl);\n    padding-bottom: var(--text-size-small-p-xxl-p);\n  }\n}\n.small blockquote p {\n  margin: 0;\n  font-size: var(--text-size-small-q-xs);\n  padding-bottom: var(--text-size-small-q-xs-p);\n  line-height: var(--text-size-small-q-lh);\n  letter-spacing: var(--text-size-small-q-ls);\n  font-weight: var(--text-size-small-q-w);\n  text-transform: var(--text-size-small-q-t);\n}\n@media (min-width: 576px) {\n  .small blockquote p {\n    font-size: var(--text-size-small-q-sm);\n    padding-bottom: var(--text-size-small-q-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .small blockquote p {\n    font-size: var(--text-size-small-q-md);\n    padding-bottom: var(--text-size-small-q-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .small blockquote p {\n    font-size: var(--text-size-small-q-lg);\n    padding-bottom: var(--text-size-small-q-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .small blockquote p {\n    font-size: var(--text-size-small-q-xl);\n    padding-bottom: var(--text-size-small-q-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .small blockquote p {\n    font-size: var(--text-size-small-q-xxl);\n    padding-bottom: var(--text-size-small-q-xxl-p);\n  }\n}\n.small blockquote cite {\n  margin: 0;\n  font-size: var(--text-size-small-c-xs);\n  padding-bottom: var(--text-size-small-c-xs-p);\n  line-height: var(--text-size-small-c-lh);\n  letter-spacing: var(--text-size-small-c-ls);\n  font-weight: var(--text-size-small-c-w);\n  text-transform: var(--text-size-small-c-t);\n}\n@media (min-width: 576px) {\n  .small blockquote cite {\n    font-size: var(--text-size-small-c-sm);\n    padding-bottom: var(--text-size-small-c-sm-p);\n  }\n}\n@media (min-width: 768px) {\n  .small blockquote cite {\n    font-size: var(--text-size-small-c-md);\n    padding-bottom: var(--text-size-small-c-md-p);\n  }\n}\n@media (min-width: 992px) {\n  .small blockquote cite {\n    font-size: var(--text-size-small-c-lg);\n    padding-bottom: var(--text-size-small-c-lg-p);\n  }\n}\n@media (min-width: 1200px) {\n  .small blockquote cite {\n    font-size: var(--text-size-small-c-xl);\n    padding-bottom: var(--text-size-small-c-xl-p);\n  }\n}\n@media (min-width: 1800px) {\n  .small blockquote cite {\n    font-size: var(--text-size-small-c-xxl);\n    padding-bottom: var(--text-size-small-c-xxl-p);\n  }\n}\n.small .h1:last-child,\n.small .h2:last-child,\n.small .h3:last-child,\n.small .h4:last-child,\n.small .h5:last-child,\n.small h1:last-child,\n.small h2:last-child,\n.small h3:last-child,\n.small h4:last-child,\n.small h5:last-child,\n.small p:last-child,\n.small ul:last-child,\n.small ol:last-child {\n  margin: 0;\n  padding: 0;\n}\n.small ul,\n.small ol {\n  padding-left: 2rem;\n}\n:root {\n  --text-size-x-large-h1-size: 4.2rem;\n  --text-size-x-large-h1-padding: 2rem;\n  --text-size-x-large-h1-line-height: 1;\n  --text-size-x-large-h1-letter-spacing: normal;\n  --text-size-x-large-h1-weight: 900;\n  --text-size-x-large-h1-transform: none;\n  /* -- */\n  --text-size-x-large-h2-size: 2.4rem;\n  --text-size-x-large-h2-padding: 1rem;\n  --text-size-x-large-h2-line-height: 1;\n  --text-size-x-large-h2-letter-spacing: normal;\n  --text-size-x-large-h2-weight: 900;\n  --text-size-x-large-h2-transform: none;\n  /* -- */\n  --text-size-x-large-h3-size: 1.33rem;\n  --text-size-x-large-h3-padding: 0.5rem;\n  --text-size-x-large-h3-line-height: 1;\n  --text-size-x-large-h3-letter-spacing: normal;\n  --text-size-x-large-h3-weight: 900;\n  --text-size-x-large-h3-transform: none;\n  /* -- */\n  --text-size-x-large-h4-size: 1.33rem;\n  --text-size-x-large-h4-padding: 0.5rem;\n  --text-size-x-large-h4-line-height: 1;\n  --text-size-x-large-h4-letter-spacing: normal;\n  --text-size-x-large-h4-weight: 900;\n  --text-size-x-large-h4-transform: none;\n  /* -- */\n  --text-size-x-large-p-size: 1.33rem;\n  --text-size-x-large-p-padding: 1rem;\n  --text-size-x-large-p-line-height: 1.5;\n  --text-size-x-large-p-letter-spacing: normal;\n  --text-size-x-large-p-weight: normal;\n  --text-size-x-large-p-transform: none;\n  /* -- */\n  --text-size-x-large-q-p-size: 1.33rem;\n  --text-size-x-large-q-p-padding: 1rem;\n  --text-size-x-large-q-p-line-height: 1.5;\n  --text-size-x-large-q-p-letter-spacing: normal;\n  --text-size-x-large-q-p-weight: normal;\n  --text-size-x-large-q-p-transform: none;\n  /* -- */\n  --text-size-x-large-q-c-size: 1rem;\n  --text-size-x-large-q-c-padding: 1rem;\n  --text-size-x-large-q-c-line-height: 1.5;\n  --text-size-x-large-q-c-letter-spacing: normal;\n  --text-size-x-large-q-c-weight: normal;\n  --text-size-x-large-q-c-transform: none;\n  /* -- */\n  --text-size-x-large-scale-xs: 1;\n  --text-size-x-large-scale-sm: 1;\n  --text-size-x-large-scale-md: 1;\n  --text-size-x-large-scale-lg: 1;\n  --text-size-x-large-scale-xl: 1;\n  --text-size-x-large-scale-xxl: 1;\n}\n.x-large h1,\n.x-large .h1 {\n  margin: 0;\n  font-size: calc(var(--text-size-x-large-h1-size) * var(--text-size-x-large-scale-xs));\n  padding-bottom: calc(var(--text-size-x-large-h1-padding) * var(--text-size-x-large-scale-xs));\n  line-height: var(--text-size-x-large-h1-line-height);\n  letter-spacing: var(--text-size-x-large-h1-letter-spacing);\n  font-weight: var(--text-size-x-large-h1-weight);\n  text-transform: var(--text-size-x-large-h1-transform);\n}\n@media (min-width: 576px) {\n  .x-large h1,\n.x-large .h1 {\n    font-size: calc(var(--text-size-x-large-h1-size) * var(--text-size-x-large-scale-sm));\n    padding-bottom: calc(var(--text-size-x-large-h1-padding) * var(--text-size-x-large-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .x-large h1,\n.x-large .h1 {\n    font-size: calc(var(--text-size-x-large-h1-size) * var(--text-size-x-large-scale-md));\n    padding-bottom: calc(var(--text-size-x-large-h1-padding) * var(--text-size-x-large-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .x-large h1,\n.x-large .h1 {\n    font-size: calc(var(--text-size-x-large-h1-size) * var(--text-size-x-large-scale-lg));\n    padding-bottom: calc(var(--text-size-x-large-h1-padding) * var(--text-size-x-large-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .x-large h1,\n.x-large .h1 {\n    font-size: calc(var(--text-size-x-large-h1-size) * var(--text-size-x-large-scale-xl));\n    padding-bottom: calc(var(--text-size-x-large-h1-padding) * var(--text-size-x-large-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .x-large h1,\n.x-large .h1 {\n    font-size: calc(var(--text-size-x-large-h1-size) * var(--text-size-x-large-scale-xxl));\n    padding-bottom: calc(var(--text-size-x-large-h1-padding) * var(--text-size-x-large-scale-xxl));\n  }\n}\n.x-large h2,\n.x-large .h2 {\n  margin: 0;\n  font-size: calc(var(--text-size-x-large-h2-size) * var(--text-size-x-large-scale-xs));\n  padding-bottom: calc(var(--text-size-x-large-h2-padding) * var(--text-size-x-large-scale-xs));\n  line-height: var(--text-size-x-large-h2-line-height);\n  letter-spacing: var(--text-size-x-large-h2-letter-spacing);\n  font-weight: var(--text-size-x-large-h2-weight);\n  text-transform: var(--text-size-x-large-h2-transform);\n}\n@media (min-width: 576px) {\n  .x-large h2,\n.x-large .h2 {\n    font-size: calc(var(--text-size-x-large-h2-size) * var(--text-size-x-large-scale-sm));\n    padding-bottom: calc(var(--text-size-x-large-h2-padding) * var(--text-size-x-large-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .x-large h2,\n.x-large .h2 {\n    font-size: calc(var(--text-size-x-large-h2-size) * var(--text-size-x-large-scale-md));\n    padding-bottom: calc(var(--text-size-x-large-h2-padding) * var(--text-size-x-large-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .x-large h2,\n.x-large .h2 {\n    font-size: calc(var(--text-size-x-large-h2-size) * var(--text-size-x-large-scale-lg));\n    padding-bottom: calc(var(--text-size-x-large-h2-padding) * var(--text-size-x-large-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .x-large h2,\n.x-large .h2 {\n    font-size: calc(var(--text-size-x-large-h2-size) * var(--text-size-x-large-scale-xl));\n    padding-bottom: calc(var(--text-size-x-large-h2-padding) * var(--text-size-x-large-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .x-large h2,\n.x-large .h2 {\n    font-size: calc(var(--text-size-x-large-h2-size) * var(--text-size-x-large-scale-xxl));\n    padding-bottom: calc(var(--text-size-x-large-h2-padding) * var(--text-size-x-large-scale-xxl));\n  }\n}\n.x-large h3,\n.x-large .h3 {\n  margin: 0;\n  font-size: calc(var(--text-size-x-large-h3-size) * var(--text-size-x-large-scale-xs));\n  padding-bottom: calc(var(--text-size-x-large-h3-padding) * var(--text-size-x-large-scale-xs));\n  line-height: var(--text-size-x-large-h3-line-height);\n  letter-spacing: var(--text-size-x-large-h3-letter-spacing);\n  font-weight: var(--text-size-x-large-h3-weight);\n  text-transform: var(--text-size-x-large-h3-transform);\n}\n@media (min-width: 576px) {\n  .x-large h3,\n.x-large .h3 {\n    font-size: calc(var(--text-size-x-large-h3-size) * var(--text-size-x-large-scale-sm));\n    padding-bottom: calc(var(--text-size-x-large-h3-padding) * var(--text-size-x-large-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .x-large h3,\n.x-large .h3 {\n    font-size: calc(var(--text-size-x-large-h3-size) * var(--text-size-x-large-scale-md));\n    padding-bottom: calc(var(--text-size-x-large-h3-padding) * var(--text-size-x-large-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .x-large h3,\n.x-large .h3 {\n    font-size: calc(var(--text-size-x-large-h3-size) * var(--text-size-x-large-scale-lg));\n    padding-bottom: calc(var(--text-size-x-large-h3-padding) * var(--text-size-x-large-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .x-large h3,\n.x-large .h3 {\n    font-size: calc(var(--text-size-x-large-h3-size) * var(--text-size-x-large-scale-xl));\n    padding-bottom: calc(var(--text-size-x-large-h3-padding) * var(--text-size-x-large-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .x-large h3,\n.x-large .h3 {\n    font-size: calc(var(--text-size-x-large-h3-size) * var(--text-size-x-large-scale-xxl));\n    padding-bottom: calc(var(--text-size-x-large-h3-padding) * var(--text-size-x-large-scale-xxl));\n  }\n}\n.x-large h4,\n.x-large .h4 {\n  margin: 0;\n  font-size: calc(var(--text-size-x-large-h4-size) * var(--text-size-x-large-scale-xs));\n  padding-bottom: calc(var(--text-size-x-large-h4-padding) * var(--text-size-x-large-scale-xs));\n  line-height: var(--text-size-x-large-h4-line-height);\n  letter-spacing: var(--text-size-x-large-h4-letter-spacing);\n  font-weight: var(--text-size-x-large-h4-weight);\n  text-transform: var(--text-size-x-large-h4-transform);\n}\n@media (min-width: 576px) {\n  .x-large h4,\n.x-large .h4 {\n    font-size: calc(var(--text-size-x-large-h4-size) * var(--text-size-x-large-scale-sm));\n    padding-bottom: calc(var(--text-size-x-large-h4-padding) * var(--text-size-x-large-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .x-large h4,\n.x-large .h4 {\n    font-size: calc(var(--text-size-x-large-h4-size) * var(--text-size-x-large-scale-md));\n    padding-bottom: calc(var(--text-size-x-large-h4-padding) * var(--text-size-x-large-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .x-large h4,\n.x-large .h4 {\n    font-size: calc(var(--text-size-x-large-h4-size) * var(--text-size-x-large-scale-lg));\n    padding-bottom: calc(var(--text-size-x-large-h4-padding) * var(--text-size-x-large-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .x-large h4,\n.x-large .h4 {\n    font-size: calc(var(--text-size-x-large-h4-size) * var(--text-size-x-large-scale-xl));\n    padding-bottom: calc(var(--text-size-x-large-h4-padding) * var(--text-size-x-large-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .x-large h4,\n.x-large .h4 {\n    font-size: calc(var(--text-size-x-large-h4-size) * var(--text-size-x-large-scale-xxl));\n    padding-bottom: calc(var(--text-size-x-large-h4-padding) * var(--text-size-x-large-scale-xxl));\n  }\n}\n.x-large p,\n.x-large ul,\n.x-large ol,\n.x-large .p {\n  margin: 0;\n  font-size: calc(var(--text-size-x-large-p-size) * var(--text-size-x-large-scale-xs));\n  padding-bottom: calc(var(--text-size-x-large-p-padding) * var(--text-size-x-large-scale-xs));\n  line-height: var(--text-size-x-large-p-line-height);\n  letter-spacing: var(--text-size-x-large-p-letter-spacing);\n  font-weight: var(--text-size-x-large-p-weight);\n  text-transform: var(--text-size-x-large-p-transform);\n}\n@media (min-width: 576px) {\n  .x-large p,\n.x-large ul,\n.x-large ol,\n.x-large .p {\n    font-size: calc(var(--text-size-x-large-p-size) * var(--text-size-x-large-scale-sm));\n    padding-bottom: calc(var(--text-size-x-large-p-padding) * var(--text-size-x-large-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .x-large p,\n.x-large ul,\n.x-large ol,\n.x-large .p {\n    font-size: calc(var(--text-size-x-large-p-size) * var(--text-size-x-large-scale-md));\n    padding-bottom: calc(var(--text-size-x-large-p-padding) * var(--text-size-x-large-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .x-large p,\n.x-large ul,\n.x-large ol,\n.x-large .p {\n    font-size: calc(var(--text-size-x-large-p-size) * var(--text-size-x-large-scale-lg));\n    padding-bottom: calc(var(--text-size-x-large-p-padding) * var(--text-size-x-large-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .x-large p,\n.x-large ul,\n.x-large ol,\n.x-large .p {\n    font-size: calc(var(--text-size-x-large-p-size) * var(--text-size-x-large-scale-xl));\n    padding-bottom: calc(var(--text-size-x-large-p-padding) * var(--text-size-x-large-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .x-large p,\n.x-large ul,\n.x-large ol,\n.x-large .p {\n    font-size: calc(var(--text-size-x-large-p-size) * var(--text-size-x-large-scale-xxl));\n    padding-bottom: calc(var(--text-size-x-large-p-padding) * var(--text-size-x-large-scale-xxl));\n  }\n}\n.x-large blockquote p {\n  margin: 0;\n  font-size: calc(var(--text-size-x-large-q-p-size) * var(--text-size-x-large-scale-xs));\n  padding-bottom: calc(var(--text-size-x-large-q-p-padding) * var(--text-size-x-large-scale-xs));\n  line-height: var(--text-size-x-large-q-p-line-height);\n  letter-spacing: var(--text-size-x-large-q-p-letter-spacing);\n  font-weight: var(--text-size-x-large-q-p-weight);\n  text-transform: var(--text-size-x-large-q-p-transform);\n}\n@media (min-width: 576px) {\n  .x-large blockquote p {\n    font-size: calc(var(--text-size-x-large-q-p-size) * var(--text-size-x-large-scale-sm));\n    padding-bottom: calc(var(--text-size-x-large-q-p-padding) * var(--text-size-x-large-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .x-large blockquote p {\n    font-size: calc(var(--text-size-x-large-q-p-size) * var(--text-size-x-large-scale-md));\n    padding-bottom: calc(var(--text-size-x-large-q-p-padding) * var(--text-size-x-large-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .x-large blockquote p {\n    font-size: calc(var(--text-size-x-large-q-p-size) * var(--text-size-x-large-scale-lg));\n    padding-bottom: calc(var(--text-size-x-large-q-p-padding) * var(--text-size-x-large-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .x-large blockquote p {\n    font-size: calc(var(--text-size-x-large-q-p-size) * var(--text-size-x-large-scale-xl));\n    padding-bottom: calc(var(--text-size-x-large-q-p-padding) * var(--text-size-x-large-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .x-large blockquote p {\n    font-size: calc(var(--text-size-x-large-q-p-size) * var(--text-size-x-large-scale-xxl));\n    padding-bottom: calc(var(--text-size-x-large-q-p-padding) * var(--text-size-x-large-scale-xxl));\n  }\n}\n.x-large blockquote cite {\n  margin: 0;\n  font-size: calc(var(--text-size-x-large-q-c-size) * var(--text-size-x-large-scale-xs));\n  padding-bottom: calc(var(--text-size-x-large-q-c-padding) * var(--text-size-x-large-scale-xs));\n  line-height: var(--text-size-x-large-q-c-line-height);\n  letter-spacing: var(--text-size-x-large-q-c-letter-spacing);\n  font-weight: var(--text-size-x-large-q-c-weight);\n  text-transform: var(--text-size-x-large-q-c-transform);\n}\n@media (min-width: 576px) {\n  .x-large blockquote cite {\n    font-size: calc(var(--text-size-x-large-q-c-size) * var(--text-size-x-large-scale-sm));\n    padding-bottom: calc(var(--text-size-x-large-q-c-padding) * var(--text-size-x-large-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .x-large blockquote cite {\n    font-size: calc(var(--text-size-x-large-q-c-size) * var(--text-size-x-large-scale-md));\n    padding-bottom: calc(var(--text-size-x-large-q-c-padding) * var(--text-size-x-large-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .x-large blockquote cite {\n    font-size: calc(var(--text-size-x-large-q-c-size) * var(--text-size-x-large-scale-lg));\n    padding-bottom: calc(var(--text-size-x-large-q-c-padding) * var(--text-size-x-large-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .x-large blockquote cite {\n    font-size: calc(var(--text-size-x-large-q-c-size) * var(--text-size-x-large-scale-xl));\n    padding-bottom: calc(var(--text-size-x-large-q-c-padding) * var(--text-size-x-large-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .x-large blockquote cite {\n    font-size: calc(var(--text-size-x-large-q-c-size) * var(--text-size-x-large-scale-xxl));\n    padding-bottom: calc(var(--text-size-x-large-q-c-padding) * var(--text-size-x-large-scale-xxl));\n  }\n}\n.x-large .h1:last-child,\n.x-large .h2:last-child,\n.x-large .h3:last-child,\n.x-large .h4:last-child,\n.x-large .h5:last-child,\n.x-large h1:last-child,\n.x-large h2:last-child,\n.x-large h3:last-child,\n.x-large h4:last-child,\n.x-large h5:last-child,\n.x-large p:last-child,\n.x-large ul:last-child,\n.x-large ol:last-child {\n  margin: 0;\n  padding: 0;\n}\n.x-large ul,\n.x-large ol {\n  padding-left: 2rem;\n}\n:root {\n  /* --font-headings: \"mabry-bold\", sans-serif;\n  --font-copy: \"mabry-regular'\", sans-serif;\n  --font-nav: \"mabry-bold\", sans-serif;\n  --font-buttons: \"mabry-bold\", sans-serif;\n  --font-quotes: \"mabry-bold\", sans-serif;\n  --font-cite: \"mabry-regular'\", sans-serif; */\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: var(--font-headings);\n}\nbody,\np,\nol,\nul {\n  font-family: var(--font-copy);\n}\nblockquote p {\n  font-family: var(--font-quotes);\n}\nblockquote cite {\n  font-family: var(--font-cite);\n}\nbody,\nhtml {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hr-short {\n  width: 4.2rem;\n}\nh1 .sub-heading, .h1 .sub-heading {\n  text-transform: none;\n  font-size: 50%;\n  display: block;\n}\nh2 .sub-heading, .h2 .sub-heading {\n  text-transform: none;\n  font-size: 50%;\n  display: block;\n}\nh3 .sub-heading, .h3 .sub-heading {\n  text-transform: none;\n  font-size: 80%;\n  padding-top: 5px;\n  display: block;\n}\nh4 .sub-heading, .h4 .sub-heading {\n  text-transform: none;\n  font-size: 80%;\n  padding-top: 5px;\n  display: block;\n}\n.font-italic p {\n  font-style: italic !important;\n}\n:root {\n  /* --spacing-section-padding: 15rem; */\n  --section-xs: 10rem;\n  --section-sm: 10rem;\n  --section-md: 10rem;\n  --section-lg: 10rem;\n  --section-xl: 10rem;\n  --section-xxl: 10rem;\n  --intro-xs: 5rem;\n  --intro-sm: 5rem;\n  --intro-md: 5rem;\n  --intro-lg: 5rem;\n  --intro-xl: 5rem;\n  --intro-xxl: 5rem;\n  --element-xs: 2rem;\n  --element-sm: 2rem;\n  --element-md: 2rem;\n  --element-lg: 2rem;\n  --element-xl: 2rem;\n  --element-xxl: 2rem;\n}\n.no-top-padding {\n  padding-top: 0;\n}\n.no-bottom-padding {\n  padding-bottom: 0;\n}\n.padding-top-none {\n  padding-top: 0;\n}\n.padding-bottom-none {\n  padding-bottom: 0;\n}\n.padding-top-section {\n  padding-top: var(--section-xs);\n}\n@media (min-width: 576px) {\n  .padding-top-section {\n    padding-top: var(--section-sm);\n  }\n}\n@media (min-width: 768px) {\n  .padding-top-section {\n    padding-top: var(--section-md);\n  }\n}\n@media (min-width: 992px) {\n  .padding-top-section {\n    padding-top: var(--section-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .padding-top-section {\n    padding-top: var(--section-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .padding-top-section {\n    padding-top: var(--section-xxl);\n  }\n}\n.padding-bottom-section {\n  padding-bottom: var(--section-xs);\n}\n@media (min-width: 576px) {\n  .padding-bottom-section {\n    padding-bottom: var(--section-sm);\n  }\n}\n@media (min-width: 768px) {\n  .padding-bottom-section {\n    padding-bottom: var(--section-md);\n  }\n}\n@media (min-width: 992px) {\n  .padding-bottom-section {\n    padding-bottom: var(--section-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .padding-bottom-section {\n    padding-bottom: var(--section-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .padding-bottom-section {\n    padding-bottom: var(--section-xxl);\n  }\n}\n.padding-top-intro {\n  padding-top: var(--intro-xs);\n}\n@media (min-width: 576px) {\n  .padding-top-intro {\n    padding-top: var(---intro-sm);\n  }\n}\n@media (min-width: 768px) {\n  .padding-top-intro {\n    padding-top: var(--intro-md);\n  }\n}\n@media (min-width: 992px) {\n  .padding-top-intro {\n    padding-top: var(--intro-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .padding-top-intro {\n    padding-top: var(--intro-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .padding-top-intro {\n    padding-top: var(--intro-xxl);\n  }\n}\n.padding-bottom-intro {\n  padding-bottom: var(--intro-xs);\n}\n@media (min-width: 576px) {\n  .padding-bottom-intro {\n    padding-bottom: var(---intro-sm);\n  }\n}\n@media (min-width: 768px) {\n  .padding-bottom-intro {\n    padding-bottom: var(--intro-md);\n  }\n}\n@media (min-width: 992px) {\n  .padding-bottom-intro {\n    padding-bottom: var(--intro-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .padding-bottom-intro {\n    padding-bottom: var(--intro-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .padding-bottom-intro {\n    padding-bottom: var(--intro-xxl);\n  }\n}\n.padding-top-element {\n  padding-top: var(--element-xs);\n}\n@media (min-width: 576px) {\n  .padding-top-element {\n    padding-top: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .padding-top-element {\n    padding-top: var(--element--md);\n  }\n}\n@media (min-width: 992px) {\n  .padding-top-element {\n    padding-top: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .padding-top-element {\n    padding-top: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .padding-top-element {\n    padding-top: var(--element-xxl);\n  }\n}\n.padding-bottom-element {\n  padding-bottom: var(--element-xs);\n}\n@media (min-width: 576px) {\n  .padding-bottom-element {\n    padding-bottom: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .padding-bottom-element {\n    padding-bottom: var(--element--md);\n  }\n}\n@media (min-width: 992px) {\n  .padding-bottom-element {\n    padding-bottom: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .padding-bottom-element {\n    padding-bottom: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .padding-bottom-element {\n    padding-bottom: var(--element-xxl);\n  }\n}\n.margin-top-element {\n  margin-top: var(--element-xs);\n}\n@media (min-width: 576px) {\n  .margin-top-element {\n    margin-top: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .margin-top-element {\n    margin-top: var(--element--md);\n  }\n}\n@media (min-width: 992px) {\n  .margin-top-element {\n    margin-top: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .margin-top-element {\n    margin-top: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .margin-top-element {\n    margin-top: var(--element-xxl);\n  }\n}\n.margin-bottom-element {\n  margin-bottom: var(--element-xs);\n}\n@media (min-width: 576px) {\n  .margin-bottom-element {\n    margin-bottom: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .margin-bottom-element {\n    margin-bottom: var(--element--md);\n  }\n}\n@media (min-width: 992px) {\n  .margin-bottom-element {\n    margin-bottom: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .margin-bottom-element {\n    margin-bottom: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .margin-bottom-element {\n    margin-bottom: var(--element-xxl);\n  }\n}\n.margin-mobile-bottom-element {\n  margin-bottom: var(--element-xs);\n}\n@media (min-width: 576px) {\n  .margin-mobile-bottom-element {\n    margin-bottom: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .margin-mobile-bottom-element {\n    margin-bottom: var(--element--md);\n  }\n}\n@media (min-width: 992px) {\n  .margin-mobile-bottom-element {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .margin-mobile-bottom-element {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1800px) {\n  .margin-mobile-bottom-element {\n    margin-bottom: 0;\n  }\n}\n.margin-mobile-top-element {\n  margin-top: var(--element-xs);\n}\n@media (min-width: 576px) {\n  .margin-mobile-top-element {\n    margin-top: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .margin-mobile-top-element {\n    margin-top: var(--element--md);\n  }\n}\n@media (min-width: 992px) {\n  .margin-mobile-top-element {\n    margin-top: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .margin-mobile-top-element {\n    margin-top: 0;\n  }\n}\n@media (min-width: 1800px) {\n  .margin-mobile-top-element {\n    margin-top: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .p-t-mobile-none {\n    padding-top: 0;\n  }\n  .p-t-mobile-element {\n    padding-top: var(--element-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-t-mobile-element {\n    padding-top: var(--element-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-t-mobile-element {\n    padding-top: var(--element-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-t-mobile-intro {\n    padding-top: var(--intro-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-t-mobile-intro {\n    padding-top: var(--intro-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-t-mobile-intro {\n    padding-top: var(--intro-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-t-mobile-section {\n    padding-top: var(--section-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-t-mobile-section {\n    padding-top: var(--section-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-t-mobile-section {\n    padding-top: var(--section-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-r-mobile-none {\n    padding-right: 0;\n  }\n  .p-r-mobile-element {\n    padding-right: var(--element-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-r-mobile-element {\n    padding-right: var(--element-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-r-mobile-element {\n    padding-right: var(--element-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-r-mobile-intro {\n    padding-right: var(--intro-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-r-mobile-intro {\n    padding-right: var(--intro-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-r-mobile-intro {\n    padding-right: var(--intro-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-r-mobile-section {\n    padding-right: var(--section-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-r-mobile-section {\n    padding-right: var(--section-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-r-mobile-section {\n    padding-right: var(--section-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-b-mobile-none {\n    padding-bottom: 0;\n  }\n  .p-b-mobile-element {\n    padding-bottom: var(--element-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-b-mobile-element {\n    padding-bottom: var(--element-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-b-mobile-element {\n    padding-bottom: var(--element-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-b-mobile-intro {\n    padding-bottom: var(--intro-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-b-mobile-intro {\n    padding-bottom: var(--intro-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-b-mobile-intro {\n    padding-bottom: var(--intro-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-b-mobile-section {\n    padding-bottom: var(--section-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-b-mobile-section {\n    padding-bottom: var(--section-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-b-mobile-section {\n    padding-bottom: var(--section-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-l-mobile-none {\n    padding-left: 0;\n  }\n  .p-l-mobile-element {\n    padding-left: var(--element-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-l-mobile-element {\n    padding-left: var(--element-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-l-mobile-element {\n    padding-left: var(--element-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-l-mobile-intro {\n    padding-left: var(--intro-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-l-mobile-intro {\n    padding-left: var(--intro-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-l-mobile-intro {\n    padding-left: var(--intro-md);\n  }\n}\n@media (max-width: 991.98px) {\n  .p-l-mobile-section {\n    padding-left: var(--section-xs);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 576px) {\n  .p-l-mobile-section {\n    padding-left: var(--section-sm);\n  }\n}\n@media (max-width: 991.98px) and (min-width: 768px) {\n  .p-l-mobile-section {\n    padding-left: var(--section-md);\n  }\n}\n@media (min-width: 992px) {\n  .p-t-desktop-none {\n    padding-top: 0;\n  }\n  .p-t-desktop-element {\n    padding-top: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-t-desktop-element {\n    padding-top: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-t-desktop-element {\n    padding-top: var(--element-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-t-desktop-intro {\n    padding-top: var(--intro-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-t-desktop-intro {\n    padding-top: var(--intro-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-t-desktop-intro {\n    padding-top: var(--intro-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-t-desktop-section {\n    padding-top: var(--section-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-t-desktop-section {\n    padding-top: var(--section-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-t-desktop-section {\n    padding-top: var(--section-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-r-desktop-none {\n    padding-right: 0;\n  }\n  .p-r-desktop-element {\n    padding-right: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-r-desktop-element {\n    padding-right: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-r-desktop-element {\n    padding-right: var(--element-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-r-desktop-intro {\n    padding-right: var(--intro-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-r-desktop-intro {\n    padding-right: var(--intro-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-r-desktop-intro {\n    padding-right: var(--intro-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-r-desktop-section {\n    padding-right: var(--section-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-r-desktop-section {\n    padding-right: var(--section-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-r-desktop-section {\n    padding-right: var(--section-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-b-desktop-none {\n    padding-bottom: 0;\n  }\n  .p-b-desktop-element {\n    padding-bottom: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-b-desktop-element {\n    padding-bottom: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-b-desktop-element {\n    padding-bottom: var(--element-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-b-desktop-intro {\n    padding-bottom: var(--intro-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-b-desktop-intro {\n    padding-bottom: var(--intro-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-b-desktop-intro {\n    padding-bottom: var(--intro-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-b-desktop-section {\n    padding-bottom: var(--section-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-b-desktop-section {\n    padding-bottom: var(--section-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-b-desktop-section {\n    padding-bottom: var(--section-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-l-desktop-none {\n    padding-left: 0;\n  }\n  .p-l-desktop-element {\n    padding-left: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-l-desktop-element {\n    padding-left: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-l-desktop-element {\n    padding-left: var(--element-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-l-desktop-intro {\n    padding-left: var(--intro-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-l-desktop-intro {\n    padding-left: var(--intro-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-l-desktop-intro {\n    padding-left: var(--intro-xxl);\n  }\n}\n@media (min-width: 992px) {\n  .p-l-desktop-section {\n    padding-left: var(--section-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .p-l-desktop-section {\n    padding-left: var(--section-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .p-l-desktop-section {\n    padding-left: var(--section-xxl);\n  }\n}\n@media (max-width: 991.98px) {\n  .h-auto-mobile {\n    height: auto;\n  }\n  .h-fullscreen-mobile {\n    height: 100vh;\n  }\n}\n@media (min-width: 992px) {\n  .h-auto-mobile {\n    height: auto;\n  }\n  .h-fullscreen-desktop {\n    height: 100vh;\n  }\n}\n.h-fullscreen-minus-nav {\n  height: calc(100vh - var(--mobile-banner-height));\n}\n@media (min-width: 992px) {\n  .h-fullscreen-minus-nav-desktop {\n    height: calc(100vh - var(--banner-height));\n  }\n}\n.full-height {\n  height: 100%;\n}\n.inner {\n  position: relative;\n  height: 100%;\n}\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left;\n  }\n  .text-lg-right {\n    text-align: right;\n  }\n}\n/* -----------------------------------------------\n|   Backgrounds\n----------------------------------------------- */\n.background-wrapper {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.background-wrapper .top-gradient {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.background-wrapper .bottom-gradient {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.background-wrapper .bg-holder-mobile {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  will-change: transform, opacity, filter;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-repeat: no-repeat;\n  display: block;\n}\n@media (min-width: 992px) {\n  .background-wrapper .bg-holder-mobile {\n    display: none;\n  }\n}\n.background-wrapper .bg-holder-desktop {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  will-change: transform, opacity, filter;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-repeat: no-repeat;\n  display: none;\n}\n@media (min-width: 992px) {\n  .background-wrapper .bg-holder-desktop {\n    display: block;\n  }\n}\n.background-wrapper .bg-holder-all-devices {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  will-change: transform, opacity, filter;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-repeat: no-repeat;\n}\n.background-wrapper .bg-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.background-wrapper .bg-holder {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  will-change: transform, opacity, filter;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-repeat: no-repeat;\n}\n.background-wrapper .bg-holder.bg-right {\n  left: auto;\n  right: 0;\n}\n.background-wrapper .bg-holder.overlay::before {\n  position: absolute;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.25);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.background-wrapper .bg-holder.overlay-primary::before {\n  background: rgba(13, 110, 253, 0.4);\n}\n.background-wrapper .bg-holder.overlay-info::before {\n  background: rgba(13, 202, 240, 0.4);\n}\n.background-wrapper .bg-holder.overlay-success::before {\n  background: rgba(25, 135, 84, 0.4);\n}\n.background-wrapper .bg-holder.overlay-warning::before {\n  background: rgba(255, 193, 7, 0.4);\n}\n.background-wrapper .bg-holder.overlay-danger::before {\n  background: rgba(220, 53, 69, 0.4);\n}\n.background-wrapper .bg-holder.overlay-0::before {\n  background: rgba(0, 0, 0, 0.7);\n}\n.background-wrapper .bg-holder.overlay-1::before {\n  background: rgba(0, 0, 0, 0.55);\n}\n.background-wrapper .bg-holder.overlay-2::before {\n  background: rgba(0, 0, 0, 0.4);\n}\n.background-wrapper .bg-holder .bg-video {\n  position: absolute;\n  display: block;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  min-width: 100%;\n}\n.background-wrapper .bg-holder .bg-youtube {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.background-wrapper .overlay-z-index-1::before {\n  z-index: 1;\n}\n.background-wrapper .bg-fixed {\n  background-attachment: fixed;\n}\n.bg-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.bg-holder {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  will-change: transform, opacity, filter;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-repeat: no-repeat;\n}\n.bg-holder.bg-right {\n  left: auto;\n  right: 0;\n}\n.bg-holder.overlay::before {\n  position: absolute;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.25);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.bg-holder.overlay-primary::before {\n  background: rgba(13, 110, 253, 0.4);\n}\n.bg-holder.overlay-info::before {\n  background: rgba(13, 202, 240, 0.4);\n}\n.bg-holder.overlay-success::before {\n  background: rgba(25, 135, 84, 0.4);\n}\n.bg-holder.overlay-warning::before {\n  background: rgba(255, 193, 7, 0.4);\n}\n.bg-holder.overlay-danger::before {\n  background: rgba(220, 53, 69, 0.4);\n}\n.bg-holder.overlay-0::before {\n  background: rgba(0, 0, 0, 0.7);\n}\n.bg-holder.overlay-1::before {\n  background: rgba(0, 0, 0, 0.55);\n}\n.bg-holder.overlay-2::before {\n  background: rgba(0, 0, 0, 0.4);\n}\n.bg-holder .bg-video {\n  position: absolute;\n  display: block;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  min-width: 100%;\n}\n.bg-holder .bg-youtube {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.overlay-z-index-1::before {\n  z-index: 1;\n}\n.bg-fixed {\n  background-attachment: fixed;\n}\n:root {\n  /* --- */\n  --mobile-banner-background: #999;\n  --mobile-banner-height: 90px;\n  --mobile-menu-dropdown-background: #999;\n  --mobile-banner-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);\n  --mobile-banner-logo-h-padding: 15px;\n  --mobile-banner-logo-v-padding: 15px;\n  /* --- */\n  --banner-height: 90px;\n  --banner-background: #999;\n  --banner-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);\n  --banner-logo-v-padding: 20px;\n  /* --- */\n  --banner-background-hover: #111;\n  --banner-background-active: #333;\n  --banner-text-colour: #000;\n  --banner-hover-colour: #f00;\n  --banner-active-colour: #f0f;\n  /* --- */\n  --banner-font-weight: 500;\n  --banner-text-letter-spacing: normal;\n  --banner-text-transform: uppercase;\n  /* --- */\n  --banner-link-xs-text-size: 1rem;\n  --banner-link-sm-text-size: 1rem;\n  --banner-link-md-text-size: 1rem;\n  --banner-link-lg-text-size: 1rem;\n  --banner-link-xl-text-size: 1rem;\n  --banner-link-xxl-text-size: 1rem;\n  /* --- */\n  --banner-link-xs-h-padding: 10px;\n  --banner-link-sm-h-padding: 10px;\n  --banner-link-md-h-padding: 10px;\n  --banner-link-lg-h-padding: 20px;\n  --banner-link-xl-h-padding: 20px;\n  --banner-link-xxl-h-padding: 20px;\n  /* --- */\n  --banner-link-xs-v-padding: 37px;\n  --banner-link-sm-v-padding: 37px;\n  --banner-link--md-v-padding: 37px;\n  --banner-link-lg-v-padding: 41px;\n  --banner-link-xl-v-padding: 41px;\n  --banner-link-xxl-v-padding: 41px;\n  /* --- */\n  --mobile-nav-toggle-width: 40px;\n  --mobile-nav-toggle-height: 28px;\n  --mobile-nav-toggle-thickness: 14%;\n  --mobile-nav-toggle-offset: 43%;\n  --mobile-nav-toggle-colour: #f0f;\n  --mobile-nav-toggle-open-colour: #f0f;\n}\n.burger-menu-style {\n  position: fixed;\n  z-index: 5000;\n  width: 100vw;\n}\n.burger-menu-style .banner {\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 5000;\n  text-align: center;\n  height: var(--mobile-banner-height);\n  background: var(--mobile-banner-background);\n  box-shadow: var(--mobile-banner-shadow);\n}\n@media (min-width: 768px) {\n  .burger-menu-style .banner {\n    height: var(--banner-height);\n    background: var(--banner-background);\n    box-shadow: var(-banner-shadow);\n  }\n}\n.burger-menu-style .banner .brand {\n  height: 100%;\n  position: relative;\n  display: inline-block;\n  padding-top: var(--mobile-banner-logo-v-padding);\n  padding-bottom: var(--mobile-banner-logo-v-padding);\n  padding-left: var(--mobile-banner-logo-h-padding);\n  padding-right: var(--mobile-banner-logo-h-padding);\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .burger-menu-style .banner .brand {\n    padding-top: var(--banner-logo-v-padding);\n    padding-bottom: var(--banner-logo-v-padding);\n    padding-left: var(--banner-logo-h-padding);\n    padding-right: var(--banner-logo-h-padding);\n  }\n}\n.burger-menu-style .banner .brand img {\n  height: 100%;\n  width: auto;\n}\n.burger-menu-style #show-menu {\n  right: var(--mobile-banner-logo-h-padding);\n  width: var(--mobile-nav-toggle-width);\n  height: var(--mobile-nav-toggle-height);\n  float: right;\n  position: relative;\n  z-index: 500;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  cursor: pointer;\n}\n.burger-menu-style #show-menu.fixed {\n  position: fixed;\n}\n.burger-menu-style #show-menu span {\n  width: 100%;\n  height: var(--mobile-nav-toggle-thickness);\n  display: block;\n  background: var(--mobile-nav-toggle-colour);\n  position: relative;\n  top: 0;\n  left: 0;\n  transform: rotate(0deg);\n  transition: 0.2s ease-in-out;\n}\n.burger-menu-style #show-menu span + span + span {\n  transform: rotate(0deg);\n  transition: 0.2s ease-in-out;\n}\n.burger-menu-style .nav-primary {\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  background: var(--mobile-menu-dropdown-background);\n  width: 100vw;\n  height: 100vh;\n}\n.burger-menu-style .nav-primary ul.nav {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden;\n  margin: auto;\n  position: relative;\n  right: 0;\n  text-align: center;\n}\n.burger-menu-style .nav-primary ul.nav li {\n  display: block;\n}\n.burger-menu-style .nav-primary ul.nav li a {\n  color: var(--banner-text-colour);\n  letter-spacing: var(--banner-text-letter-spacing);\n  font-family: var(--font-nav);\n  font-weight: var(--banner-font-weight);\n  text-transform: var(--banner-text-transform);\n  padding: 10px;\n  display: block;\n  text-decoration: none;\n  line-height: 1.2;\n  transition: all 0.2s ease-out;\n  font-size: var(--banner-link-xs-text-size);\n}\n@media (min-width: 576px) {\n  .burger-menu-style .nav-primary ul.nav li a {\n    font-size: var(--banner-link-sm-text-size);\n  }\n}\n@media (min-width: 768px) {\n  .burger-menu-style .nav-primary ul.nav li a {\n    font-size: var(--banner-link-md-text-size);\n  }\n}\n@media (min-width: 992px) {\n  .burger-menu-style .nav-primary ul.nav li a {\n    font-size: var(--banner-link-lg-text-size);\n  }\n}\n@media (min-width: 1200px) {\n  .burger-menu-style .nav-primary ul.nav li a {\n    font-size: var(--banner-link-xl-text-size);\n  }\n}\n@media (min-width: 1800px) {\n  .burger-menu-style .nav-primary ul.nav li a {\n    font-size: var(--banner-link-xxl-text-size);\n  }\n}\n.burger-menu-style .nav-primary ul.nav li a:hover {\n  color: var(--burger-menu-dropdown-text-hover);\n  transition: all 0.2s ease-out;\n}\n.burger-menu-style.menu-open .nav-primary {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.burger-menu-style.menu-open #show-menu {\n  transition: opacity 0.2s;\n}\n.burger-menu-style.menu-open #show-menu:hover {\n  transition: opacity 0.2s;\n}\n.burger-menu-style.menu-open #show-menu span {\n  transform: rotate(45deg);\n  transition: 0.2s ease-in-out;\n  background: var(--mobile-nav-toggle-open-colour);\n  top: 43%;\n  left: 0;\n}\n.burger-menu-style.menu-open #show-menu span + span {\n  opacity: 0;\n}\n.burger-menu-style.menu-open #show-menu span + span + span {\n  opacity: 1;\n  top: -45%;\n  left: 0;\n  transform: rotate(-45deg);\n  transition: 0.2s ease-in-out;\n}\n.container-fluid, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl {\n  padding: 0;\n}\n@media (max-width: 575.98px) {\n  .container {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.card {\n  height: 100%;\n  position: relative;\n  border: 0;\n}\n.card.bg-colour-none {\n  background-color: transparent;\n}\n.card.bg-colour-none img {\n  margin-bottom: calc(var(--spacing-element-padding) * var(--spacing-scale-xs));\n}\n@media (min-width: 576px) {\n  .card.bg-colour-none img {\n    margin-bottom: calc(var(--spacing-element-padding) * var(--spacing-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .card.bg-colour-none img {\n    margin-bottom: calc(var(--spacing-element-padding) * var(--spacing-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .card.bg-colour-none img {\n    margin-bottom: calc(var(--spacing-element-padding) * var(--spacing-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .card.bg-colour-none img {\n    margin-bottom: calc(var(--spacing-element-padding) * var(--spacing-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .card.bg-colour-none img {\n    margin-bottom: calc(var(--spacing-element-padding) * var(--spacing-scale-xxl));\n  }\n}\n.card .card-meta {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.card .card-meta.card-padding {\n  padding: calc(var(--spacing-element-padding) * var(--spacing-scale-xs));\n}\n@media (min-width: 576px) {\n  .card .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .card .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .card .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .card .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .card .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-xxl));\n  }\n}\n.card.image-as-background .card-meta {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.card.image-as-background .card-meta.card-padding {\n  padding: calc(var(--spacing-element-padding) * var(--spacing-scale-xs));\n}\n@media (min-width: 576px) {\n  .card.image-as-background .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-sm));\n  }\n}\n@media (min-width: 768px) {\n  .card.image-as-background .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-md));\n  }\n}\n@media (min-width: 992px) {\n  .card.image-as-background .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-lg));\n  }\n}\n@media (min-width: 1200px) {\n  .card.image-as-background .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-xl));\n  }\n}\n@media (min-width: 1800px) {\n  .card.image-as-background .card-meta.card-padding {\n    padding: calc(var(--spacing-element-padding) * var(--spacing-scale-xxl));\n  }\n}\n.card .info {\n  flex: 1;\n}\n.card .button-cta {\n  flex: none;\n  width: 100%;\n}\n.card-icon {\n  height: 100%;\n  position: relative;\n  border: 0;\n}\n.card-icon.bg-colour-none {\n  background-color: transparent;\n}\n.card-icon.orientation-column.card-padding {\n  padding: var(--element-xs);\n}\n@media (min-width: 576px) {\n  .card-icon.orientation-column.card-padding {\n    padding: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .card-icon.orientation-column.card-padding {\n    padding: var(--element-md);\n  }\n}\n@media (min-width: 992px) {\n  .card-icon.orientation-column.card-padding {\n    padding: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .card-icon.orientation-column.card-padding {\n    padding: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .card-icon.orientation-column.card-padding {\n    padding: var(--element-xxl);\n  }\n}\n.card-icon.orientation-column .icon-center {\n  margin: 0 auto;\n}\n.card-icon.orientation-column .card-meta {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.card-icon.orientation-column .card-meta.card-padding {\n  padding: var(--element-xs);\n  padding-bottom: 0;\n}\n@media (min-width: 576px) {\n  .card-icon.orientation-column .card-meta.card-padding {\n    padding: var(--element-sm);\n    padding-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .card-icon.orientation-column .card-meta.card-padding {\n    padding: var(--element-md);\n    padding-bottom: 0;\n  }\n}\n@media (min-width: 992px) {\n  .card-icon.orientation-column .card-meta.card-padding {\n    padding: var(--element-lg);\n    padding-bottom: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .card-icon.orientation-column .card-meta.card-padding {\n    padding: var(--element-xl);\n    padding-bottom: 0;\n  }\n}\n@media (min-width: 1800px) {\n  .card-icon.orientation-column .card-meta.card-padding {\n    padding: var(--element-xxl);\n    padding-bottom: 0;\n  }\n}\n.card-icon.orientation-column .info {\n  flex: 1;\n}\n.card-icon.orientation-column .button-cta {\n  flex: none;\n  width: 100%;\n}\n.card-icon.orientation-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: auto;\n}\n.card-icon.orientation-row img {\n  margin-bottom: 0;\n}\n.card-icon.orientation-row .card-meta {\n  display: flex;\n  align-items: center;\n  padding-left: var(--element-xs);\n}\n@media (min-width: 576px) {\n  .card-icon.orientation-row .card-meta {\n    padding-left: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .card-icon.orientation-row .card-meta {\n    padding-left: var(--element--md);\n  }\n}\n@media (min-width: 992px) {\n  .card-icon.orientation-row .card-meta {\n    padding-left: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .card-icon.orientation-row .card-meta {\n    padding-left: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .card-icon.orientation-row .card-meta {\n    padding-left: var(--element-xxl);\n  }\n}\n.card-download {\n  display: block;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n@media (min-width: 992px) {\n  .card-download {\n    padding-left: 1.5vw;\n    padding-right: 1.5vw;\n    padding-bottom: 0;\n  }\n}\n.card-download a {\n  border: 1px solid #000;\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  text-decoration: none;\n  color: #000;\n  position: relative;\n  padding-top: 10px;\n  padding-bottom: 23px;\n}\n@media (min-width: 992px) {\n  .card-download a {\n    padding-top: 0.75vw;\n    padding-bottom: 2vw;\n  }\n}\n.card-download a::after {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  top: -100%;\n  left: 0;\n  content: \"\";\n  background: var(--background-color-secondary-alt);\n  z-index: 10;\n  transition: 0.25s ease-in-out;\n}\n.card-download a svg {\n  z-index: 30;\n  position: relative;\n  width: 103px;\n  height: auto;\n}\n@media (min-width: 992px) {\n  .card-download a svg {\n    width: 9vw;\n    height: auto;\n  }\n}\n.card-download a svg .download-arrow {\n  transform: translateY(0px);\n  transition: 0.25s ease-in-out;\n}\n.card-download a span {\n  display: block;\n  font-weight: 700;\n  z-index: 30;\n  position: relative;\n  font-size: 18px;\n}\n@media (min-width: 992px) {\n  .card-download a span {\n    font-size: 1.563vw;\n  }\n}\n.card-download a span + span {\n  font-weight: 300;\n}\n.card-download a:hover {\n  text-decoration: none;\n}\n.card-download a:hover svg .download-arrow {\n  transform: translateY(20px);\n  transition: 0.25s ease-in-out;\n}\n.card-download a:hover::after {\n  top: 0%;\n  transition: 0.25s ease-in-out;\n}\n.header-image {\n  height: 135vw;\n  width: 100%;\n}\n.header-image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media (min-width: 992px) {\n  .header-image {\n    height: 100vh;\n  }\n}\n.header-gy-home {\n  height: 135vw;\n  position: relative;\n}\n@media (min-width: 768px) {\n  .header-gy-home {\n    height: 100vh;\n  }\n}\n@media (min-width: 992px) {\n  .header-gy-home {\n    height: 100vh;\n  }\n}\n.header-gy-home .animated-background {\n  position: absolute;\n  top: 0;\n  left: 100vw;\n  height: 100%;\n  width: 100vw;\n}\n.header-gy-home .goat-image {\n  position: absolute;\n  bottom: 0;\n  width: 40vw;\n  height: 30vw;\n  left: 0;\n  mix-blend-mode: multiply;\n  overflow: hidden;\n}\n@media (min-width: 992px) {\n  .header-gy-home .goat-image {\n    bottom: -10px;\n    width: 20vw;\n    height: 15vw;\n  }\n}\n.header-gy-home .animated-image {\n  position: relative;\n  display: inline-block;\n  line-height: 0;\n  overflow: hidden;\n  width: 100%;\n}\n.header-gy-home .animated-image > * {\n  position: absolute;\n  display: inline-block;\n  visibility: hidden;\n  border: 0;\n  width: 100%;\n  height: auto;\n}\n.header-gy-home .title-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100vw;\n}\n:root {\n  --footer-lower-background-colour: #000;\n  --footer-lower-heading-colour: #fff;\n  --footer-lower-text-colour: #fff;\n  --footer-lower-hover-colour: #fff;\n}\n.section-lower-footer {\n  background: var(--footer-lower-background-colour);\n}\n.section-lower-footer h3, .section-lower-footer .h3 {\n  color: var(--footer-lower-heading-colour);\n}\n.section-lower-footer p, .section-lower-footer a {\n  color: var(--footer-lower-text-colour);\n}\n.section-lower-footer .menu-inline ul {\n  display: inline;\n  font-family: var(--font-nav);\n  padding: 0;\n}\n.section-lower-footer .menu-inline ul li {\n  position: relative;\n  list-style: none;\n  display: inline-block;\n}\n.section-lower-footer .menu-inline ul li a {\n  text-decoration: none;\n  padding: 20px 20px 20px 30px;\n  font-size: 1.2rem;\n}\n.section-lower-footer .menu-inline ul li:before {\n  content: \"— \";\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n@media (max-width: 767.98px) {\n  .section-lower-footer .menu-inline ul {\n    display: block;\n    width: 100%;\n    text-align: left;\n  }\n  .section-lower-footer .menu-inline ul li {\n    width: 45%;\n  }\n  .section-lower-footer .menu-inline ul li a {\n    padding: 10px 0 10px 50px;\n    display: block;\n  }\n  .section-lower-footer .menu-inline ul li:before {\n    left: 20px;\n    top: 10px;\n  }\n}\n.section-lower-footer .anchor {\n  display: none;\n  width: 2.917vw;\n  margin: 0 auto;\n}\n@media (min-width: 992px) {\n  .section-lower-footer .anchor {\n    display: block;\n  }\n}\n.section-lower-footer .anchor svg {\n  width: 100%;\n  height: auto;\n}\n.section-lower-footer .anchor:hover {\n  text-decoration: underline;\n}\n.section {\n  position: relative;\n  width: 100vw;\n}\n.section .inner {\n  position: relative;\n}\n.section-text-image .animated-image-wrapper {\n  text-align: center;\n}\n.section-text-image .animated-image-wrapper .img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n.section-text-image .animated-image-wrapper img {\n  margin: 0 auto;\n  margin-bottom: 30px;\n}\n@media (min-width: 992px) {\n  .section-text-image .animated-image-wrapper img {\n    margin-bottom: 0;\n  }\n}\n.section-text-image-50-50 {\n  position: relative;\n  height: auto;\n  /*\n  .order-lg-1 {\n    &.full-height{\n      height: 60%;\n\n      @include media-breakpoint-up(lg) {\n        height: 100%;\n      }\n    }\n\n    .animated-image-wrapper {\n      left: 0;\n      height: 60%;\n      width: 100%;\n      padding-bottom: var(--intro-xs);\n\n      @include media-breakpoint-up(sm) {\n        padding-bottom-: var(---intro-sm);\n      }\n\n      @include media-breakpoint-up(md) {\n        padding-bottom: var(--intro-md);\n      }\n\n      @include media-breakpoint-up(lg) {\n        position: absolute;\n        left: -15px;\n        height: 100%;\n        width: calc(50vw + 15px);\n        padding-bottom: 0;\n      }\n\n      img {\n        width: 100% !important;\n        height: 100% !important;\n        object-fit: cover;\n      }\n    }\n  }\n\n  .order-lg-2 {\n    &.full-height{\n      height: 60%;\n\n      @include media-breakpoint-up(lg) {\n        height: 100%;\n      }\n    }\n\n    .animated-image-wrapper {\n\n      right: 0;\n      height: 60%;\n      width: 100%;\n      padding-bottom: var(--intro-xs);\n\n      @include media-breakpoint-up(sm) {\n        padding-bottom: var(---intro-sm);\n      }\n\n      @include media-breakpoint-up(md) {\n        padding-bottom: var(--intro-md);\n      }\n\n      @include media-breakpoint-up(lg) {\n        position: absolute;\n        right: -15px;\n        height: 100%;\n        width: calc(50vw + 15px);\n        padding-bottom: 0;\n      }\n\n      img {\n        width: 100% !important;\n        height: 100% !important;\n        object-fit: cover;\n      }\n    }\n  }*/\n}\n@media (min-width: 992px) {\n  .section-text-image-50-50 {\n    height: calc(100vh - var(--burger-menu-banner-height));\n  }\n}\n.section-text-image-50-50 .container,\n.section-text-image-50-50 .container-fluid,\n.section-text-image-50-50 .container-sm,\n.section-text-image-50-50 .container-md,\n.section-text-image-50-50 .container-lg,\n.section-text-image-50-50 .container-xl,\n.section-text-image-50-50 .container-xxl {\n  position: relative;\n}\n.section-gallery .container-fluid .swiper-container, .section-gallery .container-sm .swiper-container, .section-gallery .container-md .swiper-container, .section-gallery .container-lg .swiper-container, .section-gallery .container-xl .swiper-container, .section-gallery .container-xxl .swiper-container {\n  overflow: visible;\n}\n.section-gallery .swiper-pagination-fraction, .section-gallery .swiper-pagination-custom, .section-gallery .swiper-container-horizontal > .swiper-pagination-bullets {\n  position: relative;\n  bottom: auto;\n  width: 100%;\n  z-index: 10000;\n  height: var(--element-xs);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (min-width: 576px) {\n  .section-gallery .swiper-pagination-fraction, .section-gallery .swiper-pagination-custom, .section-gallery .swiper-container-horizontal > .swiper-pagination-bullets {\n    height: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .section-gallery .swiper-pagination-fraction, .section-gallery .swiper-pagination-custom, .section-gallery .swiper-container-horizontal > .swiper-pagination-bullets {\n    height: var(--element-md);\n  }\n}\n@media (min-width: 992px) {\n  .section-gallery .swiper-pagination-fraction, .section-gallery .swiper-pagination-custom, .section-gallery .swiper-container-horizontal > .swiper-pagination-bullets {\n    height: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  .section-gallery .swiper-pagination-fraction, .section-gallery .swiper-pagination-custom, .section-gallery .swiper-container-horizontal > .swiper-pagination-bullets {\n    height: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  .section-gallery .swiper-pagination-fraction, .section-gallery .swiper-pagination-custom, .section-gallery .swiper-container-horizontal > .swiper-pagination-bullets {\n    height: var(--element-xxl);\n  }\n}\n.section-gallery .outer-wrapper {\n  position: relative;\n  text-align: center;\n}\n.section-gallery .outer-wrapper .swiper-container {\n  margin: auto;\n}\n.section-gallery .swiper-button-next, .section-gallery .swiper-button-prev {\n  background-image: none;\n  width: 2.813vw;\n  height: auto;\n  padding: 0;\n  margin-top: -4vw;\n}\n.section-gallery .swiper-button-next svg, .section-gallery .swiper-button-prev svg {\n  width: 100%;\n  height: auto;\n}\n.section-gallery .swiper-button-prev {\n  left: -8vw;\n}\n.section-gallery .swiper-button-next {\n  right: -8vw;\n}\n@media (max-width: 991.98px) {\n  .section-gallery.h-auto-mobile .gallery-wrapper {\n    height: 300px;\n  }\n  .section-gallery.h-auto-mobile .gallery-wrapper .container-fluid, .section-gallery.h-auto-mobile .gallery-wrapper .container-sm, .section-gallery.h-auto-mobile .gallery-wrapper .container-md, .section-gallery.h-auto-mobile .gallery-wrapper .container-lg, .section-gallery.h-auto-mobile .gallery-wrapper .container-xl, .section-gallery.h-auto-mobile .gallery-wrapper .container-xxl {\n    height: 300px;\n  }\n  .section-gallery.h-auto-mobile .gallery-wrapper .container-fluid .row, .section-gallery.h-auto-mobile .gallery-wrapper .container-sm .row, .section-gallery.h-auto-mobile .gallery-wrapper .container-md .row, .section-gallery.h-auto-mobile .gallery-wrapper .container-lg .row, .section-gallery.h-auto-mobile .gallery-wrapper .container-xl .row, .section-gallery.h-auto-mobile .gallery-wrapper .container-xxl .row {\n    height: 300px;\n  }\n  .section-gallery.h-auto-mobile .gallery-wrapper .container-fluid .row .column, .section-gallery.h-auto-mobile .gallery-wrapper .container-sm .row .column, .section-gallery.h-auto-mobile .gallery-wrapper .container-md .row .column, .section-gallery.h-auto-mobile .gallery-wrapper .container-lg .row .column, .section-gallery.h-auto-mobile .gallery-wrapper .container-xl .row .column, .section-gallery.h-auto-mobile .gallery-wrapper .container-xxl .row .column {\n    height: 300px;\n  }\n  .section-gallery.h-auto-mobile .gallery-wrapper .container-fluid .swiper-container, .section-gallery.h-auto-mobile .gallery-wrapper .container-sm .swiper-container, .section-gallery.h-auto-mobile .gallery-wrapper .container-md .swiper-container, .section-gallery.h-auto-mobile .gallery-wrapper .container-lg .swiper-container, .section-gallery.h-auto-mobile .gallery-wrapper .container-xl .swiper-container, .section-gallery.h-auto-mobile .gallery-wrapper .container-xxl .swiper-container {\n    height: 300px;\n  }\n  .section-gallery.h-auto-mobile .gallery-wrapper .container-fluid .swiper-container .swiper-slide, .section-gallery.h-auto-mobile .gallery-wrapper .container-sm .swiper-container .swiper-slide, .section-gallery.h-auto-mobile .gallery-wrapper .container-md .swiper-container .swiper-slide, .section-gallery.h-auto-mobile .gallery-wrapper .container-lg .swiper-container .swiper-slide, .section-gallery.h-auto-mobile .gallery-wrapper .container-xl .swiper-container .swiper-slide, .section-gallery.h-auto-mobile .gallery-wrapper .container-xxl .swiper-container .swiper-slide {\n    height: 300px;\n    width: auto;\n    text-align: center;\n  }\n  .section-gallery.h-auto-mobile .gallery-wrapper .container-fluid .swiper-container .swiper-slide img, .section-gallery.h-auto-mobile .gallery-wrapper .container-sm .swiper-container .swiper-slide img, .section-gallery.h-auto-mobile .gallery-wrapper .container-md .swiper-container .swiper-slide img, .section-gallery.h-auto-mobile .gallery-wrapper .container-lg .swiper-container .swiper-slide img, .section-gallery.h-auto-mobile .gallery-wrapper .container-xl .swiper-container .swiper-slide img, .section-gallery.h-auto-mobile .gallery-wrapper .container-xxl .swiper-container .swiper-slide img {\n    width: auto;\n    height: 300px;\n    margin: 0 auto;\n  }\n  .section-gallery .h-fullscreen-mobile {\n    height: 100vh;\n  }\n}\n@media (min-width: 992px) {\n  .section-gallery.h-fullscreen-desktop .gallery-wrapper {\n    height: 100%;\n  }\n  .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-fluid, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-sm, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-md, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-lg, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xl, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xxl {\n    height: 100%;\n  }\n  .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-fluid .row, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-sm .row, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-md .row, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-lg .row, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xl .row, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xxl .row {\n    height: 100%;\n  }\n  .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-fluid .row .column, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-sm .row .column, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-md .row .column, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-lg .row .column, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xl .row .column, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xxl .row .column {\n    height: 100%;\n  }\n  .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-fluid .swiper-container, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-sm .swiper-container, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-md .swiper-container, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-lg .swiper-container, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xl .swiper-container, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xxl .swiper-container {\n    height: 100%;\n  }\n  .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-fluid .swiper-container .swiper-slide, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-sm .swiper-container .swiper-slide, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-md .swiper-container .swiper-slide, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-lg .swiper-container .swiper-slide, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xl .swiper-container .swiper-slide, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xxl .swiper-container .swiper-slide {\n    height: 100%;\n    width: auto;\n    text-align: center;\n  }\n  .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-fluid .swiper-container .swiper-slide img, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-sm .swiper-container .swiper-slide img, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-md .swiper-container .swiper-slide img, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-lg .swiper-container .swiper-slide img, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xl .swiper-container .swiper-slide img, .section-gallery.h-fullscreen-desktop .gallery-wrapper .container-xxl .swiper-container .swiper-slide img {\n    width: auto;\n    height: 100%;\n    margin: 0 auto;\n  }\n}\n.section-gallery-grid .no-gutter {\n  padding: 0;\n}\n.section-gallery-grid .text-small {\n  padding-top: 20px;\n  line-height: 1.8;\n}\n@media (min-width: 1200px) {\n  .section-gallery-grid .text-small {\n    padding-top: 1.5vw;\n  }\n}\n.section-gallery-grid .text-small p {\n  line-height: 1.8;\n}\n.section-gallery-grid .image-wrapper {\n  position: relative;\n}\n.section-gallery-grid .image-1 {\n  padding-bottom: 30px;\n}\n.section-gallery-grid .image-2 {\n  padding-bottom: 30px;\n}\n.section-gallery-grid .image-3, .section-gallery-grid .image-4, .section-gallery-grid .image-5 {\n  padding-bottom: 30px;\n}\n.section-gallery-grid .image-3 .image-wrapper, .section-gallery-grid .image-4 .image-wrapper, .section-gallery-grid .image-5 .image-wrapper {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.section-gallery-grid .image-3 .image-wrapper::before, .section-gallery-grid .image-4 .image-wrapper::before, .section-gallery-grid .image-5 .image-wrapper::before {\n  content: \"\";\n  display: block;\n  padding-top: 61%;\n}\n.section-gallery-grid .image-3 .image-wrapper img, .section-gallery-grid .image-4 .image-wrapper img, .section-gallery-grid .image-5 .image-wrapper img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.section-svg-map .container-fluid, .section-svg-map .container-sm, .section-svg-map .container-md, .section-svg-map .container-lg, .section-svg-map .container-xl, .section-svg-map .container-xxl {\n  padding: 0;\n}\n.section-svg-map .map-wrapper {\n  position: relative;\n}\n.section-svg-map .map-wrapper .map-image img {\n  width: 100%;\n  height: auto;\n}\n.section-svg-map .map-wrapper .map-markers {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.section-svg-map .map-wrapper .map-markers svg {\n  width: 100%;\n  height: auto;\n}\n.section-floor-selector .container-fluid, .section-floor-selector .container-sm, .section-floor-selector .container-md, .section-floor-selector .container-lg, .section-floor-selector .container-xl, .section-floor-selector .container-xxl {\n  padding: 0;\n}\n.section-floor-selector .floor-selector {\n  position: relative;\n}\n.section-floor-selector .floor-selector .floors {\n  width: 100%;\n  height: auto;\n}\n.section-floor-selector .floor-selector .floors svg {\n  width: 100%;\n  height: auto;\n}\n.section-floor-selector .floor-selector .image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.section-floor-selector .floor-selector .image img {\n  width: 100%;\n  height: auto;\n}\n.section-floor-selector .floor-selector .hover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.section-floor-selector .floor-selector .hover svg {\n  width: 100%;\n  height: auto;\n}\n.section-floor-selector .floor-selector .hover svg .hover {\n  cursor: pointer;\n}\n.section-floor-gallery {\n  /*.inner {\n    position: relative;\n\n    .divider {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 1px;\n      z-index: 2000;\n    }\n\n    .compass {\n      position: absolute;\n      top: 0;\n      right: 8vw;\n      width: 2.2vw;\n      height: auto;\n      z-index: 2000;\n    }\n  }*/\n}\n.section-floor-gallery .swiper-button-prev,\n.section-floor-gallery .swiper-container-rtl .swiper-button-next {\n  right: auto;\n  top: 50%;\n  width: auto;\n  left: -20px;\n  height: 40px;\n  margin-top: -20px;\n}\n@media (min-width: 992px) {\n  .section-floor-gallery .swiper-button-prev,\n.section-floor-gallery .swiper-container-rtl .swiper-button-next {\n    height: 3.2vw;\n    margin-top: -1.6vw;\n    left: 0;\n  }\n}\n.section-floor-gallery .swiper-button-prev svg,\n.section-floor-gallery .swiper-container-rtl .swiper-button-next svg {\n  stroke-width: 1;\n  height: 40px;\n  margin-top: -20px;\n}\n@media (min-width: 992px) {\n  .section-floor-gallery .swiper-button-prev svg,\n.section-floor-gallery .swiper-container-rtl .swiper-button-next svg {\n    height: 3.2vw;\n    margin-top: -1.6vw;\n  }\n}\n.section-floor-gallery .swiper-button-prev svg .gallery-nav,\n.section-floor-gallery .swiper-container-rtl .swiper-button-next svg .gallery-nav {\n  stroke-width: 1.5;\n}\n.section-floor-gallery .swiper-button-next,\n.section-floor-gallery .swiper-container-rtl .swiper-button-prev {\n  left: auto;\n  top: 50%;\n  right: -20px;\n  height: 40px;\n  margin-top: -20px;\n}\n@media (min-width: 992px) {\n  .section-floor-gallery .swiper-button-next,\n.section-floor-gallery .swiper-container-rtl .swiper-button-prev {\n    height: 3.2vw;\n    margin-top: -1.6vw;\n    right: 0;\n  }\n}\n.section-floor-gallery .swiper-button-next svg,\n.section-floor-gallery .swiper-container-rtl .swiper-button-prev svg {\n  stroke-width: 1;\n  height: 40px;\n  margin-top: -20px;\n}\n@media (min-width: 992px) {\n  .section-floor-gallery .swiper-button-next svg,\n.section-floor-gallery .swiper-container-rtl .swiper-button-prev svg {\n    height: 3.2vw;\n    margin-top: -1.6vw;\n  }\n}\n.section-floor-gallery .swiper-button-next svg .gallery-nav,\n.section-floor-gallery .swiper-container-rtl .swiper-button-prev svg .gallery-nav {\n  stroke-width: 1.5;\n}\n.section-floor-gallery .container-fluid .swiper-container, .section-floor-gallery .container-sm .swiper-container, .section-floor-gallery .container-md .swiper-container, .section-floor-gallery .container-lg .swiper-container, .section-floor-gallery .container-xl .swiper-container, .section-floor-gallery .container-xxl .swiper-container {\n  overflow: visible;\n}\n.section-floor-gallery .swiper-slide {\n  text-align: center;\n}\n.section-floor-gallery .swiper-slide .info {\n  text-align: left;\n  padding-right: 50px;\n}\n@media (min-width: 992px) {\n  .section-floor-gallery .swiper-slide .info {\n    padding-right: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n}\n.section-floor-gallery .swiper-slide img {\n  height: auto;\n  width: 100%;\n  padding-top: var(--element-xs);\n  padding-bottom: var(--element-xs);\n}\n@media (min-width: 576px) {\n  .section-floor-gallery .swiper-slide img {\n    padding-top: var(--element-sm);\n    padding-bottom: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  .section-floor-gallery .swiper-slide img {\n    padding-top: var(--element-md);\n    padding-bottom: var(--element-md);\n  }\n}\n@media (min-width: 992px) {\n  .section-floor-gallery .swiper-slide img {\n    height: 100%;\n    width: auto;\n    margin: 0 auto;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n}\n.section-floor-gallery .floor-gallery {\n  height: 100%;\n  overflow: hidden;\n}\n.section-floor-gallery .compass {\n  position: absolute;\n  width: 40px;\n  height: auto;\n  z-index: 2000;\n  top: 0;\n  right: 0;\n}\n@media (min-width: 992px) {\n  .section-floor-gallery .compass {\n    width: 2.2vw;\n  }\n}\n.section-table .tablepress .even td {\n  background-color: transparent;\n}\n.section-table .tablepress .odd td {\n  background-color: transparent;\n}\n.section-table .tablepress td, .section-table .tablepress th {\n  padding: 12px;\n}\n.section-table .tablepress td {\n  padding-left: 0;\n}\n.section-table .text-black {\n  color: var(--text-color-black-copy);\n}\n.section-table .text-black td {\n  color: var(--text-color-black-copy);\n}\n.section-table .text-black .tablepress tbody td {\n  border-top: 1px solid var(--text-color-black-copy);\n}\n.section-table .text-black .tablepress tbody tr:first-child td {\n  border-top: 1px solid var(--text-color-black-copy);\n}\n.section-table .text-black .tablepress tbody tr:last-child td {\n  border-bottom: 1px solid var(--text-color-black-copy);\n}\n.section-table .text-white {\n  color: var(--text-color-white-copy);\n}\n.section-table .text-white td {\n  color: var(--text-color-white-copy);\n}\n.section-table .text-white .tablepress tbody td {\n  border-top: 1px solid var(--text-color-white-copy);\n}\n.section-table .text-white .tablepress tbody tr:first-child td {\n  border-top: 1px solid var(--text-color-white-copy);\n}\n.section-table .text-white .tablepress tbody tr:last-child td {\n  border-bottom: 1px solid var(--text-color-white-copy);\n}\n.section-table .text-light {\n  color: var(--text-color-light-copy);\n}\n.section-table .text-light td {\n  color: var(--text-color-light-copy);\n}\n.section-table .text-light .tablepress tbody td {\n  border-top: 1px solid var(--text-color-light-copy);\n}\n.section-table .text-light .tablepress tbody tr:first-child td {\n  border-top: 1px solid var(--text-color-light-copy);\n}\n.section-table .text-light .tablepress tbody tr:last-child td {\n  border-bottom: 1px solid var(--text-color-light-copy);\n}\n.section-table .text-dark {\n  color: var(--text-color-dark-copy);\n}\n.section-table .text-dark td {\n  color: var(--text-color-dark-copy);\n}\n.section-table .text-dark .tablepress tbody td {\n  border-top: 1px solid var(--text-color-dark-copy);\n}\n.section-table .text-dark .tablepress tbody tr:first-child td {\n  border-top: 1px solid var(--text-color-dark-copy);\n}\n.section-table .text-dark .tablepress tbody tr:last-child td {\n  border-bottom: 1px solid var(--text-color-dark-copy);\n}\n.section-fullscreen-map {\n  /* ---- switch close button ---- */\n}\n.section-fullscreen-map .container-fluid, .section-fullscreen-map .container-sm, .section-fullscreen-map .container-md, .section-fullscreen-map .container-lg, .section-fullscreen-map .container-xl, .section-fullscreen-map .container-xxl {\n  width: 100%;\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: auto;\n  margin-left: auto;\n}\n.section-fullscreen-map #map {\n  height: 700px;\n  width: 100%;\n  display: block;\n  overflow-anchor: none;\n}\n@media (min-width: 992px) {\n  .section-fullscreen-map #map {\n    height: 80vh;\n  }\n}\n.section-fullscreen-map .map-marker {\n  display: none;\n}\n.section-fullscreen-map .gm-style .gm-style-iw-c {\n  position: absolute;\n  box-sizing: border-box;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  border-radius: 18px;\n  padding: 12px;\n  color: #30333f;\n}\n.section-fullscreen-map .gm-style .gm-style-iw-d::-webkit-scrollbar-track,\n.section-fullscreen-map .gm-style .gm-style-iw-d::-webkit-scrollbar-track-piece,\n.section-fullscreen-map .gm-style .gm-style-iw-c,\n.section-fullscreen-map .gm-style .gm-style-iw-t::after {\n  background: #ffffff;\n}\n.section-fullscreen-map .gm-style-iw button.gm-ui-hover-effect img {\n  display: none !important;\n}\n.section-fullscreen-map .gm-style-iw button.gm-ui-hover-effect {\n  opacity: 1 !important;\n}\n.section-fullscreen-map .gm-style-iw button.gm-ui-hover-effect:focus {\n  outline: none;\n}\n.section-fullscreen-map .gm-style-iw button.gm-ui-hover-effect span {\n  top: 5px;\n  right: 5px;\n  position: relative;\n}\n.section-fullscreen-map .gm-style-iw button.gm-ui-hover-effect::before {\n  /*display: block;\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 378.3 378.3' style='enable-background:new 0 0 378.3 378.3;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpolygon class='st0' points='378.3,28.3 350,0 189.2,160.9 28.3,0 0,28.3 160.9,189.2 0,350 28.3,378.3 189.2,217.4 350,378.3 378.3,350 217.4,189.2 '/%3E%3C/svg%3E%0A\");\n  background-size: cover;\n  width: 12px;\n  height: 12px;\n  right: -1px;\n  top: 15px;\n  position: relative;*/\n}\n.section-fullscreen-map .content {\n  text-align: center;\n  padding: 20px;\n}\n.section-fullscreen-map .content h3, .section-fullscreen-map .content .h3 {\n  display: block;\n  padding-bottom: 15px;\n  color: #30333f;\n  text-transform: uppercase;\n  margin: 0;\n  letter-spacing: 1.1px;\n  font-size: 1.2rem;\n}\n.section-fullscreen-map .content .body-content {\n  display: block;\n  position: relative;\n  /* i {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding-left: 10px;\n    font-size: 25px;\n  } */\n}\n.section-fullscreen-map .content .body-content .marker {\n  position: absolute;\n  top: 0;\n  left: 10px;\n  width: 24px;\n  height: 32px;\n}\n.section-fullscreen-map .content .body-content i {\n  padding-left: 5px;\n  font-size: 14px;\n}\n.section-fullscreen-map .content .body-content .address {\n  display: inline-block;\n  padding-bottom: 10px;\n  font-size: 16px;\n  /* .address-inner {\n    padding-bottom: 10px;\n  } */\n}\n.section-fullscreen-map .content .body-content .address .link {\n  display: block;\n}\n.section-fullscreen-map .marker-type {\n  display: inline-block;\n  text-transform: uppercase;\n  padding: 30px;\n  cursor: pointer;\n}\n#show-menu {\n  right: calc(var(--element-xs) / 2) !important;\n  top: calc(var(--element-xs) / 2) !important;\n}\n@media (min-width: 576px) {\n  #show-menu {\n    right: calc(var(--element-sm) / 2) !important;\n    top: calc(var(--element-sm) / 2) !important;\n  }\n}\n@media (min-width: 768px) {\n  #show-menu {\n    right: var(--element-md) !important;\n    top: var(--element-md) !important;\n  }\n}\n@media (min-width: 992px) {\n  #show-menu {\n    right: var(--element-lg) !important;\n    top: var(--element-lg) !important;\n  }\n}\n@media (min-width: 1200px) {\n  #show-menu {\n    right: var(--element-xl) !important;\n    top: var(--element-xl) !important;\n  }\n}\n@media (min-width: 1800px) {\n  #show-menu {\n    right: var(--element-xxl) !important;\n    top: var(--element-xxl) !important;\n  }\n}\n#header {\n  position: relative;\n}\n#header:before {\n  display: block;\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\n  width: 500px;\n  height: 600px;\n  position: absolute;\n  left: var(--element-xs);\n}\n@media (min-width: 576px) {\n  #header:before {\n    left: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  #header:before {\n    left: var(--element-md);\n  }\n}\n@media (min-width: 992px) {\n  #header:before {\n    left: var(--element-lg);\n    display: block;\n  }\n}\n@media (min-width: 1200px) {\n  #header:before {\n    left: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  #header:before {\n    left: var(--element-xxl);\n  }\n}\n#header .top {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(var(--element-xs) * 2 + 0px);\n}\n@media (min-width: 576px) {\n  #header .top {\n    top: calc(var(--element-sm) * 2 + 0px);\n  }\n}\n@media (min-width: 768px) {\n  #header .top {\n    top: calc(var(--element-md) * 2 + 0px);\n  }\n}\n@media (min-width: 992px) {\n  #header .top {\n    top: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  #header .top {\n    top: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  #header .top {\n    top: var(--element-xxl);\n  }\n}\n#header .middle {\n  margin-bottom: 60px;\n}\n@media (min-width: 992px) {\n  #header .middle {\n    margin-bottom: 0;\n  }\n}\n#header .bottom {\n  position: absolute;\n  left: 50%;\n  text-align: center;\n  transform: translateX(-50%);\n  bottom: calc(var(--element-xs) * 2 + 60px);\n}\n@media (min-width: 576px) {\n  #header .bottom {\n    bottom: calc(var(--element-sm) * 2 + 60px);\n  }\n}\n@media (min-width: 768px) {\n  #header .bottom {\n    bottom: calc(var(--element-md) * 2 + 60px);\n  }\n}\n@media (min-width: 992px) {\n  #header .bottom {\n    bottom: calc(var(--element-lg) * 2 + 30px);\n  }\n}\n@media (min-width: 1200px) {\n  #header .bottom {\n    bottom: calc(var(--element-xl) * 2 + 30px);\n  }\n}\n@media (min-width: 1800px) {\n  #header .bottom {\n    bottom: calc(var(--element-xxl) * 2 + 30px);\n  }\n}\n#header .down-arrow {\n  position: absolute;\n  left: 50%;\n  bottom: calc(var(--element-xs) + 30px);\n  width: 35px;\n  height: auto;\n}\n@media (min-width: 576px) {\n  #header .down-arrow {\n    bottom: calc(var(--element-sm) + 30px);\n  }\n}\n@media (min-width: 768px) {\n  #header .down-arrow {\n    bottom: calc(var(--element-md) + 30px);\n  }\n}\n@media (min-width: 992px) {\n  #header .down-arrow {\n    bottom: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  #header .down-arrow {\n    bottom: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  #header .down-arrow {\n    bottom: var(--element-xxl);\n  }\n}\n#number {\n  position: relative;\n}\n#number:before {\n  content: \"\";\n  display: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ");\n  width: 600px;\n  height: 375px;\n  position: absolute;\n  right: -70px;\n  top: -150px;\n}\n#number .animated-text-wrapper {\n  padding-top: var(--element-xs);\n}\n@media (min-width: 576px) {\n  #number .animated-text-wrapper {\n    padding-top: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  #number .animated-text-wrapper {\n    padding-top: var(--element-md);\n  }\n}\n@media (min-width: 992px) {\n  #number .animated-text-wrapper {\n    display: block;\n    padding-top: var(--section-lg);\n  }\n}\n@media (min-width: 1200px) {\n  #number .animated-text-wrapper {\n    padding-top: var(--section-xl);\n  }\n}\n@media (min-width: 1800px) {\n  #number .animated-text-wrapper {\n    padding-top: var(--section-xxl);\n  }\n}\n@media (max-width: 991.98px) {\n  #gallery .swiper-slide {\n    height: 300px;\n    width: auto;\n  }\n  #gallery .swiper-slide img {\n    height: 100%;\n    width: auto;\n  }\n}\n#downloads {\n  text-align: center;\n}\n#downloads img {\n  width: 90px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 20px;\n}\n#contacts {\n  text-align: center;\n}\n#contacts .card-wrapper {\n  border-top: 1px solid var(--background-color-dark);\n  border-bottom: 1px solid var(--background-color-dark);\n  padding-top: var(--element-xs);\n}\n@media (min-width: 576px) {\n  #contacts .card-wrapper {\n    padding-top: var(--element-sm);\n  }\n}\n@media (min-width: 768px) {\n  #contacts .card-wrapper {\n    padding-top: var(--element-md);\n  }\n}\n@media (min-width: 992px) {\n  #contacts .card-wrapper {\n    padding-top: var(--element-lg);\n  }\n}\n@media (min-width: 1200px) {\n  #contacts .card-wrapper {\n    padding-top: var(--element-xl);\n  }\n}\n@media (min-width: 1800px) {\n  #contacts .card-wrapper {\n    padding-top: var(--element-xxl);\n  }\n}\n#contacts .card-wrapper .icon {\n  padding-bottom: calc(var(--element-xs) / 2);\n}\n@media (min-width: 576px) {\n  #contacts .card-wrapper .icon {\n    padding-bottom: calc(var(--element-sm) / 2);\n  }\n}\n@media (min-width: 768px) {\n  #contacts .card-wrapper .icon {\n    padding-bottom: calc(var(--element-md) / 2);\n  }\n}\n@media (min-width: 992px) {\n  #contacts .card-wrapper .icon {\n    padding-bottom: calc(var(--element-lg) / 2);\n  }\n}\n@media (min-width: 1200px) {\n  #contacts .card-wrapper .icon {\n    padding-bottom: calc(var(--element-xl) / 2);\n  }\n}\n@media (min-width: 1800px) {\n  #contacts .card-wrapper .icon {\n    padding-bottom: calc(var(--element-xxl) / 2);\n  }\n}\nbody, html {\n  background: var(--theme-background-colour);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/styles/app.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[13].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[4]!./resources/styles/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[13].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[4]!./resources/styles/app.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[13].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[4]!./resources/styles/app.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_oneOf_13_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_13_use_4_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml,%3Csvg version=%271.1%27 id=%27Layer_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 x=%270px%27 y=%270px%27 viewBox=%270 0 1068.6 668%27 style=%27enable-background:new 0 0 1068.6 668;%27 xml:space=%27preserve%27%3E%3Cstyle type=%27text/css%27%3E .st0%7Bfill:%2360B4A1;%7D .st1%7Bfill:%23E1B9C2;%7D%0A%3C/style%3E%3Cpath id=%27Path_2%27 class=%27st1%27 d=%27M0,0v493.8h599.6V668h242.7v-71.2h226.3V0H0z%27/%3E%3C/svg%3E":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg version=%271.1%27 id=%27Layer_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 x=%270px%27 y=%270px%27 viewBox=%270 0 1068.6 668%27 style=%27enable-background:new 0 0 1068.6 668;%27 xml:space=%27preserve%27%3E%3Cstyle type=%27text/css%27%3E .st0%7Bfill:%2360B4A1;%7D .st1%7Bfill:%23E1B9C2;%7D%0A%3C/style%3E%3Cpath id=%27Path_2%27 class=%27st1%27 d=%27M0,0v493.8h599.6V668h242.7v-71.2h226.3V0H0z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg version=%271.1%27 id=%27Layer_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 x=%270px%27 y=%270px%27 viewBox=%270 0 715.7 886%27 style=%27enable-background:new 0 0 715.7 886;%27 xml:space=%27preserve%27%3E%3Cstyle type=%27text/css%27%3E .st0%7Bfill:%2360B4A1;%7D .st1%7Bfill:%23E1B9C2;%7D%0A%3C/style%3E%3Cpath id=%27Path_1%27 class=%27st0%27 d=%27M73.2,0v403.1H0v329.3h263.4V886h452.3V0H73.2z%27/%3E%3C/svg%3E%0A":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg version=%271.1%27 id=%27Layer_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 x=%270px%27 y=%270px%27 viewBox=%270 0 715.7 886%27 style=%27enable-background:new 0 0 715.7 886;%27 xml:space=%27preserve%27%3E%3Cstyle type=%27text/css%27%3E .st0%7Bfill:%2360B4A1;%7D .st1%7Bfill:%23E1B9C2;%7D%0A%3C/style%3E%3Cpath id=%27Path_1%27 class=%27st0%27 d=%27M73.2,0v403.1H0v329.3h263.4V886h452.3V0H73.2z%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%20120%20120%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%3E%3Cdefs%3E%3Cline%20id%3D%27l%27%20x1%3D%2760%27%20x2%3D%2760%27%20y1%3D%277%27%20y2%3D%2727%27%20stroke%3D%27%236c6c6c%27%20stroke-width%3D%2711%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2830%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2860%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2890%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28120%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28150%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.37%27%20transform%3D%27rotate%28180%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.46%27%20transform%3D%27rotate%28210%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.56%27%20transform%3D%27rotate%28240%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.66%27%20transform%3D%27rotate%28270%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.75%27%20transform%3D%27rotate%28300%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.85%27%20transform%3D%27rotate%28330%2060%2C60%29%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%20120%20120%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%3E%3Cdefs%3E%3Cline%20id%3D%27l%27%20x1%3D%2760%27%20x2%3D%2760%27%20y1%3D%277%27%20y2%3D%2727%27%20stroke%3D%27%236c6c6c%27%20stroke-width%3D%2711%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2830%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2860%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2890%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28120%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28150%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.37%27%20transform%3D%27rotate%28180%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.46%27%20transform%3D%27rotate%28210%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.56%27%20transform%3D%27rotate%28240%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.66%27%20transform%3D%27rotate%28270%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.75%27%20transform%3D%27rotate%28300%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.85%27%20transform%3D%27rotate%28330%2060%2C60%29%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%20120%20120%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%3E%3Cdefs%3E%3Cline%20id%3D%27l%27%20x1%3D%2760%27%20x2%3D%2760%27%20y1%3D%277%27%20y2%3D%2727%27%20stroke%3D%27%23fff%27%20stroke-width%3D%2711%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2830%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2860%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2890%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28120%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28150%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.37%27%20transform%3D%27rotate%28180%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.46%27%20transform%3D%27rotate%28210%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.56%27%20transform%3D%27rotate%28240%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.66%27%20transform%3D%27rotate%28270%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.75%27%20transform%3D%27rotate%28300%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.85%27%20transform%3D%27rotate%28330%2060%2C60%29%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%20120%20120%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%3E%3Cdefs%3E%3Cline%20id%3D%27l%27%20x1%3D%2760%27%20x2%3D%2760%27%20y1%3D%277%27%20y2%3D%2727%27%20stroke%3D%27%23fff%27%20stroke-width%3D%2711%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2830%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2860%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%2890%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28120%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.27%27%20transform%3D%27rotate%28150%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.37%27%20transform%3D%27rotate%28180%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.46%27%20transform%3D%27rotate%28210%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.56%27%20transform%3D%27rotate%28240%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.66%27%20transform%3D%27rotate%28270%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.75%27%20transform%3D%27rotate%28300%2060%2C60%29%27%2F%3E%3Cuse%20xlink%3Ahref%3D%27%23l%27%20opacity%3D%27.85%27%20transform%3D%27rotate%28330%2060%2C60%29%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%27%20fill%3D%27%23000000%27%2F%3E%3C%2Fsvg%3E":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%27%20fill%3D%27%23000000%27%2F%3E%3C%2Fsvg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%27%20fill%3D%27%23007aff%27%2F%3E%3C%2Fsvg%3E":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%27%20fill%3D%27%23007aff%27%2F%3E%3C%2Fsvg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%27%20fill%3D%27%23ffffff%27%2F%3E%3C%2Fsvg%3E":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z%27%20fill%3D%27%23ffffff%27%2F%3E%3C%2Fsvg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%27%20fill%3D%27%23000000%27%2F%3E%3C%2Fsvg%3E":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%27%20fill%3D%27%23000000%27%2F%3E%3C%2Fsvg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%27%20fill%3D%27%23007aff%27%2F%3E%3C%2Fsvg%3E":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%27%20fill%3D%27%23007aff%27%2F%3E%3C%2Fsvg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%27%20fill%3D%27%23ffffff%27%2F%3E%3C%2Fsvg%3E":
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2027%2044%27%3E%3Cpath%20d%3D%27M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z%27%20fill%3D%27%23ffffff%27%2F%3E%3C%2Fsvg%3E";

/***/ }),

/***/ "./resources/fonts/TTNormsProBd.woff":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTNormsProBd.woff";

/***/ }),

/***/ "./resources/fonts/TTNormsProBd.woff2":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTNormsProBd.woff2";

/***/ }),

/***/ "./resources/fonts/TTNormsProMd.woff":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTNormsProMd.woff";

/***/ }),

/***/ "./resources/fonts/TTNormsProMd.woff2":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTNormsProMd.woff2";

/***/ }),

/***/ "./resources/fonts/TTNormsProRg.woff":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTNormsProRg.woff";

/***/ }),

/***/ "./resources/fonts/TTNormsProRg.woff2":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTNormsProRg.woff2";

/***/ }),

/***/ "jquery":
/***/ (function(module) {

"use strict";
module.exports = window["jQuery"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "app." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "8afc48b1b40c354513e0"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "sage:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesage"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksage"] = self["webpackChunksage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendor/bud.app.editor","vendor/app"], function() { return __webpack_require__("./node_modules/@roots/bud-server/lib/cjs/client/index.js?name=bud&path=/__bud/hmr"); })
/******/ 	__webpack_require__.O(undefined, ["vendor/bud.app.editor","vendor/app"], function() { return __webpack_require__("./node_modules/@roots/bud-server/lib/cjs/client/proxy-click-interceptor.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendor/bud.app.editor","vendor/app"], function() { return __webpack_require__("./resources/scripts/main.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor/bud.app.editor","vendor/app"], function() { return __webpack_require__("./resources/styles/app.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;