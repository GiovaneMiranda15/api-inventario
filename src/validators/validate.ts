import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
export const validate = (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json({
            errors: result.error.flatten()
        });
    }
    req.body = result.data;
    next();
};