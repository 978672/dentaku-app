let kakaku = document.getElementById("kakaku");
let waribikiP = document.getElementById("waribiki");
let p = document.getElementById("point");
let memo = document.getElementById("memo");
let count = 0;

function calculateResult() {
  const kakakuValue = parseFloat(kakaku.value);
  const waribikiPValue = parseFloat(waribikiP.value);
  const pValue = parseFloat(p.value);
  console.log(kakakuValue);
  console.log(waribikiPValue);
  console.log(pValue);

  // Check if conversion is successful
  if (isNaN(kakakuValue) || isNaN(waribikiPValue) || isNaN(pValue)) {
    alert("数値で入力してね😢");
    return;
  }

  if (kakakuValue === 0) {
    alert("価格が空です😢");
    return;
  }
  count++;
  let res = (kakakuValue * (100 - waribikiPValue) * (100 - pValue)) / 100;
  let res2 = kakakuValue * (100 - waribikiPValue);
  let addP = res2 * pValue /100;

  //小数点を2桁までに
  res = Math.round(res) / 100;
  res2 = Math.round(res2) / 100;
  addP = Math.round(addP) / 100;

  console.log(res);
  console.log(addP);
  // id属性で要素を取得
  let displayElement = document.getElementById("display");

  // 新しいdivを作る
  let resultDiv = document.createElement("div");
  resultDiv.className = "result p-2 mt-3";

  // 結果とナンバーの要素を作成
  let newElement = document.createElement("h3");
  let memoText;
  console.log(memo.value);
  if (memo.value === "") memoText = " 結果";
  else memoText = memo.value;
  newElement.textContent = count + " " + memoText;
  resultDiv.appendChild(newElement);

  // ポイント分を引いた価格の要素を作成
  newElement = document.createElement("p");
  newElement.textContent = "ポイント分を引いた価格　" + res.toLocaleString()  + " 円";
  // 挿入
  resultDiv.appendChild(newElement);

  // 実際の価格の要素を作成
  newElement = document.createElement("p");
  newElement.textContent = "実際の値段　" + res2.toLocaleString()  + " 円";
  // 挿入
  resultDiv.appendChild(newElement);

  // 加算予定ポイントの要素を作成
  newElement = document.createElement("p");
  newElement.textContent = "加算予定ポイント　" + addP.toLocaleString()  + " P";
  // 挿入
  resultDiv.appendChild(newElement);

  //いくら安くなったかの要素を作成(安くなっていないverも追加（今後値段比較の際に使うため）)

  newElement = document.createElement("p");
  if (String(kakakuValue - res) > 0) {
    newElement.classList.add("color-red");
    newElement.textContent = "🎉" + (kakakuValue - res).toLocaleString()  + "円安くなった";
  } else {
    newElement.classList.add("color-black");
    newElement.textContent = "安くなってないね😪";
  }
  resultDiv.appendChild(newElement);

  //参考に元の値段を表示
  newElement = document.createElement("p");
  newElement.textContent = `参考: 元の価格 ${kakakuValue.toLocaleString() }円`;
  // 挿入
  resultDiv.appendChild(newElement);

  // resultDivを挿入
  displayElement.insertBefore(resultDiv, displayElement.firstChild);

  //空にする
  kakaku.value = "";
  memo.value = "";
}
