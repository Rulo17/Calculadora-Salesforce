({
    eliminar : function(component, event, helper) {
        var clear = true;
        
        var clearEvent = $A.get("e.c:deleteEvent");
        clearEvent.setParams({"borrado": clear});
        clearEvent.fire();
    }
})
