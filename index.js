function getFirstSelector(selector) {
  const x = document.querySelector(selector)
 return x; 
}

function nestedTarget(stuff) {
    const y = document.getElementById('nested').querySelector('div div div div.target')
						
    return y
}