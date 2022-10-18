# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

Checkout this link for more information
(https://devpost.com/software/guaranteed-good?ref_content=my-projects-tab&ref_feature=my_projects)

## Inspiration

As students of Berkeley, we value websites like Gofundme in providing anyone with the opportunity to spend money on causes they believe in. One problem we realized however is that the goodwill and trust of the public could be taken advantage of because there is a lack of strict accountability when it comes to the way the fundraised money is spent. From here, we noticed a similar trend among crowdsourced funding efforts in general -- whether it be funding for social causes or funding for investors. Investors wanting to take a leap of faith in a cause that catches their eye may be discouraged to invest for fear of losing all their money — whether from being scammed or from an irresponsible usage of money — while genuine parties who need money may be skipped. We wanted to make an application that solves this problem by giving the crowd control and transparency over the money that they provide.

## What it does

Guaranteed Good focuses on the operations of NPOs that need financial support with building technologies for their organization. Anybody can view the NPO's history and choose to provide cryptocurrency to help the NPO fund their project. However, the organization is forced to allocate and spend this money legitimately via smart contracts; every time they want to use a portion of their money pool and hire a freelancer to contribute to their project, they must notify all their investors who will decide whether or not to approve of this expenditure. Only if a majority of investors approve can the NPO actually use the money, and only in the way specified.

## How we built it

To enable the smart contract feature of our application, we used Solidity for some of our backend infrastructures.

We programmed the frontend in React, Next, and Tailwind.

## Challenges we ran into

None of us had previous experience with Solidity or blockchain technologies so there was a steep learning curve when trying to familiarize ourselves with implementing smart contracts and working with blockchain. It was difficult to get started and we had a lot of confusion with setup and dependencies management.

The second thing that stumped us was adapting to using Solidity as a backend language. Since the language is a bit more niche than other more commonly used backend languages, there was less of an abundance of resources to teach us how to integrate our React frontend with our Solidity backend. Luckily, we found out that Solidity can integrate with the Next.js framework, so we set out to learn and implement Next.

## Accomplishments that we're proud of

We're all proud of the amount of deep diving that we did to familiarize ourselves with blockchain in a short amount of time! We thought it would be a risky move since we weren't sure if we would be able to actually learn and complete a blockchain-centered application, but we wanted to try anyway since we really liked our idea. Although we are by no mean experts in blockchain now, it was fun spending time and learning a lot about this technology. We were also really satisfied when we were able to pull together a functioning full-stack application by the end of 24 hours.

In addition, with so many moving components in our application, it was especially important to make our website intuitive and simple for users to navigate. Thus, we spent time coming up with a streamlined and aesthetic design for our application and implementing it in react. Additionally, none of us really had design experience so we tried our best to quickly learn Figma and simple design principles and were surprised when it didn't come out as totally awkward-looking.

## What we learned

New technologies such as blockchain, Solidity, Figma design, and Next
How to communicate smart contract data from Solidity using Next and Node
To appreciate the amount of careful planning and frontend design necessary for a good web application with many functionalities
What's next for Guaranteed Good
Dashboard

Currently GuarenteedGood has a user dashboard that is bare bones. With more time, we wanted to be able to offer analytics on how the project was going, graphs, and process more information from the user.
Optimizing Runtime

With a lot of projects and user information to load, it takes a bit longer than we like to run the website. We want to integrate lazy loading, optimize images, and website caching.
Matching Freelancer users

Allowing Freelancers to post and edit their profiles to their job board, and accept or reject job offers

## Built With

next
react
solidity
