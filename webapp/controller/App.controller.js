<<<<<<< Upstream, based on f6bb24af2c06957453aa7ddcc5b38ff0f756909f
sap.ui.define([
		"com/euy/test/List01/controller/BaseController",
		"sap/ui/model/json/JSONModel"
	], function (BaseController, JSONModel) {
		"use strict";

		return BaseController.extend("com.euy.test.List01.controller.App", {

			onInit : function () {
				var oViewModel,
					fnSetAppNotBusy,
					iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

				oViewModel = new JSONModel({
					busy : true,
					delay : 0
				});
				this.setModel(oViewModel, "appView");

				fnSetAppNotBusy = function() {
					oViewModel.setProperty("/busy", false);
					oViewModel.setProperty("/delay", iOriginalBusyDelay);
				};

				// disable busy indication when the metadata is loaded and in case of errors
				this.getOwnerComponent().getModel().metadataLoaded().
				    then(fnSetAppNotBusy);
				this.getOwnerComponent().getModel().attachMetadataFailed(fnSetAppNotBusy);

				// apply content density mode to root view
				this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			}
		});

	}
);
=======
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller){
	"use strict";
	
	return Controller.extend("com.euy.test.controller.App", {
		onShowHello : function () {
			
			alert("msg");
		}
	});
	
	
});
>>>>>>> 3e971e7 Program
