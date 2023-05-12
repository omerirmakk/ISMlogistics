using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ISMLogistics.Controllers
{
    public class HizmetlerimizController : Controller
    {
        
        public ActionResult HavaYoluTasimaciligi()
        {
            return View();
        }
        public ActionResult KarayoluTasimaciligi()
        {
            return View();
        }
        public ActionResult DenizYoluTasimaciligi()
        {
            return View();
        }
        public ActionResult DepolamaHizmetleri()
        {
            return View();
        }
       
        public ActionResult ZatiEsyaTasimaciligi()
        {
            return View();
        }
        public ActionResult SilahveMuhimmatTasimaciligi()
        {
            return View();
        }
        public ActionResult Sigorta()
        {
            return View();
        }

        public ActionResult Danismanlik()
        {
            return View();
        }
    }
}