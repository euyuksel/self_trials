sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.euy.testOernek01.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.euy.testOernek01.view.Main
		 */
			onInit: function() {
				var OTableContent = { data: [] };
				var oJson = {
						ID: "",
					  Name: "Hede",
					  Street: "",
					  No: "",
					  ZipCode: 0,
					  City: "",
					  Country: "",
					  Enabled: true
				};
				
				this.getView().setModel(new JSONModel(oJson), "AddressModel");
				this.getView().setModel(new JSONModel(OTableContent), "AddressTableModel");
			},
			
			onPressUpdate: function() {
				debugger;
			},
			
			onPressEdit: function(oEvent) {
				if (oEvent.getSource().getProperty("icon") === "sap-icon://display") {
					oEvent.getSource().setProperty("icon", "sap-icon://edit");
					this.getView().getModel("AddressModel").getData().Enabled = false;
				}else{
					oEvent.getSource().setProperty("icon", "sap-icon://display");
					this.getView().getModel("AddressModel").getData().Enabled = true;
					
					
				}
				this.getView().getModel("AddressModel").refresh();
				debugger;
			},
			
			onPressAdd: function(oEvent) {
				debugger;
				var oLineItem = this.getView().getModel("AddressModel").getData();
				var oTable = this.getView().getModel("AddressTableModel").getData();

				var oJson = {
						ID: oLineItem.ID,
					  Name: oLineItem.Name,
					  Street: oLineItem.Street,
					  No: oLineItem.No,
					  ZipCode: oLineItem.ZipCode,
					  City: oLineItem.City,
					  Country: oLineItem.Country,
					  Enabled: oLineItem.Enabled
				};

				var oClear = {
						ID: "",
					  Name: "Hede",
					  Street: "",
					  No: "",
					  ZipCode: 0,
					  City: "",
					  Country: "",
					  Enabled: true
				};






				//var oTemp = oLineItem;
				oLineItem.ID = new Date().toJSON();
				//oTable.data.push(oJson);
				oTable.data.push(oLineItem);
				this.getView().getModel("AddressTableModel").refresh();
				
				
				this.getView().getModel("AddressModel").setData(oClear);
				this.getView().getModel("AddressModel").refresh();
			}
			

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.euy.testOernek01.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.euy.testOernek01.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.euy.testOernek01.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});