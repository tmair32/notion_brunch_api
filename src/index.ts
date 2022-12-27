import { Article } from "./types/brunch";
import { brunchAPIs, notionAPIs } from "./api/api";
import {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

// dotenv
import dotenv from "dotenv";
dotenv.config();

const articleList: Article[] = [];

const getArticles = async () => {
  const res = await brunchAPIs.getArticles();
  const { data } = res;
  const { list } = data;

  const articles = list.slice(0, 4);
  articleList.push(...articles);
};

const main = async () => {
  await getArticles();
  await retriveBlocks();
};

main();

// Notion
const notionPageId = process.env.NOTION_PAGE_ID as string;
const retriveBlocks = async () => {
  const res = await notionAPIs.retriveBlocks(notionPageId);

  const { results } = res;
  results.forEach((result: BlockObjectResponse, blockObjectIndex: number) => {
    const { type } = result;
    if (type === "heading_2") {
      const { heading_2 } = result;
      const { rich_text } = heading_2;

      rich_text.forEach((text: RichTextItemResponse) => {
        console.log(text);
        const { plain_text } = text;

        if (plain_text.includes("𝙋𝙤𝙨𝙩")) {
          console.log("AA");
        }
      });
    } else if (type === "divider") {
      console.log(blockObjectIndex);
    }
  });
};
