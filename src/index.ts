import { Client } from "@notionhq/client";

// dotenv
import dotenv from "dotenv";
dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

const pageId: string = process.env.NOTION_PAGE_ID as string;

const blocks = async () => {
  const blockId = pageId;
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  console.log(response);
};

blocks();
