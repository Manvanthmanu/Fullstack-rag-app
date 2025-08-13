import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { Queue } from 'bullmq';
import { AzureOpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";
import dotenv from "dotenv";
dotenv.config();

const queue = new Queue('file-upload-queue',
    {
        connection: {
            host: 'localhost',
            port: '6379'
        }
    }
)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${uniqueSuffix}-${file.originalname}`)
    }
})


const upload = multer({ storage: storage }); // Directory to store uploaded files

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ content: 'Hello World!' });
});

app.post('/upload/pdf', upload.single('pdf'), async (req, res) => {
    await queue.add('file-ready', JSON.stringify({
        filename: req.file.filename,
        destination: req.file.destination,
        path: req.file.path
    }))
    res.json({ message: 'uploaded', file: req.file });
})

app.get('/chat', async (req, res) => {
    const userQuery = "What is the grace period for premium payment under the National Parivar Mediclaim Plus Policy?"
    const embeddings = new AzureOpenAIEmbeddings({
        azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
        azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
        azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME,
        azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
    });
    const vectorStore = await QdrantVectorStore.fromExistingCollection(
        embeddings,
        {
            url: "http://localhost:6333",
            collectionName: "mainTest",
        }
    );s

    const retriever = vectorStore.asRetriever({ k: 2 });
    const result = await retriever.invoke(userQuery);
    return res.json({ result });
});

app.listen(5000, () => {
    console.log(`Server is running on Port ${5000}`);
});

// lol just for commit