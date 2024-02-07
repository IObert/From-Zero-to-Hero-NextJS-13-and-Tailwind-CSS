import twilio from "twilio";
import { SubmitButton } from "./submit-button";

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

export default function Home() {
  console.log("Access to second page");

  async function send(data: any) {
    "use server";

    const recipe = await client.messages.create({
      to: `whatsapp:${data.get("phone")}`,
      from: `whatsapp:${process.env.NEXT_PUBLIC_TWILIO_NUMBER}`,
      messagingServiceSid: process.env.TWILIO_SENDER,
      body: data.get("message"),
      contentSid: data.get("message") ? undefined : process.env.CONTENT_SID,
    });

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    console.log(`Sent message ${recipe.sid}`);
    await sleep(5000);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen text-sm text-white font-medium ">
      <div className="bg-slate-500 p-6 rounded shadow-lg w-10/12 h-10/12">
        <h1 className="text-2xl m-2 mb-4">Send a WhatsApp</h1>
        <form action={send}>
          <div>
            <label htmlFor="phone" className="block m-2">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
              placeholder="+49 151 12341234"
              pattern="^(\+49|0)(1\d{2}|(15|16|17|18|19)\d)(\s?\d{3,4}){2}$"
              required
            ></input>
          </div>
          <label htmlFor="message" className="block m-2">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Write your message here..."
          ></textarea>
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
