import { Response, Request, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

const userRepository = AppDataSource.getRepository(User);

const getUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.find();

    res.status(200).json({
        status: "success",
        data: {
            users,
        },
    });
});

const addUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = new User();
    user.accountNumber = req.body.accountNumber;
    user.bvn = req.body.bvn;
    user.created = new Date();

    const found = await userRepository.findOneBy({
        accountNumber: user.accountNumber,
        bvn: user.bvn,
    });

    if (found) {
        res.status(400).json({
            status: "fail",
            error: "Acount Number or BVN already exists",
        });

        return;
    }

    await userRepository.save(user);

    res.status(200).json({
        status: "success",
        message: "Your KYC has been submitted and is being processed!",
    });
});

const verifyUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user:any = await userRepository.findOneBy({ id: Number(req.params.id) });
    if (!user) {
        res.status(404).json({
            status: "fail",
            error: "No such record with the given ID",
        });

        return;
    }
    user.status = req.body.status;
    await userRepository.save(user);

    res.status(200).json({
        status: "success",
        message:
            user.status === "confirmed"
                ? "User Account Confirmed"
                : "User Account Declined",
    });
});

export default {
    addUser,
    getUsers,
    verifyUser,
};
