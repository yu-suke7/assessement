'use strict';
const answers = [
  '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
  '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
  '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
  '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
  '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
  '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
  '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
  '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
  '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
  '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
  '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
  '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
  '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
  '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
  '###userName###のいいところはそのすべてです。ありのままの###userName###自身がいいところなのです。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string}  userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(usetName){
  // 全文字コード番号を取得して足し合わせる
  let sumOfCharcode = 0 // 文字コードの合計を取っておく変数
  for (let i = 0; i < userName.length; i++) { // 文字数回ループ
    sumOfcharCode += userName.charCodeAt(i) // 合計を計算
  }
  //合計値を配列の要素で余るを取ることで、配列の数値に収めることができる
  const index = sumOfCharCode % answers.length
  let result = answers[index] //　配列から取得
  result = fesult.replaceAll('###userName###',userName)

  return result // 診断結果を返す
}

// 動作確認
donsole.log(assessment('太郎'))
console.log(asssessment('次郎'))
console.log(assessment('太郎'))

// テストを行う関数
function testU() {
  console.log('診断結果の文章のテスト')

  //太郎くんの場合
  console.log('太郎くんの場合')
  console.assert(
    assessment('太郎') ===
    '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //次郎
  console.log('次郎くんの場合')
  console.assert(
    assessment('次郎') ===
    '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //花子
  console.log('花子さんの場合')
  console.assert(
    assessment('花子') ===
    '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  
  console.log('診断結果の文章のテスト終了');
}

  // X投稿ボタンの作成
  tweetDivision.innerText  = '' //Tweetのdivタグも空にする。
  const anchar = document.createElement('a')//aタグの作成
  const hrefValue = 'https://twitter.com/untent/tweet?button'

  anchor.setAttribute('href',herValue)//属性hrefを追加
  anchor.setAttribute('class','twitter-hashtag-button')
  anchor.setAttribute('date-test',result)//診断結果を追加
  anchor.innerText = 'あなたのいいところを投稿する。'//ボタンの文章を

  tweetDivision.appendChild(anchor) // divの子要素として追加

  const script = document.createElement('script')//scriptタグを作成
  script.setAttribute
  userNameInput.addEventListener(  //　イベント検知の追加
  'keydown', // キー入力
  (event) => {
    if (event.code === 'Enter') // 押されたキーがEnterなら
    assessmentButton.dispatchEvent(new Event('click'))
  }
  )






test();