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

  var defaults = {
      button: '.speed-dial__btn',
      list: '.speed-dial__list',
      direction: 'up'
  };

  var SpeedDial = {
      init: function init(selector, options) {

          this.settings = extend(defaults, options);
          this.container = document.querySelector(selector);

          try {
              if (this.container === null) throw new Error('SpeedDial could not find any HTML element that matches the given selector.');
              this.bindEvents();
              this.setDirection(this.settings.direction);
          } catch (err) {
              console.error(err.message);
          }
      },

      getContainer: function getContainer() {
          return this.container;
      },

      getButton: function getButton() {
          return this.container.querySelector(this.settings.button);
      },

      getList: function getList() {
          return this.container.querySelector(this.settings.list);
      },

      bindEvents: function bindEvents() {
          var btn = this.getButton();

          try {
              if (btn === null) throw new Error('SpeedDial could not find any button.');
              btn.addEventListener('click', this.clickHandler.bind(this));
          } catch (err) {
              console.log(err.message);
          }
      },

      clickHandler: function clickHandler() {
          var listEl = this.getList();

          if (listEl) {
              if (listEl.classList.contains('is-visible')) {
                  listEl.classList.remove('is-visible');
              } else {
                  listEl.classList.add('is-visible');
              }
          }
      },

      close: function close() {
          var listEl = this.getList();

          if (listEl) {
              listEl.classList.remove('is-visible');
          }
      },

      open: function open() {
          var listEl = this.getList();

          if (listEl) {
              listEl.classList.add('is-visible');
          }
      },

      setDirection: function setDirection(direction) {

          this.container.classList.remove('speed-dial--up', 'speed-dial--down', 'speed-dial--left', 'speed-dial--right');

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

          this.styleUpdate();
      },

      getDirection: function getDirection() {
          return this.settings.direction;
      },

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

      function setDirection() {
          return sd.setDirection();
      }

      function close() {
          return sd.close();
      }

      function open() {
          return sd.open();
      }

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