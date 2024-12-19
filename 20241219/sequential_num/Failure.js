// 新規商品登録だけで動くようにした
// 商品編集でも使えるようにしたいとのこと
(() => {

    let intervalId;
  
    const editInputElement = () => {
  
      try {
        const spanElement = document.querySelector(".pan_navi .title");
  
  
        if (spanElement) {
          const textContent = spanElement.textContent;
  
          const targetString = /新規商品データ登録/;
  
          if (targetString.test(textContent)) {
            const inputElement = document.getElementById("product_code");
            if (inputElement) {
              clearInterval(intervalId);
              inputElement.placeholder = "";
              inputElement.value = "[連番]";
            } else {
              console.log("要素が見つかりません");
            }
          };
        }
      } catch {
  
      }
  
    }
  
    intervalId = setInterval(editInputElement, 300)
  
  })();
  
// placeholder に 連番で生成という文字があるときだけ動くようにした
// 新規商品登録でも値が入っていても、インプットタグに連番で生成という文字がデフォルトで入っていた ΣΣ(ﾟДﾟ)
  (() => {

    let intervalId;
  
    const editInputElement = () => {
  
      try {
        const inputElement = document.getElementById("product_code");
        if (inputElement) {
          clearInterval(intervalId);
  
          const placeholderText = inputElement.placeholder;
  
          if (placeholderText === "[連番]で連番生成") {
            inputElement.placeholder = "";
            inputElement.value = "[連番]";
          } else {
            let productNo = inputElement.value;
            console.log(`商品番号${productNo}が入力されています`);
          }
        }
      } catch(e) {
        console.log("エラーが発生しました。",e)
      }
    }
    intervalId = setInterval(editInputElement, 300)
  })();
  