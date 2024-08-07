import { conf } from "../conf/conf.js";
import { Client, ID, Databases } from "appwrite";

export class Service {
  client = new Client(); // to make a client on appwrite
  databases; // for database
  bucket; // for storage

  // constructor method invoke when new Objectvis created
  constructor() {
    this.client
      .setEndPoint(cont.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // method to create the post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        slug,
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  // method to update the post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      );
    } catch (error) {
      console.log("appwrite service :: updatePost :: error", error);
    }
  }
  // method to delete the post
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  // to read single post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite service :: getPost :: error", error);
    }
  }

  // to read all the posts which are active uae indexes here
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite service :: listPosts :: error", error);
    }
  }

  // image file related service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

// method to delete the file
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("appwrite service :: deleteFile :: error", error);
      return false;
    }
  }
  
  // methodcto preview the file
  
  filePreview(fileId) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
      )
  }
}

export default service = new Service();
