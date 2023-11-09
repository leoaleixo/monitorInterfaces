sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/odata/v2/ODataModel"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device, Filter, FilterOperator, ODataModel) {
        "use strict";

        return {

        component: null,
		init: function (component) {
			this.component = component
			
			/** const uri = this.component.getManifestObject().resolveUri("HanaComplCarga/odata/v2/fiori/"); */
			
			const model = new ODataModel(uri, {
				"defaultOperationMode": "Server",
				"defaultCountMode": "InlineRepeat"
			});
			
			this.component.setModel(model, "dataSource");
			this.getParametros()
		},

        getFilter: function (key, values) {
			return key && this.filters[key](values)
		},

        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
    },

		getTileCounts: function () {
			var dateL = new Date();
			var dateH = new Date();
			dateH.setDate(dateH.getDate() + 1);
			dateL = dateL.toISOString();
			dateH = dateH.toISOString();
			dateL = new Date(dateL.substring(0, dateL.indexOf("T")) + "T00:00:00Z");
			dateH = new Date(dateH.substring(0, dateH.indexOf("T")) + "T00:00:00Z");
			
			const promises = [
				this.getCountWith(),
				this.getCountWith({ key: 'aguardando' }),
			]
			
			return Promise.all(promises)
				.then(res => {
					const [ Aguardando ] = res 
					
					return { Aguardando }
				})
				.finally(() => sap.m.MessageToast.show("Dados atualizados com sucesso."))
		},

        getCountWith: function (filters = {}) {
			const oDataSource = this.component.getModel('dataSource')
			const filter = this.getFilter(filters.key, {
				value1: filters.value1,
				value2: filters.value2
			})
			
			return new Promise((resolve, reject) => {
				oDataSource.read('/ProtocoloVendedor/$count', {
					success: resolve,
					error: reject,
					filters: Array.isArray(filter) ? filter : [filter], 
					sorters: null,
				})
			})
		},

        setFilters: function (data) {
			this.setModel('Filters', data,)
		},

    };
});