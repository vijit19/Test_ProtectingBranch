({
    onSubmit : function(cmp, evn,hlpr){
        var firstvalue =cmp.get("v.onclick");
        if(firstvalue=="true"){
            alert("Value is true");
            cmp.set("v.onclick", "false");
        }
            else{
                alert("Value is false");
            cmp.set("v.onclick", "true");
            }
           },
    onchange : function(component,event, helper) {
        
        console.log("this text from controller");
       
       helper.onchangehelper(component,event);
        
       
    },
    adddetails:function(component,event, helper) {
        var currenteducationallist=component.get("v.Educationaldetaillistcomponent");
       var currentsize= parseInt((currenteducationallist.length));
        var Newsize= parseInt((currenteducationallist.length)+1);
        currenteducationallist.push(Newsize);
        component.set("v.Educationaldetaillistcomponent",currenteducationallist);
    }
})