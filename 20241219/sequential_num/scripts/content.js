(() => {

  let intervalId;

  const editInputElement = () => {

    try {
      const inputElement = document.getElementById("product_code");
      if (inputElement) {
        clearInterval(intervalId);

        const inputValue = inputElement.value;

        if (!inputValue) {
          // inputElement.placeholder = "";
          inputElement.value = "[連番]";
        } else {
          console.log(`商品番号${inputValue}が入力されています`);
        }
      }
    } catch(e) {
      console.log("エラーが発生しました。",e)
    }
  }
  intervalId = setInterval(editInputElement, 300)
})();
