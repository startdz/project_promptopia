import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User", 
    /**
     * 'ref' --> sama kaya 'join'
     * One to Many Relasi
     * 1 User bisa buat banyak Prompt
     */
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required!"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
});

const Prompt =
  models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
