
$(function(){
	let deviceAgent = navigator.userAgent.toLowerCase();
	let agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	if (agentID) {
		$('body').addClass('ios');
	}
});