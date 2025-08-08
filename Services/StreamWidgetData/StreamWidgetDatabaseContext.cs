using Microsoft.EntityFrameworkCore;
using StreamWidgetData.Model;

namespace StreamWidgetData
{
    public class StreamWidgetDatabaseContext: DbContext
    {
        public DbSet<DbUser> User { get; set; }

        public StreamWidgetDatabaseContext(DbContextOptions<StreamWidgetDatabaseContext> options)
            : base(options)
        {
        }
    }
}
