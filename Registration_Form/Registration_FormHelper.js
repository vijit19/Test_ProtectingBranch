({
	onchangehelper : function(component, event) {
        
		
        var checkboxval=component.find("Checkbox").get("v.checked");
        component.set("v.CheckboxValue",checkboxval);
        var setvalue =component.get("v.CheckboxValue");
        console.log(setvalue);
        
	}
})