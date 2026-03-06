import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

export const RemoveDeadLinks: QuartzTransformerPlugin = () => {
  return {
    name: "RemoveDeadLinks",
    htmlPlugins() {
      return [
        () => {
          return (tree) => {
            visit(tree, "element", (node: any) => {
              // <a>タグ(リンク)であり、クラス名を持っているか確認
              if (
                node.tagName === "a" &&
                node.properties &&
                Array.isArray(node.properties.className)
              ) {
                // Quartzがリンク先を見つけられなかった場合に付与する "dead" クラスがあるか判定
                if (node.properties.className.includes("dead")) {
                  // 1. <a> タグをただの文字を表す <span> タグに書き換え
                  node.tagName = "span"
                  // 2. リンク先URL(href)の情報をHTMLから完全に削除
                  delete node.properties.href
                  // 3. リンク特有の見た目を消すため、関連クラスを削除
                  node.properties.className = node.properties.className.filter(
                    (c: string) => c !== "internal" && c !== "dead",
                  )
                }
              }
            })
          }
        },
      ]
    },
  }
}
