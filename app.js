
function app(){

//Declaring and intializing gobal varialbe
let notificationIcon = document.querySelector('.notification-icon');
let alertContainer = document.querySelector('.alert-container');
let notificationSub = document.querySelector('.notification-sub');
let menuContainer = document.querySelector('.menu-container');
let setupToggle = document.querySelector('.setup-toggle');
let optionContainer = document.querySelector('.option-container');
let indicator = document.querySelector('.indicator');
let live = document.querySelector('#live');




//Adding event to handle Alert Menu
notificationIcon.addEventListener('click',function(){
    menuContainer.style.display='none'
    notificationSub.style.background = '#322f33'
    notificationSub.ariaExpanded = 'false';


    if(alertContainer.style.display=='none' || alertContainer.style.display==''){
        alertContainer.style.display = 'flex'
        notificationIcon.ariaExpanded = 'true';


        
        let menuItems = alertContainer.querySelectorAll('.btn-icon');
        notificationIcon.style.background = '#656266';
        let currentMenuIndex = 0;
        menuItems.item(0).focus();


        alertContainer.addEventListener('keyup',function(event){

            if(event.key ==="Escape"){
                alertContainer.style.display = 'none'
                notificationIcon.style.background = '#322f33';
                notificationIcon.ariaExpanded = 'false';
                notificationIcon.focus()
            }


            if(event.key=='ArrowDown' || event.key=='ArrowRight'){
                if(currentMenuIndex == menuItems.length -1){
                    currentMenuIndex =0;
                    menuItems.item(currentMenuIndex).focus();
                    return
                }
                currentMenuIndex = currentMenuIndex+1
                menuItems.item(currentMenuIndex).focus();
            }

            if(event.key=='ArrowUp' || event.key=='ArrowLeft'){
                if(currentMenuIndex ==0){
                    currentMenuIndex = menuItems.length-1;
                    menuItems.item(currentMenuIndex).focus();
                    return
                }
                currentMenuIndex = currentMenuIndex-1
                menuItems.item(currentMenuIndex).focus();
            }
        })


    }
    else{
        alertContainer.style.display = 'none'
        notificationIcon.style.background = '#322f33'
        notificationIcon.ariaExpanded = 'false';

    }
    
})

//Adding event to handle Menu 
notificationSub.addEventListener('click',function(){
    alertContainer.style.display = 'none';
    notificationIcon.style.background = '#322f33'
    notificationIcon.ariaExpanded = 'false';



    if(menuContainer.style.display=='none' || menuContainer.style.display==''){
        menuContainer.style.display = 'flex'
        notificationSub.ariaExpanded = 'true';

        let menuItems = menuContainer.querySelectorAll('[role="menuitem"]');
        notificationSub.style.background = '#656266'
        let currentMenuIndex = 0;
        menuItems.item(0).focus();


        menuContainer.addEventListener('keyup',function(event){

            if(event.key ==="Escape"){
                menuContainer.style.display = 'none'
                notificationSub.style.background = '#322f33'
                notificationSub.ariaExpanded = 'false';

                notificationSub.focus()
            }


            if(event.key=='ArrowDown' || event.key=='ArrowRight'){
                if(currentMenuIndex == menuItems.length -1){
                    currentMenuIndex =0;
                    menuItems.item(currentMenuIndex).focus();
                    return
                }
                currentMenuIndex = currentMenuIndex+1
                menuItems.item(currentMenuIndex).focus();
            }

            if(event.key=='ArrowUp' || event.key=='ArrowLeft'){
                if(currentMenuIndex ==0){
                    currentMenuIndex = menuItems.length-1;
                    menuItems.item(currentMenuIndex).focus();
                    return
                }
                currentMenuIndex = currentMenuIndex-1
                menuItems.item(currentMenuIndex).focus();
            }
        })


    }
    else{
        menuContainer.style.display = 'none'
        notificationSub.style.background = '#322f33'
        notificationSub.ariaExpanded = 'false';

    }
})





//Declaring and initializing variable for Task Section
var options = optionContainer.querySelectorAll('.op');
var currentIndex = 0;
let length = options.length;
var pronum = document.querySelector('.progress-number');

//Adding event to Open Task Container
setupToggle.addEventListener('click',function (event){
    
    if(optionContainer.style.display=='none' || optionContainer.style.display==''){
        this.style.transform ='rotate(180deg)'
        optionContainer.style.display = 'flex'
        options.item(0).querySelector('.com-icon').focus();
        setupToggle.ariaExpanded = 'true'

     
    }

    else{
        this.style.transform ='rotate(360deg)'
        this.focus()
        optionContainer.style.display = 'none'
        setupToggle.ariaExpanded = 'false'

        
    }
})

//Looping througth all the tasks
options.forEach((element) => {

 var  completedIcon =  element.querySelector('.com-icon');
 var  focusable =  element.querySelectorAll('[tabindex="0"]');
 var currentFocusIndex =0 

 element.addEventListener('keyup',function(event){

                if(event.key ==="Escape"){
                    optionContainer.style.display = 'none'
                    setupToggle.style.transform ='rotate(360deg)'
                    setupToggle.focus()
                }

            if(event.key=='ArrowDown' || event.key=='ArrowRight'){
                if(currentFocusIndex == focusable.length -1){
                    currentFocusIndex =0;
                    focusable.item(currentFocusIndex).focus();
                    return
                }
                currentFocusIndex = currentFocusIndex+1
                focusable.item(currentFocusIndex).focus();
            }

            if(event.key=='ArrowUp' || event.key=='ArrowLeft'){
                if(currentFocusIndex ==0){
                    currentFocusIndex = focusable.length-1;
                    focusable.item(currentFocusIndex).focus();
                    return
                }
                currentFocusIndex = currentFocusIndex-1
                focusable.item(currentFocusIndex).focus();
            }
        })
 var  nextOption =  element.nextElementSibling;
 var completed = false;
completedIcon.addEventListener('click',function(){
    
  
    
    live.textContent = 'loading please wait...';


    if(!( completed==false)){

        completedIcon.firstChild.remove();
        completedIcon.innerHTML = `<svg width="24" id="loading" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        `;

        


    setTimeout(() => {
        completedIcon.firstChild.remove();
        completedIcon.innerHTML =  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004" transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D" stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round"/>
        <g opacity="0.6">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z" fill="white"/>
        </g>
        </svg>
        
        `;
        live.textContent = `Succesfully ${completedIcon.ariaLabel}`.replace('mark','marked');
        completedIcon.ariaLabel =  completedIcon.ariaLabel.replace('as not done','as done');

        
    }, 3000);

    setTimeout(() => {
        completedIcon.firstChild.remove();
        completedIcon.innerHTML =  ` <svg width="24" height="24" id="default-loader" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333"
            stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5" />
    </svg>
        
        `;
        
    }, 3100);
    element.classList.add('option');
    element.classList.remove('option-normal');
       currentIndex = currentIndex - 1;
        pronum.textContent = currentIndex;
        width = (currentIndex *20);
        indicator.style.width = `${width}%`
        completed = false;
        live.textContent = `${currentIndex} of 5  task completed`
        return
    }

    
    
       
    
    

            completedIcon.firstChild.remove();
            completedIcon.innerHTML = `<svg width="24" id="loading" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            `;
            
    
    
        setTimeout(() => {
            completedIcon.firstChild.remove();
            completedIcon.innerHTML =  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004" transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D" stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round"/>
            <g opacity="0.6">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z" fill="white"/>
            </g>
            </svg>
            
            `;
            live.textContent = `Succesfully ${completedIcon.ariaLabel}`.replace('mark','marked')
            completedIcon.ariaLabel =  completedIcon.ariaLabel.replace('as done','as not done');
            ;
        }, 3000);
    
    
    
        setTimeout(() => {
            completedIcon.firstChild.remove();
            completedIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z" fill="white"/>
            </svg>            
            `; 
        }, 3200);

       
    
        currentIndex = currentIndex + 1;
        pronum.textContent = currentIndex;
        width = (currentIndex *20);
        indicator.style.width = `${width}%`; 
        live.textContent = `${currentIndex} of 5 task completed`


        
            if(nextOption){
             nextOption.classList.add('option');
        nextOption.classList.remove('option-normal');
        // nextOption.querySelector('.com-icon').focus();
        
            }
        
    
    
    element.classList.remove('option');
    element.classList.add('option-normal');
    completed=true;
})


   
})

}


//calling app method
window.onload = function(){
    app()
}


