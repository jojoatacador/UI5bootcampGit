sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.iu.bootcamWebapp.controller.App", {

		onInit: function() {
			//set data model on view
			var oData = {
				field: {
					username: "username"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "sap.iu.bootcamWebapp.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},

		onLoginPress: function() {
				// read msg from i18n model
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/field/username");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				// show message
				var oTextField = this.getView().byId("username").getValue().length;
				var oPtextField = this.getView().byId("password").getValue().length;
				var oTextField1 = this.getView().byId("username").getValue();
				var oPtextField1 = this.getView().byId("password").getValue();
				var oTextField1 = this.getView().byId("username").getValue();
				// Both username and password is NOT NULL
				if (oTextField === 0 && oTextField === 0) {
					sap.m.MessageToast.show("Both username and password is NOT NULL");
				}
				// Username must be 6 to 8 characters ONLY
				if (oTextField > 8) {
					sap.m.MessageToast.show("Username must be 6 to 8 characters ONLY");
				}
				// Password must be 7 to 10 characters ONLY
				if (oPtextField > 10) {
					sap.m.MessageToast.show("Password must be 7 to 10 characters ONLY");
				}
				// Username and Password must match YOUR credentials (Feel free to set this on your code)
				if (oTextField1 === "jojo" && oPtextField1 === "jojo") {
					// sap.m.MessageToast.show("May Tama ka");
					sap.m.MessageToast.show(sMsg);
				} else {
					sap.m.MessageToast.show("Gungong Mali Yan");
				}
			}
			// Output an error and success message

		// show a native JavaScript alert
		// alert("Hello World " + oTextField.getValue());
		// }
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.iu.bootcamWebapp.view.App
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.iu.bootcamWebapp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.iu.bootcamWebapp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.iu.bootcamWebapp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});