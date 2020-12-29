using System;
using System.Collections.Generic;
using Quizly.Model;

namespace Quizly.API.Services
{
    public interface IDocumentService
    {
        public IEnumerable<Document> Get();
    }
}
