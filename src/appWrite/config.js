import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
      this.databases = new Databases(this.client)
      this.bucket = new Storage(this.client)
    }

    async createPost({ title, content, slug, featuredImage, status, userId }){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (e) {
            console.log("Databse Post creation", e);
        }
    }

        async updatePost(slug, {title, content, featuredImage }){
            try {
                return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    
                }
                )
                
            } catch (e) {
                console.log("Update document error", e);
            }
        }

        async deletePost({slug}){
            try {
                await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                )
                return true
            } catch (e) {
                console.log("Delete post Error", e);
                return false
            }
        }

        async getPost(slug){
            try {
                return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
                )
            } catch (e) {
                console.log("Get post error", e);
            }
        }
        async getPosts(queries = [Query.equal("status", 
            "active")]){
            try {
                return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
                )
            } catch (e) {
                console.log("Get all the post thourgh query", e);
                return false
            }
        }
        async createFile(file){
            try {
                return await this.databases.createFile(
                    conf.appWriteBucketId,
                    ID.unique(),
                    file

                    //This fn will give out file id because of is.unique, and then we will use that file id in delete file method below 

                )
            } catch (e) {
                console.log("Creating File imaege", e);                                
            }
        }

        async deleteFile(fileId){
            try {
                return await this.databases.deleteFile(
                    conf.appWriteBucketId,
                    fileId
                )
            } catch (e) {
                console.log("Deleting File imaege", e);                                
            }
        }

        filePreview(fileId){
                return this.bucket.getFilePreview(
                    conf.appWriteBucketId,
                    fileId
                )
            
            }
        

}

const service = new Service()

export default service