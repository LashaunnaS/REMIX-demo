import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return prisma.post.create({ data: post });
    }),
  );
}

seed();

function getPosts() {
  return [
    {
      title: 'How Nature Can Help You Recharge',
      body: "In today's fast-paced world, it can be difficult to find time to relax and unwind. Work, school, and other responsibilities can leave us feeling drained and stressed out. However, there are simple things we can do to help us recharge and feel more at peace. One of these things is spending time in nature. Research has shown that spending time in nature can have a positive effect on our mental and physical health. Whether it's a walk in the park, a hike in the mountains, or a day at the beach, being in nature can help reduce stress, anxiety, and depression. In fact, studies have shown that just 20 minutes in nature can have a significant impact on our well-being. This stunning image of a forest at sunrise captures the beauty and serenity of nature. The soft glow of the sun filtering through the trees, the mist rising from the ground, and the tranquil stillness of the forest all contribute to a sense of peace and calm. Looking at this image can evoke feelings of relaxation and help us visualize ourselves in a natural setting, even if we can't physically be there. If you're feeling stressed or overwhelmed, try taking a few minutes to look at images of nature or go for a walk in a nearby park. Even if it's just for a short time, spending time in nature can help you recharge and feel more at peace. Incorporating nature into your daily routine can be a simple yet effective way to manage stress and improve your overall well-being.",
      imageUrl:
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Trees: Our Invaluable Lifeline',
      body: `Trees are an essential part of our ecosystem, providing numerous benefits that are critical to our survival. They produce oxygen, filter the air we breathe, and regulate the climate by absorbing carbon dioxide. Trees also play a crucial role in preventing soil erosion, preserving biodiversity, and providing habitat for a wide range of wildlife. However, despite their importance, the world's forests are facing significant challenges due to deforestation, forest degradation, and climate change. Deforestation, in particular, is a major threat to the world's forests, with an estimated 18 million acres of forest being lost each year. Addressing these challenges and preserving our forests is crucial for maintaining a healthy planet, and it is up to us to take action to protect them.`,
      imageUrl:
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'The Lifesource of Our Planet: A Look at Water and Its Importance',
      body: `Water is the most vital resource on our planet, essential for all forms of life. It covers more than 70% of the Earth's surface and is critical for agriculture, industry, and our daily lives. From the water we drink to the water that grows our food, this precious resource is essential for our survival. Despite its importance, water scarcity is a growing issue around the world, with over 2 billion people lacking access to safe drinking water. Climate change, population growth, and pollution are all contributing to this problem. The need for conservation and sustainable use of this resource is more important than ever, and it is up to all of us to take action to protect and preserve it for future generations.
      `,
      imageUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80',
    },

    {
      title: 'The Fascinating World of Space',
      body: `Space, the final frontier, has captivated our imaginations for centuries. It is a vast, mysterious expanse that is both beautiful and awe-inspiring. The exploration of space has led to groundbreaking discoveries, such as the existence of black holes, the discovery of other planets, and the confirmation of the Big Bang theory. It has also inspired generations of scientists and explorers to push the limits of what we know and what we can achieve. However, space exploration is not without its challenges. It is a dangerous and expensive endeavor that requires advanced technology and extensive research. The harsh conditions of space, such as extreme temperatures and radiation, pose significant risks to human life. Despite these challenges, the potential rewards of space exploration are enormous, from the discovery of new worlds to the advancement of our understanding of the universe. The exploration of space continues to push the boundaries of what we know and what we are capable of, and it remains an important area of scientific study and exploration.`,
      imageUrl:
        'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    },
  ];
}
