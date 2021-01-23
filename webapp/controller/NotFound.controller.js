sap.ui.define([
		"com/euy/test/List01/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.euy.test.List01.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);