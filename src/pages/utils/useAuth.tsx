// src/utils/useAuth.tsx
import { useState } from "react";
import * as yup from "yup";

export const useAuth = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const schema = yup
        .object()
        .shape({
            email: yup
                .string()
                .email("Please enter a valid email address (e.g., user@example.com).")
                .required("Please enter your email address."),
            name: yup.string().required("Please enter your name."),
            message: yup.string().required("Please enter your message."),
        })
        .required();

    const messageSubmit = async ({
        name,
        email,
        message,
    }: {
        name: string;
        email: string;
        message: string;
    }) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setSuccessMessage("✅ Message sent successfully!");
                setErrorMessage("");
            } else {
                throw new Error("Server responded with an error.");
            }
        } catch (error) {
            console.log(error)
            setErrorMessage("❌ Failed to send message. Please try again later.");
            setSuccessMessage("");
        }
    };

    return {
        messageSubmit,
        schema,
        successMessage,
        errorMessage,
    };
};
