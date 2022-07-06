import React from 'react'
import { Button } from 'primereact/button';
import clientImg from '../../assets/client-money.png'
import ewallet from '../../assets/ewallet.jpg'
import invoiceImg from '../../assets/invoice.jpg'
import Ftask from '../../assets/completed-task.png'
import Fpayment from '../../assets/payment-recieved.png'
import youtubeIcon from '../../assets/youtube.webp'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
import developerImage from '../../assets/developer.webp'
import { useNavigate } from 'react-router-dom';
 
import './landingpage.css'
const LandingPage = () => {
     const navigate = useNavigate();
   const handleMyWalletClick = () =>{
      navigate('/mywallet')
   }
   const handleGetJobsClick = () =>{
    navigate('/freelance')
 }
 const handleHireClick = () =>{
  navigate('/client')
}
  const isactive = 1;

  return (
    <div className='container'>
   <div className='nav'> 
  <Button  onClick={handleMyWalletClick}  label='MyWallet' className="p-button-outlined" icon=" pi pi-wallet"/><Button onClick={handleGetJobsClick} label='Get-jobs' className="p-button-outlined"/><Button  onClick={handleHireClick}   label='Hire at angeltrust' className="p-button-outlined" icon="pi pi-briefcase"/>
   </div>
   <div className='header'>
    <h1>Fast and Powerful just like your</h1><h1>Work</h1>
    <div >This is one stop platform for building trusted partnership with client and freelancers because we are trustmakers</div>
    <div >Our goal is to provide clients a A+ grade trusted freelancers and smooth the process of hiring .</div>
    <div>Its one stop location with guaranteed 102% pay and trust pay (under system terms)</div>
   </div>
   <div className='body-landingpage'>
    
     <div className='client-end'>
         
    <h2>How Does it Work?</h2>
    <div> On the Clients End</div>
    <div className='img-alignment' >
    <img  width={200} height={200} src={clientImg} alt='client-downpayment-img'/>
    <div className="arrowAnim">
  <div className={` ${ isactive ? "arrowSliding" : ""}`}>
    <div className="arrow"></div>
  </div>
  <div className={` ${ isactive ? "arrowSliding delay1" : ""}`}>
    <div className="arrow"></div>
  </div>
  <div className={` ${ isactive ? "arrowSliding delay2" : ""}`}>
    <div className="arrow"></div>
  </div>
  <div className={` ${ isactive ? "arrowSliding delay3" : ""}`}>
    <div className="arrow"></div>
  </div>
</div>
  
    <img  width={200} height={200} src={ewallet} alt='client-downpayment-img'/>
    <div className="arrowAnim">
  <div className="arrowSliding">
    <div className="arrow"></div>
  </div>
  <div className="arrowSliding delay1">
    <div className="arrow"></div>
  </div>
  <div className="arrowSliding delay2">
    <div className="arrow"></div>
  </div>
  <div className="arrowSliding delay3">
    <div className="arrow"></div>
  </div>
</div>
    <img  width={200} height={200} src={invoiceImg} alt='client-downpayment-img'/>
    </div>
   <div className='label-alignment'><h5>Pay the down-payment to the<h4>system e-wallet</h4> </h5>
    <h5>The wallet will receive with a <h4>confirmation</h4></h5>
    <h5> An E-confirmation agreement is generated</h5></div>
     </div>
     <div className='disclaimer'>The down-payment received is partially refundable (Around 80%) also the e-cofirmation will contain all the information of the 1st party (client) 2nd party(freelancer) , duration , Amount to payed , agreement date undersigns a aggrement</div>
<hr width={1045}/>
    <div className='freelancer-end'>
       
    <div className='heading'> On the FreeLancer's End</div>
    <div className='img-alignment' >
    <img  width={200} height={200} src={invoiceImg} alt='client-downpayment-img'/>
    <div className="arrowAnim">
  <div className="arrowSliding">
    <div className="arrow"></div>
  </div>
  <div className="arrowSliding delay1">
    <div className="arrow"></div>
  </div>
  <div className="arrowSliding delay2">
    <div className="arrow"></div>
  </div>
  <div className="arrowSliding delay3">
    <div className="arrow"></div>
  </div>
</div>
    <img  width={200} height={200} src={Ftask} alt='client-downpayment-img'/>
    <div className="arrowAnim">
  <div className="arrowSliding">
    <div className="arrow"></div>
  </div>
  <div className="arrowSliding delay1">
    <div className="arrow"></div>
  </div>
  <div className="arrowSliding delay2">
    <div className="arrow"></div>
  </div>
  <div className="arrowSliding delay3">
    <div className="arrow"></div>
  </div>
</div>
    <img  width={200} height={200} src={Fpayment} alt='client-downpayment-img'/>
    </div>
   <div className='label-alignment'><h5 className='interspace'>Receive the e-confirmation aggrement and 20% of downpayment!<h4>PS: read it once !</h4> </h5>
    <h5 className='interspace'>Get the work done and submit in proper format ! <h4>Tick tick tick!</h4></h5>
    <h5 className='interspace'>Receive the full payment  vola!!! Congratulation you did it!!</h5></div>

    </div>

    <div className='disclaimer'>The freelancer will receive 20% of the amount of down-payment as a cost to labour even if he/she fail to meet the coustomer requirement .The freelancer must also abide by the terms and condition is the e-confirmation agreement to receive the full payment</div>
     <div className='middle-nav'>
     <div className='left-container'>
       <div className='heading-color'> We provide Jobs based on current trend and hike </div>
       <div className='community'> It’s important to have a community to fall back on for support, accountability and resources. There are local chapters of Freelancers Union in major cities, but if you can’t find the right one, don’t be afraid to start your own.
<div className='heading-2'><b>“Build a community of other freelancers to stay motivated and keep you going,”</b> <i>Honey advised</i>. <b>“I get so much energy and motivation through my friends’ successes, and we learn from each other’s missteps too.”</b></div>
</div>
<div className='Find'><Button label='Find trends' className=" p-button-rounded p-button-outlined"/> <Button label='Find passion' className=" p-button-rounded p-button-outlined"/> <Button label='Find jobs' className=" p-button-rounded p-button-outlined"/></div>
  
      </div>
      <div className='right-container'>
      <span className='heading-margin'>Popular trends</span>
      <div className='row'> <Button label='Excel' className=" p-button-rounded p-button-outlined"/> <Button label='Find passion' className=" p-button-rounded p-button-outlined"/> <Button label='Find jobs' className=" p-button-rounded p-button-outlined"/></div>
     
      <div className='row'> <Button label='Copywriting' className=" p-button-rounded p-button-outlined"/> <Button label='Link Building' className=" p-button-rounded p-button-outlined"/> <Button label='Accounting' className=" p-button-rounded p-button-outlined"/></div>
      <div className='row'> <Button label='Accounting' className=" p-button-rounded p-button-outlined"/> <Button label='modelling' className=" p-button-rounded p-button-outlined"/> <Button label='Data-2' className=" p-button-rounded p-button-outlined"/></div>
      <div className='row'> <Button label='Banner Design' className=" p-button-rounded p-button-outlined"/> <Button label='Technical' className=" p-button-rounded p-button-outlined"/> <Button label='proof-R' className=" p-button-rounded p-button-outlined"/></div>
     
      <div className='row'> <Button label='Data entry' className=" p-button-rounded p-button-outlined"/> <Button label='PhotoShop' className=" p-button-rounded p-button-outlined"/> <Button label='Logo-Design' className=" p-button-rounded p-button-outlined"/></div>
      <div className='row'> <Button label='Blogging' className=" p-button-rounded p-button-outlined"/> <Button label='GhostWriting' className=" p-button-rounded p-button-outlined"/> <Button label='Wordpress' className=" p-button-rounded p-button-outlined"/></div>
      </div>
     </div>
     
    
   </div>
   <div className='footer'>
    
    <div className='padding-do'>
    <a href="#" target="_blank">
          <img src={githubIcon} alt="Github Logo" width={40} height={40} class="github-icon"/></a>
    </div>
    
        
    <div className='paddingdo'>
    <a href="#" target="_blank">
          <img src={linkedinIcon} alt="Linkedin Logo" class="linkedin-icon"/></a>
      
    </div>
  
    
    <div className='paddingdo'>
    <a href="#" target="_blank">
          <img src={youtubeIcon} alt="Youtube Logo" class="youtube-icon" /></a>
    </div>
        
  <div className='fontcol'>Made with <span>&hearts;</span> by:</div>
    <div className='developers-img'><img src={developerImage} alt="Github Logo" width={190} height={190} class="img-dev"/></div>
  
    <div className='seperation-line'></div>
  <div className='copyright'>Copyrights.<span>&#128512;</span><span>&copy;</span></div>
  <div className='copyright'>Note: This project is still in progress with some bugs and currently only in desktop responsive . Mobile responsive screens still in progress.</div>
  

   </div>
    </div>
  )
}

export default LandingPage