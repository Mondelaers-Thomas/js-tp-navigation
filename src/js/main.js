const dropDownNavigation = {
    init(){
        document.documentElement.className = 'js-enabled';
        this.myMenu = document.querySelectorAll('.menu');
        this.subMenu = document.querySelectorAll('.sub-menu');
        this.montreSousMenu();
        this.cacheSousMenu();
    },
    /*
    montreSousMenu(){
        for(let i = 0; i < this.myMenu.length; i++){
            this.myMenu[i].addEventListener('mouseover', (e) => {
                this.subMenu[i].style.backgroundColor = '#c61128';
                this.subMenu[i].style.color = 'white';
                this.subMenu[i].style.display = 'block';
            });
        }
    },
    cacheSousMenu(){
        for(let i = 0; i < this.myMenu.length; i++){
            this.myMenu[i].addEventListener('mouseout', (e) => {
                this.subMenu[i].style.display = 'none';
            });
        }
    }
    */
    montreSousMenu(){
        for(const item of this.myMenu){
            item.addEventListener('mouseover', (e) => {
                e.currentTarget.classList.add('show');
            });
        }
    },
    cacheSousMenu(){
        for(const item of this.myMenu){
            item.addEventListener('mouseout', (e) => {
                e.currentTarget.classList.remove('show');
            });
        }
    }
}
dropDownNavigation.init();