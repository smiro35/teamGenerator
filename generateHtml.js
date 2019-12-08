function generateHtml() {


    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
        <link rel="stylesheet" href="style.css">
    </head>
    
    
    
    <body>
    
        <div id="top" class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
    
            </div>
        </div>
    
        <div class="card" style="width: 15rem; height: 15rem; margin-left: 10px;">
    
            <div class="card-body">
    
                <h2 id="person" class="name">${person}</h2>
                <h5 id="job" class="card-title">${job}</h5>
    
    
                <ul class="list-group list-group-flush">
                    <li id="email"  class="list-group-item list-group-item-action list-group-item-primary">${email}</li>
                    <li id="gitname" class="list-group-item list-group-item-action list-group-item-success">${gitname}</li>
    
                </ul>
    
            </div>
    
    </body>
    
    </html>`
};

generateHtml();

module.exports