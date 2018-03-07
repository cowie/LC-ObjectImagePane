({
    correctImageDeets : function(cmp, imageFile){
        var action = cmp.get("c.correctImageDeets");
        action.setParams({recordID: imageFile.documentId, filename:cmp.get("v.filename")});

        action.setCallback(this, function(response){

        });

        $A.enqueueAction(action);
    },
    getImageID : function(recordID, filename) {
        /*
        var action = cmp.get("c.getRecordImageID")
        action.setParams({recordID:recordID, filename:filename});

        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                console.log(response.getResponseValue());
                return response.getResponseValue().Id;
            }else if (state === "INCOMPLETE"){

            }else if (state === "ERROR"){
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log("Error Message: " + errors[0].message);
                    }
                    
                }else{
                    console.log("Unknown Error");
                }
            }
        });

        $A.enqueueAction(action);
        */
    }
})
