function validateEmail(email) {
    // el nombre de usuario tiene que ser un email
    const emailRegex = /\S+@\S+\.\S+/;
    //el nombre de usuario no puede estar vacío
    const emailIsEmpty = email.length === 0;
    //el nombre de usuario no puede tener más de 35 caracteres.
      const emailIsTooLong = email.length > 35;
    return emailRegex.test(email) && !emailIsEmpty && !emailIsTooLong;
 }
 
 function validatePassword(password) {
    // Verifica que la contraseña tenga al menos un número y longitud entre 6 y 10
    const hasNumber = /\d/.test(password);
    const isValidLength = password.length >= 6 && password.length <= 10 && !password.includes(' ') && password.length !== 0;
    return hasNumber && isValidLength;
 }
 
 function validate(form, setErrors, errors) {

 
      const { email, password } = form;
      if (email.length === 0 ) {
         errors.email = 'El email es obligatorio';
      } else{
         if (!validateEmail(email)) {
            errors.email = 'El email no es válido';
          } else {
             delete errors.email;
             }
      }
      
      if (password.length === 0) {
         errors.password = 'La contraseña es obligatoria';
         }
      else{
         if (!validatePassword(password)) {
            errors.password = 'La contraseña no es válida';
            }
         else {
            delete errors.password;
            }
      }

      

      setErrors({ ...errors });


  
 
    return errors;
 }
 
 export default validate;
 