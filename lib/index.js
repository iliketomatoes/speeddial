import { SpeedDial } from './speeddial';

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
