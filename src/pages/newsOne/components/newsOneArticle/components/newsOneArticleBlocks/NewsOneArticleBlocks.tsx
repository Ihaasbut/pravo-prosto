import type { NewsBlockI } from "../../../../../../types/news.types";
import type { NewsOneArticleBlocksPropsI } from "./NewsOneArticleBlocks.types";

function getNewsBlockKey(block: NewsBlockI) {
  if ("title" in block) {
    return block.title;
  }

  if ("image" in block) {
    return block.image;
  }

  if ("list" in block) {
    return block.list.join("|");
  }

  return block.text;
}

function NewsOneArticleBlocks({ data }: NewsOneArticleBlocksPropsI) {
  return (
    <>
      {data.map((block) => {
        const Component = block.component;
        return <Component key={getNewsBlockKey(block)} data={block} />;
      })}
    </>
  );
}

export default NewsOneArticleBlocks;
