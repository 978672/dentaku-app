let kakaku = document.getElementById("kakaku");
let memo = document.getElementById("memo");
let sFee = document.getElementById("shipping_fee");
let count = 0;

// var select = document.getElementById('shipping_fee');

// select.onchange = function(){
//   alert(this.value);
// }
const shippingFeeList = [0, 210, 220, 180, 520, 520, 750, 850, 1050];

function calculateProfit() {
  const kakakuValue = parseFloat(kakaku.value);
  console.log(kakakuValue);
  console.log(sFee.value);

  // Check if conversion is successful
  if (isNaN(kakakuValue)) {
    alert(
      "出品予定価格が空だよ。ちゃんと入力してね😢"
    );
    return;
  }else if(kakakuValue < 300 ){
    alert(
    "メルカリは300円未満で出品できないよ😢");
    return;
  }
  count++;

  let res = kakakuValue - kakakuValue * 0.1 - shippingFeeList[sFee.value];
  //小数点を2桁までの表示に
  res = Math.round(res * 100) / 100;

  // id属性で要素を取得
  let displayElement = document.getElementById("display");

  // 新しいdivを作る
  let resultDiv = document.createElement("div");
  //  0)resultDiv.className = "result-red p-2 mt-3";
  // else
    resultDiv.className = "result-blue p-2 mt-3";

  // 結果とナンバーの要素を作成
  let newElement = document.createElement("h3");
  let memoText;
  console.log(memo.value);
  if (memo.value === "") memoText = " 結果";
  else memoText = memo.value;
  newElement.textContent = count + " " + memoText;
  resultDiv.appendChild(newElement);

  //売ろうとしている価格の要素を作成
  newElement = document.createElement("p");
  newElement.textContent = kakakuValue.toLocaleString() + " 円で売ると・・・";
  resultDiv.appendChild(newElement);
  // 儲け価格の要素を作成
  newElement = document.createElement("h4");
  newElement.textContent = "儲け　" + res.toLocaleString() + " 円";
  // 挿入
  resultDiv.appendChild(newElement);

  // resultDivを挿入
  displayElement.insertBefore(resultDiv, displayElement.firstChild);

  //空にする
  kakaku.value = "";
  memo.value = "";
}
