copy(Object.values(document.getElementsByClassName("tngMainTrOn")).map(el => {
  const text = el.innerText
  const textArr = text.split("\n")
  const en = textArr[0]
  const ja = textArr[2].split(",").join("、")
  return `${en}, ${ja}`;
}).join("\n"))