sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("testproject.controller.App", {
        onInit() {
        },

        onMostrarDatos: function(){
         const oView = this.getView();

         const nombre = oView.byId("inputNombre").getValue();
         const apellido = oView.byId("inputNombre").getValue();

         const mensaje = `Nombre: ${nombre}\nDirección: ${apellido}`;
         MessageToast.show(mensaje);
        }


    });
});