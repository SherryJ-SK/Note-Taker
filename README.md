# Note Taker 📝

Heroku deploy URL: https://rocky-crag-83416.herokuapp.com/
 
## Description
This application allows user write, review and delete note in the HTML page. All the information will be saved in a json file, when the user would like access to the data at any time, the informaiton can be retrive from the file.

> To start
Click "Get Start" on the main HTML, user can write note on the '/notes' route. 

> Write and save note
After user input the title and content, save icon has been clicked, the text will be posted as a JSON object into '/api/notes' route, also will be saved in the db.json file. To identify the text, a unique id will be created by using the text title.

> Review note
To review the note which has been saved, click the note title on the left-side menu bar, which will get the note from the '/api/notes:id', this id will be the one has been posted with the text when the note has been created. 

> Delete note
User can click the bin icon to remove the note from the HTML page and from the JSON file. Similar with 'Review note', when the button has been clicked, the note id will be identified and splice from the array in JSON file.

## How to use (backend)
1. Open the server.js in terminal, and install package.json
```shell
$ npm install
```
2. Open the server.js in terminal
3. Enter the below command line and press enter
```shell
node server.js
```
4. Enter the HTML route in the browser, using the port number return from the terminal
"https://localhost:PORT/"

## Acknowledgments
- Node.js
  - Express
  - fs
  - path