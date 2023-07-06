import { AppDataSource } from "./data-source";
import userRouter from "./routes/user";
import AppError from "./utils/appError";
import * as express from "express";
import * as cors from "cors";
// import errorController from "./controllers/errorController";

const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Welcome to sofri",
    });
});
app.use("/api/v1/users", userRouter);

AppDataSource.initialize()
    .then(async () => {
        console.log("Connected to the database.");
    })
    .catch((error) => console.log(error));

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});

// app.use(errorController.errorHandler);
