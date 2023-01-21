import express from 'express';
import indexRoutes from './routes/index.routes'
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
    ".hbs",
    engine({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        defaultLayout: "main",
        extname: ".hbs",
    })
);

app.set('view engine', '.hbs');
// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// Router
app.use(indexRoutes);

export default app;