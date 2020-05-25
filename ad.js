const Nightmare = require("nightmare");
require('nightmare-iframe-manager')(Nightmare);

console.log("Bot started");

setInterval(() => {
	let page = Nightmare({
	    gotoTimeout: 30 * 1000 * 1000,
	    waitTimeout: 30 * 1000 * 1000,
	    // show: true,
	    webPreferences: {
	    	webSecurity:false
	    }
	})
	console.log("Bot started");
	page.goto('http://ivansey.github.io', {"Access-Control-Allow-Origin": "*", "Origin": "https://ivansey.github.io"})
		.wait(3000)
		.enterIFrame('iframe[src="https://feed.adrelayer.com/widget?widget_id=SJzbJQrtYm4vBIiejvrG&block_view_ident=SJzbJQrtYm4vBIiejvrG1"]')
		.evaluate(() => {
			document.querySelector("a[title='topadvert.ru']").remove();
			document.querySelector("a[target='_blank']").removeAttribute("target");
		})
		.click("a")
		.wait(3000)
		.evaluate(() => {
	                return document
	            })
	            .end()
	            .then((doctype) => {
	                console.log(doctype);
	            })
		// .end();
	page = null;
}, 10000)