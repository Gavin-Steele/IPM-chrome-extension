# IPM-chrome-extension
A very basic Chrome extension that pulls in the IPM referral request form and highlights names on LinkedIn

## This extension does 2 things.
1. Loads the referral URL in an iframe so that you can access it on all open tabs.
2. It searches the current page for a configured set of names, finds them and then updates the CSS to make them stand out more.

### Prep:
1. In the index.html file, you need to replace [Replace with yiour referral link] with the URl to your referral link.
2. In the content_scrip.js file, update: const searchStrings = ['Shobhit Chugh', 'Sam Feldman']; to include names you want highlighting on the page.

### Enabling the extension:
1. You need to enable Developer tools in the Chrome extension manager.
2. You need to click on the 'Load unpacked' button and select the folder containg the extension files.

![image](https://github.com/Gavin-Steele/IPM-chrome-extension/assets/5500139/0e1caadc-b9a1-43f3-adfe-3231af301c77)

3. Pin the extension:

![image](https://github.com/Gavin-Steele/IPM-chrome-extension/assets/5500139/f2f6c0bc-a283-4223-b1ef-ebb0e5899d65)

![image](https://github.com/Gavin-Steele/IPM-chrome-extension/assets/5500139/806a7fc4-c3d0-4c7c-a8a8-ec335da3e792)


If you visit LinkedIn now, with the extension enabled, you will see then names you added highlighted in purple, bold and a slight increase in font-size.

### Access the referral form
1. Click the extension icon

![image](https://github.com/Gavin-Steele/IPM-chrome-extension/assets/5500139/2c0334f9-a7ce-404e-bb51-0e60abf58d19)



Note: The extension runs from the local folder on your computer, so if you edit or remove those files, the extension will stop working.
