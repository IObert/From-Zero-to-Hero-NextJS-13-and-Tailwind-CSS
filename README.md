# From Zero to Hero: NextJS 13 and Tailwind CSS for Beginners

Result of the live coding during my talk about NextJS 2023/2024

## Prerequisites

- [Node.js](https://nodejs.org/en/) installed.
- An upgraded [Twilio account](https://www.twilio.com/try-twilio).
- Install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/getting-started/install).
- [Buy a number](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console) you want to use and [enable it for WhatsApp](https://www.twilio.com/docs/whatsapp/tutorial/connect-number-business-profile)
- A Messaging Server that has the WhatsApp number in its [Sender Pool](https://support.twilio.com/hc/en-us/articles/223181308-Getting-started-with-Messaging-Services)

## Setup

- Clone this project
  ```bash
  git clone https://github.com/IObert/From-Zero-to-Hero-NextJS-13-and-Tailwind-CSS.git
  ```
- Copy `sample.env` to `.env` and replace the listed environment variables
- Install dependencies and run the project

  ```bash
  npm install
  npm run dev
  ```
- Access <localhost:3000> and start interacting with the site



## The Road From Here

These links might help you to continue your learning journey:

- [Next, Nest, Nuxt, Nust?](https://www.twilio.com/blog/comparing-nextjs-nestjs-nuxt-gatsby) + [Talk on YouTube](https://www.youtube.com/watch?v=OijkHxmbLMc&t=2s)
- [Getting Started With Next](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)
- [When to use Server and Client Components?](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components)
- [Public and Private Environment Variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)
- [Custom Route Handlers](https://nextjs.org/blog/next-13-2#custom-route-handlers)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Fun With Next 13 Server Components](https://dev.to/zenstack/fun-with-nextjs-13-server-components-o37)