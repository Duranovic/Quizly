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
        public Document PinDocument(int id)
        {
            return _documentService.PinDocument(id);
        }
    }
}
