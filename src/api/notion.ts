import { createNotionInstance } from "./index";
import axios from "axios";

export const retriveBlocks = async (pageId: string) => {
  try {
    const res = await createNotionInstance().get(`/blocks/${pageId}/children`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      throw new Error("Different error Not Axios Error");
    }
  }
};
