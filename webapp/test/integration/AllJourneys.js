/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/euy/test/List01/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/euy/test/List01/test/integration/pages/Worklist",
	"com/euy/test/List01/test/integration/pages/Object",
	"com/euy/test/List01/test/integration/pages/NotFound",
	"com/euy/test/List01/test/integration/pages/Browser",
	"com/euy/test/List01/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.euy.test.List01.view."
	});

	sap.ui.require([
		"com/euy/test/List01/test/integration/WorklistJourney",
		"com/euy/test/List01/test/integration/ObjectJourney",
		"com/euy/test/List01/test/integration/NavigationJourney",
		"com/euy/test/List01/test/integration/NotFoundJourney",
		"com/euy/test/List01/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});