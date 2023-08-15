const express = require('express');
const handlerBar = require("express-handlebars");
const path = require('path')
const app = express();
//const __dirname = path.resolve(path.dirname(''));
const port = 3000;

app.use(express.static("public"));
app.use("/jkb_logo.ico", express.static("images/jkb_logo.ico"));

app.engine("handlebars", handlerBar.engine());
app.set("view engine", "handlebars");
app.set("views", "./views")

app.get("/", (req, res) => {
    res.render("home", { layout: false, title:"Home",
    /*helpers:{
        listName() {
            let names = ["Purva", "Chiranjeev", "Khushi", "Swaraj"];
            let html = names
            .map((names) => {
                return `<li>${names}</li>`;
            })
            .join("\n");
            return html;
        },
           
    },*/

});
    
});

app.get("/about", (req, res) => {
    res.render("about", { layout: false,title:"About",
     
 });
});

app.get("/courses/:title", (req, res) => {
    if(req.params.title==='1st-year-programming')
    {
    res.render("courses", { layout: false,title:"First year Programming",})
    }
    if(req.params.title=='1st-year-engg-coaching')
    {
        res.render("courses", { layout: false,title:"First year Coaching",})

    }
 });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

/*app.use(express.static("public"));
app.use("/jkb_logo.ico", express.static("images/jkb_logo.ico"));

app.engine("handlebars", handleBar.engine());
app.set("view engine", "handlebars");
app.set("views", ".")

app.get("/",function (req,res){
   // res.send('hello')
    res.sendFile(path.join(__dirname+'/Homepage.html'))
})

app.get('/admission',function (req,res){
    //res.send('about');
    res.sendFile(path.join(__dirname+'/engg_admin.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.listen(port, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is
                      listening on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
*/