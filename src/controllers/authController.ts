// import { AppDataSource } from "../data-source";
// import { Admin } from "../entity/Admin";
// import catchAsync from "../utils/catchAsync";

// const adminRepository = AppDataSource.getRepository(Admin);

// const protect = catchAsync(async (req, res, next) => {
//     let token: any;
//     if (
//         req.headers.authorization &&
//         req.headers.authorization.startsWith("Bearer")
//     ) {
//         token = req.headers.authorization.split(" ")[1];
//     }
//     if (!token) {
//         res.status(401).json({
//             status: "fail",
//             message: "You are not logged in, please log in to gain access",
//         });
//         return;
//     }

//     // Checking if user exists
//     const admin = await adminRepository.findOneBy({
//         username: req.body.username,
//     });

//     next();
// });
