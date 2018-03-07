({
    doInit : function(cmp, evt, helper){
        //give helper the recordID
        
        var imageID = helper.getImageID(cmp.get("v.recordId"), 'recImage');
        if(imageID) == null{
            cmp.set("v.hasImage", false);
        }else{
            cmp.set("v.hasImage", true);
            cmp.set("v.recordURL", )
            // /sfc/servlet.shepherd/version/renditionDownload?rendition=ORIGINAL_Png&versionId=0683B000000Mlht&operationContext=CHATTER&contentId={!RECORDID}
        }
    },
    handleImageUpload : function(cmp, evt, helper) {
        //convert the pane to the display div not the input div
    }
})
