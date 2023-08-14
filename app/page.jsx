import { Client } from "@notionhq/client";
import { Parser, usePreParser } from "tetrapack";
import Advert from "./Advert";
import Image from "next/image";

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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Advert />
            <Parser blocks={blocks}>
                {() => ({
                    blocks: {
                        image: (caption, url, key) => (
                            <figure key={key}>
                                <Image
                                    width={1040}
                                    height={1040}
                                    src={url}
                                    alt="Image link expired."
                                    className="object-contain rounded"
                                />
                                <figcaption>{caption}</figcaption>
                            </figure>
                        ),
                        to_do: (text, checked) => (
                            <span className="h-flex gap-2">
                                <input
                                    checked={checked}
                                    readOnly
                                    type="checkbox"
                                    className="form-checkbox rounded text-teal-300"
                                />
                                <p>{text}</p>
                            </span>
                        ),
                        callout: function (text, callout_image) {
                            <span className="p-4 border border-teal-300/50 rounded my-8">
                                {this.callout_image()}
                                <p>{text}</p>
                            </span>;
                        },
                        callout_image: () => (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-teal-300 inline m-4 float-left"
                                viewBox="0 0 256 256"
                            >
                                <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.93,166,26.5,143a16,16,0,0,1,0-30L90,89.93,113,26.5a16,16,0,0,1,30,0L166.07,90,229.5,113A15.79,15.79,0,0,1,240,128Z" />
                            </svg>
                        ),
                    },
                    wrapper: (text) => (
                        <article className="prose marker:text-teal-300 my-4 mx-auto flex flex-col gap-2">
                            {text}
                        </article>
                    ),
                })}
            </Parser>
        </main>
    );
}
