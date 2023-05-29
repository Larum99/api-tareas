import app from "./app";
import './database'

//settings
app.set('port', process.env.PORT || 3000); //process.env.PORT indica que se utiliza el puerto

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});