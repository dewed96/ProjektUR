(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.siteId = '8B62EE8E9A244820F742AADE855A3AAB';
	s.version = '2019-1-7-1';
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	b.push(function () {
		x.stickyBar({
			enabledBreakpoints: ['f2e973e1275d18e3048ba45454ee16a2','d2f9bff7f63c0d6b7c7d55510409c19b','72e5146e7d399bc2f8a12127e43469f1','5ecdcca63de80fd3d4fbb36295d22b7d']
		});
	});

	// ShowBox
	$.extend(s.imShowBox, {
		"effect": "custom", "customEffect": "generic animated zoomIn",
		'transitionEffect' : 'horizontalSlide',
		'fullScreenEnabled' : true,
		'zoomEnabled' : false,
		'showProgress' : false,
		'shadow' : '',
		'background' : 'rgba(255, 255, 255, 1)',
		'borderWidth' : {
			'top': 0,
			'right': 0,
			'bottom': 0,
			'left': 0
		},
		'buttonLeft': '<svg class=\"im-common-left-button\"  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#eceded;opacity:0.7;}.b{fill:#dd4f59;}<\/style><\/defs><circle class=\"a\" cx=\"24.74\" cy=\"25\" r=\"19.67\"/><path class=\"b\" d=\"M6.15,25.34A18.68,18.68,0,0,0,24.73,43.59h.35A18.59,18.59,0,0,0,43.32,24.66,18.67,18.67,0,0,0,24.75,6.41H24.4A18.61,18.61,0,0,0,6.15,25.34Zm1.33,0A17.27,17.27,0,0,1,24.42,7.75h.32A17.34,17.34,0,0,1,42,24.69,17.25,17.25,0,0,1,25.05,42.25h-.32A17.33,17.33,0,0,1,7.49,25.31Z\"/><path class=\"b\" d=\"M29.79,14.93a.8.8,0,0,0,0-1.14.83.83,0,0,0-1.16,0L18.45,24.21a1.39,1.39,0,0,0,0,2L29,36.2a.81.81,0,0,0,.57.23.83.83,0,0,0,.59-.24.8.8,0,0,0,0-1.14l-10.1-9.61a.4.4,0,0,1,0-.58Z\"/><\/svg>',
		'buttonRight': '<svg class=\"im-common-right-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#eceded;opacity:0.7;}.b{fill:#dd4f59;}<\/style><\/defs><circle class=\"a\" cx=\"25\" cy=\"25\" r=\"19.67\"/><path class=\"b\" d=\"M25.34,6.42H25A18.67,18.67,0,0,0,6.41,24.66,18.59,18.59,0,0,0,24.66,43.58H25a18.59,18.59,0,0,0,.33-37.17ZM25,42.25h-.32A17.25,17.25,0,0,1,7.75,24.69,17.34,17.34,0,0,1,25,7.75h.32A17.25,17.25,0,0,1,25,42.25Z\"/><path class=\"b\" d=\"M19.95,14.93a.8.8,0,0,1,0-1.14.83.83,0,0,1,1.16,0L31.28,24.21a1.39,1.39,0,0,1,0,2l-10.54,10a.81.81,0,0,1-.57.23.83.83,0,0,1-.59-.24.8.8,0,0,1,0-1.14l10.1-9.61a.4.4,0,0,0,0-.58Z\"/><\/svg>',
		'buttonClose': '<svg class=\"im-common-close-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#eceded;opacity:0.7;}.b{fill:#dd4f59;}<\/style><\/defs><circle class=\"a\" cx=\"28.69\" cy=\"19.42\" r=\"13.75\"/><path class=\"b\" d=\"M28.92,6.65h-.24a12.78,12.78,0,0,0-.23,25.55h.24A12.84,12.84,0,0,0,41.47,19.65a12.78,12.78,0,0,0-12.54-13Zm-.23,24.64h-.22a11.86,11.86,0,0,1,.21-23.72h.22A11.86,11.86,0,0,1,40.55,19.64,11.92,11.92,0,0,1,28.69,31.28Z\"/><path class=\"b\" d=\"M29.87,19.44l3.29-3.17A.83.83,0,1,0,32,15.07l-3.29,3.17L25.54,15a.83.83,0,1,0-1.2,1.16l3.17,3.29-3.29,3.17a.84.84,0,0,0,0,1.18.86.86,0,0,0,1.18,0l3.29-3.17,3.17,3.29a.83.83,0,0,0,.6.26.84.84,0,0,0,.83-.82.83.83,0,0,0-.23-.6Zm2.43-4.06Z\"/><\/svg>',
		'buttonEnterFS': '<svg class=\"im-common-enter-fs-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#eceded;opacity:0.7;}.b{fill:#dd4f59;}<\/style><\/defs><circle class=\"a\" cx=\"25\" cy=\"25\" r=\"19.67\"/><path class=\"b\" d=\"M25.34,6.42H25A18.67,18.67,0,0,0,6.41,24.66,18.59,18.59,0,0,0,24.66,43.58H25a18.59,18.59,0,0,0,.33-37.17ZM25,42.25h-.32A17.25,17.25,0,0,1,7.75,24.69,17.34,17.34,0,0,1,25,7.75h.32A17.25,17.25,0,0,1,25,42.25Z\"/><path class=\"b\" d=\"M15.29,33.93l.1-5.51a.72.72,0,0,1,1.44,0l-.07,3.78L23.16,26a.72.72,0,1,1,1,1l-6.4,6.18,3.78.07a.72.72,0,1,1,0,1.44L16,34.66a.72.72,0,0,1-.71-.73Z\"/><path class=\"b\" d=\"M33.89,34.79l-5.51-.1a.72.72,0,0,1,0-1.44l3.78.07L26,26.92a.72.72,0,0,1,1-1l6.18,6.4.07-3.78a.72.72,0,1,1,1.44,0l-.1,5.51a.72.72,0,0,1-.73.71Z\"/><path class=\"b\" d=\"M34.71,16.07l-.1,5.51a.72.72,0,0,1-1.44,0l.07-3.78L26.84,24a.72.72,0,0,1-1-1l6.4-6.18-3.78-.07a.72.72,0,1,1,0-1.44l5.51.1a.72.72,0,0,1,.71.73Z\"/><path class=\"b\" d=\"M16.11,15.21l5.51.1a.72.72,0,0,1,0,1.44l-3.78-.07L24,23.08a.72.72,0,1,1-1,1l-6.18-6.4-.07,3.78a.72.72,0,1,1-1.44,0l.1-5.51a.72.72,0,0,1,.73-.71Z\"/><\/svg>',
		'buttonExitFS': '<svg class=\"im-common-exit-fs-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#eceded;opacity:0.7;}.b{fill:#dd4f59;}<\/style><\/defs><circle class=\"a\" cx=\"25\" cy=\"25\" r=\"19.67\"/><path class=\"b\" d=\"M25.34,6.42H25A18.67,18.67,0,0,0,6.41,24.66,18.59,18.59,0,0,0,24.66,43.58H25a18.59,18.59,0,0,0,.33-37.17ZM25,42.25h-.32A17.25,17.25,0,0,1,7.75,24.69,17.34,17.34,0,0,1,25,7.75h.32A17.25,17.25,0,0,1,25,42.25Z\"/><polygon class=\"b\" points=\"34.08 22.58 34.08 32.55 15.92 32.55 15.92 17.45 29.3 17.45 29.3 15.92 14.3 15.92 14.3 34.08 35.7 34.08 35.7 22.58 34.08 22.58\"/><path class=\"b\" d=\"M24,26.79,24.08,20a.88.88,0,0,1,1.77,0l-.08,4.65,7.87-7.6a.88.88,0,0,1,1.23,1.27L27,26l4.65.08a.88.88,0,1,1,0,1.77l-6.78-.12a.88.88,0,0,1-.87-.9Z\"/><\/svg>',
		'buttonZoomIn': '<svg class=\"im-common-zoom-in-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#eceded;opacity:0.7;}.b{fill:#dd4f59;}<\/style><\/defs><circle class=\"a\" cx=\"24.74\" cy=\"24.73\" r=\"19.67\"/><path class=\"b\" d=\"M25.08,6.14h-.35A18.67,18.67,0,0,0,6.15,24.39,18.59,18.59,0,0,0,24.4,43.31h.35a18.59,18.59,0,0,0,.33-37.17ZM24.75,42h-.32A17.25,17.25,0,0,1,7.48,24.42,17.34,17.34,0,0,1,24.73,7.48h.32A17.25,17.25,0,0,1,24.75,42Z\"/><path class=\"b\" d=\"M37.55,36.37l-7.89-7.9a10.27,10.27,0,1,0-1.18,1.18l7.89,7.89a.83.83,0,1,0,1.18-1.17ZM30.45,21.88a8.56,8.56,0,1,1-2.5-6A8.52,8.52,0,0,1,30.45,21.88Zm6.84,15.4Z\"/><path class=\"b\" d=\"M26.59,20.74H22.81V17.26a1,1,0,0,0-1.93,0v3.48h-3.8a.93.93,0,0,0,0,1.85h3.8v3.3a1,1,0,0,0,1.93,0v-3.3h3.78a.93.93,0,0,0,0-1.85Z\"/><\/svg>',
		'buttonZoomOut': '<svg class=\"im-common-zoom-out-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#eceded;opacity:0.7;}.b{fill:#dd4f59;}<\/style><\/defs><circle class=\"a\" cx=\"24.74\" cy=\"24.92\" r=\"19.67\"/><path class=\"b\" d=\"M25.08,6.34h-.35A18.67,18.67,0,0,0,6.15,24.58,18.59,18.59,0,0,0,24.4,43.5h.35a18.59,18.59,0,0,0,.33-37.17Zm-.33,35.83h-.32A17.25,17.25,0,0,1,7.48,24.61,17.34,17.34,0,0,1,24.73,7.67h.32a17.25,17.25,0,0,1-.31,34.5Z\"/><path class=\"b\" d=\"M36.88,37.35,29,29.46a10.26,10.26,0,1,0-1.18,1.18l7.89,7.89a.83.83,0,1,0,1.18-1.17Zm-15.66-23a8.55,8.55,0,1,1-6,2.51A8.5,8.5,0,0,1,21.22,14.31Z\"/><path class=\"b\" d=\"M16.33,23.46h9.51a.93.93,0,0,0,0-1.85H16.33a.93.93,0,0,0,0,1.85Z\"/><\/svg>',
		'buttonZoomRestore': '<svg class=\"im-common-zoom-restore-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#eceded;opacity:0.7;}.b{fill:#dd4f59;}<\/style><\/defs><circle class=\"a\" cx=\"25.82\" cy=\"24.77\" r=\"19.67\"/><path class=\"b\" d=\"M26.15,6.19h-.35A18.67,18.67,0,0,0,7.23,24.43,18.59,18.59,0,0,0,25.48,43.35h.35a18.59,18.59,0,0,0,.33-37.17ZM25.82,42H25.5A17.25,17.25,0,0,1,8.56,24.46,17.34,17.34,0,0,1,25.81,7.52h.32A17.25,17.25,0,0,1,25.82,42Z\"/><path class=\"b\" d=\"M38.67,37.08,28.58,27.17l-.34.37-.11.12a8.09,8.09,0,1,1,2.37-5.72,7.92,7.92,0,0,1-.14,1.46l-3.67-2.65a.69.69,0,0,0-.81,1.12l4.66,3.37a1,1,0,0,0,.58.18h0a1,1,0,0,0,.6-.19l4.59-3.46a.69.69,0,1,0-.83-1.1L32,23.33a9.32,9.32,0,0,0,.12-1.39,9.74,9.74,0,1,0-3.44,7.36l8.9,8.9a.79.79,0,1,0,1.12-1.12Zm-.25.87h0Z\"/><\/svg>',
		'borderRadius' : '3px 3px 3px 3px',
		'borderColor' : 'rgba(0, 0, 0, 1) rgba(0, 0, 0, 1) rgba(0, 0, 0, 1) rgba(0, 0, 0, 1)',
		'textColor' : 'rgba(64, 64, 64, 1)',
		'fontFamily' : 'Quicksand',
		'fontStyle' : 'normal',
		'fontWeight' : 'bold',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : 'transparent',
		'opacity' : 0.9,
		'radialBg' : false // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'websitex5.bl.templates.showboxanimation',
		'width' : 500,
		'shadow' : '',
		'background' : 'rgba(255, 255, 255, 1)',
		'borderRadius' : 10,
		'textColor' : 'rgba(64, 64, 64, 1)',
		'boxColor' : 'transparent',
		'opacity' : 0.9
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 0,
		'arrow' : true,
		'shape' : 'classic',
		'position' : 'bottom',
		'effect' : 'fade',
		'showTail' : true
	});

	// PageToTop
	$.extend(s.imPageToTop, {
		'imageFile' : 'style/page-to-top.png'
	});

	// Captcha
	b.push(function () {
		x5engine.captcha.instance = new x5engine.captcha.x5captcha({
			"phpfile": "captcha/x5captcha.php",
		});
	}, false, 'first');
	b.push(function() { x.passwordpolicy.init({ "requiredPolicy": "false", "minimumCharacters": "6", "includeUppercase": "false", "includeNumeric": "false", "includeSpecial": "false" });
	});

	// BreakPoints
	s.breakPoints.push({ "hash": "f2e973e1275d18e3048ba45454ee16a2", "name": "Desktop", "start": "max", "end": 1200, "fluid": false});
	s.breakPoints.push({ "hash": "d2f9bff7f63c0d6b7c7d55510409c19b", "name": "Breakpoint 1", "start": 1199, "end": 720, "fluid": false});
	s.breakPoints.push({ "hash": "72e5146e7d399bc2f8a12127e43469f1", "name": "Mobile", "start": 719, "end": 480, "fluid": false});
	s.breakPoints.push({ "hash": "5ecdcca63de80fd3d4fbb36295d22b7d", "name": "Mobile Fluid", "start": 479, "end": 0, "fluid": true});

	b.push(function () { x.cookielaw.activateScripts() });
	b.push(function () { x.utils.setupPageGo("IlRoaXMlMjB3ZWJzaXRlJTIwaGFzJTIwYmVlbiUyMGNyZWF0ZWQlMjB3aXRoJTIwV2ViU2l0ZSUyMFg1JTIwR28lM0NiciUzRUNyZWF0ZSUyMHlvdXIlMjB3ZWJzaXRlJTIwdG9vLiI=","IlN0YXJ0JTIwaGVyZSI="); x.utils.loadedPageGo(); });

	s.loaded = true;
})( _jq, x5engine );
