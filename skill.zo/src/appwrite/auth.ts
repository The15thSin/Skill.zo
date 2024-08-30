import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account: any;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}: {email: string, password: string, name: string}) {
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                this.login({email, password});
            } else {
                return;
            }
        } catch (err) {
            throw err;
        }
    }

    async login({email, password}: {email: string, password: string}) {
        try{
            const userAccount = await this.account.createEmailPasswordSession(email, password);
            return userAccount;
        } catch (err) {
            throw err;
        }
    }

    async logout() {
        try{
            const userAccount = await this.account.deleteSessions();
            return userAccount;
        } catch (err) {
            throw err;
        }
    }

    async getCurrentUser() {
        try{
            const userAccount = await this.account.get();
            return userAccount;
        } catch (err) {
            throw err;
        }
        return null;
    }
}

const authService = new AuthService();

export default authService;