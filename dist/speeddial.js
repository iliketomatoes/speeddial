/**
  * speeddial - Speed dial button inspired by Google Material design
  *
  * @version v0.2.0
  * @homepage https://github.com/iliketomatoes/speeddial
  * @license MIT
  * @author Giancarlo Soverini
  */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.speeddial = factory());
}(this, function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  /**
  * Deep-extends an object with another object
  *
  * @param { Object } a The object that will be extended, then returned
  * @param { Object } b The object that will extend the first paramter
  * @return { Object }
  */
  function extend(a, b) {
      for (var key in b) {
          if (b.hasOwnProperty(key)) {
              if (_typeof(b[key]) === 'object' && b[key] !== null) {
                  a[key] = extend(a[key], b[key]);
              } else {
                  a[key] = b[key];
              }
          }
      }
      return a;
  }

  /**
  * Utility function that throws an error if querySelector returns null
  *
  * @param { String } selector
  * @param { HTMLElement } context If not specified the default context is the
  *   whole document
  * @return { HTMLElement }
  */
  function getElement(selector, context) {
      var where = context || document;
      var element = where.querySelector(selector);
      try {
          if (element === null) throw new Error('SpeedDial could not find any ${selector}');
      } catch (err) {
          console.error(err.message);
      } finally {
          return element;
      }
  }

  // Default settings
  var defaults = {

      // The actual speed dial button default class
      button: '.speed-dial__btn',

      // Default list of options class
      list: '.speed-dial__list',

      // Default list of options direction
      direction: 'up'
  };

  var SpeedDial = {
      /**
      * Method called for initializing a new instance of SpeedDial
      *
      * @param { String } selector This is the selector
      *   of the speed dial button container
      * @param { Object } options Object to override the default settings
      */
      init: function init(selector, options) {

          // Override defauls
          this.settings = extend(defaults, options);

          /**
          * Get the HTMLElement which contains both the button
          *    and the list of options
          */
          this.container = getElement(selector);

          if (this.container) {
              this.bindEvents();
              this.setDirection(this.settings.direction);
          }
      },

      /**
      * Get the container
      *
      * @return { HTMLElement }
      */
      getContainer: function getContainer() {
          return this.container;
      },

      /**
      * Get the button which triggers the list of options to open/close
      *
      * @return { HTMLElement }
      */
      getButton: function getButton() {
          return getElement(this.settings.button, this.container);
      },

      /**
      * Get the list which contains the speed dial options
      *
      * @return { HTMLElement }
      */
      getList: function getList() {
          return getElement(this.settings.list, this.container);
      },

      // Add click listener to the speed-dial button
      bindEvents: function bindEvents() {
          var btn = this.getButton();
          btn.addEventListener('click', this.clickHandler.bind(this));
      },

      // Method called when speed-dial button is clicked
      clickHandler: function clickHandler() {
          var listEl = this.getList();

          if (listEl.classList.contains('is-visible')) {
              // Close the list of options
              listEl.classList.remove('is-visible');
          } else {
              // Open the list of options
              listEl.classList.add('is-visible');
          }
      },

      // Close the list of options
      close: function close() {
          var listEl = this.getList();
          listEl.classList.remove('is-visible');
      },

      // Open the list of options
      open: function open() {
          var listEl = this.getList();
          listEl.classList.add('is-visible');
      },

      /**
      * Speed dial list of options can be viewed in 4 different directions:
      *   'up', 'down', 'left', 'right'
      *   The CSS class responsible to handle the list of options direction is added
      *   to the container
      *
      * @param { String } direction
      */
      setDirection: function setDirection(direction) {

          // Clean the classList first
          this.container.classList.remove('speed-dial--' + this.settings.direction);

          switch (direction) {
              case 'up':
                  this.container.classList.add('speed-dial--up');
                  break;
              case 'down':
                  this.container.classList.add('speed-dial--down');
                  break;
              case 'left':
                  this.container.classList.add('speed-dial--left');
                  break;
              case 'right':
                  this.container.classList.add('speed-dial--right');
                  break;
              default:
                  this.container.classList.add('speed-dial--up');
                  break;
          }

          // Update the settings object with the new direction
          this.settings.direction = direction;

          // Call an helper to set some style with Javascript
          this.styleUpdate();
      },

      // @return { String }
      getDirection: function getDirection() {
          return this.settings.direction;
      },

      /**
      * Left and right directions require some style computation
      *   in order to properly show the list of options
      */
      styleUpdate: function styleUpdate() {
          var listEl = this.getList();
          var direction = this.getDirection();

          switch (direction) {
              case 'up':
                  break;
              case 'down':
                  break;
              case 'left':
                  listEl.style.left = -listEl.offsetWidth + 'px';
                  break;
              case 'right':
                  listEl.style.right = -listEl.offsetWidth + 'px';
                  break;
              default:
                  break;
          }
      }

  };

  /**
  * This is the function invoked for creating a new instance of speed dial button
  *
  * @param { String } selector This is the selector
  *   of the speed dial button container
  * @param { Object } options Object to override the default settings
  * @return { Object } Returns an object which exposes the
  *   SpeedDial public methods
  */
  function index(selector, options) {

      var sd = Object.create(SpeedDial);

      sd.init(selector, options);

      function getContainer() {
          return sd.getContainer();
      }

      function getButton() {
          return sd.getButton();
      }

      function getList() {
          return sd.getList();
      }

      function getDirection() {
          return sd.getDirection();
      }

      function setDirection(direction) {
          return sd.setDirection(direction);
      }

      function close() {
          return sd.close();
      }

      function open() {
          return sd.open();
      }

      // Return an object in a pseudo-module pattern way
      return {
          getContainer: getContainer,
          getButton: getButton,
          getList: getList,
          getDirection: getDirection,
          setDirection: setDirection,
          close: close,
          open: open
      };
  }

  return index;

}));
//# sourceMappingURL=speeddial.js.map
