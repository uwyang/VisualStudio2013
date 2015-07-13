using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(mockParkShare.Startup))]
namespace mockParkShare
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
