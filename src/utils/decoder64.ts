import { AxiosResponse } from "axios";
import { marked } from "marked";

export async function decoderRedme(base64Content: AxiosResponse) {
  const markdownContent = atob(base64Content.data.content.replace(/\n/g, ""));
  return await marked(markdownContent);
}
