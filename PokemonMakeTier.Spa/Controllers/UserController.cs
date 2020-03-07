using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PokemonMakeTier.Spa.Models;

namespace PokemonMakeTier.Spa.Controllers
{
    [Produces("application/json")]
    [EnableCors("CORSReactPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IMapper _mapper;

        public UserController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IMapper mapper)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult<UserDTO>> Post(UserDTO user)
        {
            try
            {
                user.UserName = user.Email;
                var identityUserMap = _mapper.Map<IdentityUser>(user);
                var result = await _userManager.CreateAsync(identityUserMap, user.PasswordHash);
            }
            catch (Exception ex)
            {

                throw;
            }


            return user;
            //return new CreatedAtRouteResult("Login", _mapper.Map<UserDTO>(result));
        }
    }
}