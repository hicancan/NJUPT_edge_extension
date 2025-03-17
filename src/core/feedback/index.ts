// src/core/feedback/index.ts

import { Feedback } from './types';

class FeedbackService {
    private feedbackList: Feedback[] = [];

    public submitFeedback(feedback: Feedback): void {
        this.feedbackList.push(feedback);
        this.saveFeedback();
    }

    private saveFeedback(): void {
        // Logic to save feedback to storage or send to server
    }

    public getFeedbackList(): Feedback[] {
        return this.feedbackList;
    }
}

const feedbackService = new FeedbackService();
export default feedbackService;