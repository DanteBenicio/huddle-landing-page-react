import { DataProps } from '../types/data';

const data: DataProps = {
  section: {
    title: 'Grow Together',
    description: `
    Generate meaningful discussions with your audience and build a strong, loyal community.
    Think of the insightful conversations you miss out on with a feedback form.
    `,
    imageSrc: 'assets/illustration-grow-together.svg',
    altImageText: 'two persons',
  },
  section2: {
    title: 'Flowing Conversations',
    description: `
      You wouldn't paginate a coversation in real life, so why do it online?
      Our threads have just-in-time loading for a more natural flow.
    `,
    imageSrc: 'assets/illustration-flowing-conversation.svg',
    altImageText: 'people sitting at a table',
  },
  section3: {
    title: 'Your Users',
    description: `
      It takes no time at all to integrate Huddle with your app's authentication
      solution. This means, once signed in to your app, your users can start chatting immediately.
    `,
    imageSrc: 'assets/illustration-your-users.svg',
    altImageText: 'people managing content tables',
    incrementSpacingBottom: true,
  },
};

export default data;
