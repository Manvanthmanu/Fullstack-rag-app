import { Worker } from "bullmq";
import { AzureOpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";
// import {  Document } from "langchain/chains/query_constructor"
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import dotenv from "dotenv";
dotenv.config();


const worker = new Worker(
    "file-upload-queue",
    async (job) => {
        const data = typeof job.data === "string" ? JSON.parse(job.data) : job.data;

        /*
            Path : Read file from path,
            chunk the pdf
            call the embedding model for each chunk,
            store the chunk in qdrant db
        */

        // load the pdf
        const loader = new PDFLoader(data.path);
        const docs = await loader.load();
        const embeddings = new AzureOpenAIEmbeddings({
            azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
            azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
            azureOpenAIApiEmbeddingsDeploymentName: process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME1,
            azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
        });

        const vectorStore = await QdrantVectorStore.fromDocuments(
            docs,
            embeddings,
            {
                url: "http://localhost:6333",
                collectionName: "revenhello",
            }
        );

        await vectorStore.addDocuments(docs);
        console.log("Documents added to vector store");
    },
    {
        concurrency: 100,
        connection: {
            host: 'localhost',
            port: 6379
        }
    }
);

