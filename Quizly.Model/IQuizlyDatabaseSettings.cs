using System;
namespace Quizly.Model
{
    public class IQuizlyDatabaseSettings
    {
        public string DocumentsCollectionName { get; set; }

        public string ConnectionString { get; set; }

        public string DatabaseName { get; set; }
    }
}
