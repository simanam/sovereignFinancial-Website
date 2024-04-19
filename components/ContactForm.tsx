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
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST", // Usually you need to specify the method explicitly for clarity.
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }); // Added the missing parenthesis and curly brace here
      if (res.ok) {
        reset(); // Reset the form fields
        setSubmitMessage("Your message has been sent successfully!");
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(false);
      setSubmitMessage(
        "There was an error submitting the form. Please try again later."
      ); // Set an error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" p-2 shadow-md w-full max-w-[450px] min-w-[350px] sm:min-w-[450px] min-h-[590px] flex flex-col justify-between  bg-white  border-8 border-gray-100 rounded-2xl">
      {isLoading && (
        <div className="text-center py-4 text-blue-600">Loading...</div>
      )}
      {isSubmitted && !isLoading && (
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
