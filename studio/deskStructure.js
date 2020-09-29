import S from "@sanity/desk-tool/structure-builder";
import MdSettings from "react-icons/lib/md/settings";
import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import IframePreview from "./components/Iframe/IframePreview";

// const previewURL = "http://localhost:8000";
// const WebPreview = ({ document }) => {
//   const { displayed } = document;
//   return <iframe src={url + displayed.slug.current} frameBorder={0} />;
// };

// const localURL = "http://localhost:8000";
// const previewURL = window.location.hostname === "localhost" ? localURL : remoteURL;

const remoteURL = "https://gatsby-portfolio-preview-poc-4165823465.gtsb.io";
const localURL = "http://localhost:8000";
const previewURL = window.location.hostname === "localhost" ? localURL : remoteURL;

const hiddenDocTypes = listItem =>
  !["category", "person", "sampleProject", "siteSettings", "page"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.listItem()
        .title("Sample projects")
        .schemaType("sampleProject")
        .child(
          S.documentTypeList("sampleProject")
            .title("Sample projects")
            .child(documentId =>
              S.document(documentId)
                .schemaType("sampleProject")
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(IframePreview)
                    .options({ previewURL })
                    .title("Web Preview")
                    .icon(EyeIcon)
                ])
            )
        ),
      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("Page")
        .schemaType("page")
        .child(S.documentTypeList("page").title("Page")),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
