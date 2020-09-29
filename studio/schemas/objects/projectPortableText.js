import React from "react";
import { FaPaperclip } from "react-icons/lib/fa";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;
const highlightRender = props => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

export default {
  title: "Portable Text",
  name: "projectPortableText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" }
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender
            }
          },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url"
              }
            ]
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            blockEditor: {
              icon: FaPaperclip
            },
            fields: [
              {
                name: "reference",
                type: "reference",
                to: [
                  { type: "post" }
                  // other types you may want to link to
                ]
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "figure"
    }
  ]
};
