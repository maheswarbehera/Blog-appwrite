
const config = {
    appwrite_url: String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_project: String(import.meta.env.VITE_PROJECT_ID),
    appwrite_database: String(import.meta.env.VITE_DATABASE_ID),
    appwrite_collection: String(import.meta.env.VITE_COLLECTION_ID),
    appwrite_bucket: String(import.meta.env.VITE_BUCKET_ID),
    
}

export default config