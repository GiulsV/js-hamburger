//Esercizio Hamburger menu: mostrare / nascondere il menu principale (mobile)



// Mostrare il menù principale:
    
    // document.querySelector ritorna il primo element nel documento che combacia con il selettore specificato, in questo caso fa-bars.
    
    // .addEventListener() aggancia un funzione che sarà chiamata quando accade un evento, in questo caso "click"
    
    // la funzione richiama su .hamburger-menu .classList (restituisce i nomi delle classi CSS associate all’elemento)
   
document.querySelector(".fa-bars").addEventListener("click", 
   
    function () {
   
        document.querySelector(".hamburger-menu").classList.toggle("active");
   
    }
);

// Nascondere il menù principale:

document.querySelector(".fa-times").addEventListener("click", 
   
    function () {
    
        document.querySelector(".hamburger-menu").classList.toggle("active");
   
    }
); 