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
                new Document { _id = "13", title = "Book 4", dateTime = DateTime.UtcNow},
                new Document { _id = "2", title = "Working timesheet - Velid (the …", dateTime = DateTime.UtcNow },
                new Document { _id = "3", title = "Valtech", dateTime = DateTime.UtcNow },
                new Document { _id = "4", title = "Velid @ Infinity Mesh doo", dateTime = DateTime.UtcNow },
                new Document { _id = "54", title = "Document 1", dateTime = DateTime.UtcNow },
                new Document { _id = "6", title = "Working timesheet - Velid (the …", dateTime = DateTime.UtcNow },
                new Document { _id = "7", title = "Valtech", dateTime = DateTime.UtcNow },
                new Document { _id = "82", title = "Velid @ Infinity Mesh doo", dateTime = DateTime.UtcNow },
                new Document { _id = "9", title = "Document 2", dateTime = DateTime.UtcNow },
                new Document { _id = "10", title = "Book 5", dateTime = DateTime.UtcNow },
                new Document { _id = "11", title = "Document 3", dateTime = DateTime.UtcNow },
                new Document { _id = "8", title = "Velid @ Infinity Mesh doo", dateTime = DateTime.UtcNow },
                new Document { _id = "12", title = "Document 2", dateTime = DateTime.UtcNow },
                new Document { _id = "13", title = "Book 5", dateTime = DateTime.UtcNow },
                new Document { _id = "144", title = "Document 3", dateTime = DateTime.UtcNow }
            };
        }

        public IEnumerable<Document> Get()
        {
            return _documents.Take(100);
        }
        public IEnumerable<Document> GetRecent()
        {
            return _documents.OrderBy(x=>x._id).Take(5);
        }
        public IEnumerable<Document> GetPinned()
        {
            return _documents.Where(x => x.pinned);
        }

        Document IDocumentService.PinDocument(string id)
        {
            throw new NotImplementedException();
        }

        Document IDocumentService.CreateDocument(Document document)
        {
            throw new NotImplementedException();
        }

        Document IDocumentService.Delete(string id)
        {
            throw new NotImplementedException();
        }

        Document IDocumentService.GetDocumentById(string id)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Document> IDocumentService.DeleteMany(string[] ids)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Document> IDocumentService.PinManyDocuments(string[] ids, bool flag)
        {
            throw new NotImplementedException();
        }
    }
}
