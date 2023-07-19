// License, that has a license name and number and a time stamp of when they obtained their license. This License can also create a new license, list all licenses given, and list a doctor's license(s)
const { getId } = require('./utils');


class License {
    static #all = []

    constructor(name, licenseNum, doctorId, DoctorClass) {
        this.id = getId()
        this.name = name;
        this.licenseNum = licenseNum;
        this.doctorId = doctorId;
        this.DoctorClass = DoctorClass;
        this.timeStamp = new Date()

        License.#all.push(this)
    }

    static create(...args) {
        return new License(...args)
    }

    static listByDoctor(doctorId) {
        return [...License.#all].filter((license) => {
            return license.doctorId === doctorId
        })
    }

}

const test = new License('cardiologist', '2324r34ewfds', )
console.log(test)

module.exports = License