using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using Quizly.Model;

namespace Quizly.API.Services
{
    public class DocumentMongoService : IDocumentService
    {
        private readonly IMongoCollection<Document> _documents;
        public DocumentMongoService(IQuizlyDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _documents = database.GetCollection<Document>(settings.DocumentsCollectionName);
        }

        public async Task<IEnumerable<Document>> Get()
        {
            var documents = await _documents.FindAsync(document => true).Result.ToListAsync();
            return documents;
        }

        public async Task<Document> GetDocumentById(string id)
        {
            return await _documents.Find(x => x._id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Document>> GetPinned()
        {
            return await _documents.FindAsync(document => document.pinned).Result.ToListAsync();
        }

        public async Task<IEnumerable<Document>> GetRecent()
        {
            return await _documents.FindAsync(document => true).Result.ToListAsync();
        }

        public async Task<Document> Delete(string id)
        {            
            return await _documents.FindOneAndDeleteAsync(x => x._id == id);
        }

        public async Task<Document> PinDocument(string id)
        {
            var newDocument = await _documents.Find(document => document._id == id).FirstOrDefaultAsync();
            newDocument.pinned = !newDocument.pinned;
            await _documents.FindOneAndReplaceAsync(x => x._id == id, newDocument);
            return newDocument;
        }

        public async Task<IEnumerable<Document>> PinManyDocuments(string[] ids, bool flag)
        {
            List<Document> pinnedDocuments = new List<Document>();
            foreach(string documentId in ids)
            {
                Document document = await _documents.FindAsync(x => x._id == documentId).Result.FirstOrDefaultAsync();
                document.pinned = flag;
                await _documents.FindOneAndReplaceAsync(x=>x._id == document._id, document);
                pinnedDocuments.Add(document);
            }
            return pinnedDocuments;
        }        

        public async Task<Document> CreateDocument(Document document)
        {
            await _documents.InsertOneAsync(document);
            return document;
        }

        public async Task<IEnumerable<Document>> DeleteMany(string[] ids)
        {
            List<Document> deletedDocuments = new List<Document>();
            foreach(string documentId in ids)
            {
                deletedDocuments.Add(await _documents.FindOneAndDeleteAsync(x => x._id == documentId));
            }
            return deletedDocuments;
        }
    }
}
