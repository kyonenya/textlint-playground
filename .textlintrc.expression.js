module.exports = {
  "filters": {
    "allowlist": {
      "allow": [
        "最も" // 副詞だが「尤も」と区別するため漢字で
      ],
    },
  },
  "rules": {
    "no-doubled-conjunction": true, // 同じ接続詞（そもそも）が連続して使われています
    "ja-hiragana-fukushi": true, // 勿論 => もちろん
    "ja-hiragana-keishikimeishi": true, // 〜する方が => 〜するほうが
    "ja-no-redundant-expression": { "severity" : "warning" }, // "することはできない"は冗長な表現です
    "preset-jtf-style": false,
    "preset-jtf-style": {
      "2.1.5.カタカナ": { "severity" : "warning" }, // ヴェール => ベール
      "2.1.6.カタカナの長音": true, // メロディ => メロディー
      "2.2.1.ひらがなと漢字の使い分け": { "severity" : "warning" }, // なにしろ => 何しろ
    },
  }
}
