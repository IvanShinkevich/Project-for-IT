using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Chernoff.Startup))]
namespace Chernoff
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
