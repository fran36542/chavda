'use server';
/**
 * @fileOverview A portfolio chatbot that can answer questions about Fuya's projects, services, and skills.
 *
 * - portfolioChat - A function that takes a user's query and returns a text response.
 * - PortfolioChatInput - The input type for the portfolioChat function.
 * - PortfolioChatOutput - The return type for the portfolioChat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { projects } from '@/lib/projects';
import { services } from '@/lib/services';

const portfolioContext = `
# About Fuya
Fuya is a UI/UX Designer and Developer who designs and develops modern, user-centered mobile apps and websites. He has experience with UI/UX design, UX research, digital marketing, e-commerce development, and AI web development. His skills include Figma, Adobe XD, Sketch, UXPin, Webflow, and React. He is a creative problem solver, a great communicator, and a friendly team player.

# Projects
${projects
  .map(
    (p) => `## ${p.title}
- Category: ${p.category}
- Objection: ${p.objection}
- Problems: ${p.problems.join(', ')}
- Solution: ${p.solution.join(', ')}
- Impact: ${p.impact.join(', ')}
`
  )
  .join('\n')}

# Services
${services
  .map(
    (s) => `## ${s.title}
- Description: ${s.shortBio}
- Price: ${s.price}
- What's Provided: ${s.whatIProvide.join(', ')}
`
  )
  .join('\n')}
`;

const PortfolioChatInputSchema = z.object({
  query: z.string().describe('The user\'s question about the portfolio.'),
});
export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;

const PortfolioChatOutputSchema = z.object({
  response: z.string().describe('The AI-generated response.'),
});
export type PortfolioChatOutput = z.infer<
  typeof PortfolioChatOutputSchema
>;

export async function portfolioChat(
  input: PortfolioChatInput
): Promise<PortfolioChatOutput> {
  return portfolioChatFlow(input);
}

const portfolioChatPrompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: { schema: PortfolioChatInputSchema },
  output: { schema: PortfolioChatOutputSchema },
  prompt: `You are a helpful AI assistant for a UI/UX Designer named Fuya.
Your name is FuyaBot.
Answer the user's question based on the following context about Fuya's portfolio.
Be friendly and conversational. Keep your answers concise and to the point.
If you don't know the answer, say "I'm sorry, I don't have that information, but you can contact Fuya via the contact form to learn more.".

Context:
${portfolioContext}

User Question: {{{query}}}
`,
});

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: PortfolioChatInputSchema,
    outputSchema: PortfolioChatOutputSchema,
  },
  async (input) => {
    const { output } = await portfolioChatPrompt(input);
    return output!;
  }
);
