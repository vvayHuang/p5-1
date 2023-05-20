const toggleMenuBtn = document.querySelector('#btn-sidebar-toggle');
        const body = document.querySelector('body');
        toggleMenuBtn.addEventListener('click', (evt) =>{
            evt.preventDefault();
            body.classList.toggle('sidebar-toggle');
        })