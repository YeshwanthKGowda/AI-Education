import { pipeline } from '@huggingface/inference';

export const getAIRecommendations = async (progress) => {
  const summarizer = pipeline('summarization');
  const summary = await summarizer(progress.join(' '));
  return summary;
};
