//doar logica pura a algoritmului de encode
export const compressRLE = (text) => {
  if (!text) return "";
  
  const chars = [...text];
  let result = "";
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    //daca caracterele consecutive sunt egale
    if (i + 1 < chars.length && chars[i] === chars[i + 1]) {
      count++;
    } else {
      result += `${chars[i]}${count}`; //scriem in rezultat caracterul + frecventa lui
      count = 1;
    }
  }
  return result;
};

export const decompressRLE = (text) => {
  if (!text) return "";

  const chars = [...text];
  let result = "";
  let i = 0;

  while (i < chars.length) {
    const charToRepeat = chars[i];
    i++;

    let countStr = "";
    while (i < chars.length && !isNaN(parseInt(chars[i]))) {
      countStr += chars[i];
      i++;
    }

    const count = parseInt(countStr);
    if (!isNaN(count)) {
      result += charToRepeat.repeat(count); 
    }
  }
  
  return result;
};