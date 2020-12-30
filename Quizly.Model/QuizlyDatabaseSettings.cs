using System;
namespace Quizly.Model
{
    public class QuizlyDatabaseSettings : IQuizlyDatabaseSettings
    {
        public string BooksCollectionName { get; set; }

        public string ConnectionString { get; set; }

        public string DatabaseName { get; set; } 
    }
}
