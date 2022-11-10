
export default function LoginFlask (){
  
  return(

    <>
      <div class="position-absolute align-self-center" style="top: 5%">
        <div class="alert alert-{{mensaje[0]}} alert-dismissible fade show" role="alert">
            <strong> mensaje[1]</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> 
      </div>
    <div class="form-signin text-center position-absolute top-50 start-50 translate-middle" >
    <form method="POST" novalidate>
      <img class="mb-4" src="{{ url_for('static', filename='img_templates/Logo2021.png') }}" alt="Logo de la empresa" width="200" />
      <h1 class="h3 mb-3 fw-normal">Inicio de sesión</h1>
      
      <div class="form-floating">

       <form>  form.usuario (class_='form-control', placeholder= 'a')</form>
       <form>form.usuario.label (for='usuario') </form>
         
      </div>

      <div class="form-floating">

    <form>form.contraseña (class_='form-control', placeholder= 'a') </form>
    <form> form.contraseña.label (for='contraseña')</form>
      </div>
      <div class="checkbox mb-3 d-none">
        <label>
      form.recuerdame (Recuerdame)
        </label>
      </div>
      <form>form.enviar (class_='w-100 btn btn-lg btn-primary') </form>  
      
      <p class="mt-3"><a href="{{url_for('authentication.cambiar_contraseña')}}">No recuerdo mi contraseña</a></p>
      <p class="mt-5">¿No estás registrado? <a href="{{url_for('authentication.registrar_usuario')}}">Registrate aquí</a></p>
      <p class="mt-5 mb-3 text-muted">&reg; La Casa Del Carpintero</p>
    </form>
  </div>
      
     
      
      
    </>

  )
}  
  





