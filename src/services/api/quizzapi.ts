import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.VUE_APP_NOTION_API_KEY });
const databaseId: any = process.env.VUE_APP_NOTION_API_DATABASE;

export async function getMarvelQuizz() {
  const response = await notion.databases.query({ database_id: databaseId });
  const responseResults = response.results.map((page: any) => {
    return {
      id: page.id,
      question: page.properties.Question.title[0].plain_text,
      answers: page.properties.Answers.multi_select,
      correct: page.properties.Correct.rich_text[0].plain_text,
    };
  });
  return responseResults;
}
