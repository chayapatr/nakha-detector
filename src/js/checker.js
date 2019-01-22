let checker = input => {
    let checkerFunction = value => {
      input.text.string.find(value);
    };
    let wordArray = [{ word: 'นะค่ะ' }];
    wordArray.map(value => {
      checkerFunction(value);
    });
  };