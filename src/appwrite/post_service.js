import config from '../config/config'
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class PostService{
    client = new Client(),
    databases,
    storage,

    constructor() {
        this.client
            .setEndpoint(config.appwrite_url)
            .setProject(config.appwrite_project)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(config.appwrite_database, config.appwrite_collection, slug, {title, content, featuredImage, status,userId})
        } catch (error) {
            console.log(error);
        }

    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(config.appwrite_database, config.appwrite_collection, slug, {title, content, featuredImage, status})
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug) {
        try {
            await thid.databases.deleteDocument(config.appwrite_database, appwrite_collection, slug)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(config.appwrite_database, config.appwrite_collection, slug)
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getAllPost(query = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(config.appwrite_database, config.appwrite_collection, query)
        } catch (error) {
            console.log(error);
            return false
        }
    }


    // File Upload Service

    async uploadFile(file) {
       try {
            return await this.storage.createFile(config.appwrite_bucket, ID.unique(), file)
       } catch (error) {
            console.log(error);
            return false
       }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(config.appwrite_bucket, fileId)
            return true
        } catch (error) {
            
        }
    }

    filePreview(fileId) {
        return this.storage.getFilePreview(config.appwrite_bucket, fileId)
    }
}
const postService = new PostService()

export default postService