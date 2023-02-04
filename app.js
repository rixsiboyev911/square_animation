
  const board = document.querySelector('#board')
  const colors = [ "#0000FF",
  "#2F4F4F",
  "#FF00FF",
  "#FFFF00  ",
  "#FF0000",
  "#00FF00",
  "#FF8C00",
  "#4682B4"]
  const SQUARES_NUM = 600
  for (let i = 0; i < SQUARES_NUM; i ++){
      const square = document.createElement('div')
      square.classList.add('sqre')
  
      square.addEventListener('mouseover', ()=>
          setColor(square))
  
      square.addEventListener('mouseleave', ()=>
          removeColor(square))
  
      board.append(square)
  }
  function setColor(element) {
      const color = getRandomColor()
      element.style.backgroundColor = color
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
  }
  
  function removeColor(element){
      element.style.backgroundColor = '#1d1d1d'
      element.style.boxShadow = '0 0 2px #000'
  }
  
  function getRandomColor(){
      const index = Math.floor(Math.random() * colors.length)
      return colors[index] 
  }