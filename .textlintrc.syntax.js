module.exports = {
  "filters": {},
  "rules": {
    "preset-jtf-style": {
//      "1.1.1.本文": false, // 本文を常体(である調)に統一して下さい
      "1.2.1.句点(。)と読点(、)": false, // 句読点には全角の「、」と「。」を使います
      "2.2.2.算用数字と漢数字の使い分け": false, // 一つ => 1つ
      "4.1.3.ピリオド(.)、カンマ(,)": false, // 和文の句読点としてはピリオドを使用しません
      "4.2.7.コロン(：)": false, // コロン(：)を使用する場合は「全角」で表記します
      "4.2.9.ダッシュ(-)": false, // 原則として和文ではダッシュ(―)を使用しません
    },
    "textlint-rule-general-novel-style-ja": {
      "chars_leading_paragraph": false, // 段落の先頭には全角スペース
      "max_arabic_numeral_digits": false, // アラビア数字の桁数は2桁まで
    },
  }
}
