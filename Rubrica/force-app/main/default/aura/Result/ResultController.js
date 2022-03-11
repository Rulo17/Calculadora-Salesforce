({
    calculate : function(component, event, helper) {

        var op1 = event.getParam("opEvt1");
        var op2 = event.getParam("opEvt2");
        var simbolo = event.getParam("simboloEvt");
        var resultado = "Syntax error";

        if(simbolo == "-"){
            resultado = op1 - op2;
        };

        if(simbolo == "+"){
            resultado = parseInt(op1) + parseInt(op2);
        };

        if(simbolo == "x"){
            resultado = op1 * op2;
        };

        if(simbolo == "/"){
            resultado = op1 / op2;
        };

        if(simbolo == "^"){
            resultado = Math.pow(op1, op2);
        };

        if(simbolo == "%"){
            resultado = (op1/100) * op2;
        };
        
        component.set("v.total", resultado);

    },

    resetValues: function(component, event) {
        var deleteEvent = event.getParam("borrado"); 
        if(deleteEvent == true){
            component.set("v.total", "");
        }
    }
})
