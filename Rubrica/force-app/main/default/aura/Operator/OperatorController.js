({
    
    inputTarget: function(component, event) {
        var inputID = event.target.id;
        component.set("v.targetInput", inputID);
    },

    getButtonValue: function(component, event) {

        var inputSelec = component.find('inputSelec').getElement().value;
        var valueButton = event.getParam("buttonAux");

        if(inputSelec == "1") {
            var opInput1 = component.find('op1').getElement().value;
            var stringConcat = parseInt(opInput1 + valueButton);
            component.set("v.selecInput1", stringConcat);
        } else if(inputSelec == "2") {
            var opInput2 = component.find('op2').getElement().value;
            var stringConcat = parseInt(opInput2 + valueButton);
            component.set("v.selecInput2", stringConcat);
        } else if(inputSelec == "3") {
            component.set("v.selecSimbolo", valueButton);
        }
    },

    sendInputValues : function(component) {

        var opInput1 = component.find('op1').getElement().value;
        var opInput2 = component.find('op2').getElement().value;
        var simboloInput = component.find('simbolo').getElement().value;

        var calcEvent = $A.get("e.c:opEvent");
        calcEvent.setParams({"opEvt1":opInput1, "opEvt2":opInput2, "simboloEvt":simboloInput});
        console.log("Funciona");
        calcEvent.fire();

    },

    resetValues: function(component, event) {
        var deleteEvent = event.getParam("borrado"); 
        if(deleteEvent == true){
            component.set("v.selecInput1", "");
            component.set("v.selecInput2", "");
            component.set("v.selecSimbolo", "");
        }
    }
    
})
