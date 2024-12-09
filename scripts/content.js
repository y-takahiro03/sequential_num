(() => {
    let intervalId;

    const editInputElement = () => {
      const inputElement = document.getElementById("product_code");
      if (inputElement) {
        clearInterval(intervalId);
        inputElement.placeholder = "";
        inputElement.value = "[連番]";
      } else {
        console.log("要素が見つかりません");
      }
    };

    intervalId = setInterval(editInputElement ,300)

  })();