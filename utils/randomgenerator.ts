import { faker } from "@faker-js/faker";

export class RandomDataUtil{

    static getFirstname()
    {
        return faker.person.firstName()
    }

    static getlastname()
    {
        return faker.person.lastName()
    }
}