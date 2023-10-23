"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      name="send-messages"
      className="rounded-lg w-full h-10 flex place-content-between mt-4 items-center justify-center py-2.5  bg-indigo-500 text-white  hover:bg-indigo-600  hover:outline-none hover:ring-2 hover:ring-indigo-600"
    >
      {pending ? (
        <>
          <svg
            className="animate-spin m-1 h-6 w-6 text-indigo-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.8242.127 8l2-2.829zm4-1.419V20h4a8 8 0 01-7.858-5.291L10 15.872z"
            ></path>
          </svg>
          <span className="pl-4">Sending ...</span>
        </>
      ) : (
        <>
          <img className="invert " src="https://img.icons8.com/?id=93330"></img>

          <span className="pl-4">Send Message</span>
        </>
      )}
    </button>
  );
}
