import { SpeedDial } from './speeddial';

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

export default index;
