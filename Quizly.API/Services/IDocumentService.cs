using System;
using System.Collections.Generic;
using Quizly.Model;

namespace Quizly.API.Services
{
    public interface IDocumentService
    {
        public IEnumerable<Document> Get();
        public Document GetDocumentById(string id);
        public IEnumerable<Document> GetRecent();
        public IEnumerable<Document> GetPinned();
        public Document PinDocument(string id);
        public Document CreateDocument(Document document);
        public Document Delete(string id);        
    }
}
