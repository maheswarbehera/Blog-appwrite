import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwrite_url)
            .setProject(config.appwrite_project);
        this.account = new Account(this.client)
    }

    async createAccount({name, email, password}) { 
       try {
        const userAccount = await this.account.create(ID.unique(), name, email, password);

        if(userAccount) {
            return this.login({email, password})
        }
        else{
            return userAccount;
        }

       } catch (error) {
            console.log(error);
       }
    }

    async login({email, password}){
        try {
            const userLogin = await this.account.createEmailSession(email, password);
            return userLogin;
        } catch (error) {
            console.log(error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessios()
        } catch (error) {
            console.log(error);
        }
    }
}

const authService = new AuthService();

export default authService;