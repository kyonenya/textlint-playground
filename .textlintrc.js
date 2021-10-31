module.exports = {
  "filters": {},
  "rules": {
//    "preset-ja-technical-writing": {
//      "sentence-length": false, // sentence exceeds the maximum sentence length of 100
//      "max-ten": false, // 一つの文で"、"を4つ以上使用しています
//      "no-doubled-joshi": false, // 一文に二回以上利用されている助詞 "が" がみつかりました
//      "ja-no-weak-phrase": false, // 弱い表現: "かも" が使われています
//      "ja-no-successive-word": false, // "△" が連続して2回使われています。
//      "arabic-kanji-numbers": false, // 一つ => 1つ
//      "no-exclamation-question-mark": false, // Disallow to use "？"
//      "no-mix-dearu-desumasu": false, // "ですます"調 の文体に、次の "である"調 の箇所があります
//      "ja-no-redundant-expression": false, // "することはできない"は冗長な表現です。"することは"を省き簡潔な表現にすると文章が明瞭になります
//      /* 個人的に有用だったルール */
//      "no-doubled-conjunction": true, // 同じ接続詞（そもそも）が連続して使われています
//    },
    "preset-jtf-style": {
      "1.1.1.本文": false, // 本文を常体(である調)に統一して下さい 
      "1.2.1.句点(。)と読点(、)": false, // 句読点には全角の「、」と「。」を使います
      "3.1.1.全角文字と半角文字の間": false, // 原則として、全角文字と半角文字の間にスペースを入れません
      "4.1.3.ピリオド(.)、カンマ(,)": false, // 和文の句読点としてはピリオドを使用しません
      "4.2.7.コロン(：)": false, // コロン(：)を使用する場合は「全角」で表記します
      /* マークダウンと競合したルール */
//      "4.3.2.大かっこ［］": true, // 半角の大かっこ[]が使用されています。全角のかっこ［］を使用してください
      /* 個人的に有用だったルール */
      "3.3.かっこ類と隣接する文字の間のスペースの有無": true, // かっこの外側、内側ともにスペースを入れません
      "4.2.1.感嘆符(！)": true, // 文末に感嘆符を使用し、後に別の文が続く場合は、直後に全角スペースを挿入します
      "4.2.2.疑問符(？)": true, // 文末に疑問符を使用し、後に別の文が続く場合は、直後に全角スペースを挿入します。
      /* 辞書ベースのルール */
      "2.1.2.漢字": false, //「晰」は「常用漢字表」外の漢字です
      "2.1.5.カタカナ": true, // ヴェール => ベール
      "2.1.6.カタカナの長音": true,
      "2.2.1.ひらがなと漢字の使い分け": true, // なにしろ => 何しろ
      /* 余計なお世話 */
      "2.2.2.算用数字と漢数字の使い分け": false, // 一つ => 1つ
      "4.2.9.ダッシュ(-)": false, // 原則として和文ではダッシュ(―)を使用しません
    },
    "textlint-rule-general-novel-style-ja": {
      "chars_leading_paragraph": false, // （段落の先頭には全角スペース）
      "max_arabic_numeral_digits": false, // （アラビア数字の桁数は2桁まで）
    },
//    "textlint-rule-preset-japanese": {
//      "sentence-length": false, // sentence exceeds the maximum sentence length of 100
//      "max-ten": false, // 一つの文で"、"を4つ以上使用しています
//      "no-doubled-joshi": false, // 一文に二回以上利用されている助詞 "が" がみつかりました
//      /* 個人的に有用だったルール */
//      "no-doubled-conjunction": true, // 同じ接続詞（そもそも）が連続して使われています
//    },
    "ja-hiragana-fukushi": { "severity" : "warning" }, // 勿論 => もちろん
//    "ja-hiragana-hojodoushi": true, // 〜して頂く => 〜していただく
    "ja-hiragana-keishikimeishi": true, // 〜する方が => 〜するほうが
    "prh": {
      "rulePaths": ["./prh.yml"],
    },
  }
}
