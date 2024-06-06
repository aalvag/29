const orderSchema = new mongoose.Schema({
  number: String,
  bussiness: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "businesses",
    },
  ],
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  products: [],
  totalPrice: Number,
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
});

export const orderModel = mongoose.model("orders", orderSchema);
