const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())
const channels = [
    
    {
        channelName : "Netflix",
        image: "https://play-lh.googleusercontent.com/384jx3OL4_tqtCGZrfIB6Q5TehM0Q7TLYFsenRPfeT8f-3vicWH2BYbvaEAneaPFMMM",
        url: "http://www.netflix.com"
    },
    {
        channelName : "Youtube",
        image: "https://stjohnsnorwood.org/wp-content/uploads/2019/04/YouTube.png",
        url: "http://www.youtube.com"
    },
    {
        channelName : "Disnep+",
        image: "https://store-images.s-microsoft.com/image/apps.9878.14495311847124170.294fed91-ba37-4b8a-83dc-b4098d97cebb.df2390ec-16fb-4849-a952-5f4780c309bd",
        url: "https://www.disneyplus.com/"
    },
    {
        channelName : "Netflix",
        image: "https://play-lh.googleusercontent.com/384jx3OL4_tqtCGZrfIB6Q5TehM0Q7TLYFsenRPfeT8f-3vicWH2BYbvaEAneaPFMMM",
        url: "http://www.netflix.com"
    },
    {
        channelName : "Youtube",
        image: "https://stjohnsnorwood.org/wp-content/uploads/2019/04/YouTube.png",
        url: "http://www.youtube.com"
    },
    {
        channelName : "Disnep+",
        image: "https://store-images.s-microsoft.com/image/apps.9878.14495311847124170.294fed91-ba37-4b8a-83dc-b4098d97cebb.df2390ec-16fb-4849-a952-5f4780c309bd",
        url: "https://www.disneyplus.com/"
    },
    {
        channelName : "Netflix",
        image: "https://play-lh.googleusercontent.com/384jx3OL4_tqtCGZrfIB6Q5TehM0Q7TLYFsenRPfeT8f-3vicWH2BYbvaEAneaPFMMM",
        url: "http://www.netflix.com"
    },
    {
        channelName : "Youtube",
        image: "https://stjohnsnorwood.org/wp-content/uploads/2019/04/YouTube.png",
        url: "http://www.youtube.com"
    },
    {
        channelName : "Disnep+",
        image: "https://store-images.s-microsoft.com/image/apps.9878.14495311847124170.294fed91-ba37-4b8a-83dc-b4098d97cebb.df2390ec-16fb-4849-a952-5f4780c309bd",
        url: "https://www.disneyplus.com/"
    }

];


app.get("/api/channels", (req, res) => {
    res.json(channels);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );