import { Request, Response, NextFunction } from "express";

export const basicAuth = (req: Request, res: Response, next: NextFunction) => {
    // check for basic auth header
    if (
      !req.headers.authorization ||
      req.headers.authorization.indexOf("Basic ") === -1
    ) {
      return res.status(401).json({ message: "Missing Authorization Header" });
    }

    // get enviroments variables
    const apikey = process.env['API_KEY']
    const devicekey = process.env['DEVICE_KEY']

    // verify auth credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    if(username !== apikey || password !== devicekey) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }

    next();
};
