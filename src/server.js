const app = require('./app')
require('./config/database')
// starting server
const port = app.get('port')

app.listen(port, ()=>{
    console.log('Server running on port', port)
})



