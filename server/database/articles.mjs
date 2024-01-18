import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  // Add optional fields to categorize or customize articles
  topics: [String], // e.g., "stocks", "bonds", "fundamentals", "analysis"
  etfReference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ETF', // Reference the related ETF document (optional)
  },
  lastUpdated: Date,
});

export default mongoose.model('Article', articleSchema);
