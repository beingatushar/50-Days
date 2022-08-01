const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <script src="script.js"></script>
</body>

</html>`
const cssContent = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    display: "flex";
    justify-content: center;
    align-items: center;
}`;
const process = require('process');
const fs = require("fs");
const folderNames = process.argv.slice(2);
const path = process.mainModule.path;
folderNames.forEach(folder => {
    fs.mkdirSync(`${path}//${folder}`)
    fs.writeFileSync(`${folder}//index.html`, htmlContent, error => console.log(error))
    fs.writeFileSync(`${folder}//style.css`, cssContent, error => console.log(error))
    fs.writeFileSync(`${folder}//script.js`, '', error => console.log(error))
});