import { RichTextType } from "../types/types"

export const getText = (richTextArr: RichTextType[]) => {
  try {
    const texArr = richTextArr.map((richText) => richText.plain_text)
    return texArr.join("")
  } catch (e) {
    console.log(e)
  }
  return ""
}
