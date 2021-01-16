const allblocs = document.querySelectorAll(".semestre-x");


allblocs.forEach(bloc => {
  bloc.addEventListener('click' , (e) => {
    e.target.classList.toggle('active');
    for (let i = 0; i < allblocs.length ; i++){
      if(allblocs[i] !== e.target){
        allblocs[i].classList.toggle('active');
      }
    }
  })
})
