import {Request, Response, NextFunction} from 'express';

export const helloWorld = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({"greeting": "hello world!"});
}
