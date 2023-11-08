import express from "express";

const app = express();
app.use(express.json());

const appPort = 8082

app.get('/', async (req, res) => {
    console.log('home route')
    res.send('reached !')
})

app.listen(appPort, async () => {
    console.log(`Server is running at http://localhost:${appPort}.`);
})