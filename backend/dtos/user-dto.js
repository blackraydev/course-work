module.exports = class UserDto {
    email;
    id;
    isVerified;
    activationLink;
    name;

    constructor(model) {
        this.email = model.Email;
        this.id = model.Id;
        this.isVerified = model.isVerified;
        this.activationLink = model.ActivationLink;
        this.name = model.Name;
    }
}