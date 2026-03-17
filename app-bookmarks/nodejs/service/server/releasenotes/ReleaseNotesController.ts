import { NextFunction, Request, Response } from 'express'

export class ReleaseNotesController {
    public getReleaseNotes = async (req: Request, res: Response, next: NextFunction) => {
        try {
            var jsonResponse: any = {};
            jsonResponse.release = "release";
            jsonResponse.properties = {version : '1.0.0'};
            res.json(jsonResponse);
        } catch (err) {
            next(err)
        }
    }
}
