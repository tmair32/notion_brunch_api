import { createBrunchInstance } from "./index";
import axios from "axios";
import { Article, Return } from "../types/brunch";

export const getArticles = async (): Promise<Return<Article>> => {
  try {
    const res = await createBrunchInstance().get(
      `/article/${process.env.BRUNCH_KEY}`
    );
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      throw new Error("Different error Not Axios Error");
    }
  }
};
