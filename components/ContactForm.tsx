import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/Button";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL as string, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(data),
      });
      console.log("Form submitted successfully");
      setIsSubmitted(true); // Update state to indicate submission success
      setSubmitMessage(
        "Thank you for contacting us, we will be in touch soon!"
      ); // Set a success message
      reset(); // Reset the form fields
      // Update UI to show success message
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(false);
      setSubmitMessage(
        "There was an error submitting the form. Please try again later."
      ); // Set an error message
    }
  };

  return (
    <div className=" p-2 shadow-md w-full max-w-[450px] min-w-[350px] sm:min-w-[450px] min-h-[590px] flex flex-col justify-between  bg-white  border-8 border-gray-100 rounded-2xl">
      {isSubmitted && (
        <div className="text-center py-4 text-green-600">{submitMessage}</div>
      )}
      {!isSubmitted && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <h6 className="font-league-gothic text-2xl text-navyblue-100 mt-2 mb-2 w-full text-center">
            {" "}
            Contact Us
          </h6>

          {/* Name Field */}
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">Name is required.</p>
          )}

          {/* Email Field */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Email is required.</p>
          )}

          {/* Phone Field */}
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
          />

          {/* Message Field */}
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            {...register("message", { required: true })}
            id="message"
            rows={4}
            className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">Message is required.</p>
          )}

          {/* Submit Button */}
          <Button type="submit" title={"Send Message"} variant="btn_blue" />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
