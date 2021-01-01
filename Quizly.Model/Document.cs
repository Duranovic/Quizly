using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Quizly.Model
{
    public class Document
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public int id { get; set; }
        public string title { get; set; }
        public string type { get; set; }
        public DateTime dateTime { get; set; }
        public bool pinned { get; set; }
    }
}
