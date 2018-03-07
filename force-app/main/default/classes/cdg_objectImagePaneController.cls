public class cdg_objectImagePaneController {

    @AuraEnabled
    public static Attachment getRecordImageID(string recordID, string filename){
        Attachment image = [select id from Attachment where parentID = :recordID and name = :filename];
        return image;
    }
}