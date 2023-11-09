sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vc.monitor.controller.Parametros", {
            onInit: function () {
                debugger;
                this.onReadParam();
            },
            onReadParam: function(){
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/GravaParametrosInterfaceSet",{
                    success:function(response){
                        debugger;
                    },
                    error: function(error){
                        debugger;
                    }
                })
            },
            save: function(){
                debugger;
            },
            navigateForward1: function (selected) {
                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                 oRouter.navTo("Dashboard");
             },
             navigateForward2: function (selected) {
                  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                  oRouter.navTo("Parametros");
              }
        });
    });