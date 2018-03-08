# Simple LEX Record Image Container
## Open Sourced / Unsupported - So I hope you trust my coding abilities (lord knows I don't)

## Wait Wut?
Alright, so SFDC doesn't have a blob container. This means that having a default image for your Contacts and Accounts and Widget__c's can be difficult sometimes. This LEX Component should make that easy. Simple component to drag onto any object's record detail. Will save a file with an admin-specified filename on the record, and then always pop that image up for users. Want to change the image? Cool, there's a button for that too. 

## Dev, Build and Test

### DX Style:
1. Install Salesforce DX. Enable the Dev Hub in your org or sign up for a Dev Hub trial org and install the Salesforce DX CLI. Follow the instructions in the [Salesforce DX Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm?search_text=trial%20hub%20org) or in the [App Development with Salesforce DX](https://trailhead.salesforce.com/modules/sfdx_app_dev) Trailhead module.

1. Clone this repository:
    ```
    git clone https://github.com/cowie/LC-ObjectImagePane
    cd LC-ObjectImagePane
    ```

1. Create a scratch org and provide it with an alias (dh):
    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a dh
    ```

1. Push the app to your scratch org:
    ```
    sfdx force:source:push
    ```

1. Open the scratch org:
    ```
    sfdx force:org:open
    ```

1. Go to an object of your choice, and open a record. Click on the **gear** in the top right, and then **Edit Page**. App builder should pop up. Find the **Object Image Pane** listing under the **Custom** components area. Drag and drop it, preferably to the right side area. 
1. Fill out all those values I'm asking for, or leave em blank and use the defaults.
1. Enjoy the pretty pictures.


### Old School Style (metadata API):

1. Clone this repository:
    ```
    git clone https://github.com/cowie/LC-ObjectImagePane
    cd LC-ObjectImagePane
    ```

2. Use the metadata API to deploy the contents of the mdAPI folder within the repository.

## Resources


## Description of Files and Directories


## Issues / ToDo's
1. Not sure if there needs to be edit perms on this. Probably not I'd imagine.
1. Kinda wanted it to just update a new version of the content, not a new doc every time, but it's easier to use the prebuilt file uploader. 
1. Need to make a 'wide scale' component version, in case folk want it on the main pane instead of the gutter.
1. Lol probably need some test classes too.
