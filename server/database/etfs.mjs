import mongoose from 'mongoose';

const etfSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: true,
    unique: true, // Enforce unique ticker symbols
  },
  name: {
    type: String,
  },
  assetClass: {
    type: String,
    enum: ['Equity', 'Fixed Income', 'Commodity', 'Other'],
    required: true,
  },
  expenseRatio: {
    type: Number,
    required: true,
  },
  sectorWeights: [
    {
      sector: String,
      weight: Number,
    },
  ],
});

export default mongoose.model('etf', etfSchema);