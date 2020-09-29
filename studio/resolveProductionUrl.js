export default function resolveProductionUrl(document) {
  return `http://localhost:8000/project/${document.slug.current}`;
}
