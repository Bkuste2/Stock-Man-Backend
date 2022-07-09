const app = require('./src/app')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is Running in port ${PORT}, access localhost://${PORT}/api to see more!`);
})