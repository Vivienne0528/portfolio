import React, { useContext, useEffect } from "react";
import { useRefStore } from "../../hooks/useRefStore";
import { useAuth } from "../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const GetInTouch = () => {
  const { contactRef } = useContext(useRefStore);
  const {
    schema,
    messageSubmit,
    successMessage,
    setSuccessMessage,
    errorMessage,
    onChange,
    captchaToken,
    isCoolDown,
    coolDownMessage,
    setCaptchaToken,
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (!captchaToken) {
      setSuccessMessage("");
    }
  });

  return (
    <section
      ref={contactRef}
      className="bg-[#FBD5A5] text-[#001E29] flex flex-col items-center gap-4 mt-50 p-4  w-full rounded-xl"
    >
      <div className="text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]">
        Connect with me
      </div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold leading-[2.25rem] md:leading-[2.5rem]">
        Get in touch
      </div>

      <form
        onSubmit={handleSubmit(messageSubmit)}
        className="gap-5 flex flex-col items-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]"
      >
        <p className="text-center">
          {
            "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below."
          }
        </p>
        <div className="flex gap-5 h-10 w-full">
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true })}
            className="input bg-white text-[#001E29] rounded-[5px] w-full"
          />
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="input bg-white text-[#001E29] rounded-[5px] w-full"
          />
        </div>
        <textarea
          className="textarea bg-white text-[#001E29] rounded-[5px] w-full h-50"
          placeholder="Enter your message"
          {...register("message", { required: true })}
        ></textarea>
        <div className="text-red-600 font-extrabold text-[14px] flex flex-col justify-center items-center">
          <p>{errors.name?.message}</p>
          <p>{errors.email?.message}</p>
          <p>{errors.message?.message}</p>
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p>{errorMessage}</p>}
          {!captchaToken && <p> Please complete the CAPTCHA verification.</p>}
          {isCoolDown && <p>{coolDownMessage}</p>}
        </div>

        <button
          disabled={!captchaToken || isCoolDown}
          id="submit"
          className="w-full btn btn-l md:btn-xl border-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] md:w-50"
        >
          Send to me →
        </button>
        <ReCAPTCHA
          sitekey="6LcFozcrAAAAAB9nUS1WeuilEhBld64y9gqmkHV7"
          onChange={onChange}
          onExpired={() => setCaptchaToken(null)}
        />
      </form>
    </section>
  );
};

export default GetInTouch;
