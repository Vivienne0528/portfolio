// src/utils/useAuth.tsx
import * as yup from "yup";

export const useAuth = () => {
    const schema = yup
        .object()
        .shape({
            email: yup.string().email().required(),
            name: yup.string().required(),
            message: yup.string().required(),
        })
        .required();

    const messageSubmit = () => {

    };

    return {
        messageSubmit, schema
    };
};
