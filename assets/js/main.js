const DOC_KEY = "1Qbu3hsAlxNS6ybsjzhLVGFtv287diwiD2tL8ZkMXvOE";

window.addEventListener("load", e => {
	GetSheetDone.raw(DOC_KEY).then(sheet => {
		console.log(sheet);
	});
});
