let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
var resources = 'resources/assets/vendors/';
var appJSPath = 'resources/assets/js/';
var appCSSPath = 'resources/assets/css/';
var path = 'node_modules/';

//Metronic Theme realted js files

var themeCSSPath = 'resources/assets/css/theme/';
var themeJSPath = 'resources/assets/js/theme/';
var themeMediaPath = 'resources/assets/media/';
var themeVendorsPath = 'resources/assets/vendors/theme/vendors/';

//theme vendors JS (From the Node Modules)
mix.babel([
/* BEGIN::Mandatory JS For Theme*/
	/* jquery */
		path + 'jquery/dist/jquery.js',
	/* popper.js */
		path + 'popper.js/dist/umd/popper.js',
	/* Bootstrap */
		path + 'bootstrap/dist/js/bootstrap.min.js',
	/* js-cookie */
		path + 'js-cookie/src/js.cookie.js',
	/* moment */
		path + 'moment/min/moment.min.js',
	/* tooltip.js */
		path + 'tooltip.js/dist/umd/tooltip.min.js',
	/* perfect-scrollbar */
		path + 'perfect-scrollbar/dist/perfect-scrollbar.min.js',
	/* sticky-js */
		path + 'sticky-js/dist/sticky.min.js',
	/* wnumb */
		path + 'wnumb/wNumb.js',
/* END::Mandatory JS For Theme*/

/* BEGIN::Optional JS For Theme*/
	/* jquery-form */
		path + 'jquery-form/dist/jquery.form.min.js',
	/* block-ui */
		path + 'block-ui/jquery.blockUI.js',
	/* bootstrap-datepicker */
		path + 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
		themeJSPath + 'vendors/bootstrap-datepicker.init.js',
	/* bootstrap-datetime-picker */
		path + 'bootstrap-datetime-picker/js/bootstrap-datetimepicker.min.js',
	/* bootstrap-timepicker */
		path + 'bootstrap-timepicker/js/bootstrap-timepicker.min.js',
		themeJSPath + 'vendors/bootstrap-timepicker.init.js',
	/* bootstrap-daterangepicker */
		path + 'bootstrap-daterangepicker/daterangepicker.js',
	/* bootstrap-touchspin */
		path + 'bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js',
	/* bootstrap-maxlength */
		path + 'bootstrap-maxlength/bootstrap-maxlength.js',
	/* bootstrap-multiselectsplitter */
		themeJSPath + 'vendors/bootstrap-multiselectsplitter.min.js',
	/* bootstrap-select */
		path + 'bootstrap-select/dist/js/bootstrap-select.js',
	/* bootstrap-switch */
		path + 'bootstrap-switch/dist/js/bootstrap-switch.js',
		themeJSPath + 'vendors/bootstrap-switch.init.js',
	/* select2 */
		path + 'select2/dist/js/select2.full.js',
	/* ion-rangeslider */
		path + 'ion-rangeslider/js/ion.rangeSlider.js',
	/* typeahead.js */
		path + 'typeahead.js/dist/typeahead.bundle.js',
		path + 'handlebars/dist/handlebars.js',
	/* inputmask */
		path + 'inputmask/dist/jquery.inputmask.bundle.js',
		path + 'inputmask/dist/inputmask/inputmask.date.extensions.js',
		path + 'inputmask/dist/inputmask/inputmask.numeric.extensions.js',
	/* nouislider */
		path + 'nouislider/distribute/nouislider.js',
	/* owl.carousel */
		path + 'owl.carousel/dist/owl.carousel.js',
	/* autosize */
		path + 'autosize/dist/autosize.js',
	/* clipboard */
		path + 'clipboard/dist/clipboard.min.js',
	/* dropzone */
		//path + 'dropzone/dist/dropzone.js',
	/* summernote */
		path + 'summernote/dist/summernote.js',
	/* bootstrap-markdown */
		path + 'markdown/lib/markdown.js',
		path + 'bootstrap-markdown/js/bootstrap-markdown.js',
		themeJSPath + 'vendors/bootstrap-markdown.init.js',
	/* remarkable-bootstrap-notify */
		path + 'bootstrap-notify/bootstrap-notify.min.js',
		themeJSPath + 'vendors/bootstrap-notify.init.js',
	/* jquery-validation */
		path + 'jquery-validation/dist/jquery.validate.js',
		path + 'jquery-validation/dist/additional-methods.js',
		themeJSPath + 'vendors/jquery-validation.init.js',
	/* toastr */
		path + 'toastr/build/toastr.min.js',
	 /* morris.js */
	 	path + 'raphael/raphael.js',
		path + 'morris.js/morris.js',
	/* chart.js */
		path + 'chart.js/dist/Chart.bundle.js',
	/* bootstrap-session-timeout */
		themeVendorsPath + 'bootstrap-session-timeout/dist/bootstrap-session-timeout.min.js',
	/* jquery-idletimer */
		themeVendorsPath + 'jquery-idletimer/idle-timer.min.js',
	/* counterup */
		path + 'waypoints/lib/jquery.waypoints.js',
		path + 'counterup/jquery.counterup.js',
	/* sweetalert2 */
		path + 'es6-promise-polyfill/promise.min.js',
		path + 'sweetalert2/dist/sweetalert2.min.js',
		themeJSPath + 'vendors/sweetalert2.init.js',
	/* jquery.repeater */
		path + 'jquery.repeater/src/lib.js',
		path + 'jquery.repeater/src/jquery.input.js',
		path + 'jquery.repeater/src/repeater.js',
	/* dompurify */
		path + 'dompurify/dist/purify.js',
/* End :: Optional JS For Theme*/

/* Begin :: Custom JS For Theme*/
	/* jquery-ui */
		themeVendorsPath + 'jquery-ui/jquery-ui.min.js',
	/* fullcalendar */
	    /* @fullcalendar/core */
		    path + '@fullcalendar/core/main.js',
	    /* @fullcalendar/daygrid */
		    path + '@fullcalendar/daygrid/main.js',
	    /* @fullcalendar/google-calendar */
		    path + '@fullcalendar/google-calendar/main.js',
	    /* @fullcalendar\interaction */
		    path + '@fullcalendar/interaction/main.js',
		/* @fullcalendar/list */
			path + '@fullcalendar/list/main.js',
		/* @fullcalendar/timegrid */
			path + '@fullcalendar/timegrid/main.js',
	/* gmaps */
		path + 'gmaps/gmaps.js',
	/* jquery-flot */
		path + 'jquery-flot/jquery.flot.js',
		path + 'jquery-flot/jquery.flot.resize.js',
		path + 'jquery-flot/jquery.flot.categories.js',
		path + 'jquery-flot/jquery.flot.pie.js',
		path + 'jquery-flot/jquery.flot.stack.js',
		path + 'jquery-flot/jquery.flot.crosshair.js',
		path + 'jquery-flot/jquery.flot.axislabels.js',
	/* datatables.net */
		/* datatables.net related JS are commented as we are not using data tables as of now*/
		/*
		path + 'datatables.net/js/jquery.dataTables.js',
		path + 'datatables.net-bs4/js/dataTables.bootstrap4.js',
		themeJSPath + 'vendors/datatables.init.js',
		path + 'datatables.net-autofill/js/dataTables.autoFill.min.js',
		path + 'datatables.net-autofill-bs4/js/autoFill.bootstrap4.min.js',
		path + 'jszip/dist/jszip.min.js',
		path + 'pdfmake/build/pdfmake.min.js',
		path + 'pdfmake/build/vfs_fonts.js',
		path + 'datatables.net-buttons/js/dataTables.buttons.min.js',
		path + 'datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js',
		path + 'datatables.net-buttons/js/buttons.colVis.js',
		path + 'datatables.net-buttons/js/buttons.flash.js',
		path + 'datatables.net-buttons/js/buttons.html5.js',
		path + 'datatables.net-buttons/js/buttons.print.js',
		path + 'datatables.net-colreorder/js/dataTables.colReorder.min.js',
		path + 'datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js',
		path + 'datatables.net-fixedheader/js/dataTables.fixedHeader.min.js',
		path + 'datatables.net-keytable/js/dataTables.keyTable.min.js',
		path + 'datatables.net-responsive/js/dataTables.responsive.min.js',
		path + 'datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
		path + 'datatables.net-rowgroup/js/dataTables.rowGroup.min.js',
		path + 'datatables.net-rowreorder/js/dataTables.rowReorder.min.js',
		path + 'datatables.net-scroller/js/dataTables.scroller.min.js',
		path + 'datatables.net-select/js/dataTables.select.min.js',
		*/
	/* jstree */
		path + 'jstree/dist/jstree.bundle.js',
	/* jqvmap */
		path + 'jqvmap/dist/jquery.vmap.js',
		path + 'jqvmap/dist/maps/jquery.vmap.world.js',
		path + 'jqvmap/dist/maps/jquery.vmap.russia.js',
		path + 'jqvmap/dist/maps/jquery.vmap.usa.js',
		path + 'jqvmap/dist/maps/jquery.vmap.germany.js',
		path + 'jqvmap/dist/maps/jquery.vmap.europe.js',
    /* check */
/* End :: Custom JS For Theme*/
	/* Font Awesome */
		//path + '@fortawesome/fontawesome-free/js/fontawesome.js',
	],'public/js/vendors.bundle.js').version();

//theme vendors CSS (From the Node Modules)
mix.styles([
/* BEGIN::Mandatory CSS For Theme*/
	/* perfect-scrollbar */
		path + 'perfect-scrollbar/dist/perfect-scrollbar.css',
/* END::Mandatory CSS For Theme*/

/* BEGIN::Optional CSS For Theme*/
	/*tether*/
		path + 'tether/dist/css/tether.css',
	/* bootstrap-datepicker */
		path + 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
	/* bootstrap-datetime-picker */
		path + 'bootstrap-datetime-picker/css/bootstrap-datetimepicker.css',
	/* bootstrap-timepicker */
		path + 'bootstrap-timepicker/css/bootstrap-timepicker.css',
	/* bootstrap-daterangepicker */
		path + 'bootstrap-daterangepicker/daterangepicker.css',
	/* bootstrap-touchspin */
		path + 'bootstrap-touchspin/dist/jquery.bootstrap-touchspin.css',
	/* bootstrap-select */
		path + 'bootstrap-select/dist/css/bootstrap-select.css',
	/* bootstrap-switch */
		path + 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css',
	/* select2 */
		path + 'select2/dist/css/select2.css',
	/* ion-rangeslider */
		path + 'ion-rangeslider/css/ion.rangeSlider.css',
	/* nouislider */
		path + 'nouislider/distribute/nouislider.css',
	/* owl.carousel */
		path + 'owl.carousel/dist/assets/owl.carousel.css',
		path + 'owl.carousel/dist/assets/owl.theme.default.css',
	/* dropzone */
		path + 'dropzone/dist/dropzone.css',
	/* summernote */
		path + 'summernote/dist/summernote.css',
	/* bootstrap-makrdown */
		path + 'bootstrap-markdown/css/bootstrap-markdown.min.css',
	/* animate.css */
	    path + 'animate.css/animate.css',
	/* toastr */
		path + 'toastr/build/toastr.css',
	/* morris.js */
		path + 'morris.js/morris.css',
	/* sweetalert2 */
		path + 'sweetalert2/dist/sweetalert2.css',
	/* socicon */
		path + 'socicon/css/socicon.css',
	/* line-awesome */
		themeVendorsPath + 'line-awesome/css/line-awesome.css',
	/* flaticon */
		themeVendorsPath + 'flaticon/flaticon.css',
	/* flaticon2 */
		themeVendorsPath + 'flaticon2/flaticon.css',
    /* Font Awesome */
    	path + '@fortawesome/fontawesome-free/css/all.min.css',
/* End::Optional CSS For Theme*/

/* Begin::Custom CSS For Theme*/
	/* jquery-ui */
		themeVendorsPath + 'jquery-ui/jquery-ui.min.css',
	/* @fullcalendar */
	    /* @fullcalendar/core */
		    path + '@fullcalendar/core/main.css',
	    /* @fullcalendar/daygrid */
		    path + '@fullcalendar/daygrid/main.css',
		/* @fullcalendar/list */
			path + '@fullcalendar/list/main.css',
		/* @fullcalendar/timegrid */
			path + '@fullcalendar/timegrid/main.css',
	/* datatables.net */
		/* datatables.net related CSS are commented as we are not using data tables as of now*/
		/*
		path + 'datatables.net-bs4/css/dataTables.bootstrap4.css',
		path + 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css',
		path + 'datatables.net-autofill-bs4/css/autoFill.bootstrap4.min.css',
		path + 'datatables.net-colreorder-bs4/css/colReorder.bootstrap4.min.css',
		path + 'datatables.net-fixedcolumns-bs4/css/fixedColumns.bootstrap4.min.css',
		path + 'datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.min.css',
		path + 'datatables.net-keytable-bs4/css/keyTable.bootstrap4.min.css',
		path + 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
		path + 'datatables.net-rowgroup-bs4/css/rowGroup.bootstrap4.min.css',
		path + 'datatables.net-rowreorder-bs4/css/rowReorder.bootstrap4.min.css',
		path + 'datatables.net-scroller-bs4/css/scroller.bootstrap4.min.css',
		path + 'datatables.net-select-bs4/css/select.bootstrap4.min.css',
		*/
	/* jstree */
		path + 'jstree/dist/themes/default/style.css',
	/* jqvmap */
		path + 'jqvmap/dist/jqvmap.css',
/* END::Custom CSS For Theme*/
], 'public/css/vendors.bundle.css')
//.copy(path + 'ion-rangeslider/img/sprite-skin-flat.png','public/img')
.copy(path + 'owl.carousel/dist/assets/owl.video.play.png','public/img')
.copy(path + 'owl.carousel/dist/assets/ajax-loader.gif','public/img')
.copy(path + 'jstree/dist/themes/default/40px.png','public/img')
.copy(path + 'jstree/dist/themes/default/*.gif','public/img')
.copy(themeMediaPath + 'vendors/jstree/32px.png','public/img')
.copyDirectory(themeVendorsPath + 'jquery-ui/images','public/img')
.copyDirectory(path + 'summernote/dist/font','public/fonts/summernote')
.copyDirectory(path + 'socicon/font','public/fonts/socicon')
.copyDirectory(themeVendorsPath + 'line-awesome/fonts','public/fonts')
.copyDirectory(themeVendorsPath + 'flaticon/font','public/css/font')
.copyDirectory(themeVendorsPath + 'flaticon2/font','public/css/font')
.copyDirectory(path + '@fortawesome/fontawesome-free/webfonts','public/webfonts')
.copyDirectory(themeMediaPath +'bg' ,'public/media/bg')
.copyDirectory(themeMediaPath +'error' ,'public/media/error')
.copyDirectory(themeMediaPath +'logos' ,'public/media/logos')
.copyDirectory(themeMediaPath +'misc' ,'public/media/misc');

//Theme script JS
mix.babel([
		themeJSPath + 'core/color.js',
		themeJSPath + 'core/app.js',
		themeJSPath + 'core/util.js',
		//Base Folder
		themeJSPath + 'core/base/avatar.js',
		themeJSPath + 'core/base/dialog.js',
		themeJSPath + 'core/base/header.js',
		themeJSPath + 'core/base/menu.js',
		themeJSPath + 'core/base/offcanvas.js',
		themeJSPath + 'core/base/portlet.js',
		themeJSPath + 'core/base/scrolltop.js',
		themeJSPath + 'core/base/toggle.js',
		themeJSPath + 'core/base/wizard.js',
		//Layout folder
		themeJSPath + 'core/layout/chat.js',
		themeJSPath + 'core/layout/demo-panel.js',
		themeJSPath + 'core/layout/offcanvas-panel.js',
		themeJSPath + 'core/layout/quick-panel.js',
		themeJSPath + 'core/layout/quick-search.js',
		//Demo Folder
		themeJSPath + 'demo2/layout.js',
	],'public/js/scripts.bundle.js').version();

//Theme style CSS
mix.sass('resources/sass/theme-scss/theme/demos/demo2/style.scss', 'public/css/style.bundle.css');

//extra vendors CSS
mix.styles(
	[
		themeCSSPath+'pages/login/login-2.css',
		//themeCSSPath+'skins/header/base/light.css',
		//themeCSSPath+'skins/header/menu/light.css',
		//themeCSSPath+'skins/brand/dark.css',
		//themeCSSPath+'skins/header/aside/dark.css',
    ], 'public/css/extra-vendors.bundle.css');

//Custom APP JS Files
mix.babel([
		appJSPath + 'role/role.js',
		appJSPath + 'product/product.js',
	],'public/js/app.js').version();

//Custom APP CSS Files
mix.styles([
    appCSSPath+'ats/ats.css',
], 'public/css/app.css');

if (mix.inProduction()) {
	mix.minify('public/css/style.bundle.css');
	mix.minify('public/css/app.css');
	mix.minify('public/css/vendors.bundle.css');
	mix.babel('public/js/scripts.bundle.js','public/js/scripts.bundle.min.js');
	mix.babel('public/js/vendors.bundle.js','public/js/vendors.bundle.min.js');
}else{
	mix.version();
}
