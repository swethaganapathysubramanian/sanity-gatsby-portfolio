import defaultResolve from "part:@sanity/base/document-actions";

import { ReviewAction } from "./actions/reviewAction";

export default function resolveDocumentActions(props) {
  return [...defaultResolve(props), ReviewAction];
}
