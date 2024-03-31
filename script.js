const fs = require('fs');
const path = require('path');
function processInput() {
  const userName = document.getElementById("userName").value;
  // Use the retrieved userName in your script
  console.log("Hello", userName);
}

const filePath = '';
const htmlFilePath = '';





fs.readFile(filePath, 'utf8', (err, fileContents) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    const lines = fileContents.split('\n'); // Split text into lines
    // const joinedString = ""
    const stringarr = [] 
    for(let i = 0; i < lines.length; i++){
      if (/##/.test(lines[i])) {
                      var str = lines[i].slice(2) 
                      stringarr.push( `<h3>${str}</h3>` )
        }
        else{
              stringarr.push(`<p>${lines[i]}</p>`)
        }
    }

    const joinedString = stringarr.join(" ")

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>😁/blog</title>
          <link rel="stylesheet" href="style.css">
          <style>
            #file-content {
              white-space: pre-wrap; /* Preserves line breaks */
              /*   //   max-width: 500px; Set a maximum width for overflow */
              overflow-x: auto; /* Enable horizontal scrolling if needed */
            }
          </style>
        </head>
        <body class = "blog">
            <h2 class = "blog-title"> the blog</h2>
          <div id="file-content">
            ${joinedString}
          </div>
        </body>
      </html>
    `;

    fs.writeFile(htmlFilePath, htmlContent, (err) => {
      if (err) {
        console.error('Error writing HTML file:', err);
      } else {
        console.log('HTML file written successfully!');
      }
    });
  }
});




