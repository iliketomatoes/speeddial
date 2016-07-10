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

// Default settings
var defaults = {

    // The actual speed dial button default class
    button: '.speed-dial__btn',

    // Default option-list class
    list: '.speed-dial__list',

    // Default option-list direction
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
        *    and the option-list
        */
        this.container = document.querySelector(selector);

        try {
            if (this.container === null) throw new Error('SpeedDial could not find any HTML element that matches the given selector.');
            this.bindEvents();
            this.setDirection(this.settings.direction);
        } catch (err) {
            console.error(err.message);
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
    * Get the button which triggers the option-list to open/close
    *
    * @return { HTMLElement }
    */
    getButton: function getButton() {
        var btn = this.container.querySelector(this.settings.button);
        try {
            if (btn === null) throw new Error('SpeedDial could not find any button.');
        } catch (err) {
            console.log(err.message);
        } finally {
            return btn;
        }
    },

    /**
    * Get the list which contains the speed dial options
    *
    * @return { HTMLElement }
    */
    getList: function getList() {
        var list = this.container.querySelector(this.settings.list);
        try {
            if (list === null) throw new Error('SpeedDial could not find any option-list.');
        } catch (err) {
            console.log(err.message);
        } finally {
            return list;
        }
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
            // Close the option-list
            listEl.classList.remove('is-visible');
        } else {
            // Open the option-list
            listEl.classList.add('is-visible');
        }
    },

    // Close the option-list
    close: function close() {
        var listEl = this.getList();
        listEl.classList.remove('is-visible');
    },

    // Open the option-list
    open: function open() {
        var listEl = this.getList();
        listEl.classList.add('is-visible');
    },

    /**
    * Speed dial option-list can be viewed in 4 different directions:
    *   'up', 'down', 'left', 'right'
    *   The CSS class responsible to handle the option-list direction is added
    *   to the container
    *
    * @param { String } direction
    */
    setDirection: function setDirection(direction) {

        // Clean the classList first
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

        // Call an helper to set some style with Javascript
        this.styleUpdate();
    },

    // @return { String }
    getDirection: function getDirection() {
        return this.settings.direction;
    },

    /**
    * Left and right directions require some style computation
    *   in order to properly show the option-list
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

    function setDirection() {
        return sd.setDirection();
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

export default index;
//# sourceMappingURL=index.mjs.map