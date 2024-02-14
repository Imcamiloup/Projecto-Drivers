const updateDriver = async () => {
    try {
    const {id, driverRef , number , code , forename , surname, image , dob} = req.body;

    const driver = await Driver.create({ id:id,driverRef: driverRef, number: number, code: code, forename: forename, surname: surname, image: image, dob: dob});
    driver.driverRef = driverRef;
    driver.number = number;
    driver.code = code;
    driver.forename = forename;
    driver.surname = surname;
    driver.image = image;
    driver.dob = dob;
    await driver.save();
    return driver;
    }
    catch (error) {
        console.error(error);
        throw new Error('Error al actualizar el conductor');
    }
}