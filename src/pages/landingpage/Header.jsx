import React from 'react'


const Header = () => {
  const [header_open,set_header_open]=React.useState(true);
  if (typeof window !== 'undefined') {
    React.useEffect(() => {
      const onPageLoad = () => {
        Array.from(document.getElementsByClassName('links-header-links')).forEach((a)=>{a.style.transition="translate 1s";});
        document.getElementsByClassName("links-header-collapser")[0].style.transition="rotate 1s";
      };
      if (document.readyState === 'complete') {
        onPageLoad();
      } else {
        window.addEventListener('load', onPageLoad);
        return () => window.removeEventListener('load', onPageLoad);
      }
    }, []);
    window.onload=()=>{
    }
    if(header_open){
      Array.from(document.getElementsByClassName('links-header-links')).forEach((a)=>{a.style.translate="0px 0px";});
      document.getElementsByClassName("links-header-collapser")[0].style.rotate="0deg";
    }else{
      Array.from(document.getElementsByClassName('links-header-links')).forEach((a)=>{a.style.translate=String(document.getElementsByClassName('collapsing-links-container')[0].offsetWidth)+"px 0px";});
      document.getElementsByClassName("links-header-collapser")[0].style.rotate="180deg";
    }
  }
  const slide=()=>{
    set_header_open(!header_open);
  }
  return (
    <>
    <div className='container-header flex flex-row h-20 fixed left-0 right-0'>
      <div className='fmcw-logo-header basis-1/6 place-self-center'></div>
      <div className='links-container-header flex justify-end flex-row basis-5/6'>
        <div className='collapsing-links-container flex justify-end flex-row overflow-hidden'>
          <a href="" className='links-header links-header-links w-24 place-self-center'>events</a>
          <a href="" className='links-header links-header-links w-24 place-self-center'>sponsors</a>
          <a href="" className='links-header links-header-links w-24 place-self-center'>glimpses</a>
          <a href="" className='links-header links-header-links w-24 place-self-center'>team</a>
        </div>
        <div className='links-header w-16 place-self-center' onClick={slide}>
          <svg xmlns="http://www.w3.org/2000/svg" className='links-header-collapser' width="27.922" height="11.688" viewBox="0 0 30 14" fill="none">
          <path d="M1 1.15576H28.9218" stroke="white" stroke-width="1.94803" stroke-linecap="round"/>
          <path d="M1 7H28.9218" stroke="white" stroke-width="1.94803" stroke-linecap="round"/>
          <path d="M1 12.8442H28.9218" stroke="white" stroke-width="1.94803" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default Header
