const electron = require('electron');
const {desktopCapturer} = require('electron');
const electronScreen = electron.screen;

var uuidv4 = require('uuid/v4');
var filename;

const fs = require('fs');
const os = require('os');
const path = require('path');
const screenshot = document.getElementById('screen-shot');
const screenshotMsg = document.getElementById('screenshot-path');




setInterval(function() {
	takeScreenshot();
	}, 3000);

	function determineScreenShot(){
	const screenSize = electronScreen.getPrimaryDisplay().workAreaSize;
	const maxDimension = Math.max(screenSize.width, screenSize.height);
	return {
		width: maxDimension * window.devicePixelRatio,
		height: maxDimension * window.devicePixelRatio
	};
	
}
	function takeScreenshot(){
		console.log("Taking ScreenShot At Set Interval");
		const thumbSize = determineScreenShot();
	let options ={types: ['screen'], thumbnailSize: thumbSize};
	
	
	desktopCapturer.getSources(options, function(error, sources){
		if(error) return console.log(error.message);
		
		sources.forEach(function(source){
			
			if(source.name === 'Entire screen' || source.name === 'screen 1'){
		    	const screenshotPath = path.join(os.tmpdir(), uuidv4() + '.png');
		    	
		    	fs.writeFile(screenshotPath, source.thumbnail.toPNG(), function(err){
		    		if(err) return console.log(err.message);
		    		
		    	
		    		var message = 'Saved ScreenShot To : ' + screenshotPath;
		    		screenshotMsg.textContent = message;
		    		console.log(message);
		    		
		    		
		    	})
			}
			
		});
		
	});	
}