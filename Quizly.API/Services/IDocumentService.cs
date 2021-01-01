using System;
using System.Collections.Generic;
using Quizly.Model;

namespace Quizly.API.Services
{
    public interface IDocumentService
    {
        public IEnumerable<Document> Get();
        public IEnumerable<Document> GetRecent();
        public IEnumerable<Document> GetPinned();
        public Document PinDocument(int id);
        public Document CreateDocument(Document document);
    }
}
