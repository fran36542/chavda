// This file uses server-side code.
'use server';

/**
 * @fileOverview Provides AI-powered suggestions on how to improve user's projects based on screenshots and descriptions.
 *
 * - portfolioAdvisor - A function that takes project details and returns improvement suggestions.
 * - PortfolioAdvisorInput - The input type for the portfolioAdvisor function.
 * - PortfolioAdvisorOutput - The return type for the portfolioAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioAdvisorInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the project, including its goals, challenges, and outcomes.'),
  screenshotDataUri: z
    .string()
    .describe(
      "A screenshot of the project's user interface, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type PortfolioAdvisorInput = z.infer<typeof PortfolioAdvisorInputSchema>;

const PortfolioAdvisorOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('AI-powered suggestions on how to improve the project.'),
});
export type PortfolioAdvisorOutput = z.infer<typeof PortfolioAdvisorOutputSchema>;

export async function portfolioAdvisor(input: PortfolioAdvisorInput): Promise<PortfolioAdvisorOutput> {
  return portfolioAdvisorFlow(input);
}

const portfolioAdvisorPrompt = ai.definePrompt({
  name: 'portfolioAdvisorPrompt',
  input: {schema: PortfolioAdvisorInputSchema},
  output: {schema: PortfolioAdvisorOutputSchema},
  prompt: `You are a portfolio advisor providing suggestions on how to improve a user's project.

  Based on the project description and screenshot provided, offer concrete and actionable advice for enhancing the project and its presentation in a portfolio.

  Project Description: {{{projectDescription}}}
  Screenshot: {{media url=screenshotDataUri}}

  Focus on aspects such as user interface design, user experience, and overall project effectiveness.
  What can the user do to improve the project, or the way the project is presented in a portfolio?
  Be specific. Don't be afraid to be critical.
  What would make this project more attractive to potential clients?
  `,
});

const portfolioAdvisorFlow = ai.defineFlow(
  {
    name: 'portfolioAdvisorFlow',
    inputSchema: PortfolioAdvisorInputSchema,
    outputSchema: PortfolioAdvisorOutputSchema,
  },
  async input => {
    const {output} = await portfolioAdvisorPrompt(input);
    return output!;
  }
);
