/*****************************************************************************\
***									Jean BORDAT								***
***		bordat.jean@gmail.com												***
***		http://jean.bordat.me												***
***																			***
***		File Name:			appStatusViewer.js								***
***																			***
***		Date creation: 		2014-08-02										***
***																			***
***		Class description:  This JS class proposes user to show application	***
***							activities : - network - treatments - errors	***
***																			***
***		License: 			Personal use only - All right reserved			***
***																			***
\*****************************************************************************/

function appStatusViewer (object) {

	this.mainobject = object;
	this.defaultDuration = 250;
	this.tick = {
		activity: 'appStatusViewer_activityTick',
		treat: 'appStatusViewer_treatTick',
		error: 'appStatusViewer_errorTick'
	};
	this.css = {
		default: 'appStatusViewer_Ticks asv_d',
		activity: 'appStatusViewer_Ticks asv_a',
		treat: 'appStatusViewer_Ticks asv_t',
		error: 'appStatusViewer_Ticks asv_e',
	};

	this.activitycounter = 0;
	this.treatcounter = 0;
	this.errorcounter = 0;

	this.init = function() {
		// check if available content
		if(typeof(this.mainobject) == 'undefined') {
			console.log('[>:] No object given; aborting AppStatusViewer initialisation');
			return 0;
		}

		// Adding stylesheet
		// this.loadCssJsFile("./indev/js/libraries/appStatusViewer/src/css/appStatusViewer.css", "css");

		// instanciating content
		this.placingMainObject();

		this.tickAll();
		var that = this;
		setTimeout(function() {
			that.tickAll();
		}, 2000);
	};

	this.placingMainObject = function() {

		// $(this.mainobject).addClass(this.container.main);
		document.getElementById(this.mainobject).className = 'appStatusViewer_Container';
		
		var content = '<div class="appStatusViewer_SubContainer"><div class="appStatusViewer_Ticks asv_d" id="appStatusViewer_activityTick"></div><div class="appStatusViewer_Ticks asv_d" id="appStatusViewer_treatTick"></div><div class="appStatusViewer_Ticks asv_d" id="appStatusViewer_errorTick"></div></div>';

		// $(this.mainobject).html(content);
		document.getElementById(this.mainobject).innerHTML = content;
	};

	this.activityTick = function(duration) {

		if(typeof(duration) === 'undefined') duration = this.defaultDuration;

		document.getElementById(this.tick.activity).className = this.css.default;
		document.getElementById(this.tick.activity).className = this.css.activity;
		var that = this;
		setTimeout(function() {
			document.getElementById(that.tick.activity).className = that.css.default;
		}, duration);

	};
	this.treatTick = function(duration) {

		if(typeof(duration) === 'undefined') duration = this.defaultDuration;

		document.getElementById(this.tick.treat).className = this.css.default;
		document.getElementById(this.tick.treat).className = this.css.treat;
		var that = this;
		setTimeout(function() {
			document.getElementById(that.tick.treat).className = that.css.default;
		}, duration);

	};
	this.errorTick = function(duration) {

		if(typeof(duration) === 'undefined') duration = this.defaultDuration;

		document.getElementById(this.tick.error).className = this.css.default;
		document.getElementById(this.tick.error).className = this.css.error;
		var that = this;
		setTimeout(function() {
			document.getElementById(that.tick.error).className = that.css.default;
		}, duration);

	};

	this.tickAll = function() {
		this.activityTick(1000);
		this.treatTick(1000);
		this.errorTick(1000);
	};

	this.loadCssJsFile = function(filename, filetype) {
		//if filename is a external JavaScript file
		if (filetype == "js") {
			var fileref = document.createElement('script');
			fileref.setAttribute("type","text/javascript");
			fileref.setAttribute("src", filename);
		}
		//if filename is an external CSS file
		else if (filetype == "css") { 
			var fileref = document.createElement("link");
			fileref.setAttribute("rel", "stylesheet");
			fileref.setAttribute("type", "text/css");
			fileref.setAttribute("href", filename);
		}
		if (typeof(fileref !="undefined")) document.getElementsByTagName("head")[0].appendChild(fileref);
	};

	this.init();
}