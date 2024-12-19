(() => {

  // カスタムCSSへの上書きを試す
  // document.addEventListener('DOMContentLoaded', () => {
  //   let inputArray = document.querySelectorAll(".custom-combobox-input");
  //   if (inputArray.length > 0) {
  //     const supplier = inputArray[0];
  //     supplier.tabIndex = "-1";
  //   }
  // });

  // idへのtabindexを試す
  document.addEventListener('DOMContentLoaded', () => {
    const brandElement = document.getElementById("token-input-cnd_multiple_select_product_detail27");
    if (brandElement) {
      brandElement.tabIndex = "-1";
      console.log(`${brandElement}のtabindexを-1にしました。`);
    } else {
      console.log("指定したidがみつかりません");
    }
  });



  // forEachの書き方が間違っていると思うから直す

  document.addEventListener('DOMContentLoaded', () => {
    let subjectElements = document.getElementsByName("product_detail34");
    if (subjectElements.length > 0) {
      subjectElements.forEach(element => {
        element.tabindex = "-1";
        console.log(`${element}のtabindexを-1にしました。`);
      });
    } else {
      console.log("指定したnameがみつかりません");
    }
  });

  // 個別で指定することはできる
  let subjectElements = document.getElementsByName("product_detail34");
      subjectElements[0].tabIndex = "-1";

})();
