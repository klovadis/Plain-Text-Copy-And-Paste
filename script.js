
// variables
var helper = null
,	trim = true
,	selection = null
,	text = '';

document.body.addEventListener("keydown", function (event) {
	
	// only proceed if crtl + c is pressed
	if (event.ctrlKey !== true || event.keyCode !== 67) return true;

	// get selected text without dom info		
	selection = window.getSelection();
	text = selection.toString();
	
	// trim whitespace if chosen
	if (trim === true) text = text.replace(/^\s+|\s+$/g, '');		

	// create a helper textarea 
	if (helper === null) {
		helper = document.createElement('textarea');
		helper.style.position = "absolute";
		helper.style.fontSize = "1pt";
		helper.style.border = "none";
		helper.style.margin = "-100";
		document.body.appendChild(helper);
	}
	
	// change text of helper, make it visible and select contents
	helper.value = text;
	helper.style.display = "block";		
	helper.select();
	
	// hide the element after 100ms
	window.setTimeout(function () { helper.style.display = "none"; },100);

}, false); 


