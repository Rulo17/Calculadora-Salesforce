({
    selectedButton : function(component, event) {
        var button = event.target.id;

        var myEvent = $A.get("e.c:tecladoEvent");
        myEvent.setParams({"buttonAux":button});
        console.log("Teclado bien");
        myEvent.fire();
    }
})
