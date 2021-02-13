using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Quizly.Model;

namespace Quizly.API.Services
{
    public interface IDocumentService
    {
        public Task<IEnumerable<Document>> Get();
        public Task<Document> GetDocumentById(string id);
        public Task<IEnumerable<Document>> GetRecent();
        public Task<IEnumerable<Document>> GetPinned();
        public Task<Document> PinDocument(string id);
        public Task<IEnumerable<Document>> PinManyDocuments(string[] ids, bool flag);
        public Task<Document> CreateDocument(Document document);
        public Task<Document> Delete(string id);
        public Task<IEnumerable<Document>> DeleteMany(string[] ids);
    }
}
