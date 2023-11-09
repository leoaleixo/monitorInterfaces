/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "vc/monitor/model/models"
],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("vc.monitor.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // init models
               // models.init(this)

                // enable routing
                this.getRouter().initialize();

                // set core language
                sap.ui.getCore().getConfiguration().setLanguage("pt");
                sap.ui.getCore().applyTheme('sap_horizon')                

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);