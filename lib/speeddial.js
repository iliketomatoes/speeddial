import { extend } from './utils';

var defaults = {
    button: '.speed-dial__btn',
    list: '.speed-dial__list',
    direction: 'up'
};

export const SpeedDial = {
    init: function(selector, options) {

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

    getContainer: function() {
    	return this.container;
    },

    getButton: function() {
    	return this.container.querySelector(this.settings.button);
    },

    getList: function() {
    	return this.container.querySelector(this.settings.list);
    },

    bindEvents: function() {
        var btn = this.getButton();

        try {
        	if (btn === null) throw new Error('SpeedDial could not find any button.');
        	btn.addEventListener('click', this.clickHandler.bind(this));
        } catch (err) {
        	console.log(err.message);
        }
    },

    clickHandler: function() {
    	var listEl = this.getList();

    	if(listEl) {
    		if (listEl.classList.contains('is-visible')) {
		    	listEl.classList.remove('is-visible');
			} else {
				listEl.classList.add('is-visible');
			}
    	}

    },

    close: function() {
    	var listEl = this.getList();

    	if(listEl) {
    		listEl.classList.remove('is-visible');
    	}
    },

    open: function() {
    	var listEl = this.getList();

    	if(listEl) {
    		listEl.classList.add('is-visible');
    	}
    },

    setDirection: function(direction) {

    	this.container.classList.remove(
    		'speed-dial--up',
    		'speed-dial--down',
    		'speed-dial--left',
    		'speed-dial--right'
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

    	this.styleUpdate();

    },

    getDirection: function() {
    	return this.settings.direction;
    },

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
