using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Quizly.API.Services;
using Quizly.Model;

namespace Quizly.API.Controllers
{
    [Route("api/[controller]/[action]")]
    public class DocumentsController : Controller
    {
        private readonly IDocumentService _documentService;
        public DocumentsController(IDocumentService documentService)
        {
            _documentService = documentService;
        }

        [HttpGet]
        public Task<IEnumerable<Document>> Get()
        {
            return _documentService.Get();
        }

        [HttpGet]
        public Task<Document> GetDocumentById(string id)
        {
            return _documentService.GetDocumentById(id);
        }

        [HttpGet]
        public Task<IEnumerable<Document>> GetPinned()
        {
            return _documentService.GetPinned();
        }

        [HttpGet]
        public Task<IEnumerable<Document>> GetRecent()
        {
            return _documentService.GetRecent();
        }

        [HttpPatch("{id}")]
        public Task<Document> PinDocument(string id)
        {
            return _documentService.PinDocument(id);
        }
        
        [HttpPatch]
        public Task<IEnumerable<Document>> PinManyDocuments(string[] ids, bool flag)
        {
            return _documentService.PinManyDocuments(ids, flag);
        }

        [HttpPut]
        public Task<Document> Create([FromBody] Document document)
        {
            return _documentService.CreateDocument(document);
        }

        [HttpDelete]
        public Task<Document> Delete(string id)
        {
            return _documentService.Delete(id);
        }

        [HttpDelete]
        public Task<IEnumerable<Document>> DeleteMany(string[] ids)
        {
            return _documentService.DeleteMany(ids);
        }
    }
}
