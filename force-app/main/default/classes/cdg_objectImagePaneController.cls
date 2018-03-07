public class cdg_objectImagePaneController {

    @AuraEnabled
    public static ContentDocument getRecordImageID(string recordID, string filename){
        return null;
    }
    

    @AuraEnabled
    public static void correctImageDeets(string docID, string filename){
        ContentDocument doc = [select id from ContentDocument where id = :docID];
        doc.title = filename;
        update doc;
    }
}