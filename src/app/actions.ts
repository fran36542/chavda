"use server";

import {
  portfolioAdvisor,
  type PortfolioAdvisorInput,
} from "@/ai/flows/portfolio-advisor";
import { portfolioChat, type PortfolioChatInput } from "@/ai/flows/portfolio-chat";


export async function getPortfolioAdvice(input: PortfolioAdvisorInput) {
  try {
    const result = await portfolioAdvisor(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return {
      success: false,
      error: `Failed to get advice. ${errorMessage}`,
    };
  }
}

export async function getChatbotResponse(input: PortfolioChatInput) {
  try {
    const result = await portfolioChat(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return {
      success: false,
      error: `Failed to get chatbot response. ${errorMessage}`,
    };
  }
}
