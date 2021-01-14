using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Quizly.API.Services;
using Quizly.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
        public IEnumerable<Document> Get()
        {
            return _documentService.Get();
        }

        [HttpGet]
        public Document GetDocumentById(string id)
        {
            return _documentService.GetDocumentById(id);
        }

        [HttpGet]
        public IEnumerable<Document> GetPinned()
        {
            return _documentService.GetPinned();
        }

        [HttpGet]
        public IEnumerable<Document> GetRecent()
        {
            return _documentService.GetRecent();
        }

        [HttpPatch("{id}")]
        public Document PinDocument(string id)
        {
            return _documentService.PinDocument(id);
        }
        [HttpPatch]
        public IEnumerable<Document> PinManyDocuments(string[] ids, bool flag)
        {
            return _documentService.PinManyDocuments(ids, flag);
        }

        [HttpPut]
        public Document Create([FromBody] Document document)
        {
            return _documentService.CreateDocument(document);
        }

        [HttpDelete]
        public Document Delete(string id)
        {
            return _documentService.Delete(id);
        }

        [HttpDelete]
        public IEnumerable<Document> DeleteMany(string[] ids)
        {
            return _documentService.DeleteMany(ids);
        }
    }
}
