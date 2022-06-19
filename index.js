const activeAnchor = {
  $header: null,
  $links: null,
  offset: 0,
  vars: {
    windowHeight: 0,
    headerHeight: 0
  },
  updVars() {
    this.vars.windowHeight = window.innerHeight;
    this.vars.headerHeight = this.$header ? this.$header.offsetHeight + this.offset : this.offset;
  },
  setActive( el ) {
    if ( !el.classList.contains( 'active' ) ) {
      this.$links.forEach( link => link.classList.remove( 'active' ) );
      el.classList.add( 'active' );
    }
  },
  init({headerId = 'js-header', navbarId = 'js-navbar', offset = 0 } = {}) {
    this.offset = offset;
    this.$header = document.getElementById( headerId );
    this.$links = Array.prototype.slice.call( document.querySelectorAll( `#${navbarId} a` ) );
    this.updVars();
    window.addEventListener( 'resize', event => this.updVars() );

    window.addEventListener( 'scroll', event => {
      let scrollPosition = document.documentElement.scrollTop + this.vars.headerHeight;
      let activeFounded = false;

      this.$links
        .filter( link => link.hash.length > 1 )
        .forEach( link => {
          let currentSection = document.getElementById( link.hash.slice( 1 ) );
          if ( currentSection && scrollPosition >= currentSection.offsetTop && scrollPosition < currentSection.offsetTop + currentSection.offsetHeight ) {
            this.setActive( link );
            activeFounded = true;
          }
        } );

      if ( !activeFounded )
        this.$links.forEach( link => link.classList.remove( 'active' ) );
    } );

    this.$links
      .filter( link => link.hash.length > 1 )
      .forEach( link => link.addEventListener( 'click', event => {
        event.preventDefault();
        const el = document.getElementById( link.hash.slice( 1 ) );
        if(el)
          document.documentElement.scrollTop = el.offsetTop - this.vars.headerHeight;
      } ) );

  }
};

export default activeAnchor;