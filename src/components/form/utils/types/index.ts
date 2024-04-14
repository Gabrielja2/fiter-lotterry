import { z } from 'zod';
import { formSchema } from '../zod.schema';
import { FieldError } from 'react-hook-form';


export type FormErrors = {
    [K in keyof z.infer<typeof formSchema>]?: FieldError;
};
