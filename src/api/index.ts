import axios, { AxiosInstance } from "axios";
import { setupInterceptors } from "./interceptors";
// dotenv
import dotenv from "dotenv";

dotenv.config();

export const createNotionInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${process.env.NOTION_API_URL}/${process.env.NOTION_API_VERSION}`,
    headers: {
      "Notion-Version": "2022-06-28",
      Authorization: `Bearer ${process.env.NOTION_KEY}`,
    },
  });

  return setupInterceptors(instance);
};

export const createBrunchInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${process.env.BRUNCH_API_URL}/${process.env.BRUNCH_API_VERSION}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return setupInterceptors(instance);
};
