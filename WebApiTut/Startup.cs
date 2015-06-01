using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebApiTut.Startup))]
namespace WebApiTut
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
