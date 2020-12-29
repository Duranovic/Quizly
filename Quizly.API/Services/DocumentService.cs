using System;
using System.Collections.Generic;
using System.Linq;
using Quizly.Model;

namespace Quizly.API.Services
{
    public class DocumentService : IDocumentService
    {
        private List<Document> _documents;
        public DocumentService()
        {
            _documents = new List<Document>()
            {
                new Document { Id = 13, Title = "Book 4", DateTime = DateTime.UtcNow},
                new Document { Id = 2, Title = "Working timesheet - Velid (the …", DateTime = DateTime.UtcNow },
                new Document { Id = 3, Title = "Valtech", DateTime = DateTime.UtcNow },
                new Document { Id = 4, Title = "Velid @ Infinity Mesh doo", DateTime = DateTime.UtcNow },
                new Document { Id = 54, Title = "Document 1", DateTime = DateTime.UtcNow },
                new Document { Id = 6, Title = "Working timesheet - Velid (the …", DateTime = DateTime.UtcNow },
                new Document { Id = 7, Title = "Valtech", DateTime = DateTime.UtcNow },
                new Document { Id = 82, Title = "Velid @ Infinity Mesh doo", DateTime = DateTime.UtcNow },
                new Document { Id = 9, Title = "Document 2", DateTime = DateTime.UtcNow },
                new Document { Id = 10, Title = "Book 5", DateTime = DateTime.UtcNow },
                new Document { Id = 11, Title = "Document 3", DateTime = DateTime.UtcNow },
                new Document { Id = 8, Title = "Velid @ Infinity Mesh doo", DateTime = DateTime.UtcNow },
                new Document { Id = 12, Title = "Document 2", DateTime = DateTime.UtcNow },
                new Document { Id = 13, Title = "Book 5", DateTime = DateTime.UtcNow },
                new Document { Id = 144, Title = "Document 3", DateTime = DateTime.UtcNow }
            };
        }

        public IEnumerable<Document> Get()
        {
            return _documents.Take(100);
        }
        public IEnumerable<Document> GetRecent()
        {
            return _documents.OrderBy(x=>x.Id).Take(5);
        }
        public IEnumerable<Document> GetPinned()
        {
            return _documents.Where(x => x.Pinned);
        }
    }
}
