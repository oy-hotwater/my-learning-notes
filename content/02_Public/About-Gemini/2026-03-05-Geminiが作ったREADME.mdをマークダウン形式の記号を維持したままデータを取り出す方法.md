Geminiが作ったREADME.mdを[マークダウン](Markdown.md)形式の記号を維持したままデータを取り出す方法。
バニラの[[VSCode]]が[Markdown](Markdown.md)に対応していないので、この方法で取り出してコピペするとやれる。たぶんもっと簡単な方法がある

1. [[Gemini]]に[[Canvas]]でREADME.mdを書かせる。
2. 「Canvasを共有」から「Googleドキュメントにエクスポート」を押す
3. Googleドキュメントから、「ファイル」→「ダウンロード」→「[マークダウン](Markdown.md)(.md)」を押す

Geminiの[マークダウン](Markdown.md)が単に選択してREADME.mdにコピペだと[マークダウン](Markdown.md)形式の記号が消えてしまう。
私はGeminiのカスタム指示を使ってREADMEを書く際だけ「bash形式+bashコマンド除去」になるように指示したが、README以外の通常の[マークダウン](Markdown.md)の装飾が崩れたため、断念。
供養として[マークダウン](Markdown.md)ダウンロード方法をまとめた。
