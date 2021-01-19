// element - DOMHTMLElement that triggered this function being called
// event - event that triggered this function being called
function runOnLoad(hypeDocument, element, event) {
//	
// This function is invoked when the main timeline is loaded. It animates forward or reverse depending on mouse wheel scroll direction.
// One handler, DOMMouseScroll, is for Firefox and another, onmousewheel, is for the other browsers. They also happen to work in opposite directions.
// That is why we have two similar blocks of code that only differs by "event.detail < 0" and "event.wheelDeltaY > 0".
// It also checks that is is not in start position using "hypeDocument.currentTimeInTimelineNamed('Main Timeline') > 2" to prevent weird behaviour of going around the corner and starting at the end.
//
// Bjarne Bülow, bjarne@surveylegend.com
//
	function wheel2(event) { // other browsers
		event.preventDefault();
		if (event.detail < 0 && (hypeDocument.currentTimeInTimelineNamed('Main Timeline') > 2)) {
			hypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionReverse);
		} else {
			hypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward)		}
	}
	function wheel(event) { // Firefox
		event.preventDefault();
		if (event.wheelDeltaY > 0 && (hypeDocument.currentTimeInTimelineNamed('Main Timeline') > 2)) {
			hypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionReverse);
		} else {
			hypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward)		}
	}
	window.onmousewheel = document.onmousewheel = wheel;
	window.addEventListener("DOMMouseScroll", wheel2, false);
	document.addEventListener("DOMMouseScroll", wheel2, false);
	
}
