import { Client } from "@notionhq/client";
import { Parser, usePreParser } from "tetrapack";
import Advert from "./Advert";

async function getBlocks(pageId) {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    });

    let data = await notion.blocks.children.list({
        block_id: pageId,
        page_size: 50,
    });

    return data.results;
}

export default async function Home() {
    let blocks = await getBlocks(process.env.NOTION_PAGE_ID);
    blocks = await usePreParser(blocks, getBlocks);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
            <Advert />
            <Parser blocks={blocks}>
                {() => ({
                    wrapper: (text) => (
                        <article className="prose my-4 mx-auto flex flex-col gap-2">
                            {text}
                        </article>
                    ),
                })}
            </Parser>
        </main>
    );
}
