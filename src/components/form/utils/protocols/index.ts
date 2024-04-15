export interface Field {
    name: string;
    label: string;
    type: string;
}

export interface FormProps {
    fields: Field[];
    onSubmit: ({ email, password }: { email: string; password: string }) => void;
    buttonName: string;
}