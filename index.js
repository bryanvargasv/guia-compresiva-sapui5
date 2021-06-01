sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast",
	"sap/m/Image",
	"sap/m/Label",
	"sap/m/RadioButton",
	"sap/m/RadioButtonGroup"
], function (Button, MessageToast, Image, Label, RadioButton, RadioButtonGroup) {
	"use strict";

	const oImage = new Image({
		alt: "Logo SAPUI5",
		decorative: false,
		src: "UI5_logo.png",
		tap: function(oEvent) {
			alert("Hello uI5 world!")
		}
	});

	
	const oImage2 = new Image2({
		alt: "Logo SAPUI5",
		decorative: false,
		src: "UI5_logo.png",
		press: function(oEvent) {
			alert("Hello uI5!")
		}
	});

	const oLabel = new Label("rgbLabel", {
		text: "Cual logo es mejor"
	});

	const oRadioButton = new RadioButton({
		text: "Logo Izquierdo"
	});

	const oRadioButton2 = new RadioButton({
		text: "Logo Derecho"
	});

	const oRadioButtonGroup = new RadioButtonGroup({
		columns: 2,
		arialLabelledBy: oLabel
	});

	



});