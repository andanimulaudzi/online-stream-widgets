using System;
using System.ComponentModel.DataAnnotations;

namespace StreamWidgetData.Model
{
    public class DbUser
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string ProfileImageUrl { get; set; }
        public string Email { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
