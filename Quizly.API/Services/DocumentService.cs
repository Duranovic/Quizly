using System;
using System.Collections.Generic;
using Quizly.Model;

namespace Quizly.API.Services
{
    public class DocumentService : IDocumentService
    { 
        public DocumentService()
        {

        }

        public IEnumerable<Document> Get()
        {
            List<Document> documents = new List<Document>()
            {
                new Document { Id = 1, Title = "Document 1", DateTime = DateTime.UtcNow},
                new Document { Id = 2, Title = "Document 2", DateTime = DateTime.UtcNow },
                new Document { Id = 3, Title = "Document 3", DateTime = DateTime.UtcNow },
                new Document { Id = 4, Title = "Document 4", DateTime = DateTime.UtcNow },
                new Document { Id = 5, Title = "Document 5", DateTime = DateTime.UtcNow },
                new Document { Id = 6, Title = "Document 6", DateTime = DateTime.UtcNow },
                new Document { Id = 7, Title = "Document 7", DateTime = DateTime.UtcNow },
                new Document { Id = 8, Title = "Document 8", DateTime = DateTime.UtcNow },
                new Document { Id = 9, Title = "Document 9", DateTime = DateTime.UtcNow },
                new Document { Id = 10, Title = "Document 10", DateTime = DateTime.UtcNow },
                new Document { Id = 11, Title = "Document 11", DateTime = DateTime.UtcNow },
            };
            return documents;
        }
    }
}
