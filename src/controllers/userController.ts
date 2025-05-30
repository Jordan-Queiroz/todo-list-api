import {Request, Response, NextFunction} from 'express';

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({"response": "delete user"});
}

export const editUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({"response": "edit user"});
}

export const listUsers = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({"response": "list users"});
}

// What is next function?
export const registerUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({"response": "register user"});
}
