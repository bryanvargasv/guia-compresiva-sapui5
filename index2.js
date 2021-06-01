sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast",
	"sap/m/Image",
	"sap/m/Label",
	"sap/m/RadioButton",
	"sap/m/RadioButtonGroup"
], function (Button, MessageToast, Image, Label, RadioButton, RadioButtonGroup) {
	"use strict";

	new Image("caca1",{
		alt: "Logo SAPUI5",
		decorative: false,
		src: "UI5_logo.png",
		press: onPressImage
	}).placeAt("content");

	new Image("caca2",{
		alt: "Logo SAPUI5",
		decorative: false,
		src: "UI5_logo.png",
		press: onPressImage
	}).placeAt("content");

	

	const onPressImage = function(oEvent){
		let oId = oEvent.getSource().getId();
		if (oId === "caca1") { 
			alert("Caquita 1");
		} else {
			alert("Caquita 2");
		}
	};

	let oRbg = new RadioButtonGroup({
		columns : 4
	}).placeAt("content");

	new Button({
		text: "Ready...",
		press: function (oEvent) {
			let cac = this.getView().byId("caca1");
			cac.setVisible(false);
			MessageToast.show("Hello World!");

		}
	}).placeAt("content");

	oRbg.addButton(new RadioButton({
		text: "derecha"
	}));

	oRbg.addButton(new RadioButton({
		text: "izquierda"
	}));
	
	

	



	new Label("rbgLabel",{
		text: "Cual logo es mejor?"
	}).placeAt("content");

});