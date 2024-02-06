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
    const isValidLength = password.length >= 6 && password.length <= 10;
    return hasNumber && isValidLength;
 }
 
 function validate(email, password) {
    const errors = {};
 
    if (!email) {
       errors.email = 'El email no puede estar vacío.';
    } else if (!validateEmail(email)) {
       errors.email = 'Ingrese un email válido.';
    } else if (email.length > 35) {
       errors.email = 'El email no puede tener más de 35 caracteres.';
    }
 
    if (!validatePassword(password)) {
       errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y al menos un número.';
    }
 
    return errors;
 }
 
 export default validate;
 