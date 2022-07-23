/*
////// TABLE OF CONTENT start //////

- SIDE BAR
- TOM SELECT
- SWIPER JS CLINICS
- SWIPER JS PARNERS
- MODAL

////// TABLE OF CONTENT end //////
*/


////////// SIDE BAR (start) //////////
const sidebar = document.querySelector('#sidebar');
const closeSidebar = document.querySelector('#close-sidebar'); 
const openSidebar = document.querySelector('#open-sidebar')
const sidebarOverlay = document.querySelector('#sidebar-overlay')

closeSidebar.addEventListener('click' , ()=>{
  toggleSidebar(); 
})

openSidebar.addEventListener('click' , ()=>{
  toggleSidebar(); 
})

sidebarOverlay.addEventListener('click', ()=>{
  toggleSidebar(); 
})

const toggleSidebar = ()=>{
  sidebar.classList.toggle('translate-x-0'); 
  sidebar.classList.toggle('translate-x-full'); 

  sidebarOverlay.classList.toggle('hidden'); 
  sidebarOverlay.classList.toggle('block'); 
}

////////// SIDE BAR (end) //////////




////////// TOM SELECT (start) //////////
new TomSelect("#select-clinic",{
	sortField: {
		field: "text",
		direction: "asc"
	}
});

new TomSelect("#select-doctor",{
	sortField: {
		field: "text",
		direction: "asc"
	}
});

//banner
new TomSelect("#banner-select-clinic",{
	sortField: {
		field: "text",
		direction: "asc"
	}
});

new TomSelect("#banner-select-doctor",{
	sortField: {
		field: "text",
		direction: "asc"
	}
});
////////// TOM SELECT (end) //////////


////////// SWIPER JS CLINICS (start) //////////
const swiperClinics = new Swiper('.swiper.clinics', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
    slidesPerView: 'auto',
    spaceBetween: 30,

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination.clinics',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next.clinics',
      prevEl: '.swiper-button-prev.clinics',
    },


  });
////////// SWIPER JS CLINICS (end) //////////




////////// SWIPER JS PARTNERS (start) //////////
const swiperParners = new Swiper('.swiper.partners', {

    slidesPerView: 1,
    spaceBetween: 30,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination.partners',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next.partners',
      prevEl: '.swiper-button-prev.partners',
    },

    //responsivness:
    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
    }
  }
  );
////////// SWIPER JS PARTNERS (end) //////////



////////// MODAL (start) //////////
const openModal= document.querySelectorAll('[data-open-modal]');

openModal.forEach((btn)=>{
	btn.addEventListener('click', ()=>{

    //close all open modals
    const allModals = document.querySelectorAll('.modal-box');
    allModals.forEach((modal)=>modal.classList.remove('active'));

    //remove all overlays
    const allModalOverlay = document.querySelectorAll('.modal-overlay');
    allModalOverlay.forEach((overlay)=>overlay.remove());

    //select desired modal
    const modal= document.querySelector(btn.dataset.openModal);

    //add an overlay
    var overlayElement = document.createElement('div');
    overlayElement.classList.add('modal-overlay');
    overlayElement.setAttribute('data-close-modal', btn.dataset.openModal);
    document.body.appendChild(overlayElement);

    //close modal buttons:
    closeModal= document.querySelectorAll('[data-close-modal]');
    closeModal.forEach((btn)=>{
      btn.addEventListener('click',()=>{
  
        //select desired modal
        const modal= document.querySelector(btn.dataset.closeModal);
        
        //close desired modal + overlay
        modal.classList.remove('active')
  
        //remove all overlays
        const allModalOverlay = document.querySelectorAll('.modal-overlay');
        allModalOverlay.forEach((overlay)=>overlay.remove());
  
  
      })
    })

    //open desired modal
		modal.classList.add('active');


	})
})


////////// MODAL (end) //////////


/* 

<div class="modal-overlay" data-close-modal='#momo'></div> 
<div  data-close-modal='#momo'> X </div> 

.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: none;

  &.active {
    display: block;
  }
}

*/