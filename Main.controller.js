sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/core/CustomData",
    "../model/formatters",
	"../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";

        return Controller.extend("vc.monitor.controller.Main", {
            onInit: function () {

               /**  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getTarget("Main").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
                
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass()); 
                
                models.getTileCounts()
                    .then(counts => models.setModel('CountSet', counts))
                
                this.getOwnerComponent._readIntervalDash = setInterval(function() {
                    models.getTileCounts()
                        .then(counts => models.setModel('CountSet', counts))
                }.bind(this), 60000);
                */

            },
            navigateForward: function (selected) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Detail");
            }
        });
    });
