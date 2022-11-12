export default function HeaderNav () {
    
    
    return(
      
      <div className="d-flex align-items-center" 
        style={{
          backgroundColor:"red", 
          position: "sticky",
          top: "0px",
          left: "0px",
          right: "0px",
          height: "42px",
          justifyContent: "center"
        }}>

        <div>
			    <img src='Logo2021.png' alt='Logo La Casa Del Carpintero' style={{height:" 32px"}}/>
        </div>

        <div className="d-flex position-absolute end-0 me-2">
          <div className="me-2">
            <div className= "" style={{fontSize: ".5rem"}}>
            Eq 1
            </div>
            <div style={{fontSize: ".75rem"}}>
              Usuario
            </div>
          </div>
          <div className='rounded-circle overflow-hidden'>
            <img src='None.png' alt='Foto'  style={{width:"32px"}}/>
          </div>
        </div>
        

      </div>
    )
}
