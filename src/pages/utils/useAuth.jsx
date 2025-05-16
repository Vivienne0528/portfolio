// src/utils/useAuth.tsx
import { useState } from "react";
import * as yup from "yup";

export const useAuth = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isCoolDown, setIsCoolDown] = useState(false);
  const [coolDownMessage, setCoolDownMessage] = useState("");
  const [coolDownSeconds, setCoolDownSeconds] = useState(30);
  let myInterval;

  function onChange(value) {
    setCaptchaToken(value);
  }

  const showInterval = () => {
    setCoolDownSeconds((prev) => {
      if (prev <= 1) {
        setIsCoolDown(false);
        setCoolDownMessage("");
        console.log(prev);
        return 0;
        clearInterval(myInterval);
      }
      setCoolDownMessage(
        `⏳ Please wait ${prev - 1} seconds before sending another message.`
      );
      return prev - 1;
    });
  };

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

  const messageSubmit = async ({ name, email, message }) => {
    setCoolDownSeconds(30);
    if (isCoolDown) {
      setCoolDownMessage(
        `⏳ Please wait ${coolDownSeconds} seconds before sending another message.`
      );
      return;
    }
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setIsCoolDown(true);
        const myTimeout = setTimeout(() => {
          setIsCoolDown(false);
          setCoolDownMessage("");
        }, 30000);
        setSuccessMessage("✅ Message sent successfully!");
        clearTimeout(myTimeout);
        setErrorMessage("");
        myInterval = setInterval(showInterval, 1000);
      } else {
        throw new Error("Server responded with an error.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("❌ Failed to send message. Please try again later.");
      setSuccessMessage("");
    }
  };

  return {
    messageSubmit,
    schema,
    successMessage,
    errorMessage,
    captchaToken,
    setCaptchaToken,
    onChange,
    setSuccessMessage,
    isCoolDown,
    coolDownMessage,
  };
};
