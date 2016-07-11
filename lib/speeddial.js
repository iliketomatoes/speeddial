import { extend, getElement } from './utils';

// Default settings
var defaults = {

    // The actual speed dial button default class
    button: '.speed-dial__btn',

    // Default list of options class
    list: '.speed-dial__list',

    // Default list of options direction
    direction: 'up'
};

export const SpeedDial = {
    /**
    * Method called for initializing a new instance of SpeedDial
    *
    * @param { String } selector This is the selector
    *   of the speed dial button container
    * @param { Object } options Object to override the default settings
    */
    init: function(selector, options) {

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
    getContainer: function() {
    	return this.container;
    },

    /**
    * Get the button which triggers the list of options to open/close
    *
    * @return { HTMLElement }
    */
    getButton: function() {
        return getElement(this.settings.button, this.container);
    },

    /**
    * Get the list which contains the speed dial options
    *
    * @return { HTMLElement }
    */
    getList: function() {
        return getElement(this.settings.list, this.container);
    },

    // Add click listener to the speed-dial button
    bindEvents: function() {
        var btn = this.getButton();
        btn.addEventListener('click', this.clickHandler.bind(this));
    },

    // Method called when speed-dial button is clicked
    clickHandler: function() {
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
    close: function() {
    	var listEl = this.getList();
    	listEl.classList.remove('is-visible');
    },

    // Open the list of options
    open: function() {
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
    setDirection: function(direction) {

        // Clean the classList first
    	this.container.classList.remove(
            'speed-dial--' + this.settings.direction
        );

    	switch(direction) {
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
    getDirection: function() {
    	return this.settings.direction;
    },

    /**
    * Left and right directions require some style computation
    *   in order to properly show the list of options
    */
    styleUpdate: function() {
    	var listEl = this.getList();
    	var direction = this.getDirection();

    	switch(direction) {
    		case 'up':
    			break;
    		case 'down':
    			break;
    		case 'left':
    			listEl.style.left = - listEl.offsetWidth + 'px';
    			break;
    		case 'right':
    			listEl.style.right = - listEl.offsetWidth + 'px';
    			break;
    		default:
    			break;
    	}
    }

};
