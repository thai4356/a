using Italy_Recipe_Page.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Diagnostics;
using X.PagedList;

namespace Italian_Restaurant_1.Controllers
{
    public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;
		ItalyContext db = new ItalyContext();
		public HomeController(ILogger<HomeController> logger)
		{
			_logger = logger;
		}

		//[Authentication]
		public IActionResult Index(int? page)
		{
			int pageSize = 5;
			int pageNumber = page == null || page < 0 ? 1 : page.Value;
			var ListRecipe = db.Recipes.AsNoTracking().OrderBy(x => x.RecipeName);
			PagedList<Recipe> lst = new PagedList<Recipe>(ListRecipe, pageNumber, pageSize);
			return View(lst);
		}

		public IActionResult RecipeDetail(int maSp)
		{
			int x=0;
            var Recipe = db.Recipes.SingleOrDefault(x => x.RecipeId == maSp); 
			List<Ingredient> res = (from t in db.Ingredients join t2 in db.RecipeDetails on t.Id equals t2.IngredientId where t2.RecipeId == maSp select t).ToList();
			var ListRecipe = db.Recipes.AsNoTracking().OrderBy(x => x.RecipeName).ToList();
			var viewModel = new RecipeViewModel
			{
				Recipe = Recipe,
				Ingredients = res,
				Recipes = ListRecipe,
			};
			if (string.IsNullOrEmpty(HttpContext.Session.GetString("UserRole")))
			{
				x = 0;
			}
			else
			{
				x = Int32.Parse(HttpContext.Session.GetString("UserRole"));
			}

            if (x >= Int32.Parse(Recipe.RecipeRole))
			{
				return View(viewModel);
			}
			return View("~/Views/Shared/NotificationRole.cshtml");

		}

		public IActionResult CategoryRecipe(int maLoai, int? page)
		{
			int pageSize = 5;
			int pageNumber = page == null || page < 0 ? 1 : page.Value;
			var ListRecipe = db.Recipes.Where(x => x.Category == maLoai).OrderBy(x => x.RecipeName).AsNoTracking().OrderBy(x => x.RecipeName);
			PagedList<Recipe> lst = new PagedList<Recipe>(ListRecipe, pageNumber, pageSize);
			return View(lst);
			
		}

		public IActionResult LiveTagSearch(string search)
		{

				List<Recipe> res = (
				from t in db.Recipes
				where t.RecipeName.Contains(search)
				select t
				).ToList();

			return View(res);
		}

		     public IActionResult SubmitPage(FullRecipe model)
		     {
		//		var client = new Recipe
		//		{
		//			RecipeName = model.Recipes,
		//			Birthday = model.Birthday
		//		};

		//		var client = new Recipe
		//		{
		//			Name = model.Name,
		//			Birthday = model.Birthday
		//		};

		//	var clientDetails = new ClientDetails();

		////etc for your other entities

		//	using (var context = new ItalyContext)
		//	{
		//		context.Clients.Add(client);
		//		clientDetails.ClientId = client.Id;
		//		context.ClientDetails.Add(clientDetails);
		//		//etc add your other classes
		//		context.SaveChanges();
		//	}
			return View();
		     }

		public IActionResult Privacy()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}
