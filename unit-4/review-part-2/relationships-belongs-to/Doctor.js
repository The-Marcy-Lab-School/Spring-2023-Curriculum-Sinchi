// Doctor, can create a new doctor, find by Doctor ID, add a New License, and can get all license that belongs to doctor

const Person = require('./Person');

class Doctor extends Person {
    static #all = [];

    constructor(name, specialty, LicenseClass) {
        super(name)
        this.specialty = specialty;
        this.LicenseClass = LicenseClass;

        Doctor.#all.push(this)
    }

    // create
    static create(name, specialty, LicenseClass) {
        return new Doctor(name, specialty, LicenseClass)
    }

    // list
    static list() {
        return [...Doctor.#all]
    }

    // find specific id
    static findById(id) {
        return Doctor.#all.find((doctor) => doctor.id === id)
    }

    // List license by specific Doctor
    listLicenses() {
        return this.LicenseClass.listByDoctor(this.id)
    };

    // add License into Doctor
    addLicense(licenseName, licenseNum) {
        return new this.LicenseClass(licenseName, licenseNum, this.id, Doctor)
    }
}

module.exports = Doctor



