import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method like automatic redirect to dashboard logged in
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (e) {
      console.log("Erroe in create Account", e);
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (e) {
      console.log("Error in login", e);
    }
  }

  async getCurrentUser() {
    try {
      const loginStatus = await this.account.get();
      return loginStatus;
    } catch (e) {
      console.log("Get user", e);
      return null;
    }
  }

  async logout() {
    try {
      const deleteSession = await this.account.deleteSessions();
      return deleteSession;
    } catch (e) {
      console.log("Logout error", e);
    }
  }
}

const authService = new AuthService();

export default authService;
