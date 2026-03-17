import { Request } from "express";
import { CatService } from '../cats/CatService'

export interface RequestServices {
    catService: CatService
}

declare global {
    namespace Express {
        interface Request {
            services: RequestServices
        }
    }
}

export interface MyRequest extends Request {
  services: RequestServices
}
