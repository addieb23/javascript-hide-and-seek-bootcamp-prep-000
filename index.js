function getFirstSelector(selector){
  let first = document.querySelector(selector);
  return first;
}

function nestedTarget(){
  let targ = document.querySelector('div');
  return targ;
}

function increaseRankBy(n){
  let rank = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < rank.length; i++){
    let current = rank[i].innerHTML
    console.log (current)
    //= (i + 1).toString()
  }
  //return rank;
}


// function deepestChild(){
//    let len = document.getElementById('grand-node').childNodes.length;
//    return document.getElementById('grand-node').childNodes[len-1];
// }
