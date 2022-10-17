using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private List<Product> products = new List<Product>
        {
            new Product { Id = 1, Name = "Product 1", Price = 100, Description = "Description for the product" },
            new Product { Id = 2, Name = "Product 2", Price = 100, Description = "Description for the product" },
            new Product { Id = 3, Name = "Product 3", Price = 100, Description = "Description for the product" },
            new Product { Id = 4, Name = "Product 4", Price = 100, Description = "Description for the product" },
            new Product { Id = 5, Name = "Product 5", Price = 100, Description = "Description for the product" },
            new Product { Id = 6, Name = "Product 6", Price = 100, Description = "Description for the product" },
            new Product { Id = 7, Name = "Product 7", Price = 100, Description = "Description for the product" },
            new Product { Id = 8, Name = "Product 8", Price = 100, Description = "Description for the product" }
        };



        [HttpGet]
        public IActionResult GetProducts()
        {
            return new OkObjectResult(products);
        }

        [HttpGet("{take}")]
        public IActionResult GetLimitProducts(int take)
        {
            return new OkObjectResult(products.Take(take));
        }
    }
}
