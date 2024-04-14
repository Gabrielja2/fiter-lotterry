export interface Field {
    name: string;
    label: string;
    type: string;
}

export interface FormProps {
    fields: Field[];
    onSubmit: (data: { [key: string]: string }) => void;
    buttonName: string;
}